import React from 'react';
import Venom from '../../venom-1.jpg'
import Hulk from '../../hulk-1.jpg'
import VenomTwo from '../../venom-2.jpg'



function HeaderContent() {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <h1 className="title">Mavel's Fearless</h1>
                    <p className="subtitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
                        molestias earum eveniet.
                    </p>
                    <div className="search-bar">
                        <input type="search" placeholder="Search" />
                    </div>

                    {/* Sample Wallpaper */}
                    <div className="sample-wallpaper">
                        {/* Wallpaper #1 */}
                        <article className="wallpaper">
                            <img src={Venom} alt="Wallpaper #1" className="wallpaper" />
                        </article>

                        {/* Wallpaper #2 */}
                        <article className="wallpaper">
                            <img src={Hulk} alt="Wallpaper #1" className="wallpaper" />
                        </article>

                        {/* Wallpaper #3 */}
                        <article className="wallpaper">
                            <img src={VenomTwo} alt="Wallpaper #1" className="wallpaper" />
                        </article>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HeaderContent
