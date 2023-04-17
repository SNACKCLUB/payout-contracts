//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.11;

import "./RewardControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SnackclubTournamentsPayout is RewardControl {
    event RewardClaimed(
        address indexed to,
        uint256 amount,
        address tokenContract
    );

    function claimReward(string memory secret) public {
        bytes32 hashedWallet = hashAddressAndString(msg.sender, secret);

        Reward memory r = reward[hashedWallet];

        uint256 addThirdDays = r.claimableAt + 30 days;
        bool compareDates = block.timestamp <= addThirdDays;

        if (!compareDates) {
            delete reward[hashedWallet];
            require(compareDates, "This reward is so old to get claimed");
        }

        IERC20 token = IERC20(r.tokenContract);
        require(
            getTokenBalance(r.tokenContract) >= r.amount,
            "insufficient token balance"
        );
        require(token.transfer(msg.sender, r.amount), "transfer failed");

        delete reward[hashedWallet];
        emit RewardClaimed(msg.sender, r.amount, r.tokenContract);
    }

    function getTokenBalance(
        address tokenContract
    ) public view returns (uint256) {
        IERC20 token = IERC20(tokenContract);
        return token.balanceOf(address(this));
    }

    function withdraw(uint256 amount, address tokenContract) public onlyAdmin {
        require(getTokenBalance(tokenContract) >= amount, "Insufficient funds");

        IERC20 token = IERC20(tokenContract);
        require(token.transfer(msg.sender, amount), "transfer failed");
    }

    function depositToken(
        uint256 amount,
        address tokenContract
    ) public onlyAdminOrOperator {
        IERC20 token = IERC20(tokenContract);
        require(
            token.transferFrom(msg.sender, address(this), amount),
            "Transfer failed"
        );
    }
}
