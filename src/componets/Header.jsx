import React from "react";
import { useDispatch } from "react-redux";
import { toggelSidebar } from "../assets/sideBarVisibleSlice";

const Header = () => {

    const dispatch=useDispatch()

    const handleMenuClick=()=>{
        dispatch(toggelSidebar());
    }


    return (
        <header className="fixed z-10 bg-white w-full flex p-4 items-center justify-around shadow-md">
            <div className="menu justify-self-start cursor-pointer" onClick={()=>handleMenuClick()}>Menu</div>
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
