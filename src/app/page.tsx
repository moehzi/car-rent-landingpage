import Image from "next/image";

import { Navbar } from "@/components";

export default function Home() {
    return (
        <div className="min-h-screen bg-white container mx-auto">
            <h1>Hello</h1>
            <Navbar />
        </div>
    );
}
