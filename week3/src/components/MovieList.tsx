import { useState } from 'react';
import { useMovieStore } from '../store/useMovieStore';

export const MovieList = () => {
    const movies = useMovieStore((state) => state.movies);
    const toggleWatched = useMovieStore((state) => state.toggleWatched);

    const [filter, setFilter] = useState<'all' | 'watched' | 'unwatched'>('all');

    const filteredMovies = (() => {
        if (filter === 'watched') {
            return movies.filter((m) => m.watched);
    }
        if (filter === 'unwatched') {
            return movies.filter((m) => !m.watched);
    }
        return movies;
    })();   

    return (<div>
    <h1>Movie List</h1>
    <div style ={{ marginBottom: '10px' }}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('watched')}>Watched</button>
        <button onClick={() => setFilter('unwatched')}>Unwatched</button>
    </div>

<ul>
    {filteredMovies.map((movie) => (
        <li key={movie.id}>
            <span style={{textDecoration: movie.watched ? "line-through" : "none",marginRight: "10px",}}>
            {movie.title}
            </span>
            <button onClick={() => toggleWatched(movie.id)}>
                {movie.watched ? 'Mark Unwatched' : 'Mark Watched'}
            </button>
        </li>
    ))}
</ul>
</div>

);
};
