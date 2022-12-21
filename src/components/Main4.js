import React from 'react'
import Campaign from '../image/Campaign.png'
function Main4() {

    const style = {
        Main4: 'w-full h-[330px] bg-black flex items-center justify-center'
    }

    return (
        <div className={style.Main4}>
            <div className='w-[100%] h-[90%] flex'>
                <div className='w-[45%] ml-[20px]'>
                    <h1 className='text-[#fff] text-[50px] flex flex-col
                    justify-center mt-[30px] font-bold'>CAMPAIGN</h1>
                    <p className='text-[#fff] w-[470px] text-[18px]'>From small-scale, high-stakes infiltration tactical ops to highly classified missions, players will deploy alongside Task Force 141 in a globe-trotting single-player campaign.</p>
                    <button className='w-[250px] h-[40px] mt-[20px] text-[20px] font-bold bg-[#C2C5BB]'>LEARN MORE</button>

                </div>
                <div className='2/1'>
                    <img src={Campaign} alt="" className='w-[900px] object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Main4