import React from "react";
import Image from "next/image";

const Sectiontfor = () => {
  const img2 = require("../../public/img2.png").default;
  const img3 = require("../../public/img3.png").default;
  const img4 = require("../../public/img4.png").default;
  const img5 = require("../../public/img5.png").default;
  const img6 = require("../../public/img6.png").default;
  const img7 = require("../../public/img7.png").default;
  const img8 = require("../../public/img8.png").default;
  const img9 = require("../../public/img9.png").default;
  const img10 = require("../../public/img10.png").default;

  const sectionStyle = {
    backgroundColor: "#F4F4F4", // Light gray background color
    position: "relative",
    width: "100%",
    height: "500px", // Adjust the height for your section
    display: "flex",
    flexDirection: "column", // Arrange items in a column
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
  };

  const rowStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "30px", // Add more space between rows
  };

  const imageStyle = {
    margin: "0 20px", // Add space between images
  };

  const customSizeImageStyle = {
    width: "400px", // Set the desired width
    height: "350px", // Set the desired height
  };

  return (
    <section style={sectionStyle}>
      <div style={rowStyle}>
        <Image src={img2} alt="Image description" width={100} height={90} style={imageStyle} />
        <Image src={img3} alt="Image description" width={100} height={90} style={imageStyle} />
        <Image src={img4} alt="Image description" width={100} height={90} style={imageStyle} />
        <Image src={img5} alt="Image description" width={100} height={90} style={imageStyle} />
        <Image src={img6} alt="Image description" width={100} height={90} style={imageStyle} />
        <Image src={img7} alt="Image description" width={100} height={90} style={imageStyle} />
      </div>
      <div style={rowStyle}>
        <Image src={img8} alt="Image description" style={customSizeImageStyle} />
        <Image src={img9} alt="Image description" style={customSizeImageStyle} />
        <Image src={img10} alt="Image description" style={customSizeImageStyle} />
      </div>
    </section>
  );
};

export default Sectiontfor;
