const crypto = require("crypto");

const createHash = (data) => crypto.createHash("sha3-512").update(data).digest("hex");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate=TRIVIAL_PARTITION_KEY;

  if (!event)
    return candidate;

  if (event.partitionKey) {
    if (typeof event.partitionKey !== "string") {
      candidate = JSON.stringify(event.partitionKey);
    }else{
      candidate = event.partitionKey;
    }
    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
      candidate = createHash(candidate);
    }
  } else {
    const data = JSON.stringify(event);
    candidate = createHash(data);
  }
  
  return candidate;
};
// 1 Line paragraph describing refactor decisions
// 1. Separated out createHash to a separate function, as its dependant on external library, changes on this library will have minimal effect and package updates etc. will be easier as lesser changes will be required. This should be moved to a helper class.
// 2. Line 10 : if (!event) Added early exit condition, easier for readability as well as does not need to go through rest of the code.
// 3. Removed if-else block, old file line 17 if (candidate) {. If block is now handled by new line 15 as input can be directly checked. Else block is handled by early exit condition line 10.
// 4. Moved old line 24 if (candidate.length > MAX_PARTITION_KEY_LENGTH) { to new lint 19, as candidate.length can be greater than MAX_PARTITION_KEY_LENGTH only when it is taken as input.
