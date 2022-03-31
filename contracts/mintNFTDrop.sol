// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract mintNFTDrop is Ownable, ERC1155 {

    constructor() public ERC1155("") {}
    
    function mintNFT(string memory _uri)
        external onlyOwner
    {
        _setURI(_uri);
        _mint(msg.sender, 1, 100, "");
    }
}