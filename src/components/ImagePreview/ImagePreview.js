import React from 'react'
import styled from 'styled-components'


const ImagePreviewContaine=styled.div`
margin:5px;
box-sizing: border-box;

`

const Image=styled.img`
width:400px;
height:350px;
border-radius: 20px;
filter: blur(5px);

&:hover{
  filter: blur(0);
  box-sizing: border-box;
}

@media screen and (max-width:468px){
    width:150px;
    height:150px;
    filter: brightness(1);
}

;

`



const ImagePreview = ({previewURL,pageURL}) => {
  
    return (
            <>
              
                <ImagePreviewContaine>
                    <Image onClick={()=>window.location.replace(pageURL)} src={previewURL} />
                </ImagePreviewContaine>
              
           
            </>
    )
}

export default ImagePreview
