import React from 'react';

import '../MainComponents/style/Main.css'
import Case from './component/Case'

import salat1 from '../MainComponents/img/salat1.png'
import salat2 from '../MainComponents/img/salat2.png'


import circle from '../MainComponents/img/Circle.png'

import aylana1 from '../MainComponents/img/aylana1.png'
import aylana2 from '../MainComponents/img/aylana2.png'
import aylana3 from '../MainComponents/img/aylana3.png'

const MainRight = () => {
    return (
        <div className='main_right  text-white'>
            <div className="mainFluid">
                <div className='d-flex justify-content-around m-4'>
                    <h1>Most Ordered</h1>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Today</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                </div>

                <Case img={salat2}>Spicy seasoned seafood noodles soup <span style={{ fontWeight: "100", color: "#ABBBC2", margin: "2rem" }}>200 dishes ordered</span></Case>
                <Case img={salat1}>Spicy seasoned seafood noodles soup <span style={{ fontWeight: "100", color: "#ABBBC2", margin: "2rem" }}>200 dishes ordered</span></Case>
                <Case img={salat2}>Spicy seasoned seafood noodles soup <span style={{ fontWeight: "100", color: "#ABBBC2", margin: "2rem" }}>200 dishes ordered</span></Case>

                <button style={{ width: "90%", padding: '10px', color: " #EA7C69" }} className='m-4 border border-warning'>View All</button>
            </div>

            <div className=" text-white">
                <div className='d-flex justify-content-around'>
                    <h2>Most Type of Order</h2>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Today</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                </div>
                <div className=' d-flex'>
                    <img style={{ marginLeft: '3rem', width: '25%' }} src={circle} />

                    <ul className='m-auto'>
                        <li><img src={aylana1} />  Dine In <br /><span>200 customers</span></li>
                        <li><img src={aylana2} /> To Go <br /><span>122 customers</span></li>
                        <li><img src={aylana3} /> Delivery <br /><span>264 customers</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MainRight;