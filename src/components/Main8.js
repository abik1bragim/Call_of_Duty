import React from 'react'
import VXS from '../image/VXS.png'
import BPSMG from '../image/BPSMG.png'
function Main8() {
    return (
        <div className='w-full h-[600px] bg-black flex items-center justify-center flex-col'>
            <h1 className='text-[50px] text-[#fff]'>NEW WEAPONS</h1>
            <div className='flex items-center w-[93%] mt-[15px]'>
                <div>
                    <img src={VXS} alt="" />
                    <h1 className='text-[#fff] text-[27px] font-medium ml-[70px]'>VICTUS XMR SNIPER</h1>
                </div>
                <div>
                    <img src={BPSMG} alt="" />
                    <h1 className='text-[#fff] text-[27px] font-medium ml-[70px]'>BAS-P SMG</h1>
                </div>
            </div>
        </div>
    )
}

export default Main8