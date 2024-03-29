import SectionWrapper from "@/app/container/SectionWrapper";
import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";

const Hero = () => {
    const { heroRef } = useContext(AppContext);
    return (
        <div className="section bg-red-500" ref={heroRef}>
            <SectionWrapper>Lawak</SectionWrapper>
        </div>
    );
};

export default Hero;
