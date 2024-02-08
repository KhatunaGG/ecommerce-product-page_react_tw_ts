import { useContext } from 'react'
import { GlobalState } from '../store'


const Mainform = () => {

  const context = useContext(GlobalState)
  if (!context) return
  const { count, setCount, handleSubmit, currenPrice, discount } = context



  return (
    <main className='main flex flex-col gap-6 pl-[6.4%] pr-[6.4%] mt-4  pb-[88px] md:max-w-[41.97%] md:pr-0 md:mt-14 md:mb-[27px]'>
      <div className="text-block flex flex-col items-start gap-4 md:mb-6">
        <h2 className="main-h2 text-xs font-bold tracking-[1.85] uppercase text-[#FF7E1B]">Sneaker Company</h2>
        <h1 className="main-h1 text-[#1D2026] font-bold text-[28px] leading-[1.14] md:text-[44px]">Fall Limited Edition Sneakers</h1>
        <p className="main-p text-[15px] font-normal leading-relaxed ">These low-profile sneakers are your perfect casual wear companion. Featuring a durable
          rubber outer sole, they’ll withstand everything the weather can offer.</p>
      </div>
      <section className='discount flex flex-col items-center gap-6 '>
        <div className="price-wrapper w-full flex  justify-between items-center md:flex md:flex-col md:items-start md:mb-8">
          <div className="discount-wrapper flex items-center gap-[23px]">
            <div className="discount-price text-[28px] font-bold text-[#1D2026] ">${(currenPrice / 100) * discount}</div>
            <div className="discount-percent flex items-center justify-center text-base font-bold text-[#FF7E1B] w-[51px] h-[27px] bg-[#FFEEE2] rounded-md ">50%</div>
          </div>
          <div className="full-price text-[#B6BCC8] text-base line-through leading-relaxed font-bold">${currenPrice}</div>
        </div>
        <div
          className='form w-full flex flex-col items-center gap-4 mb:flex md:flex-row' >
          <div className="counter w-full flex flex-row items-center bg-[#F6F8FD] pt-[16px] pb-[16.67px] rounded-[10px] ">
            <div
              onClick={() => {
                if (count > 0) {
                  setCount(count - 1)
                } else {
                  setCount(0)
                }
              }}
              className='minus w-[40%] font-bold text-[#FF7E1B] text-2xl text-left pl-6 cursor-pointer'>-</div>
            <div className='w-[20%] text-base font-bold input border-none bg-transparent text-center'>{count}</div>
            <div
              onClick={() => setCount(count + 1)}
              className='plus  w-[40%] font-bold text-[#FF7E1B] text-2xl pr-6 text-right cursor-pointer'>+</div>
          </div>
          <button
            onClick={handleSubmit}
            className='submit flex items-center justify-center gap-[15.54px] active:scale-95
                  shadow-2xl rgb(255, 126, 27 0.25) 
                  w-full bg-[#FF7E1B] rounded-[10px] text-white border-none outline-none text-base font-bold pt-[22px] pb-[18px]
                  hover:bg-[#FFAB6A] transition-all duration-75'>
            <img src="/assets/Shape.svg" alt="" />
            <span>Add to cart</span>
          </button>
        </div>
      </section>
    </main>
  )
}

export default Mainform
