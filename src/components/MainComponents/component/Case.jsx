import React from 'react';


const Case = (props) => {
    return (
        <div className='case'>
            <img className='salat'src={props.img} />
            <h5 style={{ padding:'5px'}}>{props.children}</h5>
        </div>
    );
};

export default Case;