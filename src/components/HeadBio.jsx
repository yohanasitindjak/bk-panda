import React from 'react'

const HeadBio = ({img, nama}) => {
  return (
    <div className="w-fit p-4 m-5 gap-5 text-center rounded-md bg-white text-blue-500">
                <h1 className="text-xl">Identitas Siswa</h1>
                <img src={img} width={100} alt="" className="m-3"/>
                <h3 className="text-lg">{nama}</h3>

    </div>
  )
}

export default HeadBio