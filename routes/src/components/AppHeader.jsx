import { Link } from "react-router-dom"

const AppHeader = () => {
    return (
        <header style={{ backgroundColor: "#fff" }}>
            <nav style={{ display: "flex", padding: "8px" }}>
                <a style={{ color: "black", fontWeight: "bold" }}>Routes</a>
                <div style={{ fontWeight: "bold" }}>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
        </header>
    )
}

export default AppHeader