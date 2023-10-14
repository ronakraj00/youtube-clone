import React from "react";

const Sidebar = () => {
    return (
        <div className="sidebar shadow-lg  w-60 p-2"> 
            <ul className="p-2">
                <li className="p-1 px-4 hover:bg-gray-100 border rounded-lg my-1">Home</li>
                <li className="p-1 px-4 hover:bg-gray-100 border rounded-lg my-1">Shorts</li>
                <li className="p-1 px-4 hover:bg-gray-100 border rounded-lg my-1">Subscriptions</li>
            </ul>

            <ul className="p-2">
                <li className="p-1 px-4 hover:bg-gray-100 border rounded-lg my-1">Library</li>
                <li className="p-1 px-4 hover:bg-gray-100 border rounded-lg my-1">History</li>
                <li className="p-1 px-4 hover:bg-gray-100 border rounded-lg my-1">Your videos</li>
                <li className="p-1 px-4 hover:bg-gray-100 border rounded-lg my-1">Watch Later</li>
                <li className="p-1 px-4 hover:bg-gray-100 border rounded-lg my-1">Your Clips</li>
                <button>Show More</button>
            </ul>

            <div>
                <p>Subscriptions</p>
                <ul className="p-2">
                </ul>
            </div>
            <div>
              <p>Explore</p>
              <ul className="p-2">
                <li className="p-1 px-4 hover:bg-gray-100 border rounded-lg my-1">Trending</li>
                <li className="p-1 px-4 hover:bg-gray-100 border rounded-lg my-1">Music</li>
                <li className="p-1 px-4 hover:bg-gray-100 border rounded-lg my-1">Films</li>
                <li className="p-1 px-4 hover:bg-gray-100 border rounded-lg my-1">Gaming</li>
              </ul>
            </div>
        </div>
    );
};

export default Sidebar;
