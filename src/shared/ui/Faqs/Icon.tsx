import { useEffect, useRef } from "react";
import gsap from "gsap";

export const FaqIcon = ({ isSelected }: { isSelected?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  useAnimation(ref, isSelected);

  return (
    <div ref={ref}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="faq-icon-line"
      >
        <path
          d="M8.66667 14.6666H19.3333C19.6978 14.6666 20 14.3644 20 13.9999C20 13.6355 19.6978 13.3333 19.3333 13.3333H8.66667C8.30222 13.3333 8 13.6355 8 13.9999C8 14.3644 8.30222 14.6666 8.66667 14.6666Z"
          fill="#686868"
        />
        <path
          d="M14 20C14.3645 20 14.6667 19.6978 14.6667 19.3333V8.66667C14.6667 8.30222 14.3645 8 14 8C13.6356 8 13.3334 8.30222 13.3334 8.66667V19.3333C13.3334 19.6978 13.6356 20 14 20Z"
          fill="#686868"
        />
        <rect
          x="-1"
          y="1"
          width="26"
          height="26"
          rx="13"
          transform="matrix(-1 0 0 1 26 0)"
          stroke="#686868"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

const useAnimation = (ref: any, isSelected?: boolean) => {
  useEffect(() => {
    const svg = ref.current.querySelector(`.faq-icon-line`);

    if (isSelected) {
      gsap.set(svg, { rotation: 0 });
      gsap.to(svg, { rotation: 45, ease: "power1.inOut", delay: 0.1 });
    } else {
      gsap.set(svg, { rotation: 45 });
      gsap.to(svg, { rotation: -0, ease: "power1.inOut", delay: 0.1 });
    }
  }, [isSelected, ref]);
};
