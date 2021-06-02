import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchAdvList } from "../redux/actions/advAction"

const useFetchAdvList = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAdvList())
    }, [])
}

export default useFetchAdvList;