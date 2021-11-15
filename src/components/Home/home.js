import {React,useState,useEffect} from 'react';
import axios from 'axios';
import MainSection from '../MainSection/mainSection'
import NavBar from '../NavBar/navbar';
import NotFound from '../NotFoundPage/NotFound'

 
var APIKey='24330918-cdfda0593b13da36a224add5b'





const Home = () => {
  
  const [ImageData,setImageData]=useState(null) 
  const [SearchQuery,setSearchQuery]=useState('') 
  const [istext,setisText]=useState('Loading...')



useEffect(()=>{
     const SearchImage=async ()=>{
      const response=await axios(`https://pixabay.com/api/?key=${APIKey}&q=${SearchQuery}&image_type=photo&pretty=true`)
      if(response){
        setImageData(response.data.hits)
       }
     else{
      console.log('error')
     }}
     
   
     SearchImage()
  
  },[SearchQuery])

  const UpdateSearchQuery=(e)=>{
    setSearchQuery(e.target.value)
    setTimeout(()=>setisText('No Image Found'),1000)
    setisText('Loading...')
  }
   
  const NullSearchQuery=()=>{
    setSearchQuery('')
  }

  

    return (
           <>
           
           <NavBar SearchQuery={SearchQuery} UpdateSearchQuery={UpdateSearchQuery} NullSearchQuery={NullSearchQuery} />
           <MainSection ImageData={ImageData}/> 
           <NotFound ImageData={ImageData} text={istext} />
          
           </>
    )
}

export default Home
