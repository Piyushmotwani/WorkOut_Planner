import {useAuthContext} from './useAuthContext'
import { useWorkoutsContext } from './useWorkoutsContext'

const useLogout = () => {

    const {dispatch} = useAuthContext()
    const {dispatch : WorkoutsDispatch} = useWorkoutsContext()
    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({
            type:'LOGOUT',

        })
        WorkoutsDispatch({
            type:'SET_WORKOUTS',
            payload:null
        })
    }
    return {logout}
}
export default useLogout
