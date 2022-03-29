const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "Wallpaper",
      image: "https://gateway.pinata.cloud/ipfs/QmQymLsPvbMkKPR5apPx8ZrTitiaku2XgfvFyCXGABgYs3",
      description: "Intern NFT"
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();
