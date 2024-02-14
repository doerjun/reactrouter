import React from 'react'
import { useParams } from 'react-router-dom'

function Client() {
  const {clientid}=useParams();
  return (
    <div className='bg-gray-600 text-white text-3xl text-center'>
      Client:{clientid}
      
    </div>
  )
}

export default Client
