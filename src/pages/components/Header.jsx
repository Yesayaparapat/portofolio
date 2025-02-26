import profilePicture from '../../assets/gambar1.png';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import '../../styles/Header.css'


function Header() {
  return (
    <header>
      <div className="Header-jumbotron">
        <img className='PP' src={profilePicture} alt="Profile" />
        <h3 className='NamePP'>Yesaya Parapat</h3>
        <p className='ParaPP'>Programmer - Web Developer - Data Analyst</p> 
        <div className='socialMedia'>
            <a href="https://www.instagram.com/yesaya_parapat/"><FaSquareInstagram /></a>
            <a href="https://www.facebook.com/yesaya.parapat.90?locale=id_ID"><FaFacebookSquare /></a>
            <a href="https://github.com/Yesayaparapat"><FaGithubSquare /></a>
            <a href=""><TbFileCv /></a>
            <a href="https://www.linkedin.com/in/yesaya-parapat-48206034b/"><FaLinkedin /></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
