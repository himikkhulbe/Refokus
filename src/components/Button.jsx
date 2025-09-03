import { IoIosReturnRight } from "react-icons/io";


const Button = ({title = "Get Started"}) => {
  return (
    <div className='w-36 py-2 bg-zinc-100 text-black rounded-full flex justify-around items-center'>
        <span className='text-sm'>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button