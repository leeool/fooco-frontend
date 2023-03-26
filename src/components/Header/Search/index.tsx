import React from "react"
import UseMatchWindowSize from "src/hooks/UseWindowSize"
import { Container, SearchContainer } from "./styles"

const Search = () => {
  const match = UseMatchWindowSize(1100)

  return (
    <Container className="search">
      <SearchContainer>
        <input type="search" placeholder="Pesquisar..." />
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
      </SearchContainer>
    </Container>
  )
}

export default Search
