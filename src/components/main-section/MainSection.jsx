import React from 'react'
import { withRouter } from 'react-router-dom'
import studioBag from '../../assets/studio-bag.png'
import './main-section.scss'

const MainSection = ({ history }) => {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img src={studioBag} alt='studio bag' />
        </div>
        <div className='ms-m-description'>
          <h2>Designed for fashion. Crafted for sport.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            saepe, alias, dicta voluptate nobis vero a dolorem consequuntur quia
            aliquid odio quam. Recusandae in excepturi qui explicabo optio
            architecto itaque.
          </p>
          <button
            className='button is-black'
            id='shop-now'
            onClick={() => history.push('/product/1')}
          >
            STUDIO BAG
          </button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(MainSection)
