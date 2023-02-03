import React, {useContext} from 'react';
//import images
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
//import link
import {Link} from 'react-router-dom';
//import motion
import {motion} from 'framer-motion';
//import transition
import {transition1} from '../transitions';
//import cursor context
import {CursorContext} from "../context/CursorContext";

const Portfolio = () => {
    const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
    return (
        <motion.section className="section"
                        initial={{opacity: 0, y: '100%'}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: '100%'}}
                        transition={transition1}>
            <div className="container mx-auto h-full relative">
                <div
                    className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
                    {/* text */}
                    <motion.div className="flex flex-col lg:items-start"
                                initial={{opacity: 0, y: '-80%'}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: '-80%'}}
                                transition={transition1}
                                onMouseEnter={mouseEnterHandler}
                                onMouseLeave={mouseLeaveHandler}
                    >
                        <h1 className="h1">
                            Portfolio
                        </h1>
                        <p className="mb-12 max-w-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            <b> Ad architecto atque</b> consequuntur culpa et, fuga harum hic ipsa iure iusto laborum
                            laudantium nesciunt nihil nobis non possimus quaerat quam qui quos recusandae repudiandae.
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aperiam, asperiores atque autem
                        </p>
                        <Link to={'/contact'} className="btn mb-[30px] flex flex-col mx-auto lg:mx-0">
                            Hire me
                        </Link>
                        <Link to={'/portfolio'} className="btn mb-[30px] flex flex-col mx-auto lg:mx-0">
                            My portfolio
                        </Link>
                    </motion.div>
                    {/* image grid */}
                    <div className="grid grid-cols-2 lg:gap-2"
                         onMouseEnter={mouseEnterHandler}
                         onMouseLeave={mouseLeaveHandler}
                    >
                        {/* image */}
                        <div
                            className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                            <img
                                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                                src={Image1}
                                alt=""
                            />
                        </div>
                        <div
                            className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                            <img
                                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                                src={Image2}
                                alt=""
                            />
                        </div>
                        <div
                            className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                            <img
                                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                                src={Image3}
                                alt=""
                            />
                        </div>
                        <div
                            className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
                            <img
                                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                                src={Image4}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Portfolio;
