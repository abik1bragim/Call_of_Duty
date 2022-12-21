import React from 'react'
import './Navbar.css'
import arrow from '../image/arrow.svg'
import Logo from '../image/codlogo.svg'
function Navbar() {

  const style = {
    Nav: 'w-full h-[53px] bg-[#424242] flex items-center',
    A_logo: 'w-[120px] h-[100%] hover:bg-black flex items-center',
    Logo: 'w-[100px]',
    Arrow: 'w-[10px]',
    Ul: 'w-[450px] h-[100%] flex items-center justify-between ml-[20px]',
    Li: 'w-[70px] h-[100%] flex items-center justify-around text-[#969696] font-bold text-[14px] font-sans tracking-wider hover:bg-black hover:text-[#69A235]',
    Li2: 'w-[70px] h-[100%] flex items-center justify-around text-[#969696] font-bold text-[14px] font-sans tracking-wider hover:text-[#69A235]',
    Register: ' w-[120px] flex items-center justify-between ml-[450px]',
    LS: 'text-[#969696] font-bold text-[12px] hover:text-[#fff]',
    Button: 'w-[180px] h-[53px] flex items-center justify-center bg-[#69A235] text-[#fff] font-semibold ml-[10px] fixed right-0 z-10',
  }

  return (
    <nav className={style.Nav}>
      <a href="/" className={style.A_logo}>
        <img src={Logo} alt="" className={style.Logo} />
      </a>

      <ul className={style.Ul}>
        <li className={style.Li}>
          <a href="/games">GAMES</a>
          <img src={arrow} alt="" className={style.Arrow} />
        </li>
        <li className={style.Li2}>
          <a href="/blog">NEWS</a>
        </li>
        <li className='w-[80px] h-[100%] flex items-center justify-around text-[#969696] font-bold text-[12px] ml-[-10px] font-sans tracking-wider hover:bg-black hover:text-[#69A235]'>
          <a href="/esports">ESPORTS</a>
          <img src={arrow} alt="" className='w-[10px] ml-[10px] hover:rotate-180 ease-out transition-[1s]' />
        </li>
        <li className={style.Li2}>
          <a href="/support.activiton.com">SUPPORT</a>
        </li>
        <li className={style.Li}>
          <a href="/shop">SHOP</a>
          <img src={arrow} alt="" className={style.Arrow} />
        </li>
      </ul>

      <div className={style.Register}>
        <a href="/login" className='flex items-center w-full'>
          <span className={style.LS}>LOGIN</span>
        </a>
        <span className='text-[#969696] text-[12px] mr-[8px]'>|</span>
        <a href="/sign_up" className='flex items-center w-full'>
          <span className={style.LS}>SIGN UP</span>
        </a>
      </div>
      <button className={style.Button}>PURCHASE MWII</button>
    </nav>
  )
}

export default Navbar