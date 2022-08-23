import React from 'react'
import Urn from './component/Urn'


import rasm1 from '../MainComponents/img/rasm1.png'
import rasm2 from '../MainComponents/img/rasm2.png'
import rasm3 from '../MainComponents/img/rasm3.png'
import rasm4 from '../MainComponents/img/rasm4.png'
import rasm5 from '../MainComponents/img/rasm5.png'







const MainLeft = () => {
    return (
        <div className=' main_left'>
            <div className=" main-block">
                <h2 className='m-3'>Dashboard</h2>
                <span className='m-3'>Tuesday 2 Feb, 2021</span>

                <div className="main_urn d-flex flex-xl-row flex-column flex-wrap">

                    <Urn name="Total Revenue" price="$10,243.00">
                        <i style={{ color: "#9288E0" }} class="fas fa-dollar-sign">
                            <span className='text-success m-3'>+32.40%</span></i>
                    </Urn>

                    <Urn name="Total Dish Ordered" price="$23,456">
                        <i style={{ color: '#FFB572' }} class="fas fa-users">
                            <span className='text-danger m-3'>-12.40%</span></i>
                    </Urn>

                    <Urn name="Total Customer" price="$1,234">
                        <i style={{ color: '#65B0F6' }} class="fas fa-object-ungroup">
                            <span className='text-success m-3'>+2.40%</span></i>
                    </Urn>

                </div>
            </div>
            <div className="main_boxs">
                <ul className="d-flex justify-content-evenly list-unstyled">
                    <li>Order Report</li>
                    <li>Filter Order</li>
                </ul>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Customer</th>
                            <th scope="col">Menu</th>
                            <th scope="col">Total Payment</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><img className='bg-warning rounded-circle ' src={rasm1} /> Erenan Jaegar</th>
                            <td>Spicy seasoned <br /> seafood noodles </td>
                            <td>$125</td>
                            <button className='rounded-pill m-3'>Preparing</button>


                        </tr>
                        <tr>
                            <th><img className='bg-primary rounded-circle ' src={rasm3} />   Erenan Jaegar</th>
                            <td>Salted Pasta with <br /> mushroom sauce</td>
                            <td>$145</td>
                            <button className='rounded-pill m-3 '>Preparing</button>
                        </tr>
                        <tr>
                            <th><img className='bg-danger rounded-circle' src={rasm4} /> Erenan Jaegar</th>
                            <td>Spicy seasoned <br /> seafood noodles </td>
                            <td>$105</td>
                            <button className='rounded-pill m-3'>Preparing</button>

                        </tr>

                        <tr>
                            <th><img className='bg-success rounded-circle' src={rasm2} /> Historia Reises</th>
                            <td>Salted Pasta with <br /> mushroom sauce</td>
                            <td>$45</td>
                            <button className='rounded-pill m-3'>Preparing</button>

                        </tr>
                        <tr>
                            <th><img className='bg-primary rounded-circle' src={rasm5} /> Erenan Jaegar</th>
                            <td>Spicy seasoned <br /> seafood noodles </td>
                            <td>$245</td>
                            <button className='rounded-pill m-3'>Preparing</button>

                        </tr>
                        <tr>
                            <th><img className='bg-info rounded-circle' src={rasm2} /> Armina Arlert</th>
                            <td>Salted Pasta with <br /> mushroom sauce</td>
                            <td>$435</td>
                            <button className='rounded-pill m-3'>Preparing</button>


                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MainLeft;