import React from 'react'
import './Main2.css'
import Cp from '../image/CP_img.png'
function Main2() {

    const style = {
        Main2: 'w-full h-[370px] flex justify-center bg-black',
        M_box: 'w-[80%] h-[80%] flex items-center'
    }

    return (
        <div className={style.Main2}>
            <div className={style.M_box}>
                <div className='w-2/1'>
                    <h1 className='w-[96%] text-[55px] font-bold text-[#FFF] leading-none'>GET THE BATTLE PASS</h1>
                    <p className='text-[#fff] text-[20px] w-[95%] leading-tight'>Buy the all-new Season 01 Battle Pass and get back up to 1400 CP as you level up. Use them to buy next season’s Battle Pass so the action never stops.</p>
                    <button className='w-[250px] h-[40px] mt-[20px] text-[20px] font-bold bg-[#C2C5BB]'>LEARN MORE</button>
                </div>
                <div className='w-[2000px] h-[100%]'>
                    <img src={Cp} alt="" className='w-[2000px] object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Main2