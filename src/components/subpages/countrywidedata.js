import React from "react";

const CountryWideData = ({ getDataCOuntry }) => {
  return (
    <React.Fragment>
      <div>
        <h1
          style={{
            textTransform: "uppercase",
            color: "#ff0000",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          {getDataCOuntry.country
            ? `${getDataCOuntry.country} - Cases `
            : "Global - Cases"}
        </h1>
      </div>
    </React.Fragment>
  );
};

export default CountryWideData;
