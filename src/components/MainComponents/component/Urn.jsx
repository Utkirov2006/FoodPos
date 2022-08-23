import React from 'react';



const Urn = (props) => {
    return (
        <div className='urn m-3'>
            <ul className='m-3' style={{ fontSize: '20px' }} >{props.children}</ul>
            <ul className='m-3' style={{fontSize: '28px'}}>{props.price}</ul>
            <ul className='m-3'>{props.name}</ul>

        </div>
    );
};

export default Urn;