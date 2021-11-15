import React,{useState} from 'react'
import styled from 'styled-components';
import {FiSearch} from 'react-icons/fi'
import {FaTimes} from 'react-icons/fa';



const NavConatinerSection=styled.nav`
position: sticky;
width: 100%;
padding-top:20px;
height:80px;
margin-top:-80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
z-index:1;
box-sizing: border-box;
top: 0;
background:#000;

`

const NavContainer=styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
margin: 5px 250px;
`
const LogoLink=styled.div`

position:relative;
width:250px;
display: grid;
justify-content:center;
font-size:35px;
color:#fff;
top:-8px;
font-weight:600;


@media screen and (max-width:468px){
   position:absolute;
   justify-content: start;
   left:1rem;
   font-size:25px;
   top:20px ;
}

`

const SearchContainer=styled.div`
position: relative;
display: flex;
height:4rem;


@media screen and (max-width:468px){
    right:-5rem;
}

`



const SearchIcon=styled.i`
position: absolute;
top:35%;
right: 1rem;
transform: translateY(-50%);
font-size:1.3rem;
color: #888;
transition: all 0.35s;

`

const Search=styled.input`
height: inherit;
width: 16rem ;
height:2.6rem;
border: 2px solid #888;
border-radius: 0.5rem;
outline: none;
background: transparent;
color:#f7f7f7;
font-size: 1rem ;
text-indent:1rem;
transition: all 0.35s;

/* &:focus+ span{
  display: none;
} */


@media screen and (max-width:468px){
    width: 10rem;
}



`

const NavBar = ({SearchQuery,UpdateSearchQuery,NullSearchQuery}) => {

    const[searchFocused,setSearchFocused]= useState(false)

    return (
       <>
        <NavConatinerSection>
           <NavContainer>
               <LogoLink>ImageHub</LogoLink>
               <SearchContainer>
                   <Search onInput={()=>{setSearchFocused(true)}} placeholder='Search' value={SearchQuery} onChange={UpdateSearchQuery} />
                    <SearchIcon>
                        {searchFocused ? <FaTimes onClick={()=>{setSearchFocused(false); NullSearchQuery()}} /> : <FiSearch />}
                    </SearchIcon> 
               </SearchContainer>
             </NavContainer>
        </NavConatinerSection>
       </>
    )
}

export default NavBar
