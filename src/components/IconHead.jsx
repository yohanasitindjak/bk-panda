import React from 'react'

const IconHead = ({img, text}) => {
  return (
    <div className="tatib-icon">
                <img src={img} alt="" />
                <h2>{text}</h2>
                <h3>SMK Putra Anda Binjai</h3>
    </div>
  )
}

export default IconHead