import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-16 flex flex-col lg:flex-row gap-4 max-lg:px-5">
        {/* Card 1 */}
        <Card 
          width="w-full lg:basis-1/3" 
          start={false} 
          para={true} 
          height="max-lg:min-h-[12rem]"
        />

        {/* Card 2 */}
        <Card 
          width="w-full lg:basis-2/3" 
          start={true} 
          para={false} 
          hover="true" 
        />
      </div>
    </div>
  )
}

export default Cards
