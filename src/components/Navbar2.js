import React from 'react'
import MW_logo from '../image/mw_logo.png'
import N2_logo from '../image/arrow.svg'
function Navbar2() {

    const style = {
        Nav2: 'w-full h-[53px] bg-[#000000] flex items-center sticky inset-0',
        N2_ul: 'w-[480px] h-[100%] border-1 border-red-600 flex items-center justify-between ml-[55px]',
        N2_li: 'w-[90px] h-[100%] flex items-center justify-around text-[#969696] font-bold text-[12px] font-sans tracking-wider hover:text-[#fff]'
    }

    return (
        <div className={style.Nav2}>
            <a href="/modernwarfare2">
                <img src={MW_logo} alt="" className='w-[65px] ml-[10px]' />
            </a>

            <ul className={style.N2_ul}>
                <li className='w-[85px] h-[100%] flex items-center justify-around text-[#969696] font-bold text-[12px] font-sans tracking-wider hover:text-[#fff] hover:bg-slate-800'>
                    <a href="">FEATURES</a>
                    <img src={N2_logo} alt="" className='w-[10px]' />
                </li>
                <li className={style.N2_li}>
                    <a href="">SEASON 1</a>
                </li>
                <li className={style.N2_li}>
                    <a href="">BATTLE PASS</a>
                </li>
                <li className={style.N2_li}>
                    <a href="">RECOCHET</a>
                </li>
                <li className={style.N2_li}>
                    <a href="">BLOGS</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar2