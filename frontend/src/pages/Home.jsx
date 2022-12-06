import React from 'react'
import GenreList from '../component/GenreList '
import ListCards from '../component/ListCards'
const Home = () => {

  return (
    <div className=''>
      <GenreList />
      
      <ListCards genre='action'/>

    </div>
  )
}

export default Home