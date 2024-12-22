import './Footer.css'
import logo from '../assets/logoipsum.png'
const Footer = () => {
    return (
        <div className='FooterCont'>
            <div className="footerContent">
                <img id='logoipsum' src={logo} alt="logoipsum" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
                <ul className='footerNavList'>

                    <li><a href="#" className="footerLink">Home</a></li>
                    <li><a href="#" className="footerLink">About</a></li>
                    <li><a href="#" className="footerLink">Career</a></li>
                    <li><a href="#" className="footerLink">History</a></li>
                    <li><a href="#" className="footerLink">Services</a></li>
                    <li><a href="#" className="footerLink">Projects</a></li>
                    <li><a href="#" className="footerLink">Blogs</a></li>

                </ul>
                <ul className="socials">
                    <li><a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" className="social-icon"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#" className="social-icon"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" className="social-icon"><i className="fab fa-github"></i></a></li>
                    <li><a href="#" className="social-icon"><i className="fas fa-basketball-ball"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;