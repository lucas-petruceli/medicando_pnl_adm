import { useEffect, useState } from 'react'
import api from '../../services/api'
import CardStyle from '../../styles/card'

type Props = {}

export interface iItens {
  id: string,
  description: string,
  book: string,
  subway: string,
  location: string,
  picture: string,
  createdOn: string,
  updatedAt: string,
  deletedAt: string
}

const DefaultPage = (props: Props) => {
  const [itens, setItens] = useState<iItens[] | []>([])

  useEffect(() => {
    async function getItens() {
      try {
        const response = await api.get<iItens[]>('posts') 
        setItens(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    
    getItens()
  }, [])

  return (
    <CardStyle>
      {
        itens.map((item, index) => {
            return (
              <li key={ index }>
                <img src={ item.picture } alt={ item.book }/>
                <h2>{ item.book }</h2>
                <p>{ item.description }</p>
                <p>{ item.location }</p>
                <p>{ item.subway }</p>
              </li>
            )
        })
      }
    </CardStyle>
  )
}

export default DefaultPage