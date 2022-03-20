import React from "react";

const Blob = () => {
  return (
    <svg
      id="blob"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      style={{
        backgroundColor: "none",
        position: "absolute",
        top: "85px",
        left: "-25px",
        height: "85%",
      }}
    >
      <path
        d="M92.72,48.11A163.56,163.56,0,0,0,63.26,11.32a62,62,0,0,0-5.77-4.95c-3.13-2.16-10.06-7.74-30,.41S-.42,33.05.17,44.89s5.18,21,20.4,29.85c6,3.51,14.45,6.3,21.88,10.45,11.4,6.37,22.51,12,30,12.31,12.38.44,22-10.87,25.14-19.38s3.34-15-1.24-23.63C95.37,52.67,94.11,50.46,92.72,48.11Z"
        style={{ fill: "#ffc95f" }}
      />
    </svg>
  );
};

export default Blob;
