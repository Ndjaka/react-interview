import './app.scss'
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";

function App() {


    return (
        <div className={"container"}>
            <div className={"container__header"}>
                <h1 >Movies</h1>
                <Filter/>
            </div>
            <MovieList/>
            <Pagination/>
        </div>
    )
}

export default App
