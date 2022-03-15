import React,{useState,useEffect} from "react";
import Displayimages from "./displayimages";

const Villageimages= () => {
    const [villagedata,setVillagedata]=useState([])
    const [page,setpage]=useState(1)
    useEffect(() => {
        fetch(`
        https://api.unsplash.com/search/photos/?page=${page}&per_page=9&query="clouds"&client_id=${process.env.REACT_APP_GALLERY_API_KEY}`)
        .then(res => res.json())
        .then(data => setVillagedata(data.results))
        .catch(err => console.log(err))
    },[page])
    return(
        <div>
           <Displayimages images={villagedata} />
           <div className="buttons">
           {page>1 && <button onClick={() => setpage(page-1)} >Prev</button>}
         <button onClick={() => setpage(page+1)} >Next </button>
           </div>
        </div>
    )
}

export default Villageimages;