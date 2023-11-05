import React from "react"
import { useState } from "react"
import HeadBio from "./HeadBIo"

function BioSiswa() {
    const [nama, setNama] = useState("")

    return (
        <div className="bg-slate-400 w-full flex justify-evenly items-center">
            <HeadBio  nama={"Nafa"} img={"./public/asset/paspoto.jpg"} />

            <div className="tabsContent">
                <ul>
                    <label htmlFor="" className="text-center pd-2 rounded-md bg-white text-blue-500">Profile</label>
                    <li>NISN : 4321</li>
                    <li>Nama : Mikio</li>
                    <li>Tempat/Tanggal Lahir : 05 Maret 200</li>
                    <li>Agama : Khatolik</li>
                    <li>Jenis Kelamin : Prempuan</li>
                    <li>Alamat : Medan</li>
                    <li>No. Telp : 0812345678</li>
                </ul>
                <br />
                <ul>
                    <label htmlFor="" className="text-center pd-2 rounded-md bg-white text-blue-500">Orang Tua</label>
                    <li>Nama Orang Tua : Ahmad</li>
                    <li>Agama : Khatolik</li>
                    <li>Jenis Kelamin : Laki-laki</li>
                    <li>Alamat : Medan</li>
                    <li>No. Telp : 0813256789</li>
                </ul>
                </div>

                <div className="overflow-x-auto">
                    <h1 className="text-center pd-2 rounded-md bg-white text-blue-500">History Pelanggaran</h1>
                    <table className="table text-slate-600 text-center">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Pelanggaran</th>
                            <th>Tanggal</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Bolos Kelas</td>
                            <td>31 Maret 2023</td>
                            <td>Selesai</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>2</td>
                            <td>Mencuri</td>
                            <td>06 Juni 2023</td>
                            <td>On going</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            <div className="relative top-[280px] right-[100px]">
                <td>
                    {/* You can open the modal using ID.showModal() method */}
                    <button className="btn btn-slate flex" onClick={() => window.my_modal_3.showModal()}>Update</button>
                    <dialog id="my_modal_3" className="modal">
                        <form method="dialog" className="modal-box">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <h1 className="text-2xl text-center">Table Update Data</h1>
                            <div className="form-control">
                                <label className="label" >
                                    <span className="label-text">Nama Siswa</span>
                                </label>
                                <label className="input-group mx-auto">
                                    <input onChange={(e)=>{
                                        setNama(e.currentTarget.value)
                                    }} type="text" placeholder="Ketik Disini" className="w-full  input input-bordered" />
                                </label>
                                <label className="label">
                                    <span className="label-text">Tempat/Tanggal Lahir</span>
                                </label>
                                <label className="input-group mx-auto">
                                    <input type="text" placeholder="Ketik Disini" className="w-full  input input-bordered" />
                                </label>
                                <label className="label">
                                    <span className="label-text">NISN</span>
                                </label>
                                <label className="input-group mx-auto">
                                    <input type="text" placeholder="Ketik Disini" className="w-full  input input-bordered" />
                                </label>
                                <label className="label">
                                    <span className="label-text">Alamat</span>
                                </label>
                                <label className="input-group mx-auto">
                                    <input type="text" placeholder="Ketik Disini" className="w-full  input input-bordered" />
                                </label>
                                <label className="label">
                                    <span className="label-text">Pelanggaran</span>
                                </label>
                                <label className="input-group mx-auto">
                                    <input type="text" placeholder="Ketik Disini" className="w-full  input input-bordered" />
                                </label>
                                <label className="label">
                                    <span className="label-text">Nama Orangtua</span>
                                </label>
                                <label className="input-group mx-auto">
                                    <input type="text" placeholder="Ketik Disini" className="w-full  input input-bordered" />
                                </label>
                                <label className="label">
                                    <span className="label-text">No.Hp Orangtua</span>
                                </label>
                                <label className="input-group mx-auto">
                                    <input type="text" placeholder="Ketik Disini" className="w-full  input input-bordered" />
                                </label>
                                <button className="btn btn-ghost mt-2 p-2" onClick={() => alert(nama)}>Submit</button>
                            </div>
                        </form>
                    </dialog>
                </td>
            </div>
            </div>
    )
}
export default BioSiswa