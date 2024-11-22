import React, {useState} from 'react'
import './TellStory.css'

export default function TellStory() {
  const [userStory, setUserStory] = useState("")
  const handleInputChange = (e) =>{
    setUserStory(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <div className='tellstory-container'>
      <h2>Write down what happened</h2>
      <div className='col-container'>
        <div className='column'>
          <h3>Guidelines</h3>
          <ul>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi officia voluptatem quia error distinction.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi officia voluptatem quia error distinction.</li>
            <li>orem ipsum dolor, sit amet consectetur adipisicing elit. Commodi officia voluptatem quia error distinction.</li>
          </ul>
        </div>
        <div className='column'>
          <form>
            <textarea className="story-textarea" id="tellstory" name="tellstory" value={userStory} onChange={handleInputChange} rows="16" cols="50" placeholder='Please write what happened' required />
            <div className='btn-container-tellstory'>
              <button type='submit' onSubmit={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
