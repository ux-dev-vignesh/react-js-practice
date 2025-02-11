import AppContent from "../components/AppContent"
import AppFooter from "../components/AppFooter"
import AppHeader from "../components/AppHeader"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <div>
            <AppHeader />
            <AppContent><Outlet /></AppContent>
            <AppFooter />
        </div>
    )
}

export default MainLayout