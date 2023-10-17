import React from "react";

const VideoCard = ({ video }) => {
    return (
        <div className="w-96 p-2">
            <div className="h-52 overflow-hidden grid place-content-center rounded-xl">
                <img
                    className=""
                    src={video.snippet.thumbnails.high.url}
                    alt=""
                />
            </div>
            <h3 className="">{video.snippet.title}</h3>
            <h3>{video.snippet.channelTitle}</h3>
            <h3>{parseInt(video.statistics.viewCount / 1000000)}M views</h3>
        </div>
    );
};

export default VideoCard;
