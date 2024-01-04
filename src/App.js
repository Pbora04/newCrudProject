import axios from 'axios'
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Read from './Read';
import { useState } from 'react';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/create' element={<Create />}></Route>
      <Route path='/update/:id' element={<Update />}></Route>
      <Route path='/read/:id' element={<Read />}></Route>
    </Routes>
    </BrowserRouter>
  );
}
//=======================================================

// 

// import React,{ PureComponent, useEffect, useState,Component } from "react"
// import AgainWork2 from './AgainWork2'
// import Again2 from './Again2'
// import CompA from './CompA'
// import CompC from './CompC'

// export default App;

//=============================================================================

// const App = ()=>{
  
//   useEffect(()=>{
//     fetch('http://localhost:3000/student', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//   },[])
//   let PostData = {
//     "name": "Sumit Gusain",
//     "email": "gusainsumit555@gmail.com",
//     "phone": "09654976708"
//   }
//   return(
//     <>
//     </>
//   )
// } 
// export default App

//=======================================================

// const App = ()=>{

//   const data = {
//     name:"",
//     lastName:""
//   }
//   const [userData,setUserData] = useState(data)

 // const [getdata,setDetData] = useState([])

//  const checkData =(e)=>{
//   //console.log(e.target.value)
//   // setUserData({name : "",lastName : "Sumit"})
//    setUserData({...userData,[e.target.name]:e.target.value})
//  }
//  const postData = ()=>{
//   console.log(userData)
//   axios.post("https://jsonplaceholder.typicode.com/users",userData)
//   .then((res)=>{
//     console.log(res)
//   })
//  }
//   useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//   method: 'DELETE',
// })
//   function deleteData(id){

//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//       method: 'DELETE',})
//   }
  
//   return(<>
//   <button onClick={()=>deleteData(9)}>delete</button>
//   </>)
// }
  // useEffect//(()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/users")
  //   .then((res)=>{
  //        console.log(res.data)
  //        setDetData(res.data)
  //   })
  //  },[])
  //  return(<>
  //  <input type="text" placeholder='Enter name' name='name' value={userData.name} onChange={(e)=>checkData(e)} /><br></br>
  //  <input type="text" placeholder='Enter lastname' name='lastName' value={userData.lastName} onChange={(e)=>checkData(e)} />
  //  <button onClick={(e)=>postData(e)}>add data</button>
  
    {/* {
      getdata.map((item)=>{
        return <div key={item.id}>{item.name}-{item.username}</div>
      })
    } */}

//    </>)
// }

//export default App;


//=======================================================================
//pure component
// class App extends Component{
//   constructor(){
//     super()
//     this.state={
//       count:0
//     }
//   }
//   render(){
//     //console.log("component render")
//     return(<>
//     <AgainWork2 counter = {this.state.count}/>
//       <h2>{this.state.count}</h2>
      
//       <button onClick={()=>this.setState({count:1})}>inc</button>
//     </>)
//   }
// }
// export default App;
//======================================================================

// const App = ()=>{ 
//   return(
//     <>
//     {/* <CompA /> */}
//     <CompC />
//     </>
//   )
  // const [count,setCount] = useState(0)
  // const [data,setData] = useState(400)
  // return(<>
  // <Again2 dataMemo={data}/>
  // <h2>{count}</h2>
  // <button onClick={()=>setCount(count+1)}>inc</button>
  {/* <Again2/> */}
  // }

export default App;