import { useEffect } from "react";
import gsap from "gsap";
import { AnimationMedia } from "@/shared/styles/media";

export const useClassToggle = () => {
  useEffect(() => {
    const header = document.querySelector(".bictory-header-element");
    const scrollerTarget = document.querySelector("body main > :first-child");

    const media = AnimationMedia;

    if (!header || !scrollerTarget) return;

    const mm = gsap.matchMedia();

    mm.add(
      { lg: media.lg_only, md: media.md_only, sm: media.sm_only },
      (ctx) => {
        const { lg, md } = ctx.conditions ?? {
          lg: false,
          md: false,
          sm: false,
        };

        const topOffset = lg ? "180px" : md ? "150px" : "100px";

        gsap.to(scrollerTarget, {
          scrollTrigger: {
            trigger: scrollerTarget,
            start: `top ${topOffset}`,
            onEnter: () => header.classList.add("page-scrolled"),
            onLeaveBack: () => header.classList.remove("page-scrolled"),
          },
        });
      },
    );

    return () => mm.revert();
  }, []);
};
