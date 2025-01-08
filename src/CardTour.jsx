import React, { useState } from 'react'
import { ExpText } from './ExpText';

const CardTour = ({ images, name, info, price, id, onDelete }) => {



    return (
        <div className=' flex flex-col items-center  '>

            <div className=' flesx flex-row items-center m-4 p-2 relative  border-gray-200  border-[2px] rounded-lg shadow-lg hover:shadow-xl  h-[600px] overflow-auto'>
                <p className='font-bold text-[23px]  absolute top-2 right-2 text-sm  px-2 py-1  text-center text-white bg-green-400  w-[200px]'> {price} $ </p>
                <img src={images} alt={name} className=' self-center w-full '
                />
                <h1 className=' text-[30px] text-blue-700 font-bold m-3 text-center'>  {name} </h1>
                {
                    <ExpText info={info} max={200}></ExpText>
                }
                <button
                    onClick={() => onDelete(id)}
                    className="mt-4 bg-red-600 text-white p-2 w-full rounded-md hover:bg-red-700"
                >
                    delete
                </button>
              

            </div>
        </div>
    )
}
export default CardTour;
