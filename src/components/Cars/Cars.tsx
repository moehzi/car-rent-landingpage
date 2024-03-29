import SectionWrapper from "@/app/container/SectionWrapper";
import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";

const Cars = () => {
    const { carsRef } = useContext(AppContext);
    return (
        <div className="section bg-green-500" id="cars" ref={carsRef}>
            <SectionWrapper>Cars</SectionWrapper>
        </div>
    );
};

export default Cars;
