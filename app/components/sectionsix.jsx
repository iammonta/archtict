import React from "react";
import Image from "next/image";

const Sectiontsix = () => {
  const photo1 = require("../../public/photo1.png").default;
  const photo2 = require("../../public/photo2.png").default;
  const photo3 = require("../../public/photo3.png").default;
  const photo4 = require("../../public/photo4.png").default;
  const photo5 = require("../../public/photo5.png").default;

  const sectionStyle = {
    backgroundColor: "#f0f0f0",
    padding: "40px", // Add some padding to the section
    textAlign: "center", // Center text horizontally
  };

  const imagesContainerStyle = {
    display: "flex",
    flexDirection: "column", // Display images in columns
    justifyContent: "center",
    alignItems: "center",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imageStyle = {
    borderRadius: "8px", // Add some border-radius for a rounded look
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
    margin: "10px", // Adjust margin between images
  };

  const imageSize = {
    position: "relative",
    width: "480px",
    height: "480px",
  };

  return (
    <section style={sectionStyle}>
      <h2>Puzzle Section</h2>
      <div style={imagesContainerStyle}>
        <div style={rowStyle}>
          <div style={{ ...imageSize, ...imageStyle }}>
            <Image
              src={photo1}
              alt="Image description"
              layout="responsive"
              width={480}
              height={480}
            />
          </div>
          <div style={{ ...imageSize, ...imageStyle }}>
            <Image
              src={photo2}
              alt="Image description"
              layout="responsive"
              width={480}
              height={480}
            />
          </div>
          <div style={{ ...imageSize, ...imageStyle }}>
            <Image
              src={photo3}
              alt="Image description"
              layout="responsive"
              width={480}
              height={480}
            />
          </div>
        </div>
        <div style={rowStyle}>
          <div style={{ ...imageSize, ...imageStyle }}>
            <Image
              src={photo4}
              alt="Image description"
              layout="responsive"
              width={480}
              height={480}
            />
          </div>
          <div style={{ ...imageSize, ...imageStyle }}>
            <Image
              src={photo5}
              alt="Image description"
              layout="responsive"
              width={480}
              height={480}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectiontsix;
