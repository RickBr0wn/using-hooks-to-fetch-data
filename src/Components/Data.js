import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledLineItem = styled.a`
  list-style: none;
  padding: 10px;
  text-decoration: none;
  color: inherit;
`

const StyledP = styled.p`
  font-size: 10px;
`

const StyledFlexBox = styled.div`
  display: flex;
`

const StyledContainer = styled.div``

export default function Data() {
  const [data, setData] = useState({ hits: [] })
  const [query, setQuery] = useState('redux')
  const [input, setInput] = useState(query)

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
      <div className='red search'>
        <input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={() => setQuery(input)}>find</button>
      </div>
      <div className='browser'>
        <ul>
          {data.hits.map(item => {
            const tags = item._tags
            console.log(item.objectID)
            return (
              <StyledLineItem href={item.url} key={item.objectID}>
                <p>{item.title}</p>
                <p>{item.created_at}</p>
                <StyledFlexBox>
                  {tags.map(tag => (
                    <StyledP>{tag}</StyledP>
                  ))}
                </StyledFlexBox>
              </StyledLineItem>
            )
          })}
        </ul>
      </div>
    </>
  )
}
