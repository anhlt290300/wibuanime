import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NoneEpisode from './NoneEpisode'
const Movie = () => {

    const navigate = useNavigate()

    const { animeTitle } = useParams()

    const [data, setData] = useState([])

    const [episodesList, setEpisodesist] = useState(null)

    const [genres, setGenres] = useState(null)

    const [isNull, setIsNull] = useState(true)

    const [open, setOpen] = useState(false)

    const ClickWatchAnime = () => {
        if (isNull) {
            setOpen(true)
        } else {
            navigate(`/${animeTitle}/${episodesList[0].episodeId}`)
        }
    }

    useEffect(() => {
        axios.get(`https://gogoanime.consumet.org/anime-details/${animeTitle}`)
            .then(res => {

                console.log(res.data)
                setData(res.data)
                setEpisodesist(res.data.episodesList.reverse())
                setGenres(res.data.genres)
                if (res.data.episodesList.length !== 0)
                    setIsNull(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    if (data.length === 0) {
        return (
            <div className='h-screen text-white mt-8'>
                Is loading...
            </div>
        )
    } else
        return (
            <div className='w-full flex items-center justify-center mt-8'>
                <NoneEpisode show={open} setShow={setOpen} />
                <div className='desktop:w-1/2 tablet:w-4/5 mobiel:w-4/5 w-full mobile:p-8 px-12 py-8 bg-gray-500'>
                    <div className='flex flex-col items-center w-full'>
                        <div className='mobile:flex w-full mobile:h-[30rem] justify-center overflow-y-hidden grid grid-cols-1 items-center'>

                            <div className='relative w-full h-full mobiel:pr-4 flex items-center justify-end'>
                                <div className='relative w-full h-full overflow-hidden mobile:rounded-none rounded-md'>
                                    <img className='h-full w-full transition-all duration-200 ease-in hover:scale-110' src={data.animeImg} alt="" />
                                    <div className='absolute bottom-0 left-0 w-full mobile:h-16 h-20 bg-[rgba(0,0,0,0.7)] flex items-center justify-center tablet:text-base mobile:text-sm text-base'>
                                        <div className='py-2 px-4 bg-sky-500 text-white inline-block rounded-md mx-2 hover:bg-sky-700 cursor-pointer'>
                                            Trailer
                                        </div>
                                        <div className='py-2 px-4 bg-red-500 text-white inline-block rounded-md mx-2  hover:bg-red-700 cursor-pointer'
                                            onClick={() => ClickWatchAnime()}

                                        >
                                            Watch Anime
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='relative w-full h-full mobile:pl-4 flex items-center justify-start mobile:mt-0 mt-4'>
                                <div className='relative w-full mobile:h-full flex flex-col items-start justify-between '>
                                    <div className='w-full mb-2 -mt-2 mobile:h-[30rem] h-[8rem] overflow-y-auto mobile:block flex flex-col justify-between'>
                                        <p className='uppercase text-3xl font-semibold text-yellow-500 '>{data.animeTitle}</p>
                                        <p className='text-sm'>{data.otherNames}</p>
                                    </div>

                                    <div className='w-full bg-[rgba(0,0,0,0.9)] p-4 text-white my-2'>
                                        <p>Genres:<span> </span>
                                            {genres !== null ?
                                                genres.map((item, index) => {
                                                    return (
                                                        <span className='text-cyan-400' key={index}>{item},<span> </span></span>
                                                    )
                                                }) : ''
                                            }
                                        </p>
                                        <p>Anime Type:<span className='text-cyan-400'> {data.type}</span></p>
                                        <p>Status:<span className='text-cyan-400'> {data.status}</span></p>
                                        <p>Total Episodes:<span className='text-cyan-400'> {data.totalEpisodes}</span></p>
                                        <p>Year:<span className='text-cyan-400'> {data.releasedDate}</span></p>
                                    </div>

                                    <div className='w-full mobile:h-full h-[10rem] bg-[rgba(0,0,0,0.9)] p-4 text-white mt-2 overflow-y-auto'>
                                        {
                                            episodesList !== null && episodesList.length !== 0 ?
                                                <div className='grid tablet:grid-cols-3 mobile:grid-cols-2 grid-cols-3 gap-4'>
                                                    {
                                                        episodesList.map((item, index) => {
                                                            return (
                                                                <div className='py-2 px-4 rounded-lg text-xs bg-gray-700 flex items-center justify-center cursor-pointer hover:text-cyan-400 hover:bg-gray-800'
                                                                    onClick={() => navigate(`/${animeTitle}/${item.episodeId}`)}
                                                                    key={index}>
                                                                    <span className='mr-2'>Episodes</span>{index + 1}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div> : <p className='text-cyan-400'>Coming Soon....</p>
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='w-full flex flex-col bg-[rgba(0,0,0,0.9)] mt-8 justify-center items-start p-4 text-white bg-'>
                            <p className='text-center font-semibold uppercase text-yellow-500 text-xl'>Synopsis</p>
                            <p className='my-4'>{data.synopsis.length !== 0 ? data.synopsis : 'Coming Soon....'}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Movie