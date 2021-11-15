import React from 'react'
import styled  from 'styled-components';





const NotFoundEffect=styled.div`
text-align: center;
width:100%;
height:100%;
color: #111;
font-size: 30px;
`



  
const NotFound=({text})=>{

    return (
          <>
            {text ? <NotFoundEffect>NotFound</NotFoundEffect> : " "}
          </>
    );
  }
  
  export default NotFound;

