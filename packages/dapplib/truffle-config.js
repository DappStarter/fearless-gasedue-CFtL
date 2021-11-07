require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain umbrella inflict clinic bubble sketch'; 
let testAccounts = [
"0xad1dc28d13708b8923ff63d9c96bee646a552ef7e762409e7dd9b62cce31e9d5",
"0x4d75a6907b1b465f07da465ca93120c1cccdecc971a21f67ff7eba7e0e03e0b3",
"0x18435e03ae5fcd991996da02c3f05e29d3a4e79d3278386d0c9992c61c9dc915",
"0x5e3934d1cecd9f117814de3cecbdce5c629a6807dad4c943b9fc8b74c1925f1a",
"0xa6a92efc19bca3df96df28ff28c42be74afb8fee5b8540e3932e6fe9f1a73521",
"0xaf05812361bfeaa083d943477b0f6117d25e1d504bc0cc5bf8e6148105642877",
"0x6881e5ad509be1f91fda4ed36333e7d6dbb4fe5b5844a77865c73176e40ad40c",
"0x2e302d4e7aae1c31d5390f0ad48af011d3f740d07577b61266b045db5f1bdbf0",
"0x07d9698ccc1ab666329735a283533fd1c06dd67f82e3605923a5c480a099617e",
"0x12053b094d1ddd7711f53eb948e5232e8eadba5a3bc1af04656bc36a6abdf59f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

