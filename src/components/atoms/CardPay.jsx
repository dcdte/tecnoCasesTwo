import React from 'react'
import "../../styles/css/CardPay.css";

function CardPay({title, value}) {
  return (
    <div className='pay'>
        <span className="pay__title">{title}</span>
        <div className="pay__value">{value}</div>
    </div>
  )
}

export default CardPay
