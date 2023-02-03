import React, {useContext} from 'react';
//import link
import {Link} from 'react-router-dom';
//import motion
import {motion} from 'framer-motion';
//import transition
import {transition1} from '../transitions';
//import cursor context
import {CursorContext} from "../context/CursorContext";


const Blog = () => {
    const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
    return (

        <motion.div className="flex flex-col lg:items-start"
                    initial={{opacity: 0, y: '-80%'}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: '-80%'}}
                    transition={transition1}
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
        >

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
        </motion.div>

    );
};

export default Blog;