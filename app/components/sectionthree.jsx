import React from "react";
import Image from "next/image";

const Sectionthree = () => {
  const img1 = require("../../public/img1.png").default;

  const sectionStyle = {
    backgroundColor: "#fff",
    position: "relative",
    width: "100%",
    height: "450px", // Set the desired height for your section
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // Center content horizontally
  };

  const imageStyle = {
    objectFit: "cover",
    width: "400px", // Set the desired width for your image
    height: "400px", // Set the desired height for your image
    marginRight: "40px", // Adjust spacing between image and other content
  };

  const textContainerStyle = {
    maxWidth: "400px", // Set the desired width for the text container
    marginLeft: "40px", // Adjust margin to move the text to the right
  };

  const boldParagraphStyle = {
    fontWeight: "bold", // Make the paragraph bolder
    marginBottom: "10px", // Add margin at the bottom for separation
    color: "#000000", // Set the color to black
    fontSize: "24px", // Set the font size to make it bigger
  };

  const regularParagraphStyle = {
    color: "#555555", // Set the color to dark gray
  };

  const buttonStyle = {
    backgroundColor: "#000000", // Set the button background color
    color: "#ffffff", // Set the button text color
    padding: "10px 20px", // Set padding for the button
    textDecoration: "none", // Remove default underline
    display: "inline-block", // Make it inline-block to respect padding
    marginTop: "10px", // Add margin at the top for separation
  };

  return (
    <section style={sectionStyle}>
      <Image
        src={img1}
        alt="Image description"
        width={670} // Set the desired width for your image
        height={642} // Set the desired height for your image
        style={imageStyle}
      />
      <div style={textContainerStyle}>
        <p style={boldParagraphStyle}>
          From Sketch to Life.
        </p>
        <p style={regularParagraphStyle}>
          The basic philosophy of our studio is to create individual,
          aesthetically stunning solutions for our customers by
          lightning-fast development of projects employing unique styles and
          architecture. Even if you don’t have a ready sketch of what you want –
          we will help you to get the result you dreamed of.
        </p>
        <a href="#view-projects" style={buttonStyle}>
          VIEW PROJECTS
        </a>
      </div>
    </section>
  );
};

export default Sectionthree;
