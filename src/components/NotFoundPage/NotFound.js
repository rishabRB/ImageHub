import React from 'react'
import styled  from 'styled-components';





const NotFoundEffect=styled.div`
text-align: center;
width:100%;
height:100%;
color: #111;
font-size: 30px;
`



  
const NotFound=({ImageData,text})=>{

    return (
          <>
             {ImageData ? <NotFoundEffect>{text}</NotFoundEffect> :''}
          </>
    );
  }
  
  export default NotFound;

