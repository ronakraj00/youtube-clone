import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API_URL } from "../assets/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const suggestionTags = [
    "All",
    "music",
    "movies",
    "anime",
    "india",
    "javascript",
    "react",
    "songs",
    "css",
];

const Tag = ({ text }) => {
    return (
        <button className="px-2 py-1 bg-gray-200 rounded-md m-1">{text}</button>
    );
};
const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(YOUTUBE_VIDEO_API_URL)
            .then((response) => response.json())
            .then((response) => {
                setVideos(response.items);
            });
    }, []);

    return (
        <div>
            <div className="suggestion-tag p-2 text-center">
                {suggestionTags.map((text, index) => (
                    <Tag key={text + index} text={text} />
                ))}
            </div>
            <div className="videos-list flex flex-wrap justify-center">
                {videos.map((video) => (
                    <Link to={"watch?v=" + video.id} key={video.id}>
                        <VideoCard video={video} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default VideoContainer;
