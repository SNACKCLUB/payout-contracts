//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.11;

import "./RoleControl.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract RewardControl is RoleControl {
    using SafeMath for uint256;
    using ECDSA for bytes32;

    struct Reward {
        uint256 amount;
        address tokenContract;
        uint256 claimableAt;
    }

    struct RewardArgs {
        string discriminator;
        uint256 amount;
        address tokenContract;
        uint256 claimableAt;
        address receiver;
    }

    mapping(bytes32 => Reward) public reward;

    function storeReward(RewardArgs memory args) private {
        Reward memory r;
        bytes32 hashedWallet = hashAddressAndString(
            args.receiver,
            args.discriminator
        );

        r.amount = args.amount;
        r.claimableAt = args.claimableAt;
        r.tokenContract = args.tokenContract;

        reward[hashedWallet] = r;
    }

    function renewReward(
        string memory discriminator,
        address receiver
    ) public onlyAdminOrOperator {
        bytes32 hashedWallet = hashAddressAndString(receiver, discriminator);

        reward[hashedWallet].claimableAt = block.timestamp;
    }

    function storeRewards(RewardArgs[] memory rewards) public {
        for (uint256 i = 0; i < rewards.length; i++) {
            RewardArgs memory r = rewards[i];

            storeReward(r);
        }
    }

    function hashAddressAndString(
        address _address,
        string memory discriminator
    ) public pure returns (bytes32) {
        bytes memory addressBytes = abi.encodePacked(_address);
        bytes memory strBytes = bytes(discriminator);
        bytes memory combinedBytes = new bytes(
            addressBytes.length + strBytes.length
        );

        for (uint256 i = 0; i < addressBytes.length; i++) {
            combinedBytes[i] = addressBytes[i];
        }

        for (uint256 i = 0; i < strBytes.length; i++) {
            combinedBytes[addressBytes.length + i] = strBytes[i];
        }

        return sha256(combinedBytes);
    }
}
