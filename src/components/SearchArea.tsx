import React, { useState } from 'react';
import { IState as Props } from "../App"
import axios from "axios"

interface IProps {
  repositories: Props["repositories"]
  setRepositories: React.Dispatch<React.SetStateAction<Props["repositories"]>>
}


const SearchArea:React.FC<IProps> = ({ repositories, setRepositories}) => {
  const [inputValue, setinputValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputValue(e.target.value)
  }

  const handleSearch = ():void => {
    axios.get(`https://api.github.com/search/repositories?q=${inputValue}`)
      .then(response => {
        setRepositories(response.data.items)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleClear = ():void => {
    setinputValue("")
    setRepositories([])
  }

  return (
    <div className="searchArea">
      <div className="searchArea_input">
        <input type="text" placeholder="react etc..." value={inputValue} onChange={handleChange} name="value"/>
      </div>
      <button className="searchArea_search" onClick={handleSearch}>Search</button>
      <button className="searchArea_clear" onClick={handleClear}>Clear</button>
    </div>
  )
}

export default SearchArea