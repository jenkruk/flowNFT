export const getTotalSupply =
	// REPLACE THIS WITH YOUR CONTRACT NAME + ADDRESS
	`
import flowNFT from 0x260dc294b4f5e6cc;

pub fun main(): UInt64 {

    return flowNFT.totalSupply;

}
`;