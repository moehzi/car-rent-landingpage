import SectionWrapper from "@/app/container/SectionWrapper";
import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";

const Futures = () => {
    const { futuresRef } = useContext(AppContext);
    return (
        <div className="section bg-blue-500" id="futures" ref={futuresRef}>
            <SectionWrapper>Futures</SectionWrapper>
        </div>
    );
};

export default Futures;
