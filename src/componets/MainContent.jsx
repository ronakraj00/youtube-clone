import React from "react";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContent = () => {
    const sideBarVisible = useSelector((store) => store.sidebar.isVisible);

    return (
        <div className="flex pt-20">
            {sideBarVisible?<Sidebar/>:null}
            <VideoContainer />
        </div>
    );
};

export default MainContent;
