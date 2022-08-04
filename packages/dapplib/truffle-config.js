require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name release stereo purpose gesture globe equal gasp'; 
let testAccounts = [
"0x43e6f808539daa1a27ba64d9c762e273a5584e8ee4b025f1df2f5e61b904169a",
"0x8c8fe97de3817f2281c05f44b57d0493d79046ef0246b18ab855fbc405ebedea",
"0xb061f218d70649e53f4bd7b5736fa0f16cc73d7aa88e055b4a15b71d955dfe30",
"0xe0e68abffa89ce8315c693705325df48fd9b1da4e06f217e8cc4fcdbd5ef5de9",
"0x8ab5747dac2467354a47538a3b1c3a12ae1b42498a86930325e8343218f8791f",
"0x14000bc3e38ec957683c02ae12a14e43a62696df8470dcee827cf789735ae163",
"0x84407130c9784f322c2d5a8dddef01e849240ee3b97330cbc9bea3750b4fbd87",
"0x63f0413ac8595d3eedbb6e116ef7209b391eba49848b85d4a4747752eee877b2",
"0x7d9ab9e1368157f59ba35bfe0cd27a3936697b4f8b4a3e3ebdcd49f4db7b28b7",
"0x07ed14240b9cd37d3ce4d8a97775a21fbb07cdb4738c0f442225202b731a53da"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

