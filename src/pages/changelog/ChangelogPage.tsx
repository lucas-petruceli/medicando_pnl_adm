import React, { useState, useEffect } from 'react'

type Props = {}

const ChangelogPage = (props: Props) => {
  const [itens, setItens] = useState([])

  let count = 0
  console.log(`ChangeLogPage ${count++}`)

  useEffect(() => {
    console.log(`useEffect ${count++}`)
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then((data) => setItens(data))
    .catch((error) => console.log(error))


  }, [])

  return (
    <div>
      ChangelogPage
      <ul>
        {itens.map((it) => (
          <li key={it['id']}> {it['title']}</li>
        ))}
      </ul>
    </div>
  )
}

export default ChangelogPage