import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

export default function SingleLand() {
  const { id } = useParams()
  
  const [loading, setLoading] = React.useState(false)
  const [land, setLand] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getLand() {
      try {
        const response = await fetch(
          `http://127.0.0.1:6001/lands/${id}`
        )
        const data = await response.json()
        console.log(data)    //landObj w/ all keys, his data is the arrayOfOneOBJECT, he has to do data.drinks[0] to get there
        // debugger;
        if (data) {
          const {
            id: id,
            name: name,
            flag: image,
            capital: capital,
            currency: currency,
          } = data
          
          const newLand = {
            id,
            name,
            image,
            capital,
            currency,
          }
          setLand(newLand)
        } else {
          setLand(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getLand()
  }, [id])
  if (loading) {
    return <Loading/>
  }
  if (!land) {
    return <h2 className='section-title'>no land to display</h2>
  } else {
    const {
      // id,
      name,
      image,
      capital,
      currency,
    } = land
    return (
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            {/* <p>
              <span className='drink-data'>category :</span> {category}
            </p> */}
            <p>
              <span className='drink-data'>info :</span> {capital}
            </p>
            <p>
              <span className='drink-data'>currency :</span> {currency}
            </p>
            {/* <p>
              <span className='drink-data'>instructons :</span> {instructions}
            </p> */}
            {/* <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p> */}
          </div>
        </div>
      </section>
    )
  }
}