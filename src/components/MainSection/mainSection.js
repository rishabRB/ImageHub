import React from 'react'
import styled from 'styled-components';
import ImagePreview from '../ImagePreview/ImagePreview';



const Container=styled.div`
margin-top:100px;
width: 100%;
height: 100%;
display: flex;
padding:20px;
box-sizing: border-box;
flex-direction: row;
flex-wrap:wrap;
justify-content:space-around;

`

const MainSection = ({ImageData}) => {

    return (
        <>
         <Container>
              {ImageData ? ImageData.map((image)=>
             <ImagePreview key={image.id}  
              previewURL={image.largeImageURL} 
              pageURL={image.pageURL}/>) : ''}
        
         </Container>
        </>
    )
}

export default MainSection
