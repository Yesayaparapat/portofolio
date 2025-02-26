import '../../styles/About.css'
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoVue } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

function About() {
  return (
    <section id='about'>
        <div className='wrapper'>
            <h3>about</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quo, velit iure laborum fuga cupiditate magni modi neque dolore odit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod impedit excepturi natus ratione aperiam quidem consectetur quis esse. Officiis, quisquam. Ex dignissimos iste repudiandae labore sunt nam est, adipisci soluta?</p>

            <h4>Programming Lague & Tools</h4>
            <div className='skills'>
                    <IoLogoHtml5 /><IoLogoCss3 /><RiJavascriptFill /><FaSquareGithub /><SiMysql /> <br />
                    <IoLogoVue /><FaLaravel /><FaReact /><FaPhp /><FaPython /><RiTailwindCssFill />
            </div>
        </div>


    </section>
  )
}

export default About