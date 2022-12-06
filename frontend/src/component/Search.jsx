import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const navigate = useNavigate()

    const [openX, setopenX] = useState(false)

    const searchRef = useRef(null)

    const inputRef = useRef(null)

    const [value, setValue] = useState('')

    const [dataSearch, setDataSearch] = useState(null)

    useEffect(() => {
        if (value !== '') {
            setopenX(true)
            axios.get(`https://gogoanime.consumet.org/search?keyw=${value}`)
                .then(res => {
                    if (res.data.length !== 0)
                        setDataSearch(res.data)
                    else
                        setDataSearch(null)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else {
            setopenX(false)
            setDataSearch(null)
        }
    }, [value])

    const changeValue = (value) => {
        setValue(value)

    }

    const cleanInput = () => {
        setValue('')
    }

    return (
        <div ref={searchRef}
            className='relative hidden mobile:w-full desktop:w-[20rem] tablet:w-[15rem] mx-8 tablet:mx-0 px-4 py-2 border border-gray-600 mobile:flex justify-between rounded-full'>

            <svg className='w-7 h-7 cursor-pointer hover:scale-110 hover:text-lg hover:shadow-2xl hover:text-red-500 mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

            <input ref={inputRef}
                value={value}
                className='w-full outline-none' type='text'
                onChange={(e) => changeValue(e.target.value)}
            />
            {
                openX ? <svg
                    onClick={() => cleanInput()}
                    className='w-7 h-7 cursor-pointer hover:scale-110 hover:text-lg hover:shadow-2xl ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> : ''

            }

            {
                value !== '' ?
                    <div className='w-full absolute top-12 left-0 z-50  bg-gray-300 rounded'>
                        {
                            dataSearch !== null ?
                                <div className=' max-h-96 overflow-auto'>
                                    {
                                        dataSearch.map((item, index) => {
                                            return (
                                                <div
                                                    onClick={() => {
                                                        navigate(`/${item.animeId}`)
                                                        setValue('')
                                                    }}
                                                    className='flex items-center justify-between p-2 pb-4 border-b border-black max-h-[6rem] cursor-pointer' key={index}>
                                                    <img className='max-h-20' src={item.animeImg} alt="" />
                                                    <div className='flex flex-col w-full p-2 justify-between'>
                                                        <p className='capitalize text-lg font-semibold h-[2rem] overflow-hidden'>{item.animeId}</p>
                                                        <p>{item.status}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className='w-full flex items-center justify-center py-2 bg-red-600 text-white font-semibold text-xl hover:bg-red-800 cursor-pointer'>
                                        Enter to Search ...
                                    </div>
                                </div> : ''
                        }
                    </div> : ''
            }

        </div>
    )
}

export default Search