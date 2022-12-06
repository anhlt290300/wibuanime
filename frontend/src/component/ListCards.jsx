import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Card from './Card'
const ListCards = ({ genre = 'all' }) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(`https://gogoanime.consumet.org/genre/${genre}`)
            .then(res => {
                //console.log(res.data)
                setData(res.data)
                //console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    if (data === null)
        return (
            <div className='h-screen text-white'>Is loading data....</div>
        )
    else
        return (
            <div className='grid grid-cols-2  mobile:grid-cols-4 gap-8 py-8'>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index}>
                                <Card animeId={item.animeId} animeTitle={item.animeTitle} animeImg={item.animeImg} />
                            </div>
                        )
                    })
                }
            </div>
        )
}

ListCards.propTypes = {
    genre: PropTypes.string
}

export default ListCards