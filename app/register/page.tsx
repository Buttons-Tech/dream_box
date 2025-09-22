import React from 'react'
import SchoolForms from '../Components/forms/SchoolForms'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <h1>REGISTER</h1>
    <SchoolForms />
    <Link href="/" className='text-[20px] text-[#A40C76] underline flex justify-center mb-8'>
      <span className=''>return to home</span>
      </Link>
    </>
  )
}

export default page