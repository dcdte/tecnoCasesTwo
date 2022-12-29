import React from 'react';
import "../styles/css/Card.css";
import Tag from './atoms/Tag';


function Card({data}) {
    console.log(data);
  return (
    <article className='card'>
      <div className="card__visual">
        <div className="card__img"></div>
        <div className="card__pays"></div>
      </div>
      <div className="card__info">
        <h4 className="card__brand">{data.brand.brand}</h4>
        <h3 className="card__title">{data.reference}</h3>
        <div className="card__details">
            <div className="card__label"></div>
        </div>
        <div className="card__finances">
            <span className="card__finance">Financiera:</span>
            <div className="card__tags">
                {data.credits && data.credits.map(item => <Tag id={item.financeId} hover={false}>{item.finance.name}</Tag>)}
            </div>
        </div>
      </div>
    </article>
  )
}

export default Card
