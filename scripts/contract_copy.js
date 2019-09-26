/* 
    copy contracts from source project directories to the contract 
    directory of the web project so it can pick them up during runtime
*/

const fs = require('fs');

const ethContractDestination = './src/contracts/';
const sideChainContractName = 'EsembleApp.json';
const sideChainContractSource = './../esm-schain/build/contracts/';
const tokenContractSource = './../esm-token/build/contracts/';
const tokenContractName = 'EsmToken.json';
const sideChainContractDestination = ethContractDestination;


function moveFile(from, to){
    // destination.txt will be created or overwritten by default.
    fs.copyFile(from, to, (err) => {
        if (err) throw err;
        console.log(`source ${from} was copied to destination ${to}`);
    });
}


    console.log("copying contracts...");  

    moveFile(sideChainContractSource + sideChainContractName, sideChainContractDestination + sideChainContractName);
    moveFile(tokenContractSource + tokenContractName, sideChainContractDestination + tokenContractName);
   

    console.log("...copying done");  