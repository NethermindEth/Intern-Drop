require("dotenv").config();

//array of addresses of interns
const interns = [
    "0x4C95165d3309e48BaD66334D37A743Ea0455AC31",
    "0xD25A3b32ff888D8cb6DBeBbc11C7c13BcE13a023"
];
const existingContractAddr = "0x65ABb37428C9F101d0fE8b71Ae92dB32459BB050";
console.log(process.env.DEPLOYER_ADDRESS)
async function main() {
  const nft = await hre.ethers.getContractAt("mintNFTDrop", existingContractAddr);

  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();
  await nft.mintNFT()
  for(let i = 0; i < friends.length; i++) {
    await nft.safeTransferFrom(process.env.DEPLOYER_ADDRESS, interns[i], 1,1,"0x00",{
      nonce: nonce + i
    });
  }

  console.log("Minting is complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
