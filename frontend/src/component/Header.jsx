import React, { } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../asset/image/logo.png'
import BurgerMenu from './BurgerMenu'
import Search from './Search'
const Header = () => {

    const navigate = useNavigate()

    return (
        <div className='text-base fixed z-10 top-0 left-0 right-0 h-[5rem] w-full px-[3rem] bg-white border-b-[1px] border-borderbox flex items-center justify-between'>

            <div className='h-full flex items-center cursor-pointer'
                onClick={() => navigate('/')}
            >
                <img src={logo} alt="" className='h-[3.5rem] w-[12rem] desktop:h-[4rem]' />
            </div>

            <div className='hidden tablet:flex tablet:items-center tablet:justify-center font-semibold desktop:text-xl tablet:text-lg text-base '>
                <div className='mx-[1rem] cursor-pointer py-2 relative after:absolute after:left-0 after:bottom-0 
        after:bg-slate-900 after:h-1 after:w-0 hover:after:w-full after:transition-all after:ease-in after:duration-250'>
                    Home
                </div>
                <div className='mx-[1rem] cursor-pointer py-2 relative after:absolute after:left-0 after:bottom-0
        after:bg-slate-900 after:h-1 after:w-0 hover:after:w-full after:transition-all after:ease-in after:duration-250'>
                    Popular Anime
                </div>
                <div className='mx-[1rem] cursor-pointer py-2 relative after:absolute after:left-0 after:bottom-0
        after:bg-slate-900 after:h-1 after:w-0 hover:after:w-full after:transition-all after:ease-in after:duration-250'>
                    Anime Movies
                </div>
                <div className='mx-[1rem] cursor-pointer py-2 relative after:absolute after:left-0 after:bottom-0
        after:bg-slate-900 after:h-1 after:w-0 hover:after:w-full after:transition-all after:ease-in after:duration-250'>
                    Top Airing
                </div>
            </div>

            <Search />

            <BurgerMenu />

        </div>
    )
}

export default Header