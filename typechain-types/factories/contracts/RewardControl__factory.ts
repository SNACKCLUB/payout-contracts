/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  RewardControl,
  RewardControlInterface,
} from "../../contracts/RewardControl";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OPERATOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "addAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "addOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "string",
        name: "discriminator",
        type: "string",
      },
    ],
    name: "hashAddressAndString",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    name: "removeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "removeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "discriminator",
        type: "string",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "renewReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "reward",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "claimableAt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "discriminator",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tokenContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "claimableAt",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
        ],
        internalType: "struct RewardControl.RewardArgs[]",
        name: "rewards",
        type: "tuple[]",
      },
    ],
    name: "storeRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50620000276000801b336200002d60201b60201c565b620001a6565b6200003f82826200004360201b60201c565b5050565b6200005582826200013460201b60201c565b6200013057600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620000d56200019e60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b611df780620001b66000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806391d1485411610097578063ac8a584a11610066578063ac8a584a146102bd578063d547741f146102d9578063e110c230146102f5578063f5b541a61461031157610100565b806391d148541461023757806393bc0a04146102675780639870d7fe14610283578063a217fddf1461029f57610100565b8063314ba296116100d3578063314ba2961461019d57806336568abe146101cd57806370480275146101e95780638d6f4b971461020557610100565b806301ffc9a7146101055780631785f53c14610135578063248a9ca3146101515780632f2ff15d14610181575b600080fd5b61011f600480360381019061011a919061113e565b61032f565b60405161012c9190611186565b60405180910390f35b61014f600480360381019061014a91906111ff565b6103a9565b005b61016b60048036038101906101669190611262565b610405565b604051610178919061129e565b60405180910390f35b61019b600480360381019061019691906112b9565b610424565b005b6101b760048036038101906101b2919061143f565b610445565b6040516101c4919061129e565b60405180910390f35b6101e760048036038101906101e291906112b9565b610634565b005b61020360048036038101906101fe91906111ff565b6106b7565b005b61021f600480360381019061021a9190611262565b610713565b60405161022e939291906114c3565b60405180910390f35b610251600480360381019061024c91906112b9565b61075d565b60405161025e9190611186565b60405180910390f35b610281600480360381019061027c91906114fa565b6107c7565b005b61029d600480360381019061029891906111ff565b610872565b005b6102a76108eb565b6040516102b4919061129e565b60405180910390f35b6102d760048036038101906102d291906111ff565b6108f2565b005b6102f360048036038101906102ee91906112b9565b61096b565b005b61030f600480360381019061030a919061171a565b61098c565b005b610319610a55565b604051610326919061129e565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103a257506103a182610a79565b5b9050919050565b6103b66000801b3361075d565b6103f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ec906117e6565b60405180910390fd5b6104026000801b8261096b565b50565b6000806000838152602001908152602001600020600101549050919050565b61042d82610405565b61043681610ae3565b6104408383610af7565b505050565b60008083604051602001610459919061184e565b6040516020818303038152906040529050600083905060008151835161047f9190611898565b67ffffffffffffffff81111561049857610497611314565b5b6040519080825280601f01601f1916602001820160405280156104ca5781602001600182028036833780820191505090505b50905060005b835181101561054c578381815181106104ec576104eb6118ee565b5b602001015160f81c60f81b82828151811061050a576105096118ee565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806105449061191d565b9150506104d0565b5060005b82518110156105d85782818151811061056c5761056b6118ee565b5b602001015160f81c60f81b828286516105859190611898565b81518110610596576105956118ee565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806105d09061191d565b915050610550565b506002816040516105e991906119e0565b602060405180830381855afa158015610606573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906106299190611a0c565b935050505092915050565b61063c610bd7565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146106a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a090611aab565b60405180910390fd5b6106b38282610bdf565b5050565b6106c46000801b3361075d565b610703576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fa906117e6565b60405180910390fd5b6107106000801b82610424565b50565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905083565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6107d46000801b3361075d565b8061080557506108047f46a52cf33029de9f84853745a87af28464c80bf0346df1b32e205fc73319f6223361075d565b5b610844576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083b90611b3d565b60405180910390fd5b60006108508284610445565b9050426001600083815260200190815260200160002060020181905550505050565b61087f6000801b3361075d565b6108be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b5906117e6565b60405180910390fd5b6108e87f46a52cf33029de9f84853745a87af28464c80bf0346df1b32e205fc73319f62282610424565b50565b6000801b81565b6108ff6000801b3361075d565b61093e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610935906117e6565b60405180910390fd5b6109687f46a52cf33029de9f84853745a87af28464c80bf0346df1b32e205fc73319f6228261096b565b50565b61097482610405565b61097d81610ae3565b6109878383610bdf565b505050565b6109996000801b3361075d565b806109ca57506109c97f46a52cf33029de9f84853745a87af28464c80bf0346df1b32e205fc73319f6223361075d565b5b610a09576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0090611b3d565b60405180910390fd5b60005b8151811015610a51576000828281518110610a2a57610a296118ee565b5b60200260200101519050610a3d81610cc0565b508080610a499061191d565b915050610a0c565b5050565b7f46a52cf33029de9f84853745a87af28464c80bf0346df1b32e205fc73319f62281565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610af481610aef610bd7565b610dad565b50565b610b01828261075d565b610bd357600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610b78610bd7565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600033905090565b610be9828261075d565b15610cbc57600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610c61610bd7565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b610cc861109b565b6000610cdc83608001518460000151610445565b9050826020015182600001818152505082606001518260400181815250508260400151826020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505081600160008381526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155905050505050565b610db7828261075d565b610e2e57610dc481610e32565b610dd28360001c6020610e5f565b604051602001610de3929190611c3c565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e259190611caf565b60405180910390fd5b5050565b6060610e588273ffffffffffffffffffffffffffffffffffffffff16601460ff16610e5f565b9050919050565b606060006002836002610e729190611cd1565b610e7c9190611898565b67ffffffffffffffff811115610e9557610e94611314565b5b6040519080825280601f01601f191660200182016040528015610ec75781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610eff57610efe6118ee565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610f6357610f626118ee565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002610fa39190611cd1565b610fad9190611898565b90505b600181111561104d577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110610fef57610fee6118ee565b5b1a60f81b828281518110611006576110056118ee565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c94508061104690611d2b565b9050610fb0565b5060008414611091576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108890611da1565b60405180910390fd5b8091505092915050565b604051806060016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61111b816110e6565b811461112657600080fd5b50565b60008135905061113881611112565b92915050565b600060208284031215611154576111536110dc565b5b600061116284828501611129565b91505092915050565b60008115159050919050565b6111808161116b565b82525050565b600060208201905061119b6000830184611177565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006111cc826111a1565b9050919050565b6111dc816111c1565b81146111e757600080fd5b50565b6000813590506111f9816111d3565b92915050565b600060208284031215611215576112146110dc565b5b6000611223848285016111ea565b91505092915050565b6000819050919050565b61123f8161122c565b811461124a57600080fd5b50565b60008135905061125c81611236565b92915050565b600060208284031215611278576112776110dc565b5b60006112868482850161124d565b91505092915050565b6112988161122c565b82525050565b60006020820190506112b3600083018461128f565b92915050565b600080604083850312156112d0576112cf6110dc565b5b60006112de8582860161124d565b92505060206112ef858286016111ea565b9150509250929050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61134c82611303565b810181811067ffffffffffffffff8211171561136b5761136a611314565b5b80604052505050565b600061137e6110d2565b905061138a8282611343565b919050565b600067ffffffffffffffff8211156113aa576113a9611314565b5b6113b382611303565b9050602081019050919050565b82818337600083830152505050565b60006113e26113dd8461138f565b611374565b9050828152602081018484840111156113fe576113fd6112fe565b5b6114098482856113c0565b509392505050565b600082601f830112611426576114256112f9565b5b81356114368482602086016113cf565b91505092915050565b60008060408385031215611456576114556110dc565b5b6000611464858286016111ea565b925050602083013567ffffffffffffffff811115611485576114846110e1565b5b61149185828601611411565b9150509250929050565b6000819050919050565b6114ae8161149b565b82525050565b6114bd816111c1565b82525050565b60006060820190506114d860008301866114a5565b6114e560208301856114b4565b6114f260408301846114a5565b949350505050565b60008060408385031215611511576115106110dc565b5b600083013567ffffffffffffffff81111561152f5761152e6110e1565b5b61153b85828601611411565b925050602061154c858286016111ea565b9150509250929050565b600067ffffffffffffffff82111561157157611570611314565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b61159a8161149b565b81146115a557600080fd5b50565b6000813590506115b781611591565b92915050565b600060a082840312156115d3576115d2611587565b5b6115dd60a0611374565b9050600082013567ffffffffffffffff8111156115fd576115fc61158c565b5b61160984828501611411565b600083015250602061161d848285016115a8565b6020830152506040611631848285016111ea565b6040830152506060611645848285016115a8565b6060830152506080611659848285016111ea565b60808301525092915050565b600061167861167384611556565b611374565b9050808382526020820190506020840283018581111561169b5761169a611582565b5b835b818110156116e257803567ffffffffffffffff8111156116c0576116bf6112f9565b5b8086016116cd89826115bd565b8552602085019450505060208101905061169d565b5050509392505050565b600082601f830112611701576117006112f9565b5b8135611711848260208601611665565b91505092915050565b6000602082840312156117305761172f6110dc565b5b600082013567ffffffffffffffff81111561174e5761174d6110e1565b5b61175a848285016116ec565b91505092915050565b600082825260208201905092915050565b7f4f6e6c792061646d696e2063616e206578656375746520746869732066756e6360008201527f74696f6e00000000000000000000000000000000000000000000000000000000602082015250565b60006117d0602483611763565b91506117db82611774565b604082019050919050565b600060208201905081810360008301526117ff816117c3565b9050919050565b60008160601b9050919050565b600061181e82611806565b9050919050565b600061183082611813565b9050919050565b611848611843826111c1565b611825565b82525050565b600061185a8284611837565b60148201915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118a38261149b565b91506118ae8361149b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156118e3576118e2611869565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006119288261149b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561195b5761195a611869565b5b600182019050919050565b600081519050919050565b600081905092915050565b60005b8381101561199a57808201518184015260208101905061197f565b838111156119a9576000848401525b50505050565b60006119ba82611966565b6119c48185611971565b93506119d481856020860161197c565b80840191505092915050565b60006119ec82846119af565b915081905092915050565b600081519050611a0681611236565b92915050565b600060208284031215611a2257611a216110dc565b5b6000611a30848285016119f7565b91505092915050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000611a95602f83611763565b9150611aa082611a39565b604082019050919050565b60006020820190508181036000830152611ac481611a88565b9050919050565b7f4f6e6c792061646d696e206f72206f70657261746f722063616e20657865637560008201527f746520746869732066756e6374696f6e00000000000000000000000000000000602082015250565b6000611b27603083611763565b9150611b3282611acb565b604082019050919050565b60006020820190508181036000830152611b5681611b1a565b9050919050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b6000611b9e601783611b5d565b9150611ba982611b68565b601782019050919050565b600081519050919050565b6000611bca82611bb4565b611bd48185611b5d565b9350611be481856020860161197c565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b6000611c26601183611b5d565b9150611c3182611bf0565b601182019050919050565b6000611c4782611b91565b9150611c538285611bbf565b9150611c5e82611c19565b9150611c6a8284611bbf565b91508190509392505050565b6000611c8182611bb4565b611c8b8185611763565b9350611c9b81856020860161197c565b611ca481611303565b840191505092915050565b60006020820190508181036000830152611cc98184611c76565b905092915050565b6000611cdc8261149b565b9150611ce78361149b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611d2057611d1f611869565b5b828202905092915050565b6000611d368261149b565b91506000821415611d4a57611d49611869565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b6000611d8b602083611763565b9150611d9682611d55565b602082019050919050565b60006020820190508181036000830152611dba81611d7e565b905091905056fea26469706673582212205db615371227a8b6243e2c11874b051f591131f310c2d5b944e02cd7463ebc8b64736f6c634300080b0033";

type RewardControlConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RewardControlConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RewardControl__factory extends ContractFactory {
  constructor(...args: RewardControlConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RewardControl> {
    return super.deploy(overrides || {}) as Promise<RewardControl>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RewardControl {
    return super.attach(address) as RewardControl;
  }
  override connect(signer: Signer): RewardControl__factory {
    return super.connect(signer) as RewardControl__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardControlInterface {
    return new utils.Interface(_abi) as RewardControlInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardControl {
    return new Contract(address, _abi, signerOrProvider) as RewardControl;
  }
}
