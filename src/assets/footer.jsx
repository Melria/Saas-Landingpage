import facebook from '/images/facebook.png'
import twitter from '/images/twitter.png'
import indeed from '/images/indeed.png'
import youtube from '/images/youtube.png'
import dribble from '/images/dribble.png'
import behance from '/images/behance.png'

import mail from '/images/icon_mailDark.png'
import location from '/images/icon_location.png'
import phone from '/images/icon_callDark.png'

import { Link } from "react-scroll"
import { useState } from 'react';









export const Footer=()=> {
    const [user_email, setEmail] = useState('');
    const handleInputChange = (e)=>{
        setEmail(e.target.value);
    };
    const sendDataToDatabase =()=>{
        
        const inputData ={ 
           user_email,
        };

        fetch('http://localhost:3000/api/saveData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Email sent successfully!');
            } else {
                alert('Email stored');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
   
    }
  return (
       <div>
            <div className='block8'>
                <div className="textBlock8">
                    <div className="titreBlock8">
                        Subscribe to our newsletter
                    </div>
                    <div className="sousTitreBlock8">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                    </div>
                </div>
                <div className="inputBlock8">
                    <div className="InputTextBlock8">
                        <input type="text" placeholder='Your email'  value={user_email} onChange={handleInputChange} />
                    </div>
                    <button className='sendBlock8' onClick={sendDataToDatabase}>Send</button>
                </div>
            </div>
            <div className='footer'>
                <span className="space"></span>
                <div className="groupe">
                    <div className="groupe1">
                        <div className="titre">MET</div>
                        <div className="soustitre1">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</div>
                        <div className="social">
                        <a href='#'><img src={facebook} alt="images 3" /></a>
                        <a href='#'><img src={twitter} alt="images 1" /></a>
                        <a href='#'><img src={indeed} alt="images 2" /></a>
                        <a href='#'><img src={youtube} alt="images 4" /></a>
                        <a href='#'><img src={dribble} alt="images 4" /></a>
                        <a href='#'><img src={behance} alt="images 4" /></a>
                        </div>
                    </div>
                    <div className="groupe2">
                        <div className="titre1">Quick link</div>
                        <div className="ligneGroupe">
                            <div className="soustitre"><Link  to="header" smooth={true} duration={100} className="a">Home</Link></div>
                            <div className="soustitre"><Link to="about" smooth={true} duration={100} className="a">About</Link></div>
                            <div className="soustitre"><Link to="services" smooth={true} duration={100} className="a">Services</Link></div>
                            <div className="soustitre"><Link to="projects" smooth={true} duration={100} className="a">Projects</Link></div>
                            <div className="soustitre"><Link to="contact" smooth={true} duration={100} className="a">Conctacts</Link></div>
                        </div>
                    </div>
                    <div className="groupe3">
                        <div className="titre1">Contact info</div>
                        <div className="InfoFooter">
                            <img src={mail} alt="images 5" className='icon' />
                            <div className="soustitre"><a href='#' className='metDomain_F'>met@ajel-osi.com</a></div>
                        </div>
                        <div className="InfoFooter">
                            <img src={phone} alt="images 6" className='icon' />
                            <div className="soustitre">+237 6 81 20 69 24</div>
                        </div>
                        <div className="InfoFooter">
                            <img src={location} alt="images 7" className='icon' />
                            <div className="soustitre">MAKEPE LOGPOM ANCIEN ENEO </div>
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
