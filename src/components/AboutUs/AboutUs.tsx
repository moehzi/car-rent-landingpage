import SectionWrapper from "@/app/container/SectionWrapper";
import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";

const AboutUs = () => {
    const { aboutRef } = useContext(AppContext);

    return (
        <div className="section bg-orange-500" ref={aboutRef}>
            <SectionWrapper>About Us</SectionWrapper>
        </div>
    );
};

export default AboutUs;
