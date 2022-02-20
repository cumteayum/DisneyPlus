import Movie from './Movie';

export default function MovieList({ movies, tag}) {
  return (
    <>
    <h1 className="mt-4 ml-8 text-xl font-semibold">{tag}</h1>
    <div className="mt-2 mb-4 ml-8 mr-4 flex-nowrap lg:movie_list grid lg:grid-cols-8 md:grid-cols-6 gap-2">
      {movies.map(movie => (
        <Movie
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
    </>
  );
}
