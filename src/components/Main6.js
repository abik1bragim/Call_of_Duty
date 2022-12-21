import React from 'react'
import SO from '../image/SO.png'
function Main6() {

    const style = {
        Main6: 'w-full h-[330px] bg-black flex items-center justify-center'
    }

    return (
        <div className={style.Main6}>
            <div className='w-[100%] h-[90%] flex'>
                <div className='w-[45%] ml-[20px]'>
                    <h1 className='text-[#fff] text-[50px] flex flex-col justify-center mt-[50px] font-bold'>SPECIAL OPS</h1>
                    <p className='text-[#fff] w-[470px] text-[18px]'>Experience an evolved, special ops game mode featuring tactical co-op gameplay.</p>
                </div>
                <div className='2/1'>
                    <img src={SO} alt="" className='w-[900px] object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Main6