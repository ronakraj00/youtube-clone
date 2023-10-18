import React from "react";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const MainContent = () => {
    const sideBarVisible = useSelector((store) => store.sidebar.isVisible);

    return (
        <div className="flex pt-20">
            {sideBarVisible?<Sidebar/>:null}
            <Outlet/>
        </div>
    );
};

export default MainContent;
