import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import {section} from '../../public/Section.png'
const Sectiontwo = () => {
  const sectionStyle = {
    backgroundImage: `url('/Section.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    

    // You can add more background-related styles here
  };

  return (
    <section className="h-[250px]" style={sectionStyle}>
      
            
    </section>
  );
};

export default Sectiontwo;
