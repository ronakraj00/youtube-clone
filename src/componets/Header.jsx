import React from "react";

const Header = () => {
    return (
        <header className="flex p-4 items-center justify-around">
            <div className="menu justify-self-start">Menu</div>
            <div className="youtube-logo">
                <img
                    src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
                    alt="youtube-logo"
                    className="h-14"
                />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" className="border border-black p-1 rounded-l-full"/>
                <button className="border border-black p-1 rounded-r-full"> Search </button>
            </div>
            <div className="user-profile">User</div>
        </header>
    );
};

export default Header;
