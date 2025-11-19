import { useNavigate } from "react-router"
import { logoutUser } from "~/appwrite/auth"

const Home = () => {
    const navigate = useNavigate()

    const handleLogout = async () =>{
        await logoutUser()
        navigate('/sign-in')
    }

  return (
    <button
        onClick={handleLogout}
        className="cursor-pointer"
    >
        <img src="/assets/icons/logout.svg" alt="logout" className="size-6" />
    </button>
  )
}

export default Home