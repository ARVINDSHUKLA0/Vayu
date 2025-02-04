import React from 'react';
import '../ComponentsStyle/Footer.css'
import Logo from "/assets/img/logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=" custom-background py-4">
            <div className="sm-overflow-width">
                <div className='d-sm-flex d-block justify-content-between'>
                    <div className='text-sm-start text-md-center '>
                        <Link className='text-decoration-none' to="/">
                        <img className='custom-postion-sm' src={Logo} width={200} alt="Vayu Spa Logo" />
                        <p className="text-white mt-2 text-capitalize custom-margin-sm">demo</p>
                        </Link>
                    </div>
                    <div className="text-sm-start text-md-cente custom-margin-sm">
                        <h3 className="text-info m-0 pb-2 text-capitalize">Join our Inner Circle</h3>
                        <p className="text-white m-0 pb-3 text-capitalize">Your email address</p>
                        <input
                            className="  border-0  mb-2 bg-transparent text-white text-center text-white custom-get-Data"
                            type="email"
                            
                        />
                        <div className="my-3">
                            <Link className="custom-btn-sumbit text-decoration-none fs-5 text-capitalize px-4 text-secondary">Submit</Link>
                        </div>
                    </div>
                    <div className='pe-lg-4 text-start custom-margin-sm'>
                    <p className="text-white mt-2 pe-5"> home. gallery . faq .book <br /> &#169; 2025 Vayu Spa</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
