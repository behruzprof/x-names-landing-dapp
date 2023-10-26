import { BButton } from "@/shared/ui";
import { useBuyModal } from "../../BuyModal";
import { buyRedirect } from "@/app/search/utilities";

export const BuyAction = ({ name = "" }: { name?: string }) => {
  const { mutate } = useBuyModal();

  const handleClick = () => {
    buyRedirect(name);
  };

  return (
    <BButton
      variant="contained"
      color="primary"
      children="Buy now"
      onClick={handleClick}
      sx={{
        fontSize: "18px",
        fontWeight: "600",
        lineHeight: "30px",
        margin: "0",
      }}
    />
  );
};
