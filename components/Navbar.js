import Link from 'next/link'
const Navbar = () => {
    return (
        <div>
            <nav>
            <div className="logo">
             <Link href="/"> Tech Solution</Link>
            </div>
            <div className="nav__items">
                <Link href = "/">Home</Link>
                <Link href = "/authors">Authors</Link>
                <Link href = "/services">Services</Link>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
