import gsap from "gsap";
import { RefObject, useEffect, useLayoutEffect, useState } from "react";
import { FaqClasses } from "../Item";

export const useFaqToggle = (ref: RefObject<HTMLDivElement>, open: boolean) => {
  const [tl, setTl] = useState<gsap.core.Timeline | undefined>();

  useLayoutEffect(() => {
    if (!ref.current) return;

    const answer = ref.current.querySelector(
      `.${FaqClasses.answer}`,
    ) as HTMLElement;

    const tll = gsap.timeline({ paused: true }).to(answer, {
      height: "auto",
      opacity: 1,
      ease: "power1.inOut",
      duration: 0.3,
    });

    setTl(tll);

    return () => {
      tll.revert();
    };
  }, [ref]);

  useEffect(() => {
    if (!tl) return;

    if (open) tl.play();
    else if (!tl.reversed()) tl.reverse();
  }, [open, tl]);
};
