import { useNavigate } from "react-router-dom"
export default function Dashboard() {
return(
<div className="homepage">
    <div className="sidebar">
        <header>
            <img src="./public/asset/logo_smk-removebg-preview.png"/>
            <h1>SMK PUTRA ANDA BINJAI</h1>
        </header>
        <ul>
            <li> <img src="./public/asset/tatib-removebg-preview.png" width={35}/>
            <a href="">Tata Tertib Sekolah</a></li>
            <li> <img src="./public/asset/doc2-removebg-preview.png" width={35}/>
            <a href="">Dokumen BK</a></li>
            <li> <img src="./public/asset/his2-removebg-preview.png" width={35}/>
            <a href="">History Siswa</a></li>
        </ul>
        <button className="btn">Login</button>
    </div>
</div>
)
}