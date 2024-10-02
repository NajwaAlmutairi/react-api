import React from 'react'

function Card({ele}) {
    return (
        <div className="card bg-white shadow-lg transition-transform duration-300 hover:scale-105 rounded-lg overflow-hidden h-[100vh] max-sm:h-auto">
            <figure className='w-full bg-slate-400'>
                <img
                    src={ele.image}
                    alt={ele.title}
                    className='w-full h-60'
                />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-xl font-semibold mb-2">{ele.title}</h2>
                <p className=" text-sm text-gray-600 mb-3">{ele.description}</p>
                <p className="text-lg font-bold text-green-300">{ele.price}$</p>
                <div className="card-actions justify-end mt-4">
                    <button className="btn bg-red-300 hover:bg-red-600 text-white rounded-md px-4 py-2 transition-colors duration-300">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card