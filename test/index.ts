import { assert } from "chai";
import { ethers } from "hardhat";

describe("TokenplayToken", function () {
  it("Should mint successfully", async function () {
    const TokenplayToken = await ethers.getContractFactory("TokenplayToken");
    const tok = await TokenplayToken.deploy(2000);
    await tok.deployed();

    assert.notEqual(tok.address, null);
  });
});
