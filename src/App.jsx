import Header from "./componets/Header";
import MainContent from "./componets/MainContent";
import { Provider } from "react-redux";
import "./index.css";
import store from "./assets/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./componets/VideoContainer";
import WatchPage from "./WatchPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainContent />,
        children: [
            {
                path: "/",
                element: <VideoContainer />,
            },
            {
                path: "watch",
                element: <WatchPage />,
            },
        ],
    },
]);

const App = () => {
    return (
        <>
            <Provider store={store}>
                <Header />
                <RouterProvider router={router} />
            </Provider>
        </>
    );
};

export default App;
