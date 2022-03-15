import React,{useState,useEffect} from "react";
import Displayimages from "./displayimages";

const Animalimages= () => {
    const [animaldata,setAnimaldata]=useState([])
    const [page,setpage]=useState(1)
    useEffect(() => {
        fetch(`
        https://api.unsplash.com/search/photos/?page=${page}&query="animals"&order_by="latest"&per_page=9&client_id=${process.env.REACT_APP_GALLERY_API_KEY}`)
        .then(res => res.json())
        .then(data => setAnimaldata(data.results))
        .catch(err => console.log(err))
    },[page])
    return(
        <div>
           <Displayimages images={animaldata} />
           <div className="buttons">
           {page>1 && <button onClick={() => setpage(page-1)} >Prev</button>}
         <button onClick={() => setpage(page+1)} >Next </button>
           </div>
        </div>
    )
}

export default Animalimages;