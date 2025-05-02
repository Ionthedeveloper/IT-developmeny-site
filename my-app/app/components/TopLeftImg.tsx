import React from 'react'
import Image from 'next/image'

const TopLeftImg = () => {
  return (
	<div className='absolute top-0 left-0 z-10 w-[200px] xl:w-[300px] opacity-80'>
    <Image
      src="/TopLeftImg.svg"
      alt="img"
      width={400}
      height={400}
      className="drop-shadow-xl/50" />
  </div>
  )
}

export default TopLeftImg