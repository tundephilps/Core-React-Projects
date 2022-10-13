import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";

function SearchFilter()
{
  const [data, setData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterVal, setFilterVal] = useState('');
   
  useEffect( ()=>{
    const fetchData=()=> {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setData(json)
        setSearchApiData(json)

      })
      
    }
fetchData();
  },[]);

  const handleFilter=(e)=>{
    if(e.target.value == '') {
        setData(searchApiData)
    } else {
        const filterResult = searchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setData(filterResult)
    }
    setFilterVal(e.target.value)
}
  return(

        <React.Fragment>              
         <Container>
        <div className='row mt-3'> 
            <div className='col-md-12 mt-3 mb-3  flex flex-col align-items-center justify-center'>
              <h3 className='mb-3 text-center'>Search Filter Implementation In React Hooks With Dynamic Data</h3>    
              <p>With data fetched from a Json Placeholder API</p>            
                <div className="col-md-6">                
                <input  type="text" name='name' value={filterVal} className="form-control" onInput={(e)=>handleFilter(e)} placeholder='Search...' />
              </div>          
            </div>

            <div className='col-md-12'>
            <table className="table" style={{ color: "green" }}>
              <thead>
                <tr>
                  <th>Sr. No </th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index)=>{
                    return(
                        <tr key={index}>
                        <td>{index+1} </td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.address.suite}, {item.address.street} {item.address.city}</td>
                        </tr>
                       
                    )
                     }) 
                }  
              </tbody>
            </table>
            </div>
        </div>
      </Container>

        </React.Fragment>
    );
}
export default SearchFilter;