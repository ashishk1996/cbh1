const crypto = require("crypto");

const createHash = (data) => crypto.createHash("sha3-512").update(data).digest("hex");;

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate=TRIVIAL_PARTITION_KEY;

  if (!event)
    return candidate

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