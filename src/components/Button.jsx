import { IoIosReturnRight } from "react-icons/io";


const Button = ({title = "Get Started"}) => {
  return (
    <div className='relative w-36 py-5 bg-zinc-100 text-black rounded-full flex justify-center items-center overflow-hidden group cursor-pointer'>
        <span className='absolute inset-0 text-sm flex items-center justify-center gap-4 transition-transform duration-300 group-hover:-translate-y-full '>{title} <IoIosReturnRight /></span>
        <span className='absolute inset-0 text-sm flex items-center justify-center gap-4 transition-transform duration-300 translate-y-full group-hover:translate-y-0 '>{title} <IoIosReturnRight /></span>
        
    </div>
  )
}

export default Button