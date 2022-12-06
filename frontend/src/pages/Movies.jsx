import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Movies = props => {

    const { animeTitle } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://gogoanime.consumet.org/anime-details/${animeTitle}`)
            .then(res => {
                console.log(res.data)
                res.data.error ===undefined ? navigate('full') : navigate('/error-page')
            })
            .catch(error => {
                console.log('err' + error)
            })
    })

    return (
        <div className='h-screen text-white mt-8'>
            Is loading.....
        </div>
    )
}

Movies.propTypes = {}

export default Movies