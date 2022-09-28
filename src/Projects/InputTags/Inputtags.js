import React, { useState } from 'react'
import "./Inputtags.css";

const Inputtags = () => {

    const [ tags, setTags ] = useState([])

    function handleKeyDown(e) {
        if(e.key !== "Enter") return
        const value = e.target.value
        if(!value.trim()) return 
        setTags([...tags, value])
        e.target.value = ""
    }

    function removeTag(index) {
        setTags(tags.filter((el, i) => i !== index))
    }

  return (
    <div className="Section">    
    <h5>
        Add Tags Input Using react hooks
    </h5>
    <div className='tags-input-container'>
      { tags.map((tag, index) => (
 
        <div className='tag-item'>
            <span className='text'>{tag}</span>
            <span className='close' onClick={() => removeTag(index)}>&times;</span>
        </div>
        
))}
        <input onKeyDown={handleKeyDown} type="text" placeholder='Type your Tech Stacks' className='tags-input' />
    </div>
    </ div>
)
}

export default Inputtags