import React from 'react'

export const Table = () => {
  return (
    <div className='w-full px-8 mt-4'>
        <table className='text-gray-300 text-xs w-full table-auto'>
            <colgroup>
                <col span="1" className='w-[3%]'/>
                <col span="1" className='w-4/12'/>
                <col span="1" className='w-1/12'/>
                <col span="1" className='w-1/12'/>
                <col span="1" className='w-1/12'/>
                <col span="1" className='w-2/12'/>
                <col span="1" className='w-[3%]'/>
            </colgroup>
            <thead>
                <tr className='border-y border-gray-500 text-start'>
                    <th scope="col"><i className='bi bi-heart-fill'></i></th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Tamaño</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Fecha de subida</th>
                    <th scope="col"></th>
                    <th scope="col"><button><i className='bi bi-gear-fill'></i></button></th>
                </tr>
            </thead>
            <tbody className='text-gray-400'>
                <tr className='border-y border-gray-500 hover:bg-zinc-900/40'>
                    <td><i className='bi bi-dot text-base'></i></td>
                    <td><i className='bi bi-folder-fill text-base pr-3 text-yellow-300'></i> Development</td>
                    <td>938 MB</td>
                    <td>Carpeta</td>
                    <td>7/11/2022, 15:43</td>
                    <td className='text-center'><button className='dot-visible'><i className='bi bi-three-dots text-xl'></i></button></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
