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
    name: "ADMIN_ROLE",
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
  "0x60806040523480156200001157600080fd5b50620000276000801b336200005f60201b60201c565b620000597ff23ec0bb4210edd5cba85afd05127efcd2fc6a781bfed49188da1081670b22d8336200007560201b60201c565b62000972565b620000718282620000ae60201b60201c565b5050565b62000086826200019f60201b60201c565b6200009781620001be60201b60201c565b620000a98383620000ae60201b60201c565b505050565b620000c08282620001e260201b60201c565b6200019b57600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001406200024c60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6000806000838152602001908152602001600020600101549050919050565b620001df81620001d36200024c60201b60201c565b6200025460201b60201c565b50565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b620002668282620001e260201b60201c565b620002fc5762000281816200030060201b62000b141760201c565b6200029c8360001c60206200033560201b62000b411760201c565b604051602001620002af929190620006b3565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002f3919062000758565b60405180910390fd5b5050565b60606200032e8273ffffffffffffffffffffffffffffffffffffffff16601460ff166200033560201b60201c565b9050919050565b6060600060028360026200034a9190620007b5565b62000356919062000816565b67ffffffffffffffff81111562000372576200037162000873565b5b6040519080825280601f01601f191660200182016040528015620003a55781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110620003e057620003df620008a2565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110620004475762000446620008a2565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002620004899190620007b5565b62000495919062000816565b90505b60018111156200053f577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110620004db57620004da620008a2565b5b1a60f81b828281518110620004f557620004f4620008a2565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c9450806200053790620008d1565b905062000498565b506000841462000586576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200057d9062000950565b60405180910390fd5b8091505092915050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b6000620005d360178362000590565b9150620005e0826200059b565b601782019050919050565b600081519050919050565b60005b8381101562000616578082015181840152602081019050620005f9565b8381111562000626576000848401525b50505050565b60006200063982620005eb565b62000645818562000590565b935062000657818560208601620005f6565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b60006200069b60118362000590565b9150620006a88262000663565b601182019050919050565b6000620006c082620005c4565b9150620006ce82856200062c565b9150620006db826200068c565b9150620006e982846200062c565b91508190509392505050565b600082825260208201905092915050565b6000601f19601f8301169050919050565b60006200072482620005eb565b620007308185620006f5565b935062000742818560208601620005f6565b6200074d8162000706565b840191505092915050565b6000602082019050818103600083015262000774818462000717565b905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620007c2826200077c565b9150620007cf836200077c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156200080b576200080a62000786565b5b828202905092915050565b600062000823826200077c565b915062000830836200077c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000868576200086762000786565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000620008de826200077c565b91506000821415620008f557620008f462000786565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b600062000938602083620006f5565b9150620009458262000900565b602082019050919050565b600060208201905081810360008301526200096b8162000929565b9050919050565b611e9280620009826000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638d6f4b97116100a2578063a217fddf11610071578063a217fddf146102c8578063ac8a584a146102e6578063d547741f14610302578063e110c2301461031e578063f5b541a61461033a5761010b565b80638d6f4b971461022e57806391d148541461026057806393bc0a04146102905780639870d7fe146102ac5761010b565b8063314ba296116100de578063314ba296146101a857806336568abe146101d857806370480275146101f457806375b238fc146102105761010b565b806301ffc9a7146101105780631785f53c14610140578063248a9ca31461015c5780632f2ff15d1461018c575b600080fd5b61012a600480360381019061012591906111d9565b610358565b6040516101379190611221565b60405180910390f35b61015a6004803603810190610155919061129a565b6103d2565b005b610176600480360381019061017191906112fd565b610468565b6040516101839190611339565b60405180910390f35b6101a660048036038101906101a19190611354565b610487565b005b6101c260048036038101906101bd91906114da565b6104a8565b6040516101cf9190611339565b60405180910390f35b6101f260048036038101906101ed9190611354565b610697565b005b61020e6004803603810190610209919061129a565b61071a565b005b6102186107b0565b6040516102259190611339565b60405180910390f35b610248600480360381019061024391906112fd565b6107d4565b6040516102579392919061155e565b60405180910390f35b61027a60048036038101906102759190611354565b61081e565b6040516102879190611221565b60405180910390f35b6102aa60048036038101906102a59190611595565b610888565b005b6102c660048036038101906102c1919061129a565b610950565b005b6102d06109e6565b6040516102dd9190611339565b60405180910390f35b61030060048036038101906102fb919061129a565b6109ed565b005b61031c60048036038101906103179190611354565b610a83565b005b610338600480360381019061033391906117b5565b610aa4565b005b610342610af0565b60405161034f9190611339565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103cb57506103ca82610d7d565b5b9050919050565b6103fc7ff23ec0bb4210edd5cba85afd05127efcd2fc6a781bfed49188da1081670b22d83361081e565b61043b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043290611881565b60405180910390fd5b6104657ff23ec0bb4210edd5cba85afd05127efcd2fc6a781bfed49188da1081670b22d882610a83565b50565b6000806000838152602001908152602001600020600101549050919050565b61049082610468565b61049981610de7565b6104a38383610dfb565b505050565b600080836040516020016104bc91906118e9565b604051602081830303815290604052905060008390506000815183516104e29190611933565b67ffffffffffffffff8111156104fb576104fa6113af565b5b6040519080825280601f01601f19166020018201604052801561052d5781602001600182028036833780820191505090505b50905060005b83518110156105af5783818151811061054f5761054e611989565b5b602001015160f81c60f81b82828151811061056d5761056c611989565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806105a7906119b8565b915050610533565b5060005b825181101561063b578281815181106105cf576105ce611989565b5b602001015160f81c60f81b828286516105e89190611933565b815181106105f9576105f8611989565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080610633906119b8565b9150506105b3565b5060028160405161064c9190611a7b565b602060405180830381855afa158015610669573d6000803e3d6000fd5b5050506040513d601f19601f8201168201806040525081019061068c9190611aa7565b935050505092915050565b61069f610edb565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461070c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070390611b46565b60405180910390fd5b6107168282610ee3565b5050565b6107447ff23ec0bb4210edd5cba85afd05127efcd2fc6a781bfed49188da1081670b22d83361081e565b610783576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077a90611881565b60405180910390fd5b6107ad7ff23ec0bb4210edd5cba85afd05127efcd2fc6a781bfed49188da1081670b22d882610487565b50565b7ff23ec0bb4210edd5cba85afd05127efcd2fc6a781bfed49188da1081670b22d881565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905083565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6108b27ff23ec0bb4210edd5cba85afd05127efcd2fc6a781bfed49188da1081670b22d83361081e565b806108e357506108e27f46a52cf33029de9f84853745a87af28464c80bf0346df1b32e205fc73319f6223361081e565b5b610922576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091990611bd8565b60405180910390fd5b600061092e82846104a8565b9050426001600083815260200190815260200160002060020181905550505050565b61097a7ff23ec0bb4210edd5cba85afd05127efcd2fc6a781bfed49188da1081670b22d83361081e565b6109b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b090611881565b60405180910390fd5b6109e37f46a52cf33029de9f84853745a87af28464c80bf0346df1b32e205fc73319f62282610487565b50565b6000801b81565b610a177ff23ec0bb4210edd5cba85afd05127efcd2fc6a781bfed49188da1081670b22d83361081e565b610a56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a4d90611881565b60405180910390fd5b610a807f46a52cf33029de9f84853745a87af28464c80bf0346df1b32e205fc73319f62282610a83565b50565b610a8c82610468565b610a9581610de7565b610a9f8383610ee3565b505050565b60005b8151811015610aec576000828281518110610ac557610ac4611989565b5b60200260200101519050610ad881610fc4565b508080610ae4906119b8565b915050610aa7565b5050565b7f46a52cf33029de9f84853745a87af28464c80bf0346df1b32e205fc73319f62281565b6060610b3a8273ffffffffffffffffffffffffffffffffffffffff16601460ff16610b41565b9050919050565b606060006002836002610b549190611bf8565b610b5e9190611933565b67ffffffffffffffff811115610b7757610b766113af565b5b6040519080825280601f01601f191660200182016040528015610ba95781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610be157610be0611989565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610c4557610c44611989565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002610c859190611bf8565b610c8f9190611933565b90505b6001811115610d2f577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110610cd157610cd0611989565b5b1a60f81b828281518110610ce857610ce7611989565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080610d2890611c52565b9050610c92565b5060008414610d73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6a90611cc8565b60405180910390fd5b8091505092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610df881610df3610edb565b6110b1565b50565b610e05828261081e565b610ed757600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610e7c610edb565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600033905090565b610eed828261081e565b15610fc057600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610f65610edb565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b610fcc611136565b6000610fe0836080015184600001516104a8565b9050826020015182600001818152505082606001518260400181815250508260400151826020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505081600160008381526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155905050505050565b6110bb828261081e565b611132576110c881610b14565b6110d68360001c6020610b41565b6040516020016110e7929190611dc7565b6040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111299190611e3a565b60405180910390fd5b5050565b604051806060016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6111b681611181565b81146111c157600080fd5b50565b6000813590506111d3816111ad565b92915050565b6000602082840312156111ef576111ee611177565b5b60006111fd848285016111c4565b91505092915050565b60008115159050919050565b61121b81611206565b82525050565b60006020820190506112366000830184611212565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006112678261123c565b9050919050565b6112778161125c565b811461128257600080fd5b50565b6000813590506112948161126e565b92915050565b6000602082840312156112b0576112af611177565b5b60006112be84828501611285565b91505092915050565b6000819050919050565b6112da816112c7565b81146112e557600080fd5b50565b6000813590506112f7816112d1565b92915050565b60006020828403121561131357611312611177565b5b6000611321848285016112e8565b91505092915050565b611333816112c7565b82525050565b600060208201905061134e600083018461132a565b92915050565b6000806040838503121561136b5761136a611177565b5b6000611379858286016112e8565b925050602061138a85828601611285565b9150509250929050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6113e78261139e565b810181811067ffffffffffffffff82111715611406576114056113af565b5b80604052505050565b600061141961116d565b905061142582826113de565b919050565b600067ffffffffffffffff821115611445576114446113af565b5b61144e8261139e565b9050602081019050919050565b82818337600083830152505050565b600061147d6114788461142a565b61140f565b90508281526020810184848401111561149957611498611399565b5b6114a484828561145b565b509392505050565b600082601f8301126114c1576114c0611394565b5b81356114d184826020860161146a565b91505092915050565b600080604083850312156114f1576114f0611177565b5b60006114ff85828601611285565b925050602083013567ffffffffffffffff8111156115205761151f61117c565b5b61152c858286016114ac565b9150509250929050565b6000819050919050565b61154981611536565b82525050565b6115588161125c565b82525050565b60006060820190506115736000830186611540565b611580602083018561154f565b61158d6040830184611540565b949350505050565b600080604083850312156115ac576115ab611177565b5b600083013567ffffffffffffffff8111156115ca576115c961117c565b5b6115d6858286016114ac565b92505060206115e785828601611285565b9150509250929050565b600067ffffffffffffffff82111561160c5761160b6113af565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b61163581611536565b811461164057600080fd5b50565b6000813590506116528161162c565b92915050565b600060a0828403121561166e5761166d611622565b5b61167860a061140f565b9050600082013567ffffffffffffffff81111561169857611697611627565b5b6116a4848285016114ac565b60008301525060206116b884828501611643565b60208301525060406116cc84828501611285565b60408301525060606116e084828501611643565b60608301525060806116f484828501611285565b60808301525092915050565b600061171361170e846115f1565b61140f565b905080838252602082019050602084028301858111156117365761173561161d565b5b835b8181101561177d57803567ffffffffffffffff81111561175b5761175a611394565b5b8086016117688982611658565b85526020850194505050602081019050611738565b5050509392505050565b600082601f83011261179c5761179b611394565b5b81356117ac848260208601611700565b91505092915050565b6000602082840312156117cb576117ca611177565b5b600082013567ffffffffffffffff8111156117e9576117e861117c565b5b6117f584828501611787565b91505092915050565b600082825260208201905092915050565b7f4f6e6c792061646d696e2063616e206578656375746520746869732066756e6360008201527f74696f6e00000000000000000000000000000000000000000000000000000000602082015250565b600061186b6024836117fe565b91506118768261180f565b604082019050919050565b6000602082019050818103600083015261189a8161185e565b9050919050565b60008160601b9050919050565b60006118b9826118a1565b9050919050565b60006118cb826118ae565b9050919050565b6118e36118de8261125c565b6118c0565b82525050565b60006118f582846118d2565b60148201915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061193e82611536565b915061194983611536565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561197e5761197d611904565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006119c382611536565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156119f6576119f5611904565b5b600182019050919050565b600081519050919050565b600081905092915050565b60005b83811015611a35578082015181840152602081019050611a1a565b83811115611a44576000848401525b50505050565b6000611a5582611a01565b611a5f8185611a0c565b9350611a6f818560208601611a17565b80840191505092915050565b6000611a878284611a4a565b915081905092915050565b600081519050611aa1816112d1565b92915050565b600060208284031215611abd57611abc611177565b5b6000611acb84828501611a92565b91505092915050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000611b30602f836117fe565b9150611b3b82611ad4565b604082019050919050565b60006020820190508181036000830152611b5f81611b23565b9050919050565b7f4f6e6c792061646d696e206f72206f70657261746f722063616e20657865637560008201527f746520746869732066756e6374696f6e00000000000000000000000000000000602082015250565b6000611bc26030836117fe565b9150611bcd82611b66565b604082019050919050565b60006020820190508181036000830152611bf181611bb5565b9050919050565b6000611c0382611536565b9150611c0e83611536565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611c4757611c46611904565b5b828202905092915050565b6000611c5d82611536565b91506000821415611c7157611c70611904565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b6000611cb26020836117fe565b9150611cbd82611c7c565b602082019050919050565b60006020820190508181036000830152611ce181611ca5565b9050919050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b6000611d29601783611ce8565b9150611d3482611cf3565b601782019050919050565b600081519050919050565b6000611d5582611d3f565b611d5f8185611ce8565b9350611d6f818560208601611a17565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b6000611db1601183611ce8565b9150611dbc82611d7b565b601182019050919050565b6000611dd282611d1c565b9150611dde8285611d4a565b9150611de982611da4565b9150611df58284611d4a565b91508190509392505050565b6000611e0c82611d3f565b611e1681856117fe565b9350611e26818560208601611a17565b611e2f8161139e565b840191505092915050565b60006020820190508181036000830152611e548184611e01565b90509291505056fea2646970667358221220934b5491cf03eab9540126c0f64860d8d2f3750fed486ee85b96455b127a4f0b64736f6c634300080b0033";

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
