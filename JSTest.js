// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Create a variable to hold your NFTs
let nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(carname, carcolor, model , price) {
    const nft = {
        carname: carname,
        carcolor: carcolor,
        model : model,
        price: price
    };
    nfts.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log("CarName: " + nfts[i].carname);
        console.log("carcolor: " + nfts[i].carcolor);
        console.log("model: " + nfts[i].model);
        console.log("price: " + nfts[i].price);
        console.log("---------------------------");
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// Call your functions below this line
mintNFT("wagon R", "grey" , "vxi", "10 lakhs");
mintNFT("fortuner", "black", "Lx", "16 lakhs");
mintNFT("maruti", "black", "sxopt", "12 lakhs");
mintNFT("jaguar", "white", "sportzdt", "80 lakhs");

listNFTs();
console.log("Total Supply: " + getTotalSupply());
