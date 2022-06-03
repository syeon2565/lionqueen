type Props = {
  width?: string;
  height?: string;
  color?: string;
};

const XIcon = ({ width = '14', height = '14', color = '#2E2E2E' }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.292893 13.0208C0.683417 13.4113 1.31658 13.4113 1.70711 13.0208L6.65692 8.071L11.6068 13.0208C11.9973 13.4114 12.6304 13.4114 13.021 13.0208C13.4115 12.6303 13.4115 11.9971 13.021 11.6066L8.07113 6.65679L13.0208 1.70711C13.4113 1.31658 13.4113 0.683417 13.0208 0.292893C12.6303 -0.0976312 11.9971 -0.0976309 11.6066 0.292893L6.65692 5.24257L1.70726 0.29291C1.31673 -0.0976145 0.683569 -0.0976145 0.293044 0.29291C-0.0974801 0.683434 -0.0974797 1.3166 0.293045 1.70712L5.24271 6.65679L0.292893 11.6066C-0.0976311 11.9971 -0.0976311 12.6303 0.292893 13.0208Z"
        fill={color}
      />
    </svg>
  );
};

export default XIcon;
