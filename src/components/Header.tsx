import { useContext} from 'react'
import { GlobalState } from '../store'


import { data } from "../data"
import Menu from "./Menu"


const Header = () => {

    const context = useContext(GlobalState)
    if (!context) return
    const { screenWidth, openSidebar, setOpenSidebar, count, modal, setModal, showCartUnits, actualDiscountedPrise } = context;
    return (
        <header className='header w-full flex  justify-between px-6 '>
            <nav className='menu flex items-center justify-between gap-4 md:gap-[56.5px]'>
                <img
                    onClick={() => setOpenSidebar(!openSidebar)}
                    className='hover:scale-95 md:hidden' src="/assets/icon-menu.svg" alt="" />
                <img className='logo ' src="/assets/logo.svg" alt="" />
                <div className="nav flex flex-row gap-8 text-[15px] text-[#69707D] leading-[1.79] font-normal ">
                    {screenWidth > 375 &&
                        data.navigationLinks.map((menu, i) => (
                            <Menu
                                menu={menu}
                                key={i}
                            />
                        ))
                    }
                </div>
            </nav>
            <div className="avatar flex items-center justify-between gap-[22px]">
                <div className='relative '>
                    <img
                        onClick={() => setModal(!modal)}
                        src="/assets/icon-cart.svg" alt="" className="logo-cart p-2" />
                    {(showCartUnits === true && actualDiscountedPrise > 0)  ? (
                        <span className='span-count flex items-center justify-center w-4 h-4 rounded-full bg-[#FF7E1B] 
                         absolute top-[-2px] left-[17px] -z-10 text-white text-[10px]'>{count}</span>
                    ) : ''}
                </div>
                <img src="/assets/image-avatar.png" alt="" className="avatar-img w-[50px] h-[50px] mt-5 mb-6" />
            </div>
        </header>
    )
}

export default Header