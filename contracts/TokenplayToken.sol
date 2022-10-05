// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenplayToken is ERC20 {
    constructor(uint256 initialBalance) ERC20("Tokenplay Token", "TOP") {
        _mint(msg.sender, initialBalance);
    }
}
