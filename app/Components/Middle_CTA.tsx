import React from 'react'
import CTA_button1 from './CTA_button1'
import CTA_button2 from './CTA_button2'

const Middle_CTA = () => {
  return (
    <>
    <div className="flex flex-col items-center gap-8 mt-20 mb-20">
      <span className="text-[36px] w-full max-w-[329px] flex text-center font-bold">
        Ready to Give Your Child a Head Start?
      </span>
      <div className="flex flex-col gap-4 w-full items-center sm:flex-row sm:justify-center">
        <CTA_button1 />
        <CTA_button2 />
      </div>
    </div>
    </>
  )
}

export default Middle_CTA
