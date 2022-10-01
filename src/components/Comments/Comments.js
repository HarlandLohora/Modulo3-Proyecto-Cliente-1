import React from 'react'
import './Comments.css'

const Comments = () => {
  return (
    <div>
        <form className='form'>
            <div className='sms'> <textarea></textarea></div>
            <div className='btn-sms'><button className='send'>Send <i class="fa fa-paper-plane" aria-hidden="true"></i></button></div>
        </form>

    </div>
  )
}

export default Comments