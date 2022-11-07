export const mintNFT = `
import flowNFT from 0x260dc294b4f5e6cc

// Do not change these
import NonFungibleToken from 0x631e88ae7f1d7c20
import MetadataViews from 0x631e88ae7f1d7c20

transaction{

    // local variable for storing the minter reference
    let minter: &flowNFT.NFTMinter

    prepare(signer: AuthAccount) {
        // borrow a reference to the NFTMinter resource in storage
        self.minter = signer.borrow<&flowNFT.NFTMinter>(from: flowNFT.MinterStoragePath)
            ?? panic("Could not borrow a reference to the NFT minter")
    }

    execute {
        // Borrow the recipient's public NFT collection reference
        let receiver = getAccount(0x02)
            .getCapability(flowNFT.CollectionPublicPath)
            .borrow<&{NonFungibleToken.CollectionPublic}>()
            ?? panic("Could not get receiver reference to the NFT Collection")

        // Mint the NFT and deposit it to the recipient's collection
        self.minter.mintNFT(
            recipient: receiver,
            name: "AnimalNFTs",
            description: "Animals are better than hoomans",
            thumbnail: "NFT: Thumbnail",
            //royalties: [MetadataViews.Royalty],
        )

        log("Minted an NFT")
    }
}
`;
