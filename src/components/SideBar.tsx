
import { useContext, useState } from 'react'
import Menu from './Menu'
import { data } from '../data'
import { GlobalState } from '../store'



export const SideBar = () => {

    const [closeSideBar, setCloseSidebar] = useState(false)
    const context = useContext(GlobalState)
    if (!context) return;
    const { openSidebar } = context


    return (
        <div
            className='w-full'>
            <div
                style={{
                    transition: '.4s', left: openSidebar && !closeSideBar ? 0 : '-67%'
                }}
                className="sidebar flex flex-col gap-[53.78px] sidebar absolute top-0 z-20 pt-[24.78px] pl-[25.45px]
                    h-full w-[67%] bg-white shadow-2xl p-4  md:hidden">
                <img
                    onClick={() => setCloseSidebar(!closeSideBar)}
                    className='sidebar-img w-[13.44px] h-[13.44px]' src="/assets/icon-close.svg" alt="" />
                <div className="nav flex flex-col gap-5">
                    {data.navigationLinks.map((menu, i) => (
                        <Menu key={i} menu={menu} />
                    ))}
                </div>
            </div>
        </div>
    )
}
