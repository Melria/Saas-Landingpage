import React, {useEffect} from 'react'
import Vec1 from '../assets/Vec1.png'
import Vec2 from '../assets/Vec2.png'
import Vec3 from '../assets/Vec3.png'


export const Features=()=>{

    useEffect(() => {
        const elements = document.querySelectorAll('.v1, .v2, .v3, .v4, .v5, .v6');
        
        const options = {
            root: null,
            threshold: 0.5
        };
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeOut');
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
    <div id='features'>
         <h2>You will never missed a deadline</h2>
        <p className='homeText ht'>Connect expose and visualize and over 150 Sass tools 
        without engineering method</p>
        <div className='fGrid'>
           <div className='v1'>
            <img src={Vec2} alt="features vector"  className='s1'/>
            <h5>User Management and Access Control</h5>
            <p className="desc">User management involves defining roles, managing accounts and access rights, ensuring secure authentication, and overseeing user session activities.</p>
            </div>
            <div className='v2'>
            <img src={Vec3} alt="features vector"  className='s2'/>
            <h5>Entry and tracking of activities</h5>
            <p className="desc">A form captures sales activity reports, detailing dates, clients, actions, and results, with approval, history, and progress tracking.</p>
            </div>
            <div className='v3'>
            <img src={Vec1} alt="features vector"  className='s3'/>
            <h5>Client and Opportunity Management </h5>
            <p className="desc">Creation and tracking of client records, sales opportunities, assignment to sales reps, with analysis and alerts.</p>
            </div>
            <div className='v6'>
            <img src={Vec2} alt="features vector"  className='s4'/>
            <h5>Dashboards and Reporting</h5>
            <p className="desc">Customizable dashboards with KPIs, generation of consolidated reports, data export, and visualizations in graphs.</p>
            </div>
            <div className='v5'>
            <img src={Vec1} alt="features vector"  className='s5'/>
            <h5>Communication and Collaboration</h5>
            <p className="desc">Internal messaging, document sharing, event notifications, shared calendar, and real-time chat for teams.</p>
            </div>
            <div className='v4'>
            <img src={Vec3} alt="features vector"  className='s6'/>
            <h5> Configuration and Administration </h5>
            <p className="desc">Management of settings, data import/export, backup/restoration, and tracking user actions within the application.</p>
            </div>
        </div>
    </div>
  )
}
