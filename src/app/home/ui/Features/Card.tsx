import { styled } from "@mui/material";
import Image from "next/image";
import avatarSolidAlerted from "../../assets/images/avatarSolidAlerted.svg";
import { media } from "@/shared/styles/media";

type Props = {
  image?: string;
  name: string;
  button?: "view" | "coming-soon";
  content: string;
};

export const FeatureCard = ({
  image = avatarSolidAlerted,
  name,
  content,
}: Props) => {
  return (
    <Container>
      <Wrapper>
        <Group>
          <Image src={image} alt="" />
          <Name>{name}</Name>
        </Group>

        <Text>{content}</Text>
      </Wrapper>
    </Container>
  );
};

const Container = styled("div")`
  overflow: hidden;
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  min-height: 260px;
  /* width: 424px; */
  border-radius: 24px;
  background: linear-gradient(
    125.62deg,
    #ffb703 1.64%,
    rgba(255, 255, 255, 0) 90.98%
  );

  ${media.sm} {
    min-height: unset;
    height: auto;
  }
`;

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 22px;
  height: calc(100% - 2px);
  width: calc(100% - 2px);
  border-radius: inherit;
  background: black;

  ${media.sm} {
    padding: 30px 22px;
  }
`;

const Group = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Name = styled("h5")`
  font-family: "Space Grotesk", sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;
  color: #d9d9d9;
`;

const Text = styled("p")`
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.015em;
  text-align: left;
  color: #dadada;
`;
