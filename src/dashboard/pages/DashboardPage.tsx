import { Button } from "@/components/ui/button"
import { logout } from "@/store/auth/authSlice"
import { useDispatch } from "react-redux"

const DashboardPage = () => {

  const dispatch = useDispatch()
  return (
    <div className="p-4 flex flex-col gap-4">
      DashboardPage
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </div>
  )
}

export default DashboardPage
