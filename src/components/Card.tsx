import { useContext } from 'react'
import { GlobalState } from '../store'

const Card = () => {

    const context = useContext(GlobalState)
    if (!context) return
    const { count, title, currentImage, dataImgArr, actualDiscountedPrise, deleteCartItem } = context



    return (
        <div className="card flex flex-col absolute z-10 top-[13%] left-[2.13%] w-[96%] h-[85.33%]
        bg-white rounded-[10px] shadow-2xl  md:w-[360px] md:h-[256px] md:top-20 md:left-[720px]">
            <div className="div_bottom border-b border-[#E4E9F2] pl-6 py-6 ">
                <h1 className="cart-h1  h-[26.17%] text-[#1D2026] text-base font-bold">Cart</h1>
            </div>
            <div className="checkout py-4 px-4 flex items-center justify-center">
                {count === 0 ? (
                    <h4 className='text-base font-bold text-[#69707D] leading-relaxed pt-8'>Your cart is empty.</h4>
                ) : (
                    <div className='w-full flex flex-col gap-6 items-center justify-center '>
                        <div className='w-full flex flex-row items-center justify-between gap-4' >
                            <img className='w-[50px] h-[50px] rounded' src={dataImgArr[currentImage]} alt="" />
                            <div className="description flex flex-col items-start justify-between">
                                <div className='title text-[16px] text-left' >{title}</div>
                                <div className='text-base text-left'>${(actualDiscountedPrise).toFixed(2)} x {count} <span className='font-bold text-base text-[#1D2026]'>${(actualDiscountedPrise * count).toFixed(2)}</span></div>
                            </div>
                            <img
                                onClick={deleteCartItem}
                                className='w-3.5 h-4 ' src="assets/icon-delete.svg" alt="" />
                        </div>
                        <button className='flex items-center justify-center gap-[15.54px] active:scale-95
                  shadow-2xl rgb(255, 126, 27 0.25) 
                  w-full bg-[#FF7E1B] rounded-[10px] text-white border-none outline-none text-base font-bold pt-[18px] pb-[14px]
                  hover:bg-[#FFAB6A] transition-all duration-75'>Checkout</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card