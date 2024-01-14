import { useState } from "react"
import SearchBox from "../components/search/search-box"

export default function Search({data}){
    const {slug}= data || {}
    const [searchQuery, setSearchQuery] =useState('')
    return (
        
        
      <SearchBox/>
       
    )
}



const defaultProps={
    props:{
        data:{slug:'search'}
    },
    revalidate: 1
}