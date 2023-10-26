import React from "react";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material";
import { useConnectWallet } from "./useConnectWallet";
import { ConnectWalletTitle } from "./components/Title";

export function ConnectWalletModal() {
  const { data, mutate } = useConnectWallet();

  const handleClose = () => {
    mutate({ open: false });
  };

  return (
    <StyledDialog onClose={handleClose} open={data.open}>
      <ConnectWalletTitle />
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
