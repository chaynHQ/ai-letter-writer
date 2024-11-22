import React from 'react'
import './Disclaimer.css'
import { useNavigate } from 'react-router-dom';

export default function Disclaimer() {
    const navigate = useNavigate();

    function handleClick(){
      navigate('/TellStory');
    }
  
    return (
        <div>
          <h2>Make a Formal Complaint Without a Lawyer</h2>
          <p> We understand how frustrating and painful it can be when the systems meant to protect us fall short. If you’ve felt let down by the UK police or criminal justice system, we’re here to help you find a way to be heard. Our letter writing tool is designed to guide you through the process of creating a formal complaint. Whether you want to highlight missteps, express concerns, or challenge a decision to drop your case, this tool helps you take back some control—on your terms, at your pace.
          </p>
          <div className='col-container-disclaimer'>
            <div className='column-disclaimer'>
              <h3>Things to know before you get started:</h3>
              <ul>
                <li>Your description of what happened to you and anything else you submit to the tool will remain completely confidential. </li>
                <li>Our tool uses AI to interpret what you submit and find the relevant police force guidelines that demonstrate their process has not been followed properly.</li>
                <li>You’ll need a police reference number or some way to refer to your initial report.</li>
              </ul>
            </div>
            <div className='column-disclaimer'>
              <h3>Here’s how the tool works</h3>
              <ul>
                <li>Follow the prompts to explain what happened.</li>
              </ul>
            </div>
          </div>
          <div className='btn-container-disclaimer'>
            <button type="button" onClick={handleClick}>
              Next
            </button>
          </div>
        </div>
    )
}
