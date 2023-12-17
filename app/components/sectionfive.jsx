import React from "react";
import Image from "next/image";

const Sectiontfive = () => {
  const img11 = require("../../public/img11.png").default;
  const img12 = require("../../public/img12.png").default;
  const img13 = require("../../public/img13.png").default;

  const sectionStyle = {
    backgroundColor: "#F4F4F4",
    display: "flex",
    flexDirection: "column", // Change to column to stack them vertically
    alignItems: "center",
    justifyContent: "center",
    height: "400px",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "10px",
  };

  const imageStyle = {
    width: "100px",
    height: "90px",
    marginBottom: "10px",
    margin: "0 auto", // Center the image horizontally
  };

  const textStyle = {
    fontSize: "16px",
    lineHeight: "30px",
    fontFamily: "Raleway",
    color: "#555",
    marginTop: "10px",
    fontWeight: "bold", // Make the main text bold
  };

  const additionalTextStyle = {
    fontSize: "16px",
    lineHeight: "30px",
    fontFamily: "Raleway",
    color: "#555555", // Set the font color to #555555
    marginTop: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const renderImageBlock = (imgSrc, text, additionalText) => (
    <div style={{ margin: "0 20px", padding: "10px", textAlign: "center" }}>
      <Image src={imgSrc} alt={`Description for ${text}`} style={imageStyle} />
      <div>
        <p style={textStyle}>{text}</p>
        {additionalText && <p style={additionalTextStyle}>{additionalText}</p>}
        <button style={buttonStyle}>Read More</button>
      </div>
    </div>
  );

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {renderImageBlock(img11, "Design & Planning", "We will help you to get the result you dreamed of.")}
        {renderImageBlock(img12, "Custom Solutions", "Individual, aesthetically stunning solutions for customers.")}
        {renderImageBlock(img13, "Furniture & Decor", "We create and produce our product design lines.")}
      </div>
    </section>
  );
};

export default Sectiontfive;
