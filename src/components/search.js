import React,{useState,useEffect} from "react";
import Displayimages from "./displayimages";

const Search=() => {
    const [input,setInput]=useState("")
    const [imagesdata,setImagesdata]=useState([])
    const [page,setpage]=useState(1)
    useEffect(() => {
       fetchData()
    },[page])
    const handleSearch=(e) => {
        if (e.key === 'Enter') {
            fetchData();
          }
    }
    const setValue=(e) => {
            setInput(e.target.value)
    }
    const fetchData=() => {
        fetch(`
        https://api.unsplash.com/search/photos/?page=${page}&per_page=21&query=${input}?${input}:"trees"&client_id=${process.env.REACT_APP_GALLERY_API_KEY}`)
        .then(res => res.json())
        .then(data => setImagesdata(data.results))
        .catch(err => console.log(err))
        setInput(" ")
    }
    return(
        <div>
        <div className="searchbar">
            <input type="text" placeholder="Search Here ....." onKeyDown={handleSearch} onInput={setValue} value={input}/>
            <button type="submit"  onClick={fetchData}>Search</button>
            </div>
            {input && <Displayimages images={imagesdata} />}
            <div className="buttons">
           {page>1 && <button onClick={() => setpage(page-1)} >Prev</button>}
         <button onClick={() => setpage(page+1)} >Next </button>
           </div>
        </div>
    )
}

export default Search;