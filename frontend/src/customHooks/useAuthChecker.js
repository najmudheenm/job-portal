import {useNavigate}from 'react-router-dom'
import {useEffect} from 'react'
import {useSelector} from 'react-redux'

export function useAuthChecker(){
    const navigate=useNavigate()
    const user =useSelector(user=>user.admin)
    useEffect(() => {
        if(!user.email.length){
          navigate("/login")
        }
      },[user])
    
}