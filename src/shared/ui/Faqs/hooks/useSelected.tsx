import useSWRLocal from "swr/immutable";

export const useSelectedFaq = () => {
  const res = useSWRLocal("faqs-selected-question", { fallbackData: 0 });
  return { selectedFaq: res.data ?? 0, setSelectedFaq: res.mutate };
};
