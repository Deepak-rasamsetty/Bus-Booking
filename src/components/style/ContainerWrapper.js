import React from 'react'

export default function ContainerWrapper(props) {
  return (
    <div  className='container w-50 p-3'>
      {props.children}
    </div>
  )
}
