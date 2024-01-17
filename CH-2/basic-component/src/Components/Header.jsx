import React from 'react'

export default function Header() {
    return (
        <>
            <div className='container mx-auto'>
                <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-body rounded">
                    <div className="container-fluid">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link" href="#About">About</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link" href="#Blog">Blog</a>
                            </li>
                            <li className="nav-item ms-3">
                                <a className="nav-link" href="#Contact">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <div className="input-group">
                                <input type="text" className="form-control p-2" placeholder="Search here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text p-2" id="basic-addon2">Search</span>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
        </>
    )
}
