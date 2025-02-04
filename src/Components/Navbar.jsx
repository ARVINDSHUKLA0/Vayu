import React, { useState } from "react";
import "../ComponentsStyle/Navbar.css";
import Logo from "/assets/img/logo.png"; 
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const MenuFunc = () => {
        setMenu(!menu);
    };

    return (
        <>
            <div>
                <div className="custom-logo-postion">
                    <Link className="text-decoration-none text-white" to="/">
                    <img src={Logo} width={290} alt="" />
                    <h5 className="text-capitalize p-0">Vayu spa</h5>
                    </Link>
                </div>
                <div className=" menu-item-bars">
                    <i onClick={MenuFunc} className="fa-solid fa-bars fs-5"></i>
                </div>
            </div>
            {menu && <div className="menu-item-warpper" onClick={MenuFunc}></div>}
            <div className={`menu-item ${menu ? "open" : ""}`}>
                <div className="text-end py-2 pe-3 mb-5"> 
                    <Link className="text-dark ">
                        <i onClick={MenuFunc} className="fa-solid fa-xmark fs-4 "></i>
                    </Link>
                </div>
                <ul className="m-0">
                    <li className="list-none py-3">
                        <Link className="text-decoration-none text-dark text-uppercase" to="/">home</Link>
                    </li>
                    <li className="list-none py-3">
                        <Link className="text-decoration-none text-dark text-uppercase" to="/about">about</Link>
                    </li>
                    <li className="list-none py-3">
                        <Link className="text-decoration-none text-dark text-uppercase" to="/blog">blog</Link>
                    </li>
                    <li className="list-none py-3">
                        <Link className="text-decoration-none text-dark text-uppercase" to="/conact">conact</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
