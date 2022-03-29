// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract mintNFTDrop is Ownable, ERC1155 {

    constructor() public ERC1155("") {}
    
    function mintNFT()
        external onlyOwner
    {
        _setURI("https://gateway.ipfs.io/ipfs/QmfFHTMrf9H896Q1VHxWyfuQDBu2wX4pce71dMgLZRzFL1");
        _mint(msg.sender, 1, 100, "");
    }
}