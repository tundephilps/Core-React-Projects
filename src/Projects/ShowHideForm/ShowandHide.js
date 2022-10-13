import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import Changetext from './Changetext';

function ShowandHide()
{
  const [showhide, setShowhide]= useState("no");

const handleshow= e=>{
  const getshow= e.target.value;
  setShowhide(getshow);
}




return(<React.Fragment>
         <Container className="content">
        <div className="row">
        <p className='mt-3 text-center fw-bold'>Default Radio Button Checked and Show / Hide Div Content</p>
          <div className="col-md-5">
        
         <form className="row g-3">

               <div className="col-md-12">
                <label  className="form-label"> Username</label>            
                    <div className="text-white"> 
                     <input type="text" name='user' className='form-control'/>                                                 
                    </div>
                    </div>

                    <div className="col-md-12">
                    <label  className="form-label">Do you love working on the FrontEnd?</label>            
                    <div className="text-black"> 
                      Yes <input type="radio" name="userdetail" value="yes" onClick={ handleshow } /> 
                      No <input type="radio" name="userdetail" value="no" checked={ showhide==='no' } onClick={ handleshow }/> 
                    </div>
                    </div>

                    {
                    showhide==='yes' && (
                    <div className='col-md-12'>
                     <label  className="form-label">Why</label>            
                    <div className="text-white"> 
                     <input type="text" name='text' className='form-control'/>                                                 
                    </div>
                    </div>

                    )

                    }

            

        </form>
        <Changetext />
        </div>
        </div>
        </Container>
       
    </React.Fragment>);
}

export default ShowandHide;