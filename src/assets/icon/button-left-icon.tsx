import { SVGProps, memo } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Group 3277">
      <circle
        id="Ellipse 335"
        cx="25"
        cy="25"
        r="24.5"
        transform="matrix(-1 0 0 1 50 0)"
        fill={props.fill}
        stroke={props.stroke}
        strokeOpacity="0.5"
      />
      <path
        id="Vector 2"
        d="M27.4999 18.75L21.2499 25L27.4999 31.25"
        stroke={props.stroke}
        fill={props.fill}
        strokeWidth="2"
      />
    </g>
  </svg>
);
const ButtonLeftIcon = memo(SvgComponent);

export default ButtonLeftIcon;
