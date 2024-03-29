import React, { createContext, useRef } from "react";

type AppContextType = {
    aboutRef: React.MutableRefObject<HTMLParagraphElement | null>;
    carsRef: React.MutableRefObject<HTMLParagraphElement | null>;
    futuresRef: React.MutableRefObject<HTMLParagraphElement | null>;
    heroRef: React.MutableRefObject<HTMLDivElement | null>;
};

export const AppContext = createContext<AppContextType>({
    aboutRef: { current: null },
    carsRef: { current: null },
    futuresRef: { current: null },
    heroRef: { current: null }
});

export const AppContextProvider = ({
    children
}: React.PropsWithChildren<{}>) => {
    const aboutRef = useRef<HTMLParagraphElement | null>(null);
    const carsRef = useRef<HTMLParagraphElement | null>(null);
    const futuresRef = useRef<HTMLParagraphElement | null>(null);
    const heroRef = useRef<HTMLDivElement | null>(null);

    return (
        <AppContext.Provider value={{ aboutRef, carsRef, heroRef, futuresRef }}>
            {children}
        </AppContext.Provider>
    );
};
