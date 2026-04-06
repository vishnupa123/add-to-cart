import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Hero = () => {

  const apiurl = "https://dummyjson.com/products"

  const gethero = async () => {
    const res = await axios.get(apiurl)
    return res.data.products
  }

  const { data = [] } = useQuery({
    queryKey: ['product'],
    queryFn: gethero
  })

  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (data.length === 0) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [data])

  const item = data[index]

  return (
    
    <div className="bg-white rounded-xl px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-rose-100 shadow-[0_4px_24px_rgba(241,84,107,0.12)]">

      {/* LEFT TEXT */}
      <div className="w-full sm:w-1/2 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-rose-400 font-bold mb-3 leading-tight">
          {item?.title}
        </h1>

        <p className="text-gray-400 mb-5 text-sm sm:text-base max-w-md mx-auto sm:mx-0 line-clamp-3">
          {item?.description}
        </p>

        <button className="bg-rose-400 text-white px-6 py-2.5 rounded-lg text-sm sm:text-base hover:bg-rose-500 transition-colors">
          SHOP NOW
        </button>
      </div>

      {/* IMAGE */}
      <div className="w-full sm:w-1/2 flex justify-center">
        <img
          src={item?.thumbnail}
          alt={item?.title}
          className="w-[180px] sm:w-[220px] lg:w-[260px] object-contain"
        />
      </div>

    </div>
  )
}

export default Hero