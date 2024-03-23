import { useContext } from "react"
import { AuthContext } from "../provider/auth.provider"

export const useAuth = () => {
    return useContext(AuthContext)
}