import React from 'react'
import './Main.css'
import S1_logo from '../image/S1_Logo.png'
function Main() {

    const style = {
        Main: 'w-full h-[750px] bg-black flex justify-center',
        WZona: 'w-[400px] m-auto mt-[380px]',
        M_text: 'flex items-center ml-[330px] mt-[17px]',
        Buttons: 'w-[750px] h-[45px] flex  justify-between ml-[200px] mt-[20px]',
        Btn: 'w-[32%] h-[100%] bg-[#C2C5BB] text-[#171A1A] font-bold',
    }

    return (
        <div className={style.Main}>
            <div className='M_img'>
                <img src={S1_logo} alt="" className={style.WZona} />
                <div className={style.M_text}>
                    <div className='w-[130px] h-[3px] bg-[#69A235] mt-[40px] mr-[-120px]'></div>
                    <h1 className='text-[#fff] text-[22px] w-[520px] text-center font-bold tracking-widest'>CALL OF DUTY®: MODERN WARFARE® II
                        A NEW ERA BEGINS</h1>
                    <div className='w-[130px] h-[2px] bg-[#69A235] mt-[40px] ml-[-130px]'></div>
                </div>

                <div className={style.Buttons}>
                    <button className={style.Btn}>LEARN MORE</button>
                    <button className='w-[30%] h-[100%] bg-[#69A235] text-[#171A1A] font-bold'>PURCHASE</button>
                    <button className={style.Btn}>WATCH TRAILER</button>
                </div>
            </div>
        </div>
    )
}

export default Main