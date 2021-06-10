// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PolygonDCLToken is ERC20 {
    address public owner;
    address public childChainManagerProxy;

    constructor(address _childChainManagerProxy)
        public
        ERC20("Dclinic Token", "DCL")
    {
        require(
            _childChainManagerProxy != address(0),
            "Bad ChildChainManagerProxy address"
        );
        childChainManagerProxy = _childChainManagerProxy;
        owner = msg.sender;
    }

    /**
     * @dev update the polygon ChildChainManagerProxy address
     * @param newChildChainManagerProxy address of the new ChildChainManagerProxy
     */
    function updateChildChainManager(address newChildChainManagerProxy)
        external
    {
        require(
            newChildChainManagerProxy != address(0),
            "Bad ChildChainManagerProxy address"
        );
        require(msg.sender == owner, "You're not allowed");
        childChainManagerProxy = newChildChainManagerProxy;
    }

    /**
     * @dev mints tokens on L2 that have been locked on L1
     * @param user address of user that initiated transfer of tokens
     * @param depositData additional data containing the amount to be transfered
     */
    function deposit(address user, bytes calldata depositData) external {
        require(
            msg.sender == childChainManagerProxy,
            "You're not allowed to deposit"
        );
        uint256 amount = abi.decode(depositData, (uint256));
        _mint(user, amount);
    }

    /**
     * @dev burns tokens on L2 to be released on L1
     * @param amount number of tokens to be transfered to L1
     */
    function withdraw(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}
