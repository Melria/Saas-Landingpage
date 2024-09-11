import {useEffect} from 'react'

import Activa from '../assets/Activa.png';
import Axa from '../assets/axa.png';
import Allianz from '../assets/allianz.png';
import Arra from '../assets/Arra.png';
import Chanas from '../assets/chanas.png';
import Nsia from '../assets/NSIA.jpg';
import Saar from '../assets/Saar.png';
import Atlantique from '../assets/atlantique.png';



export const Partners=()=>{

  useEffect(() => {
    const elements = document.querySelectorAll('.ap, .b, .c, .d, .e, .f, .g, .h');
    
    const options = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    elements.forEach(element => {
        observer.observe(element);
    });

    return () => {
        elements.forEach(element => {
            observer.unobserve(element);
        });
    };
}, []);
  return (
   <div id='product'>
    <h5>Already  loved and trusted by our patners</h5>
    <div className='partners'>
      <div className='ap'>
      <img src={Activa} alt="insurance"  className='aa'/>
      </div>
      <div className='b'>
      <img src={Axa} alt="insurance"  className='bb'/>
      </div>
      <div className='c'>
      <img src={Allianz} alt="insurance"  className='cc'/>
      </div>
      <div className='d'>
      <img src={Arra} alt="insurance"  className='dd'/>
      </div>
      <div className='e'>
      <img src={Chanas} alt="insurance"  className='ee'/>
      </div>
      <div className='f'>
      <img src={Nsia} alt="insurance"  className='ff'/>
      </div>
      <div  className='g'>
      <img src={Saar} alt="insurance"  className='gg'/>
      </div>
      <div  className='h'>
      <img src={Atlantique} alt="insurance"  className='hh'/>

      </div>

      </div>
   </div>
    
  )
}
