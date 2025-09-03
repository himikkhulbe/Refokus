// import awwwards from "../assets/awwwards.png"
// import CSSdesign from "../assets/CSSdesign.png"
// import NoCodetech from "../assets/NoCodetech.png"
import Stripe from "./Stripe"

const Stripes = () => {

  let data = [
    {url: 'CSSdesign Awards', number: 48},
    {url: 'No-Code Conf. 2021', number: 2},
    {url: 'Awwwards.', number: 11},
    {url: 'CSSdesign Awards', number: 48},
    {url: 'No-Code Conf. 2021', number: 2},
    {url: 'Awwwards.', number: 11}
  ]

  return (
    <div className="flex items-center mt-16 ">
      {data.map((elem, index) => (
        <Stripe key={index} val={elem} />
      ))}
    </div>
  )
}

export default Stripes