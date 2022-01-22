// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts@4.4.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.4.2/token/ERC20/extensions/ERC20Burnable.sol";

/// @custom:security-contact admin@mercaplace.com
contract MercaBit is ERC20, ERC20Burnable {
    constructor() ERC20("MercaBit", "MERCA") {
        _mint(msg.sender, 24157817 * 10 ** decimals());
    }
}
