import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { name, img, price, point1, point2, point3, point4, point5 } = props.service;
    return (

        <div className="service" >

            <div className='description'>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <h4>{price}$</h4>
                <p>{point1}</p>
                <p>{point2}</p>
                <p>{point3}</p>
                <p>{point4}</p>
                <p>{point5}</p>
                <Link to='/checkout' className='join-btn' >Join</Link>
            </div>

        </div>

    );
};

export default Service;