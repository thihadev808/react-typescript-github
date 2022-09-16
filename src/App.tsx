import React, { useState } from 'react';
import ReactPaginate from "react-paginate"
import SearchArea from './components/SearchArea'
import SearchedList from "./components/SearchedList"

export interface IState {
  repositories: {
    id: number,
    name: string,
    description: string,
    html_url: string,
    owner: any,
    stargazers_count: number
  }[]
}

function App() {
  const [repositories, setRepositories] = useState<IState["repositories"]>([])
  const [pageNumber, setPageNumber] = useState(0);

  const repositoriesPerPage = 5;
  const pagesVisited = pageNumber * repositoriesPerPage;

  const displayRepositories = repositories.slice(pagesVisited, pagesVisited + repositoriesPerPage)
  const pageCount = Math.ceil(repositories.length / repositoriesPerPage);

  const changePage = ({selected}: any) => {
    setPageNumber(selected)
  }

  return (
    <div className="app">
      <h1>Search Github Repositories</h1>
      <SearchArea repositories={repositories} setRepositories={setRepositories} />
      <SearchedList repositories={displayRepositories} />
      {repositories.length > 0 &&
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="paginateButtons"
          previousLinkClassName="previousButton"
          nextLinkClassName="nextButton"
          disabledClassName="paginationDisabled"
          activeClassName="paginationActive"
        />
      }
    </div>
  );
}

export default App;
