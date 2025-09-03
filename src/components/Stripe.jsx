import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className = "w-1/6 py-4 px-4 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-700 flex items-center justify-between">
      {/* <img className='w-20' src={val.url} alt="" /> */}
      <span className='font-semibold text-sm'>{val.url}</span>
      <span className='font-semibold text-sm'>{val.number}</span>
    </div>
  )
}

export default Stripe