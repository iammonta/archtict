import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {ts} from '../../public/ts.png'
const HeroSection = () => {
  const sectionStyle = {
    backgroundImage: `url('/ts.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    

    // You can add more background-related styles here
  };

  return (
    <section className="h-[500px]" style={sectionStyle}>
      <div className="relative ">
        
          
          <p className=" absolute top-80 left-96       ">
          We pride ourselves on being builders — creating architectural and creative solutions to help
people realize their vision and make them a reality. Wanna work with us?
          </p>
          <div>
            <Link
              href="/#contact"
              className="absolute top-96 right-96 text-center    bg-black w-20 h-12   " >
              Hire Me
            </Link>
          </div>
        
        
         

      </div>
    </section>
  );
};

export default HeroSection;
