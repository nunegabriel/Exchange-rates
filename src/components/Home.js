/* eslint-disable */
import React from "react";

const Home = () => {
    return (
        <div className="Home">
             <div className="Hero">
            <div className="navbar">
                <div className="logo ">
                    XChange
                </div>
            </div>
            <div className="home-items">
                <div className="text-desc">
                    The Trusted Currency Authority
                    Check exchange rates,
                </div>
                <div className="text-2">
                track rates, and free currency tools
                </div>
                <form>
                <input className="search" placeholder="Search Currency" />
                <button className="btn-search">Search</button>

                </form>
            </div>

        </div>
        </div>
    )
}

export default Home;