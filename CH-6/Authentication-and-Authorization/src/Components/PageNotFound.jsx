import React from 'react'

function PageNotFound() {
  return (
    <>
        <div className='flex flex-col bg-gray-300 h-[90vh] w-full justify-center text-center'>
            <h1 className='text-8xl font-bold text-red-700 mb-5'>404</h1>
            <h2 className='text-7xl font-semibold'>Page Not Found</h2>
        </div>
    </>
  )
}

export default PageNotFound