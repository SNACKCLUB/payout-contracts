//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.11;

import "./RewardControl.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract SnackclubTournamentsPayout is RewardControl {
    using SafeERC20 for IERC20;

    event RewardClaimed(
        address indexed to,
        uint256 amount,
        address tokenContract
    );

    function claimReward(string memory discriminator) public {
        bytes32 hashedWallet = hashAddressAndString(msg.sender, discriminator);

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

        delete reward[hashedWallet];
        token.safeTransfer(msg.sender, r.amount);

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
        token.safeTransfer(msg.sender, amount);
    }

    function depositToken(
        uint256 amount,
        address tokenContract
    ) public onlyAdminOrOperator {
        IERC20 token = IERC20(tokenContract);
        token.safeTransferFrom(msg.sender, address(this), amount);
    }
}
