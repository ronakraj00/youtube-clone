import Header from "./componets/Header";
import MainContent from "./componets/MainContent";
import { Provider } from "react-redux";
import "./index.css"
import store from "./assets/store";
const App = () => {
    return (
        <>
            <Provider store={store}>
            <Header/>
            <MainContent/>
            </Provider>
        </>
    );
};

export default App;
