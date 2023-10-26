import gsap from "gsap";
import { useEffect, useLayoutEffect } from "react";

let renderCount = 0;

/**
 * This hook switches words with a nice animation effect
 *
 * @param target a css selector of the words to switch
 */
export const useWordSwitchEffect = (target: string) => {
  ++renderCount;

  useLayoutEffect(() => {
    const animation = gsap.timeline();

    const numOfTargets = document.querySelectorAll(target).length;

    gsap.set(target, { opacity: 1 });

    const duration = 0.5;
    const pause = 1;
    const staggerAmount = duration + pause;

    const stagger = {
      each: staggerAmount,
      repeat: -1,
      repeatDelay: staggerAmount * (numOfTargets - 1) + pause,
    };

    animation
      .from(target, {
        y: 50,
        rotationX: -90,
        opacity: 0,
        stagger,
      })
      .to(
        target,
        { y: -50, rotationX: 90, opacity: 0, duration, stagger },
        staggerAmount,
      );

    return () => {
      animation.revert();
    };
  }, [renderCount, target]);
};
