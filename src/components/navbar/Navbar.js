import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <a href="#">Hulk</a>
                    {/* Currently Active */}
                    <a href="#" class="logo is-active">Mavel</a>
                    <a href="#">Venom</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
