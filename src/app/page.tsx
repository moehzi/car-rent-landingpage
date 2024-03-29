"use client";
import { Navbar } from "@/components";
import Hero from "@/components/Hero/Hero";
import AboutUs from "@/components/AboutUs/AboutUs";
import Cars from "@/components/Cars/Cars";
import Futures from "@/components/Futures/Futures";
import { AppContextProvider } from "@/context/AppContext";

export default function Home() {
    return (
        <AppContextProvider>
            <div className="min-h-screen bg-white mx-auto snap-y snap-mandatory overflow-y-scroll h-screen">
                <h1>Hello</h1>
                <Navbar />
                <Hero />
                <AboutUs />
                <Cars />
                <Futures />
            </div>
        </AppContextProvider>
    );
}
