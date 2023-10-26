import { Links } from "@/shared/const";

export const buyRedirect = (name: string = "") => {
  if (name.includes(".mvx")) {
    window.open(`${Links.mvx}/search/${name.replace(".mvx", "")}`, "_blank");
  } else if (name.includes(".ccd")) {
    window.open(Links.ccd, "_blank");
  }
};
