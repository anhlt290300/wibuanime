import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const ANIMATE_TIME = 300;

const BurgerMenu = () => {

    const [open, setOpen] = useState(false)

    const menuRef = useRef(null)
    const markRef = useRef(null)

    const toggle = () =>{
        //markRef.current.classList.remove('bg-[rgba(0,0,0,0.8)]')
        
        menuRef.current.classList.remove('animate-moveRight')
        //markRef.current.classList.add('animate-moveLeft')
        menuRef.current.classList.add('animate-moveLeft')
        setTimeout(() => {
            setOpen(!open)
        }, ANIMATE_TIME);
    }

    return (
        <div className='tablet:hidden block'>
            <svg className="w-8 h-8" onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            {
                open ?
                    <div ref={markRef} className='fixed z-10 left-0 top-0 w-screen h-screen bg-[rgba(0,0,0,0.1)] flex'                        
                    >
                        <div ref={menuRef} className='fixed top-0 z-20 h-screen w-[25rem] bg-white  text-base font-semibold animate-moveRight '>
                            <div className='flex flex-col items-center'>
                                <div className='m-4 py-1 relative after:absolute after:left-0 after:bottom-0
        after:bg-slate-900 after:h-1 after:w-0 hover:after:w-full after:transition-all after:ease-in after:duration-250 '
                                    onClick={() => setOpen(!open)}>
                                    Home
                                </div>
                                <div className='m-4 py-1 relative after:absolute after:left-0 after:bottom-0
        after:bg-slate-900 after:h-1 after:w-0 hover:after:w-full after:transition-all after:ease-in after:duration-250 '
                                    onClick={() => setOpen(!open)}>
                                    Popular Anime
                                </div>
                                <div className='m-4 py-1 relative after:absolute after:left-0 after:bottom-0
        after:bg-slate-900 after:h-1 after:w-0 hover:after:w-full after:transition-all after:ease-in after:duration-250 '
                                    onClick={() => setOpen(!open)}>
                                    Anime Movies
                                </div>
                                <div className='m-4 py-1 relative after:absolute after:left-0 after:bottom-0
        after:bg-slate-900 after:h-1 after:w-0 hover:after:w-full after:transition-all after:ease-in after:duration-250 '
                                    onClick={() => setOpen(!open)}>
                                    Anime
                                </div>
                            </div>

                            <div className='flex py-2 px-6 border border-black rounded-full mx-8 my-4 text-lg'>
                                <input className='w-full outline-none mr-4' type='text' />
                                <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>

                        </div>

                        <div className='fixed z-18 h-screen w-full' onClick={() => toggle()}/>
                    </div>
                    : ""
            }
        </div>
    )
}

export default BurgerMenu