import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import './Userlist.css'
import { Link } from "react-router-dom";

export default function Userlist() {


  const [userdata,setUserdata] = useState([])

  const getdata= async ()=>{
      try {
          const response = await axios.get('http://localhost:3001/api/get')
          setUserdata(response.data);
      } catch (error) {
          console.log(error);
      }   
  }
  useEffect(()=>{
    getdata();
},[])



const deleteUser = (id) => {
  axios.delete(`http://localhost:3001/api/remove/${id}`);
}
  const columns=[
      {
          name:"User name",
          selector:row =>row.name,
      },
      {
          name:"User Email",
          selector: (row) =>row.email,
      },
      {
          name:"Status",
          selector:(row) =>row.status,
      },
      {
          name:"Current Date",
          selector:(row) =>row.createdate,
      },
      {
          name:"Modifieddate",
          selector:(row) =>row.modifieddate,
      },
      {
        name:"Action",
        cell:(row)=><div className='row'>
            <div className='col-12'>
             <button className='btn view'>view</button>
             <button className='btn edit'>edit</button>
             <button  onClick={() => deleteUser()} className='btn delete'>delete</button>
             </div>
        </div>,

      
      }

  ]



  return (
    <div>
      <DataTable 
      title="User List" 
      columns={columns}
       data={userdata} 
       pagination
       fixedHeader
       fixedHeaderScrollHeight='400px'
        
        />
    </div>
  )
}
