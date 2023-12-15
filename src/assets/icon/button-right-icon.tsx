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
    <g id="Group 3276">
      <circle
        id="Ellipse 335"
        cx="25"
        cy="25"
        r="24.5"
        stroke={props.stroke}
        fill={props.fill}
        strokeOpacity="0.5"
      />
      <path
        id="Vector 2"
        d="M22.5001 18.75L28.7501 25L22.5001 31.25"
        stroke={props.stroke}
        fill={props.fill}
        strokeWidth="2"
      />
    </g>
  </svg>
);
const ButtonRightIcon = memo(SvgComponent);

export default ButtonRightIcon;
