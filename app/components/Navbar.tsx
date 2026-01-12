import { Link } from "react-router"

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="text-2xl font-bold text-gradient"><p>ResuMind</p></Link>
            <Link to="/upload" className="primary-button w-fit"><p>Upload Resume</p></Link>
        </nav>
    );
}