import React from 'react'
import Land from './Land'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function LandList() {
  const { lands, loading } = useGlobalContext()

  if (loading) {
    return <Loading/>
  }
  if (lands.length < 1) {
    return (
      <h2 className='section-title'>
        no countries matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Countries</h2>
      <div className='cocktails-center'>
        {lands.map((land) => {
          return <Land key={land.id} {...land} />
        })}
      </div>
    </section>
  )
}

