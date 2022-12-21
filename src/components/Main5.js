import React from 'react'
import PL from '../image/multiplayer.png'
function Main5() {

    const style = {
        Main5: 'w-full h-[330px] bg-black flex items-center justify-center'

    }

    return (
        <div className={style.Main5}>
            <div className='w-[100%] h-[90%] flex'>
                <div className='2/1'>
                    <img src={PL} alt="" className='w-[900px] object-cover' />
                </div>
                <div className='w-[45%] ml-[20px]'>
                    <h1 className='text-[#fff] text-[50px] flex flex-col justify-center mt-[30px] font-bold'>MULTIPLAYER</h1>
                    <p className='text-[#fff] w-[470px] text-[18px]'>Infinity Ward brings fans state-of-the-art gameplay, with all-new gun handling, a new Gunsmith and a suite of other gameplay and graphical innovations that elevate the franchise to new heights.</p>
                    <button className='w-[250px] h-[40px] mt-[20px] text-[20px] font-bold bg-[#C2C5BB]'>LEARN MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Main5