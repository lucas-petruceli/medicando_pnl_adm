import { ReactNode, useEffect } from "react"
import { useDispatch } from "react-redux"
import { setAppState } from "../../redux/features/appStateSlice"

type Props = {
  state?: string,
  children: ReactNode
}

const PageWrapper = (props: Props) => {
  // console.log("PageWrapper")
  const dispatch = useDispatch()

  useEffect(() => {
    // console.log("PageWrapper useEffect")
    if(props.state) {
      dispatch(setAppState(props.state))
    }
  }, [dispatch, props])

  return (
    <>{props.children}</>
  )
}

export default PageWrapper