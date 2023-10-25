import React from 'react'
import '../Cards/Card.css'
function Card(props) {
    return (
        <div className='card'>
            <div className='card_body'>
                <img className='card_image' src={props.img}/> 
                <h2 className='card_title'> {props.title} </h2>
                <p className='card_date'> {props.date} </p>
                <p className='card_max'> {props.max} </p>
                <p className='card_min'> {props.min} </p>
            </div>

        </div>
    )
}

export default Card