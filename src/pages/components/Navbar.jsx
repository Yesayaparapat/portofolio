import { useState } from 'react';
import '../../styles/Navbar.css'
import { FaBars, FaUnsplash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Navbar() {
    const [statusTampil, setStatusTampil] = useState('')
    function tampilMenu(){
        if(statusTampil == ''){
            setStatusTampil('tampil')
        }else {
            setStatusTampil('')
        }
    }
  return (
    <nav>
        <div className="wrapper">
            <div className="logo">
                <a href="">Yesaya</a>
            </div>

            <button onClick={tampilMenu}>
                {
                    statusTampil == ''?(<FaBars />):( <IoClose />)
                }
            </button>
            <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
                <ul>
                    <li><a href="#portfolio">Portofolio</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar