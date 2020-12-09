import React from 'react'
import './footer.styles.scss'

const footer = () => {
  const year = new Date().getFullYear
  return <div className='footer'>{year} &copy; NOMAD Store</div>
}

export default footer
