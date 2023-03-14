import React, { useState, useEffect } from 'react'

type Props = {}

const ChangelogPage = (props: Props) => {
  const [itens, setItens] = useState([])

  let count = 0
  useEffect(() => {
    if (count === 0) {
      fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => setItens(data))
      .catch((error) => console.log(error))
    }
    count++
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