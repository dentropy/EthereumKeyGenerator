//Dependencies
var ethers = require('ethers');
var fs = require('fs');


var argv = process.argv.slice(2);


var KeyObject = {"mnemonic": ethers.Wallet.createRandom().mnemonic, "KeyPairs" : []}


console.log("Please wait while the key pairs are generated")
for(var i = 0; i < argv[0]; i++){
    var tmpWallet = ethers.Wallet.fromMnemonic(KeyObject.mnemonic, "m/00/"+i);
    var tmpWalletObject = {};
    tmpWalletObject.privateKey = tmpWallet.privateKey;
    tmpWalletObject.address = tmpWallet.address;
    KeyObject.KeyPairs.push(tmpWalletObject);
    if(i == argv[0] - 1){
        console.log("TEST")
        ExportToJSON(KeyObject, argv[1]);
    }
}


function ExportToJSON(_DATA, _FileLocation) {
    fs.writeFile(_FileLocation, JSON.stringify(_DATA), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(_DATA);
        console.log("The file was saved!");
    });
}