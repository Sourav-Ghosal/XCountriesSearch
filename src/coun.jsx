import { useState,useEffect } from "react";

const Tile=({Url,name,alt})=>{
    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"10px",border:"1px solid black",borderRadius:"8px",flexDirection:"column",width:"200px"}}>
            <img src={Url} alt={alt} style={{width:"100px",height:"100px"}} />
            <h2>{name}</h2>
        </div>
    )
}




export default function Coun(){
    const API="https://restcountries.com/v3.1/all";
    const[countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch(API)
        .then((response)=>response.json())
        .then((data)=>setCountries(data));
    },[]);
    const[search,setSearch]=useState('');
    console.log({countries});
    return(
            <div>
                <div className="input" style={{display:"flex",height:'35px',justifyContent:"center",background:"#F5F5F5"}}>
                    <input style={{width:"50vw", height:'20px'}}type="text" placeholder="Search for countries" onChange={(e)=>{setSearch(e.target.value)}} />
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"flex-start",height:"100vh",flexWrap:"wrap"}}>
                    {countries.filter((item)=>{return search.toLocaleLowerCase()==="" ? item :item.name.common.toLowerCase().includes(search)}).map((country)=><Tile key={country.cca3} Url={country.flags.png} name={country.name.common} alt={country.flags.alt} />)}
                </div>
            </div>

    )
}