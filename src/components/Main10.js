import React from 'react'
import Farah from '../image/farah.jpg'
import Simon from '../image/simon.jpg'
import John from '../image/john-price.jpg'
import Johnny from '../image/johnny.jpg'
function Main10() {
    return (
        <div className='w-full h-[600px]  bg-black flex flex-col items-center justify-center'>
            <div className='w-[600px] flex items-center justify-between'>
                <div className='w-[100px] h-[2px] bg-[#69A235]'></div>
                <h1 className='text-[#fff] text-[25px]'>INCLUDED IN THE VAULT EDITION</h1>
                <div className='w-[100px] h-[2px] bg-[#69A235]'></div>
            </div>
            <h1 className='text-[#fff] text-[50px] font-medium'>RED TEAM 141 OPERATOR PACK</h1>

            <div className='w-[90%] flex justify-between'>
                <div className='w-[24%] h-[100%]'>
                    <img src={Farah} alt="" />
                    <h1 className='w-[200px] text-[#fff] text-[30px] font-medium leading-8 mt-[-50px]'>"FARAH RARIM"</h1>
                </div>
                <div className='w-[24%] h-[100%]'>
                    <img src={Simon} alt="" />
                    <h1 className='text-[#fff] text-[30px] mt-[-50px] leading-8 font-medium'>SIMON "GHOST" RILEY</h1>
                </div>
                <div className='w-[24%] h-[100%]'>
                    <img src={John} alt="" />
                    <h1 className='w-[180px] leading-8 text-[#fff] text-[30px] font-medium mt-[-50px]'>JOHN "PRICE"</h1>
                </div>
                <div className='w-[24%] h-[100%]'>
                    <img src={Johnny} alt="" />
                    <h1 className='text-[#fff] text-[30px] font-medium mt-[-50px] leading-8'>JOHNNY "SOAP" MACTAVISH</h1>
                </div>
            </div>
        </div>
    )
}

export default Main10