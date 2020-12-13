import React from 'react'
import { withRouter } from 'react-router-dom'

const Total = ({ itemCount, total, history }) => {
  return (
    <div className='total-container'>
      <div className='total'>
        <p>Total Items : {itemCount}</p>
        <p>{`Total:  ${total} `}</p>
      </div>

      <div className='checkout'>
        <button
          className='button is-black'
          onClick={() => history.push('/checkout')}
        >
          CheckOut
        </button>

        <button className='button is-white'> Clear</button>
      </div>
    </div>
  )
}

export default withRouter(Total)
