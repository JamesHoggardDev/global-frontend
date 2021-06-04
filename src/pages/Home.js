import React from 'react'
import LandList from '../components/LandList'
import SearchForm from '../components/SearchForm'
export default function Home() {
  return (
    <main>
      <SearchForm />
      <LandList />
    </main>
  )
}