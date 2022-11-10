import React from 'react'

export const SideBar = () => {
  return (
    <div className='flex h-full'>
        <div className='bg-zinc-800 p-4 text-white flex flex-col gap-4'>
            <i class="bi bi-p-circle-fill text-3xl text-red-500"></i>
            <i class="bi bi-folder2 text-3xl"></i>
            <i class="bi bi-images text-3xl self-end"></i>
        </div>
        <div className='bg-zinc-900/90 px-4 py-6 text-white w-72 relative flex flex-col'>
            <h1 className='text-xl'>Mis archivos</h1>
            <div className='mt-8 text-gray-300'>
                <h1 className='text-gray-400 text-sm'>GESTOR DE ARCHIVOS</h1>
                <div className='w-full mt-3 flex flex-col gap-1'>
                    <button className='bg-zinc-900 rounded-md w-full text-sm text-start py-1 px-3 flex items-center justify-start transition-all ease-in-out'>
                        <i class="bi bi-cloud-fill mr-3 text-base text-cyan-300"></i> Nube
                    </button>
                    <button className='hover:bg-zinc-900 rounded-md w-full text-sm text-start py-1 px-3 flex items-center justify-start transition-all ease-in-out'><i class="bi bi-clock-fill mr-3 text-base"></i> Recientes</button>
                    <button className='hover:bg-zinc-900 rounded-md w-full text-sm text-start py-1 px-3 flex items-center justify-start transition-all ease-in-out'><i class="bi bi-trash-fill mr-3 text-base"></i> Papelera</button>
                </div>
            </div>
            <div className='mt-8 text-gray-300'>
                <h1 className='font-bold text-gray-400 text-sm'>COMPARTICIONES</h1>
                <div className='w-full mt-3 flex flex-col gap-1'>
                    <button className='hover:bg-zinc-900 rounded-md w-full text-sm text-start py-1 px-3 flex items-center justify-start transition-all ease-in-out'><i class="bi bi-share-fill mr-3 text-base"></i> Carpetas</button>
                    <button className='hover:bg-zinc-900 rounded-md w-full text-sm text-start py-1 px-3 flex items-center justify-start transition-all ease-in-out'><i class="bi bi-link mr-3 text-base"></i> Enlaces</button>
                </div>
            </div>
            <div className='mt-auto border-zinc-800 border-t-2 pt-4'>
                <div className='flex flex-col gap-2 text-xs'>
                    <div className='flex justify-between'>
                        <p className='text-gray-400'>Pro Lite</p>
                        <button className='text-cyan-300'>AMPLIAR</button>
                    </div>
                    <span className='bg-gray-400 h-1 w-full block rounded-full'></span>
                    <p className='text-gray-400'><span className='text-cyan-300'>53.69 GB</span> de 400 GB</p>
                </div>
            </div>
        </div>
    </div>
  )
}
