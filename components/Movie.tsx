import Image from 'next/image';

export default function Movie({movie}) {
  return (
    <div className="movie_container h-[200px] w-[140px] rounded hover:-translate-y-2 hover:shadow-2xl border border-[#f9f9f9] border-opacity-0 hover:scale-105 hover:border-opacity-80 duration-200 transition">
      <Image className="object-cover px-2 py-1 mx-2 my-1 rounded movie" src={`https://images.tmdb.org/t/p/w500${movie.poster_path}`} height={200} width={140}/>
    </div>
  );
}
