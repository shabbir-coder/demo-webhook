import React, { useState } from 'react'

function ContactBar({setnumber}) {

  const [addNew, setAddNew] = useState(false)
  const [newNumber, setnewNumber] = useState('')

  const [recentNumbers, setRecentNumbers] = useState([])

  const [error, seterror] = useState('')

  const setNewNumber = () => {
    if (newNumber.length < 10) {
      return seterror('Invalid Number length');
    }
    if (recentNumbers.some(data => data.number === newNumber)) {
      return seterror('Number already found');
    }
    seterror('');
    const updatedRecentNumbers = [...recentNumbers, { number: newNumber, lastMessage: '' }];
    setRecentNumbers(updatedRecentNumbers);
    setnumber(newNumber);
    setAddNew(!addNew);
  };

  return (
    <div className='contact-bar'>
        {!addNew && <div className='contact-header'>
          <h5>Contacts</h5>
          <button onClick={()=>(setAddNew(!addNew))}>Add New</button>
        </div>}
          {error && <h6 className='error-text'>{error}</h6>}
        {addNew && <div className='contact-header'>
          <input type="number" placeholder='Enter isd code and number' onInput={(e)=>setnewNumber(e.target.value)}/>
          <button onClick={()=>setNewNumber()}>Add</button>
        </div>}
        <div className="contact-box noscroll">
          {!recentNumbers.length ? (
            <div className='contact-card bg-transparent'>
              {/* <div className="avatar"></div> */}
              <div className='text text-center'>
                <h5 className='clearfix'>Your Recent contacts will show here</h5>
              </div>
            </div>
          ) : (
            recentNumbers.map((item) => (
              <div className='contact-card' key={item.number}>
                {/* <div className="avatar"></div> */}
                <div className='text' onClick={()=>setnumber(item.number)}>
                  <h5 className='clearfix'>{item.number}</h5>
                  <p className='clearfix'>{item.lastMessage}</p>
                </div>
                <div className="new-message"></div>
              </div>
            ))
          )}
        </div>
    </div>
  )
}

export default ContactBar