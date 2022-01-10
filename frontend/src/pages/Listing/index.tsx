import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";

function Listing() {

    return (

        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-md-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-md-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-md-3 mb-3">
                        <MovieCard />
                    </div>
                </div>

            </div>


        </>
    );

}

export default Listing;