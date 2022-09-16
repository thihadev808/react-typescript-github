import React from 'react'
import { IState as IProps } from "../App"

const SearchedList: React.FC<IProps> = ({ repositories }) => {

  const renderList = ():JSX.Element[] => {
    return repositories.map((repository) => {
      return (
        <div className="searchedItem" key={repository.id}>
          <a className="searchedItem_link" href={repository.html_url} target="_blank" rel="noreferrer">{repository.name}</a>
          <p className="searchedItem_desc">{repository.description}</p>
          <p className="searchedItem_createdBy">Created By : <a href={repository.owner.html_url} target="_blank" rel="noreferrer">{repository.owner.login}</a></p>
          <p className="searchedItem_stars">★ {repository.stargazers_count}</p>
        </div>
      )
    })
  }

  return (
    <div className="searchedList">
      {renderList()}
    </div>
  )
}

export default SearchedList