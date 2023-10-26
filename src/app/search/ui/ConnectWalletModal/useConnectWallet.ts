import useSwr from "swr/immutable";

type Props = {
  open: boolean;
};

const fallbackData: Props = {
  open: false,
};

export const useConnectWallet = () => {
  const resp = useSwr<Props>("connectWallet", { fallbackData });

  return {
    data: resp.data!,
    mutate: resp.mutate,
  };
};
