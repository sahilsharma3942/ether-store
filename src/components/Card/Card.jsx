import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.scss"

const Card = ({item}) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
        <div className='card'>
            <div className="image">
                {item.isNew && <span>New Season</span>}
                <img src={item.image} alt='' className='mainImg'></img>
                {/* <img src={item.image2} alt='' className='secondImg'/> */}
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>{item.oldPrice || (item.price+20).toFixed(2)}$</h3>
                <h3>{item.price}$</h3>
            </div>
        </div>
    </Link>
  )
}

export default Card;