import React from 'react'
import Destination from '../Components/Destination'
import Configuration from '../Components/Configuration'
import PreviewQR from '../Components/PreviewQR'

const QR = () => {
  return (
    <>
    <div className='w-full px-[100px] flex flex-row items-center justify-center gap-3  min-h-screen'>
        <Destination/>
        <Configuration/>
        <PreviewQR/>
    </div>
    </>
  )
}

export default QR