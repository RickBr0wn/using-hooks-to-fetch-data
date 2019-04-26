import React from 'react'

export default function Story() {
  return (
    <div className='red main-content'>
      <iframe
        title='unknown'
        is='x-frame-bypass'
        src='https://zapier.com/engineering/how-to-build-redux/'
        width='100%'
        height='100%'>
        alternative content for browsers which do not support iframe.
      </iframe>
    </div>
  )
}
