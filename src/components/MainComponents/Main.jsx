import React from 'react';
import MainLeft from './MainLeft';
import MainRight from './MainRight';

import '../MainComponents/style/Main.css'



const Main = () => {
    return (
        <div className='main d-xl-flex '>
            <MainLeft/>
            <MainRight/>
        </div>
    );
};

export default Main;