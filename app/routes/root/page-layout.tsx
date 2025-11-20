import { Link, useNavigate } from "react-router"
import { logoutUser } from "~/appwrite/auth"

const PageLayout = () => {
    const navigate = useNavigate()

    const handleLogout = async () =>{
        await logoutUser()
        navigate('/sign-in')
    }

  return (
    <div>
        <button
            onClick={handleLogout}
            className="cursor-pointer"
        >
            <img src="/assets/icons/logout.svg" alt="logout" className="size-6" />
        </button>

        <Link
            to="/dashboard"
            className="cursor-pointer"
        >
            Dashboard
        </Link>
    </div>
  )
}

export default PageLayout