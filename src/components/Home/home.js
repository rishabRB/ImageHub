import {React,useState,useEffect} from 'react';
import axios from 'axios';
import MainSection from '../MainSection/mainSection'
import NavBar from '../NavBar/navbar';
import NotFound from '../NotFoundPage/NotFound'

 
var APIKey='24330918-cdfda0593b13da36a224add5b'





const Home = () => {
  
  const [ImageData,setImageData]=useState([]) 
  const [SearchQuery,setSearchQuery]=useState('') 
  const [istext,setisText]=useState(false)



     const SearchImage=async ()=>{
      const response=await axios(`https://pixabay.com/api/?key=${APIKey}&q=${SearchQuery}&image_type=photo&pretty=true`)
      if(response){
        setImageData(response.data.hits)
       }
     else{
      console.log('error')
     }}
  
  

  const UpdateSearchQuery=(e)=>{

    setisText(false)
    setSearchQuery(e.target.value)
    SearchImage()
     if(ImageData==0){
     console.log(ImageData.length)
     setisText(!istext)
  }
}
   
  const NullSearchQuery=()=>{
    setSearchQuery('')
    setisText(false)
  }

  

    return (
           <>
           
           <NavBar SearchQuery={SearchQuery} UpdateSearchQuery={UpdateSearchQuery} NullSearchQuery={NullSearchQuery} />
           <MainSection ImageData={ImageData}/> 
           <NotFound text={istext} /> 
          
           </>
    )
}

export default Home
