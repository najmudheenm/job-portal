import React from "react";

const DescriptionWithList = ({ title, data   }) => {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {data.map((data, ind) => (
          <li key={ind}>{data}</li>
        ))}
      </ul>
    </>
  );
};

export default DescriptionWithList;
