import "./navbar.css";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import { useState } from "react";

function LinksMenu() {
    return (
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#features">Open AI</a></p>
            <p><a href="#possibility">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
        </>
    )
}


export default function Navbar() {

    const [ toggleMenu, setToggleMenu ] = useState<boolean>(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <a href="/" className="gpt3__navbar-links_logo">
                    <img src={logo} alt="Logo"/>
                </a>
                <div className="gpt3__navbar-links_container">
                    <LinksMenu />
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu ?
                    <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/> :
                    <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <LinksMenu/>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
