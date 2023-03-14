import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addItens } from '../../redux/modules/itens/action'
import Cards from '../../components/common/Cards/Cards'
import api from '../../services/api'

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
  const dispatch = useDispatch();

  useEffect(() => {
    async function getItens() {
      try {
        const response = await api.get<iItens[]>('posts') 
        dispatch(addItens(response.data))
      } catch (error) {
        console.error(error)
      }
    }
    
    getItens()
  }, [dispatch])

  return (
    <Cards/>
  )
}

export default DefaultPage