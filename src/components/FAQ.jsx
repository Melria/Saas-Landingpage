import React from 'react'
import { Accordion } from 'react-bootstrap';
import Faq from '../assets/FAQs.gif'

export const FAQ=()=>{
    let data = [
        {
            name: "How secure is my data in the application ?",
            description: "Your data is stored securely on our servers using industry-standard encryption protocols. We implement robust access controls to ensure only authirized personnel can view and modify your information"
        },
        {
            name: "Can I customize the application to fit my specific needs?",
            description: "Answer: Yes, we offer customization options to tailor the application to your unique business requirements. Whether you need additional fields in your reports, specific dashboards, or integrations with other systems, our development team can work with you to create a solution that meets your exact needs."

        },
        {
            name: "How long does it take to get started with the application?",
            description: "The implementation timeline can vary depending on the complexity of your requirements and the size of your organization. However, we strive to provide a quick and efficient setup process. Once you have provided us with your necessary data, we can typically have you up and running within a few weeks"
        },
        {
            name: "What kind of support is available after the implementation?",
            description: "We offer comprehensive support to ensure a smooth transition and ongoing success with our application. Our support team is available to assist you with any questions or issues you may encounter. We also provide regular updates and enhancements to keep the application up-to-date and optimized for your business."
        }
    ]
  return (
    <div className='accordion-container'>
        <div className='accT'>
            <h2>Frequently asked question</h2>
            <p>Everything you need to know about jahedin</p>
        </div>
        <div className='accB'>
        <div className='acc'><img src={Faq} alt="FAQ" className='faqImg'/></div>
        <div className='acc acc1'>
            {
                data.map((item) => (
                    <Accordion>
                        <Accordion.Header>
                            {item.name} 
                        </Accordion.Header>
                        <Accordion.Body>
                            <small>{item.description}</small>
                            
                        </Accordion.Body>
                    </Accordion>
                ))
            }
        </div>
        </div>
       
        
    </div>
  )
}
