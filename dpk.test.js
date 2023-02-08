const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  const DETERMINISTIC_PARTITION_KEY_ATTRIBUTE_BOOLEAN_FALSE = "51a5f43b933ce152103a4789a17f1cf958e0b5e1c793082db6a6c74dd3f04c69ad8f558e28cf7c3eac61af4e484741f095129e815c4de4fdd30e3cd6c4e3c00f"
  const OUDETERMINISTIC_PARTITION_KEY_BOOLEAN_TRUE = "ff2c82ed266dc30b1afe862bee32cf996b213513bc6b3e242ff605ddd9d5bbd1e7eebf6dde586b8700125cb7b95d35aec2f4e750d092cd359b202e3d2be41e1a"
  const DETERMINISTIC_PARTITION_KEY_EMPTY_OBJECT = "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862"
  const DETERMINISTIC_PARTITION_KEY_QWERTY = "c5df9afca372ffb5b927e9fd32227f9e1557dc53d5f34fa721b553d99021945f41b12b292e22ffc17e209f569fae2f9eb7e0825d019176cad6eca72f45e8343a"
  const DETERMINISTIC_PARTITION_KEY_QWERTY_ATTRIBUTE_APPENDED_TENS = "f98b3df1937ccc2a10a51bbc1cdc364fb50841f5c220f88f6de77e2a4ad5bb0dd45693d94001b3c6a22d1010a795cb9bc921e6c2c379b11d55cfa6729dbef664"
  const DETERMINISTIC_PARTITION_KEY_QWERTY_APPENDED_TENS = "a1734348bc782d0dad32ccaa5b2ed933eb0d88c0af75449b1cc8c52cdc2cfcf6d88bc8bc47553254a6c7adf999308165b3ed2439e079d2a25244e936ddc5aa4e"

  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the string 'true' when input is an attribute 'partitionKey' with boolean value true" , () => {
    const trivialKey = deterministicPartitionKey({partitionKey : true});
    expect(trivialKey).toBe("true");
  });

  it("Returns the string '123' when partitionKey in INPUT is truthy value - string", () => {
    const trivialKey = deterministicPartitionKey({partitionKey : "123"});
    expect(trivialKey).toBe("123");
  });

  it("Returns the constant DETERMINISTIC_PARTITION_KEY_ATTRIBUTE_BOOLEAN_FALSE when partitionKey in input is boolean false", () => {
    const trivialKey = deterministicPartitionKey({partitionKey : false});
    expect(trivialKey).toBe(DETERMINISTIC_PARTITION_KEY_ATTRIBUTE_BOOLEAN_FALSE);
  });

  it("Returns the literal '0' when given input is boolean false", () => {
    const trivialKey = deterministicPartitionKey(false);
    expect(trivialKey).toBe("0");
  });


  it("Returns constant OUDETERMINISTIC_PARTITION_KEY_BOOLEAN_TRUE when input is boolean value true", () => {
    const trivialKey = deterministicPartitionKey(true);
    expect(trivialKey).toBe(OUDETERMINISTIC_PARTITION_KEY_BOOLEAN_TRUE);
  });

  it("Returns constant DETERMINISTIC_PARTITION_KEY_EMPTY_OBJECT when input is empty object", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe(DETERMINISTIC_PARTITION_KEY_EMPTY_OBJECT);
  });

  it("Returns the constant DETERMINISTIC_PARTITION_KEY_QWERTY when input is a string constant 'qwerty'", () => {
    const trivialKey = deterministicPartitionKey("qwerty");
    expect(trivialKey).toBe(DETERMINISTIC_PARTITION_KEY_QWERTY);
  });

  it("Returns the attribute partitionKey itself when attribute partitionKey in INPUT length is less than 256", () => {
    const trivialKey = deterministicPartitionKey({partitionKey : DETERMINISTIC_PARTITION_KEY_QWERTY});
    expect(trivialKey).toBe(DETERMINISTIC_PARTITION_KEY_QWERTY);
  });

  it("Returns the hash digest when partitionKey in INPUT length is more than 256", () => {
    const trivialKey = deterministicPartitionKey({partitionKey : DETERMINISTIC_PARTITION_KEY_QWERTY.repeat(10)});
    expect(trivialKey).toBe(DETERMINISTIC_PARTITION_KEY_QWERTY_ATTRIBUTE_APPENDED_TENS);
  });

  it("Returns the hash digest when INPUT length is more than 256", () => {
    const trivialKey = deterministicPartitionKey(DETERMINISTIC_PARTITION_KEY_QWERTY.repeat(10));
    expect(trivialKey).toBe(DETERMINISTIC_PARTITION_KEY_QWERTY_APPENDED_TENS);
  });


});
