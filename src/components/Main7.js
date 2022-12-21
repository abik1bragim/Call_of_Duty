import React from 'react'
import CODWZ from '../image/COD_WZ.png'
function Main7() {

    const style = {
        Main7: 'w-full h-[330px] bg-black flex items-center justify-center'

    }

    return (
        <div className={style.Main7}>
            <div className='w-[100%] h-[90%] flex'>
                <div className='2/1'>
                    <img src={CODWZ} alt="" className='w-[900px] object-cover' />
                </div>
                <div className='w-[45%] ml-[20px]'>
                    <h1 className='text-[#fff] text-[50px] flex flex-col justify-center mt-[30px] font-bold leading-tight'>
                        CALL OF DUTY®: WARZONE™ 2.0</h1>
                    <p className='text-[#fff] w-[470px] text-[18px]'>Call of Duty®: Modern Warfare® II will usher in a new and unparalleled Call of Duty®: Warzone™ 2.0 integration.</p>
                    <button className='w-[250px] h-[40px] mt-[20px] text-[20px] font-bold bg-[#C2C5BB]'>LEARN MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Main7