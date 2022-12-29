import React from 'react';
import "../styles/css/Card.css";


function Card() {
  return (
    <article className='card'>
      <div className="card__visual">
        <div className="card__img"></div>
        <div className="card__pays"></div>
      </div>
      <div className="card__info">
        <h4 className="card__brand">XIOMI</h4>
        <h3 className="card__title">Realme C11</h3>
        <div className="card__details">
            <div className="card__label"></div>
        </div>
        <div className="card__finances">
            <span className="card__finance">Financiera:</span>
            <div className="card__tags">
                
            </div>
        </div>
      </div>
    </article>
  )
}

export default Card
