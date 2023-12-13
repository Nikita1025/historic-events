import { SVGProps, memo } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/*d="M27.4999 18.75L21.2499 25L27.4999 31.25"*/}
    <path d="M1 1L6 6L1 11" stroke="#3877EE" />
  </svg>
);
const VectorLeftIcon = memo(SvgComponent);

export default VectorLeftIcon;
