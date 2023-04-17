//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract RoleControl is AccessControl {
    mapping(address => bool) private admins;
    mapping(address => bool) private operators;

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        grantRole("admin", msg.sender);
        admins[msg.sender] = true;
    }

    function addOperator(address _operator) public onlyAdmin {
        grantRole("operator", _operator);
        operators[_operator] = true;
    }

    function removeOperator(address _operator) public onlyAdmin {
        revokeRole("operator", _operator);
        delete operators[_operator];
    }

    modifier onlyAdmin() {
        require(
            hasRole("admin", msg.sender),
            "Only admin can execute this function"
        );
        _;
    }

    modifier onlyAdminOrOperator() {
        require(
            hasRole("admin", msg.sender) || hasRole("operator", msg.sender),
            "Only admin or operator can execute this function"
        );
        _;
    }

    modifier onlyOperator() {
        require(
            hasRole("operator", msg.sender),
            "Only operator can execute this function"
        );
        _;
    }
}
