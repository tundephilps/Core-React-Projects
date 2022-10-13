import React, { useState } from "react";
import { Container } from "react-bootstrap";
function Changetext()
{
     const[showtext, setShowtext]= useState("Reason");


     const handletext=(e)=>{
        const getvalue= e.target.value;
        
        if(getvalue==1)
        {
            const show="Why React"
            setShowtext(show);
        } else  if(getvalue==2)
        {
        const show="Why did you chose Vue"
        setShowtext(show);

        } else{
            const show=" "
            setShowtext(show);    
        }

     }

    return(
        <React.Fragment>
            <Container className="">
        <div className="">
          <div className="">
            <p className="mt-4 mb-4 fw-bold">
              Change text on drop down select option 
            </p>
            <form className="row g-3">
           
              <div className="col-md-12">
                <label className="form-label">Choose your fav stack</label>
               <select name="area" className="form-control" onChange={(e)=>handletext(e)} >
                <option value="">--Select Area--</option>
                <option value="1">React</option>
                <option value="2">Vue</option>
               </select>
              </div>

              <div className="col-md-12">
                <label className="form-label">{showtext}</label>
                <input
                  type="text"
                  name="user_name"
                  className="form-control p-2"
                  placeholder="Explain..."
                 
                />
              </div>

              <div className="col-md-12">
                <label className="form-label"></label>
                <input
                  type="submit"
                  name="submit"
                  value="Submit"
                  className="btn btn-success"
                 
                />
              </div>

              </form>

            </div>
            </div>
           
            </Container>
        </React.Fragment>
    );
}

export default Changetext;