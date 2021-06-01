import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Country(){
    const { id } = useParams()
    
    const url = `https://api.sampleapis.com/countries/countries/${id}`
    const [country, setCountry] = useState(null)
    // const [loading, setLoading] = useState(true);

    let content = null

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((countryObj) => {
                console.log(countryObj)
                setCountry(countryObj);
            })
      }, [url])

      if(country){
        content = 
        <div>
            <h1 className="">
                {country.name}
            </h1>
            <div>
                <img
                    src={country.media["flag"]}
                    alt={country.name}
                />
            </div>
            <div className="">
                $ {country.capital}
            </div>
            <div>
                {country.currency}
            </div>
        </div>
    }



    return(
        <div>
            <h1>{content}</h1>
        </div>
    )
}

export default Country;


// useEffect(() => {
//     const response = fetch("https://api.sampleapis.com/countries/countries");
//     const data = response.json();
//     const [item] = data.results;
//     setCountry(item);
//     setLoading(false);
//   }, [])