import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactHlsPlayer from 'react-hls-player';

const MovieWatch = () => {

    var { animeTitle, episode } = useParams()

    const navigate = useNavigate()

    const [data, setData] = useState(null)

    const [source, setSource] = useState(null)

    const [sourceBK, setSourceBK] = useState(null)

    const [listEpisode, setlistEpisode] = useState(null)

    const [turnOff,setTurnOff] = useState(false)

    useEffect(() => {
        axios.get(`https://gogoanime.consumet.org/vidcdn/watch/${episode}`)
            .then(res => {
                //console.log(res.data.sources)
                setSource(res.data.sources)
                setSourceBK(res.data.sources_bk)
            })
            .catch(error => {
                console.log(error)
            })

        axios.get(`https://gogoanime.consumet.org/anime-details/${animeTitle}`)
            .then(res => {

                //console.log(res.data)
                const arr = res.data.episodesList

                setlistEpisode(arr.reverse())
            })
            .catch(error => {
                console.log(error)
            })
    }, [episode])

    if (source !== null)
        return (
            <div className='w-full  flex flex-col justify-center items-center'>
                <div className='w-3/5 '>
                    <ReactHlsPlayer
                        className='mt-12 h-[10rem] overflow-hidden'
                        src={source[0].file}
                        autoPlay={false}
                        controls={true}
                        width="100%"
                        height="auto"
                    />
                </div>

                <div className='w-3/5 text-xl text-white font-semibold my-4'>
                    <span className='capitalize text-red-500'>{animeTitle}</span> - <span className='capitalize'>{episode}</span>
                </div>

                <div className='flex items-center w-3/5 text-white my-8'>
                    <div className='px-4 py-2 bg-yellow-500 rounded-md hover:bg-yellow-700 cursor-pointer'>
                        main link
                    </div>
                    <div className='px-4 py-2 bg-yellow-500 rounded-md ml-4 hover:bg-yellow-700 cursor-pointer'>
                        backup link
                    </div>

                    <div className='w-10 h-10 rounded-full border-white border flex items-center justify-center mx-4 cursor-pointer transition-all duration-200 ease-in hover:shadow-lightRounder'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                    </div>
                </div>

                <div className='flex items-center justify-center text-3xl text-yellow-700 w-3/5 my-4 p-8 bg-[#282828] flex-col'>
                    <p>Nếu phim bị lỗi hãy bấm xem server khác ...</p>
                    <div className='w-full grid grid-cols-4 gap-8 text-base mt-8'>
                        {
                            listEpisode.map((item, index) => {
                                if (item.episodeId === episode)
                                    return (
                                        <div key={index} className='py-2 px-4 rounded-md text-white bg-gray-700 flex items-center justify-center cursor-pointer'

                                        >
                                            Episode {item.episodeNum}
                                        </div>
                                    )
                                else
                                    return (
                                        <div key={index} className='py-2 px-4 rounded-md text-white bg-gray-500 hover:bg-gray-700 flex items-center justify-center cursor-pointer'
                                            onClick={() => navigate(`/${animeTitle}/${item.episodeId}`)}
                                        >
                                            Episode {item.episodeNum}
                                        </div>
                                    )
                            })
                        }
                    </div>
                </div>


            </div>
        )
    else
        return (
            <div className='w-full h-screen text-white mt-8 '>
                Is loading data ....
            </div>
        )
}

export default MovieWatch