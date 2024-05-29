import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";

export default function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Blog />
            <Footer />
        </div>
    );
}

