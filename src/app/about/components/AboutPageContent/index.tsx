import React from "react";
import { ContentBodyText, ContentTitle, ContentWrapper } from "./styles";
import { Wrapper } from "../../styles";

export default function AboutPageContent() {
  return (
    <ContentWrapper mb={{ md: "160px", xs: "30px" }}>
      <Wrapper rowGap="12px" sx={{ alignItems: "flex-start" }}>
        <ContentTitle children="Who we are" />
        <ContentBodyText children="They are builders specializing in Blockchain Name Service (BNS) and Exclusive NFT marketplace across Blockchains. They aim to create an interoperable BNS with enhanced use cases." />
      </Wrapper>
      <Wrapper rowGap="12px" sx={{ alignItems: "flex-start" }}>
        <ContentTitle children="Who we are" />
        <ContentBodyText children="The Blockchain Name Service (BNS) is a distributed, secure and extensible naming system for Web3, based on the L1 and L2 blockchains. BNS empowers users to map human-readable names to blockchain identities and resources such as Multiversx addresses and identities, IPFS hashes, texts, socials, web URLs and so much more. Rather than strings of long-difficult-to-remember addresses, the BNS system offers a much more secure and simpler method to transfer and receive value by using memorizable names. That is to say, users can send crypto assets to “bictory.mvx” instead of “99xxy3vPNlkGvvW3T3TT4o…”—the L1 and L2 chains power BNS domains for Web3. Ownership of a domain name is provable on the blockchain and can be transferred, bought, or sold on a decentralized secondary market. This offers a secure and decentralized way to manage website domains. BNS aims to focus on the distribution and provision of names to aid users in navigating and surfing the Web faster and better. BNS is not designed to replace or compete with DNS; it seeks to make trade and exchange of crypto assets easier and avoid the cumbersome process of copying and pasting long public addresses with the risk of error while utilizing dapps." />
        <ContentBodyText children="Similarly to the Internet DNS, BNS will run on a hierarchical system, allowing domain name owners to take control of any sub-domains—for example, bictory.solana can create sub-domains like nft.bictory.solana or wallet.bictory.solana. The possibilities of BNS are endless; it could even pass for Non-fungible tokens since the registered BNS name can be transferred and sold in a secondary market like any other NFT. BNS will also allow users to connect their domains to social media accounts as identification verifiers and set up protocols associated with their domains." />
      </Wrapper>
    </ContentWrapper>
  );
}
