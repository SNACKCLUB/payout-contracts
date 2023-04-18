//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract RoleControl is AccessControl {
    bytes32 public constant ADMIN_ROLE = keccak256("admin");
    bytes32 public constant OPERATOR_ROLE = keccak256("operator");

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        grantRole(ADMIN_ROLE, msg.sender);
    }

    function addAdmin(address _admin) public onlyAdmin {
        grantRole(ADMIN_ROLE, _admin);
    }

    function removeAdmin(address _admin) public onlyAdmin {
        revokeRole(ADMIN_ROLE, _admin);
    }

    function addOperator(address _operator) public onlyAdmin {
        grantRole(OPERATOR_ROLE, _operator);
    }

    function removeOperator(address _operator) public onlyAdmin {
        revokeRole(OPERATOR_ROLE, _operator);
    }

    modifier onlyAdmin() {
        require(
            hasRole(ADMIN_ROLE, msg.sender),
            "Only admin can execute this function"
        );
        _;
    }

    modifier onlyAdminOrOperator() {
        require(
            hasRole(ADMIN_ROLE, msg.sender) ||
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
