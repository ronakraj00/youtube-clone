import React from "react";
import { useDispatch } from "react-redux";
import { toggelSidebar } from "../assets/sideBarVisibleSlice";

const Header = () => {
    const dispatch = useDispatch();

    const handleMenuClick = () => {
        dispatch(toggelSidebar());
    };

    return (
        <header className="fixed z-10 bg-white w-full flex p-4 items-center justify-around shadow-md">
            <div
                className="menu justify-self-start cursor-pointer"
                onClick={() => handleMenuClick()}
            >
                <img
                    src="https://assets.stickpng.com/images/588a6507d06f6719692a2d15.png"
                    alt="manu-bar"
                    className="h-6"
                />
            </div>
            <div className="youtube-logo mr-auto">
                <img
                    src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
                    alt="youtube-logo"
                    className="h-14"
                />
            </div>
            <div className="search-bar w-3/5">
                <input
                    type="text"
                    placeholder="Search"
                    className="border border-black p-1 rounded-l-full w-3/4"
                />
                <button className="border border-black p-1 rounded-r-full">
                    {" "}
                    Search{" "}
                </button>
            </div>
            <div className="user-profile ml-auto">User</div>
        </header>
    );
};

export default Header;
