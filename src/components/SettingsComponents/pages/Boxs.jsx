import React from 'react';

const Boxs = (props) => {
    return (
        <div className='boxs'>
            <h5>{props.children} {props.name} </h5>
            <span>{props.about}</span>

        </div>
    );
};

export default Boxs;