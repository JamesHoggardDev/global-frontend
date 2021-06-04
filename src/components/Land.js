import React from 'react'
import { Link } from 'react-router-dom'

export default function Land({ id, name, image, capital, currency}) {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{currency}</h4>
        <p>{capital}</p>
        <Link to={`/land/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  )
}