export default function Dashboard() {
return(
<div className="homepage">
    <div className="sidebar">
        <header>
            <img src="src/asset/logo_smk-removebg-preview.png"/>
            <h1>SMK PUTRA ANDA BINJAI</h1>
        </header>
        <ul>
            <li> <img src="src/asset/tatib-removebg-preview.png" width={35}/>
            <a href="">Tata Tertib Sekolah</a></li>
            <li> <img src="src/asset/doc2-removebg-preview.png" width={35}/>
            <a href="">Dokumen</a></li>
            <li> <img src="src/asset/his2-removebg-preview.png" width={35}/>
            <a href="">History Siswa</a></li>
        </ul>
        <button className="btn">Login</button>
    </div>

    <div className="mainbar">
        <h1>Sistem Informasi Bimbingan Konseling</h1>
        <ul>
            <li>Sekolah</li>
            <li>Ruang BK</li>
            <li>Guru BK</li>
        </ul>
    </div>
</div>
)
}