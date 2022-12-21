import React from 'react'
import MW2 from '../image/MW2-WZ2.jpg'
import RT141 from '../image/RT-141.jpg'
import FJX from '../image/FJX.jpg'
import SB50 from '../image/SB-50.jpg'
function Main9() {
    return (
        <div className='w-full h-[600px] bg-black flex flex-col items-center justify-center'>
            <h1 className='text-[#fff] w-[85%] text-[48px] font-medium text-center' >MODERN WARFARE® II VAULT EDITION CONTENT</h1>
            <div className='w-[85%] h-[80%] flex mt-[15px]'>
                <div className='w-[40%] h-[102%] border-[1px] border-yellow'>
                    <img src={MW2} alt="" className='h-[100%]' />
                </div>
                <div className='flex flex-col w-[80%] h-[100%] justify-between ml-[10px]'>
                    <div className='w-[100%] h-[60%] border-[1px] border-blue'>
                        <img src={RT141} alt="" className='w-[100%] h-[100%]' />
                    </div>
                    <div className='flex w-[780px] h-[40%] justify-between mt-[10px]'>
                        <div className='w-[380px] border-[1px] border-red'>
                            <img src={FJX} alt="" className='w-[100%] h-[100%]' />
                        </div>
                        <div className='w-[380px] border-[1px] border-red'>
                            <img src={SB50} alt="" className='w-[100%] h-[100%]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main9