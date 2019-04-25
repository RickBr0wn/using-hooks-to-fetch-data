import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledLineItem = styled.div`
  list-style: none;
  padding: 10px;

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default function Data() {
  const [data, setData] = useState({ hits: [] })
  const [query, setQuery] = useState('redux')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      )
      setData(result.data)
    }
    fetchData()
  }, [query])

  console.log(data)

  return (
    <>
      <input
        type='text'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul>
        {data.hits.map(item => {
          const tags = item._tags
          console.log(tags)
          return (
            <StyledLineItem key={item.objectID}>
              <a href={item.url}>
                <p>{item.title}</p>
                <p>{item.created_at}</p>
                <div>
                  {item._tags.map(tag => (
                    <p>{tag}</p>
                  ))}
                </div>
              </a>
            </StyledLineItem>
          )
        })}
      </ul>
    </>
  )
}
