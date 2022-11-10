import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-full flex flex-col'>

        <div className='flex p-6 ml-auto justify-between w-8/12'>
            <div className='text-gray-600 flex items-center'>
                <span className='bg-zinc-900 h-7 rounded-l-full w-12 flex items-center justify-center py-4'><i className='bi bi-search'></i></span>
                <input className='bg-zinc-900 h-7 rounded-r-full py-4 w-96' type="text" placeholder='Buscar'/>
            </div>
            <div className='flex gap-8'>
                <button><i className='bi bi-bell-fill text-2xl text-yellow-300'></i></button>
                <button><i className='bi bi-p-circle-fill text-2xl text-pink-600'></i></button>
                <button><i className='bi bi-three-dots-vertical text-2xl text-white'></i></button>
            </div>
        </div>

        <div className='flex text-white px-6'>
            <p className='text-gray-400 ml-2'>Nube</p>
            <div className='flex gap-8 ml-auto'>
                <button className='flex items-center justify-center gap-2'><i className='bi bi-plus-circle text-xl text-cyan-300'></i> Crear carpeta</button>
                <button className='flex items-center justify-center gap-2'><i className='bi bi-cloud-arrow-up-fill text-xl text-cyan-300'></i> Subir...</button>
                <div className='flex gap-4 items-center justify-center'>
                    <button className='flex items-center justify-center gap-2'><i className='bi bi-list-task text-xl text-white'></i></button>
                    <button className='flex items-center justify-center gap-2'><i className='bi bi-grid-3x3-gap-fill text-xl text-white'></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}
