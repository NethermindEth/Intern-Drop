async function main() {
    const mintNFTDrop = await hre.ethers.getContractFactory("mintNFTDrop");
    const nft = await mintNFTDrop.deploy();
  
    await nft.deployed();
  
    console.log("deployed to:", nft.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  