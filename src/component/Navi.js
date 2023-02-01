import React, { useState } from 'react';
import navicss from '../css/navi.module.css';
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";
import naviDATA from '../json/naviDB.json';

function Navi(props) {
    const [ naivText, updateText ] = useState(true);
    // json -> map    
    const naviDBjson = naviDATA.naviDBfile

    return (
        <div className={`${navicss.hd}  border-bottom  py-2  fixed-top`}>
            <header id="hd" className='container-lg d-lg-flex flex-wrap justify-content-between align-items-center'>
                <h1>
                    <Link to="/">svg</Link>
                </h1>
                <Scrollspy id="gnb" className='d-flex'>                
                    {
                        naviDBjson.naviDATA.map( (item, index) => {
                            const clsArr = item.d1.cls.join(" ");
                            return (
                                item.d1.type===!"a"?
                                (<li key={'navi'+index}><Link to={item.d1.href} className={clsArr}>{item.d1.Text}</Link></li>) : 
                                (<li key={'navi'+index}><a href={item.d1.href} className={clsArr}>{item.d1.Text}</a></li>)
                            )
                        })
                    }
                </Scrollspy>
                <ul id="sns" className='d-flex'>
                    {
                        naviDBjson.snsDATA.map( (item, index) => {
                            return(
                                <li key={ 'sns'+index } className={item.sns.cl}><a href={item.sns.href} target={item.sns.tar}>{item.sns.icon}</a></li>
                            )
                        })
                    }
                </ul>
            </header>
        </div>
    );
}


export default Navi;