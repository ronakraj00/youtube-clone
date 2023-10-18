import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "./assets/constants";
import { useDispatch } from "react-redux";
import { hideSideBar } from "./assets/sideBarVisibleSlice";

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParam] = useSearchParams();
    const id = searchParam.get("v");
    const [video, setVideo] = useState();
    useEffect(() => {
        dispatch(hideSideBar());
        fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=` +
                GOOGLE_API_KEY
        )
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setVideo(response.items[0]);
            });
    },[]);
    return (
        <div className="p-8">
            <iframe
                width="1100"
                height="550"
                src={"https://www.youtube.com/embed/" + id}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <div>
                <h3 className="text-lg">{video?.snippet?.title}</h3>
            </div>
        </div>
    );
};

export default WatchPage;
