// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DCLToken is ERC20 {
    address public owner;

    constructor() public ERC20("Dclinic Token", "DCL") {
        owner = msg.sender;
        uint256 supply = 100000000 ether;
        _mint(msg.sender, supply);
    }
}
