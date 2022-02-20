import type { NextPage } from 'next';
import MovieList from '../components/MovieList';
import Slider from '../components/Slider';
import Head from 'next/head';
import Brand from '../components/Brand';

function Brands() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-4 px-8 max-w-[1400px] mx-auto">
        <Brand brand="disnep" bgVideo="disney"/>
        <Brand brand="marvel" bgVideo="marvel"/>
        <Brand brand="pixar" bgVideo="pixar"/>
        <Brand brand="starwars" bgVideo="star-wars"/>
        <Brand brand="national-geographic" bgVideo="national-geographic"/>
    </section>
  );
}

const Home: NextPage = ({movies, tv}) => {
  console.log(tv[1].slice(0,8))
  return (
    <>
      <Slider />
      <Brands />
      <MovieList tag="Recommended for you" movies={movies[0].slice(0,8)} />
      <MovieList tag="Top Rated" movies={movies[1].slice(0,8)} />
      <MovieList tag="TV Shows" movies={tv[0].slice(0,8)} />
      <MovieList tag="Disney+ Originals" movies={tv[1].slice(0,8)} />
    </>
  )
}

export async function getStaticProps(): Promise<{ props: {}, revalidate: number }> {
  const [popularMovies, topRatedMovies, popularTv, topRatedTv] = await Promise.all([fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`), fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.TMDB_API_KEY}`), fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`), fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.TMDB_API_KEY}`)]);

  const movies = [[...(await popularMovies.json()).results], [...(await topRatedMovies.json()).results]];
  const tv = [[...(await popularTv.json()).results], [...(await topRatedTv.json()).results]];
  return {
    props: {
      movies,
      tv
    },
    revalidate: 69
  }
}
export default Home
