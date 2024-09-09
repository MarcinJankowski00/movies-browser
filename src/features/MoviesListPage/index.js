import { Header } from "../../common/Header/styled";
import { Container } from "../../common/Container/styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesList, selectImagePath, selectLoading } from "../../core/moviesListPage/moviesListSlice";
import MoviesList from "../MoviesList";
import { useEffect } from "react";
import Paginator from "../../common/Paginator";
import { selectCurrentPage } from "../../core/actual/actualStateSlice";

export const MoviesListPage = () => {

    const movies = useSelector(selectImagePath);
    const loading = useSelector(selectLoading);
    const page = useSelector(selectCurrentPage);
    const size = {
        small: "w200",
        large: "w400",
    }
    const baseURL = `${"https://image.tmdb.org/t/p/"}${size.large}`;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMoviesList());
    }, [dispatch, page]);

    if (loading === true) return <p>Loading Page (spinner)</p>;

    return (
        <Container>
            <Header>Popular movies</Header>
            <MoviesList
                movies={movies}
                baseurl={baseURL}
            />
            <Paginator />
        </Container>
    );
};

export default MoviesListPage;