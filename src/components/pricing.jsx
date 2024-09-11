import React, {useEffect} from 'react'
import img1 from '../assets/pi1.png';
import img2 from '../assets/pi2.png';
import img3 from '../assets/pi3.png'


export const Pricing=()=>{
  useEffect(() => {
    const elements = document.querySelectorAll('.lf');
    
    const options = {
        root: null,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeLeft');
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
 useEffect(() => {
        const elements = document.querySelectorAll('.rg');
        
        const options = {
            root: null,
            threshold: 0.5
        };
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeRight');
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
    <div id="pricing">
         <h2>Create Your First Personalized</h2>
        <p className='homeText'>No credit card required 7 days free trial</p>
        <div className='btn-pricing'>
              <button  className='btn1' > 
                Get started
              </button>
              <button  className='btn2 btn2-pricing'> 
                Watch demo
              </button>
            </div>
        <div className='flex'>
                <div className='lf'>
                    <h4 className='lft'>Unify your sales team, simplify your life</h4>
                    <p className='desc lft'>Streamline your sales operations with our all-in-ones web app. centralize your sales data, manage your team easier.</p>
                    <img src={img1} alt="" className='img1'/>
                </div>
                <div className='rg'>
                    <h4 className='lft rgt'>The best product at affordable prices</h4>
                    <p className='desc lft'>Discover top-quality products without breaking the bank. Our affordable prices wont't compromise on excellence.</p>
                    <img src={img2} alt="" className='img2'/> 
                </div>
        </div>

        <h2 className='together'>Let’s grow together</h2>
        <p className='homeText ht'>Explore out full hiring platform with a 15 days free trial 
no credit card required. Post jobs <br/>get candidates and 
manage applicants all in one place.</p>
        <button  className='btn1 btn2-pricing btn3' > 
                Try it for free
         </button>
        <img src={img3} alt="img3"  className='img3'/>        
    </div>
  )
}
