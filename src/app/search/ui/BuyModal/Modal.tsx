import React from "react";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material";
import { BuyModalTitle } from "./components/BuyModalTitle";
import { useBuyModal } from "./useBuyModal";
import { AmountDetails } from "./components/AmountDetails";
import { InfoCircle } from "./components/InfoCircle";
import { BButton } from "@/shared/ui";
import { useConnectWallet } from "../ConnectWalletModal";

export function BuyModal() {
  const { data, mutate } = useBuyModal();
  const connectWallet = useConnectWallet();

  const handleClose = () => {
    mutate({ open: false });
  };

  const handleSwitch = () => {
    handleClose();
    connectWallet.mutate({ open: true });
  };

  return (
    <StyledDialog onClose={handleClose} open={data.open}>
      <BuyModalTitle />
      <AmountDetails />
      <Information>
        <InfoCircle />
        <span>You’ll be asked to approve this purchase from your wallet.</span>
      </Information>

      <BButton
        variant="contained"
        color="primary"
        onClick={handleSwitch}
        sx={{
          fontSize: "18px",
          fontWeight: "600",
          lineHeight: "30px",
          padding: "12px",
          width: "100%",
        }}
      >
        Switch to xNames Portal
      </BButton>
    </StyledDialog>
  );
}

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: min(477px, 100%);
    border-radius: 16px;
    padding: 39px 30px;
    background-color: #171717;
  }
`;

const Information = styled("div")`
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: Inter;
  font-size: 15px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: -0.05em;
  text-align: left;
  color: #868686;
  width: 100%;
`;
