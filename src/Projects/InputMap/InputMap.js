import React, { useState } from 'react'

const InputMap = () => {

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    
const [allValue, setAllValue] = useState([])
const formSubmit = (e) => {
    e.preventDefault()
    const newValue = { name, address }
    setAllValue([...allValue, newValue])

    setName("")
    setAddress("")
    
}

  return (
    <>
    <section className='Section'>
        
    <h3>Get Value From Input field using map in react</h3>
        <div >
            <div>
                <form onSubmit={formSubmit}>
               
                    <input type="text" name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" name='address' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
               
                    <button type='submit'>Submit</button>
            <div>
        </div>

                
                </form>
        </div>

        </div>

    </section>

    <section className='Section'>
        {allValue.map((currentValue) => {
            const { name, address } = currentValue
        
        return (
            <div>
                    <h4>Send Sucessful</h4>
            
            <h6>Name: <p>{name}</p> </h6>
            <h6>Address: <p>{address}</p> </h6>
            </div>
            )
        })}
    </section> 
    </>
  )
}

export default InputMap;
