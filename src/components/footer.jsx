import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import indeed from '../assets/indeed.png'
import youtube from '../assets/youtube.png'
import behance from '../assets/behance.png'

import mail from '../assets/email.png'
import location from '../assets/location.png'
import phone from '../assets/phone.png'
// import logo from '../assets/logo.png'

import { Link } from "react-scroll"


export const Footer=()=> {
    
  return (
       <div className='ft'>
            <div className='footer'>
                <span className="space"></span>
                <div className="groupe">
                    <div className="groupe1">
                        <div className="titre"><p className='Lg'><img src="" alt="Lorem Ipsum"/></p></div>
                        <div className="soustitre1">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</div>
                        <div className="social">
                        <a href='#'><img src={facebook} alt="images 3" /></a>
                        <a href='#'><img src={twitter} alt="images 1" /></a>
                        <a href='#'><img src={indeed} alt="images 2" /></a>
                        <a href='#'><img src={youtube} alt="images 4" /></a>
                        
                        <a href='#'><img src={behance} alt="images 4" /></a>
                        </div>
                    </div>
                    <div className="groupe2">
                        <div className="titre1">Quick link</div>
                        <div className="ligneGroupe">
                            <div className="soustitre"><Link  to="home" smooth={true} duration={100} className="a">Home</Link></div>
                            <div className="soustitre"><Link to="product" smooth={true} duration={100} className="a">Partners</Link></div>
                            <div className="soustitre"><Link to="features" smooth={true} duration={100} className="a">Features</Link></div>
                            <div className="soustitre"><Link to="pricing" smooth={true} duration={100} className="a">Pricing</Link></div>
                            
                        </div>
                    </div>
                    <div className="groupe3">
                        <div className="titre1">Contact info</div>
                        <div className="InfoFooter">
                            <img src={mail} alt="images 5" className='icon' />
                            <div className="soustitre"><a href='#' className='metDomain_F .ipsum_F'>decode@ajel-osi.com</a></div>
                        </div>
                        <div className="InfoFooter">
                            <img src={phone} alt="images 6" className='icon' />
                            <div className="soustitre"><a href="" className='metDomain_F .ipsum_F'>+237 6 81 20 69 24</a></div>
                        </div>
                        <div className="InfoFooter">
                            <img src={location} alt="images 7" className='icon' />
                            <div className="soustitre"> <a href="" className='metDomain_F .ipsum_F'>MAKEPE LOGPOM ANCIEN ENEO</a> </div>
                        </div>
                    </div>
                   
                </div>
                 <div className='Hr'></div>
                 <div className='afterFooter'>
                    <p>DECODE© 2024 All Rights Reserved</p>
                 </div>
            </div>
        </div>
  )
}
