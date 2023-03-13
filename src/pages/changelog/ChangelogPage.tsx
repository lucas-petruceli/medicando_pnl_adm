import React, { useState, useEffect } from 'react'

type Props = {}

const ChangelogPage = (props: Props) => {
  let count = 0
  console.log(`ChangeLogPage ${count++}`)

  useEffect(() => {
    console.log(`useEffect ${count++}`)
  })

  return (
    <div>
      ChangelogPage
    </div>
  )
}

export default ChangelogPage