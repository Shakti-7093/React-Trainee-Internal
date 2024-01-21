import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <h3>Shakti Developers</h3>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about-us'>About</Link>
                </li>
                <li>
                    <Link to='/todo'>Todo</Link>
                </li>
                <li>
                    <Link to='/counter-app'>Counter</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar