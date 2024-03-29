import React from "react";

const SectionWrapper = ({ children }: React.PropsWithChildren) => {
    return <div className="container mx-auto">{children}</div>;
};

export default SectionWrapper;
