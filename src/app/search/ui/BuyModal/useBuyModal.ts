import useSwr from "swr/immutable";

type Props = {
  open: boolean;
};

const fallbackData: Props = {
  open: false,
};

export const useBuyModal = () => {
  const resp = useSwr<Props>("buyModal", { fallbackData });

  return {
    data: resp.data!,
    mutate: resp.mutate,
  };
};
