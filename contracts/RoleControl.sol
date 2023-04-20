//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.11;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract RoleControl is AccessControl {
    bytes32 public constant OPERATOR_ROLE = keccak256("operator");

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function addOperator(address _operator) public onlyAdmin {
        grantRole(OPERATOR_ROLE, _operator);
    }

    function removeOperator(address _operator) public onlyAdmin {
        revokeRole(OPERATOR_ROLE, _operator);
    }

    function transferAdminRole(address _newAdmin) public onlyAdmin {
        require(
            _newAdmin != address(0),
            "New admin cannot be the zero address"
        );
        revokeRole(DEFAULT_ADMIN_ROLE, msg.sender);
        grantRole(DEFAULT_ADMIN_ROLE, _newAdmin);
    }

    modifier onlyAdmin() {
        require(
            hasRole(DEFAULT_ADMIN_ROLE, msg.sender),
            "Only admin can execute this function"
        );
        _;
    }

    modifier onlyAdminOrOperator() {
        require(
            hasRole(DEFAULT_ADMIN_ROLE, msg.sender) ||
                hasRole(OPERATOR_ROLE, msg.sender),
            "Only admin or operator can execute this function"
        );
        _;
    }

    modifier onlyOperator() {
        require(
            hasRole(OPERATOR_ROLE, msg.sender),
            "Only operator can execute this function"
        );
        _;
    }
}
