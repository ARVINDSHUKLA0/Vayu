import React, { useRef, useState } from 'react'
import '../PagesStyle/Home.css'
import ViedoOne from '/assets/viedo/viedo1.mp4'
import Navbar from '../Components/Navbar'
import HotelOneImges from '/assets/img/imges1.jpeg'
import ViedoTwo from '/assets/viedo/viedo-2.mp4'
import ViedoThree from '/assets/viedo/viedo-3.mp4'
import ViedoFour from '/assets/viedo/18531402-uhd_3840_2160_60fps.mp4'
import ViedoFive from '/assets/viedo/10135156-uhd_3840_2160_30fps.mp4'
import ViedoSix from '/assets/viedo/12684187_1920_1080_60fps.mp4'
import ViedoSeven from '/assets/viedo/12225674-hd_1920_1080_25fps.mp4'
import CradSlider from '../Components/CradSlider'
import ViedoEight from '/assets/viedo/viedo-8.mp4'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {

    const services = [
        { title: "Stress Reduction", content: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error iure sequi delectus sint consequuntur consequatur, reprehenderit odit. Ipsam, tempora doloribus itaque quidem minus temporibus, iusto ratione unde obcaecati voluptatumnihil vel perferendis culpa. Aperiam, aliquid?." },
        { title: "Improved Circulation", content: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error iure sequi delectus sint consequuntur consequatur, reprehenderit odit. Ipsam, tempora doloribus itaque quidem minus temporibus, iusto ratione unde obcaecati voluptatumnihil vel perferendis culpa. Aperiam, aliquid?." },
        { title: "Skin Health", content: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error iure sequi delectus sint consequuntur consequatur, reprehenderit odit. Ipsam, tempora doloribus itaque quidem minus temporibus, iusto ratione unde obcaecati voluptatumnihil vel perferendis culpa. Aperiam, aliquid?." },
        { title: "Pain Relief", content: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error iure sequi delectus sint consequuntur consequatur, reprehenderit odit. Ipsam, tempora doloribus itaque quidem minus temporibus, iusto ratione unde obcaecati voluptatumnihil vel perferendis culpa. Aperiam, aliquid?." },
        { title: "Improved Sleep", content: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error iure sequi delectus sint consequuntur consequatur, reprehenderit odit. Ipsam, tempora doloribus itaque quidem minus temporibus, iusto ratione unde obcaecati voluptatumnihil vel perferendis culpa. Aperiam, aliquid?." },
        { title: "Mental Clarity", content: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error iure sequi delectus sint consequuntur consequatur, reprehenderit odit. Ipsam, tempora doloribus itaque quidem minus temporibus, iusto ratione unde obcaecati voluptatumnihil vel perferendis culpa. Aperiam, aliquid?." },
        { title: "Better Focus", content: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error iure sequi delectus sint consequuntur consequatur, reprehenderit odit. Ipsam, tempora doloribus itaque quidem minus temporibus, iusto ratione unde obcaecati voluptatumnihil vel perferendis culpa. Aperiam, aliquid?." },
        { title: "Immune Support", content: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error iure sequi delectus sint consequuntur consequatur, reprehenderit odit. Ipsam, tempora doloribus itaque quidem minus temporibus, iusto ratione unde obcaecati voluptatumnihil vel perferendis culpa. Aperiam, aliquid?." },
        { title: "Energy Boost", content: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error iure sequi delectus sint consequuntur consequatur, reprehenderit odit. Ipsam, tempora doloribus itaque quidem minus temporibus, iusto ratione unde obcaecati voluptatumnihil vel perferendis culpa. Aperiam, aliquid?." },
        { title: "Relaxation", content: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error iure sequi delectus sint consequuntur consequatur, reprehenderit odit. Ipsam, tempora doloribus itaque quidem minus temporibus, iusto ratione unde obcaecati voluptatumnihil vel perferendis culpa. Aperiam, aliquid?." },
    ];

    const [contentSerives, setContentSerives] = useState(null);
    const [visibleCount, setVisibleCount] = useState(5);
    const handleToggle = (index) => {
        if (contentSerives === index) {
            setContentSerives(null);
        } else {
            setContentSerives(index);
        }
    };

    const handleShowMore = () => {
        if (visibleCount < services.length) {
            setVisibleCount((prevCount) => prevCount + 5);
        } else {
            setVisibleCount(5);
        }
    };

    const viedoRef = useRef(null)
    const viedoPlay = () => {
        if (viedoRef.current) {
            viedoRef.current.play()
        }
    }

    return (
        <>
            <div className='viedo-main-conatiner position-relative'>
                <video autoPlay muted loop playsInline className='viedo-warpper' src={ViedoOne}></video>
                <div className='viedo-menu-list'>
                    <Navbar />
                </div>
                <div className='viedo-wraper-heading'>
                    <h1 className='text-white text-capitalize p-0 f-size'>breathe easy. live well</h1>
                </div>
                <div className='video-warper-sub-heding text-center'>
                    <h4 className='text-white text-capitalize m-0 pb-2'>delta hotels toronto markham</h4>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h6 className='text-white text-capitalize m-0'>view full video</h6>
                        <span>
                            <i className="fa-regular fa-circle-play text-white ps-3"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex align-items-center ">
                        <div>
                            <h2 className=' py-2 text-capitalize fs-size m-0'>the breath of <br />   family  wellness
                                <hr className='custom-margin-border' />
                            </h2>

                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <p className='py-md-5 px-lg-5 text-capitalize m-0 custom-padding '>Experience Vayu Spa at Delta Hotel, where "Vayu" - the essence of air and effortless flow - inspires family wellness. Nestled within the hotel, this oasis invites families to reconnect and rejuvenate. Indulge in soothing massages, invigorating scrubs, and more, creating lasting memories in a haven of tranquility.</p>
                    </div>
                </div>
            </div>
            <div className='row m-0'>
                <div className="col-lg-10 col-md-10 col-sm-10 col-12 offset-md-2">
                    <img className='w-100' src={HotelOneImges} alt="" />
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row m-0 py-5'>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-12 d-flex align-items-center ">
                        <div>
                            <h2 className=' text-capitalize'>Rediscover balance  <br /> at  vayu spa   <hr className='custom-margin-border-two' /></h2>
                            <p>Inspired by the Sanskrit word "Vayu" air, our spa offers a holistic approach to wellness. Experience the gentle flow of energy as you indulge in our signature treatments. From stress-relieving massages to revitalizing facials, Vayu Spa helps you find balance and restore harmony within.</p>
                        </div>
                    </div>
                    <div className='col-lg-5 offset-md-2 col-md-5 col-sm-5 col-12'>
                        <div className="service-container">
                            {services.slice(0, visibleCount).map((service, index) => (
                                <div key={index} className="service-item">
                                    <div
                                        className="d-flex justify-content-between align-items-center  service-title"
                                        onClick={() => handleToggle(index)}
                                    >
                                        <h4 className="text-capitalize">{service.title}</h4>
                                        <i className={`fa-solid fa-arrow-right text-secondary ${contentSerives === index ? "rotate" : ""}`}></i>
                                    </div>
                                    {contentSerives === index && (
                                        <div className="service-content">{service.content}</div>
                                    )}
                                </div>
                            ))}
                            <div className="text-start text-sm-center mt-md-5 custom-padding-top">
                                <button className="btn bg-info" onClick={handleShowMore}>
                                    {visibleCount < services.length ? "View More Services" : "Show Less"}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <section className='postion-height-set'>
                <div className=' sticky-container'>
                    <div className='viedo-main-conatiner '>
                        <video autoPlay muted loop playsInline className='w-100 viedo-warpper-color-change' src={ViedoTwo}></video>
                    </div>
                    <div className='custom-postion-viedo-warpper viedo-menu-left-side '>
                        <h2 className='text-capitalize mb-4'>a completely <br /> private experience</h2>
                        <hr className='border-color custom-margin-border-two' />
                        <p className='text-capitalize custom-margin-border custom-width-sm'>Discover the ultimate in relaxation at Vayu Spa, a completely private and clothing-optional spa sanctuary nestled in the heart of the city. Immerse yourself in a world of tranquility and rejuvenation, where every moment is designed for your complete comfort and rejuvenation</p>
                    </div>
                </div>
                <div className='sticky-container'>
                    <div className='viedo-main-conatiner '>
                        <video autoPlay muted loop playsInline className='w-100 viedo-warpper-color-noChange' src={ViedoThree}></video>
                    </div>
                    <div className='custom-postion-viedo-warpper viedo-menu-left-side '>
                        <div className=''>
                            <h2 className='text-capitalize mb-3 '>stay</h2>
                            <hr className='border-color custom-margin-border-two' />
                            <p className='text-capitalize custom-margin-border custom-width-sm'>Unwind and recharge with our luxurious spa services. Book your stay and discover a world of tranquility.</p>
                        </div>
                    </div>
                </div>
                <div className='sticky-container'>
                    <div className='viedo-main-conatiner '>
                        <video autoPlay muted loop playsInline className='w-100 viedo-warpper-color-noChange' src={ViedoFour}></video>
                    </div>
                    <div className='custom-postion-viedo-warpper viedo-menu-left-side '>
                        <div className=''>
                            <h2 className='text-capitalize mb-4'>showers</h2>
                            <hr className='border-color custom-margin-border-two' />
                            <p className='text-capitalize custom-margin-border custom-width-sm'>Experience the refreshing essence of 'Vayu' with invigorating rainfall showers.</p>
                        </div>
                    </div>
                </div>
                <div className='sticky-container'>
                    <div className='viedo-main-conatiner '>
                        <video autoPlay muted loop playsInline className='w-100 viedo-warpper-color-noChange' src={ViedoSeven}></video>
                    </div>
                    <div className='custom-postion-viedo-warpper viedo-menu-left-side '>
                        <div className=''>
                            <h2 className='text-capitalize mb-4'>soak</h2>
                            <hr className='border-color custom-margin-border-two' />
                            <p className='text-capitalize custom-margin-border custom-width-sm'>Immerse yourself in the therapeutic benefits of our private cedar soaking tubs. Each tub is meticulously cleaned and refilled with fresh water between uses, ensuring a clean and refreshing experience for every guest.</p>
                        </div>
                    </div>
                </div>
                <div className='sticky-container'>
                    <div className='viedo-main-conatiner '>
                        <video autoPlay muted loop playsInline className='w-100 viedo-warpper-color-noChange' src={ViedoFive}></video>
                    </div>
                    <div className='custom-postion-viedo-warpper viedo-menu-left-side '>
                        <div className=''>
                            <h2 className='text-capitalize mb-4'>wellpod</h2>
                            <hr className='border-color custom-margin-border-two' />
                            <p className='text-capitalize custom-margin-border custom-width-sm'>Discover the transformative power of Wellpod, a reinvented sauna experience. Enjoy gentle warmth at 50°C, surrounded by natural materials in an open and spacious environment.</p>
                        </div>
                    </div>
                </div>
                <div className='sticky-container'>
                    <div className='viedo-main-conatiner '>
                        <video autoPlay muted loop playsInline className='w-100 viedo-warpper-color-change' src={ViedoTwo}></video>
                    </div>
                    <div className='custom-postion-viedo-warpper viedo-menu-left-side '>
                        <div className=''>
                            <h2 className='text-capitalize mb-4'>cold water</h2>
                            <hr className='border-color custom-margin-border-two' />
                            <p className='text-capitalize custom-margin-border custom-width-sm'>Breathe Deeply. Plunge In. Experience the invigorating effects of our cold water pools</p>
                        </div>
                    </div>
                </div>
                <div className='sticky-container'>
                    <div className='viedo-main-conatiner '>
                        <video autoPlay muted loop playsInline className='w-100 viedo-warpper-color-noChange' src={ViedoSix}></video>
                    </div>
                    <div className='custom-postion-viedo-warpper viedo-menu-left-side '>
                        <div className=''>
                            <h2 className='text-capitalize mb-4'>stone</h2>
                            <hr className='border-color custom-margin-border-two' />
                            <p className='text-capitalize custom-margin-border custom-width-sm'>Experience the warmth of riverstones, gently heated to provide a soothing and comforting experience. Ideal for open-air reflexology and relaxing lounge areas</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='min-bg-color py-4'>
                <div className="row m-0">
                    <div className="col-lg-5 col-md-5 col-sm-5 col-12 mt-4 ps-lg-5 ps-5">
                        <h2 className='text-capitalize'>the <br /> review</h2>
                        <hr className='custom-margin-border-two ' />
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-7 col-12">
                        <CradSlider />
                    </div>
                </div>
            </div>
            <div className='position-relative'>
                <div className='viedo-main-conatiner '>
                    <video muted ref={viedoRef} className='w-100 viedo-warpper-color-noChange' src={ViedoEight}></video>
                </div>
                <div className=' viedo-menu-center '>
                    <Link onClick={viedoPlay} className='text-decoration-none '>
                        <h2 className='infoColro text-capitalize text-center custom-rouned-border '>book <br /> now</h2>
                    </Link>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Home;
