import Image from "next/image";

export default function Brand({brand, bgVideo}) {
  return (
      <div className="brand group">
        <Image src={`/images/${brand}.png`} layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden object-cover rounded-lg group-hover:inline"
        >
          <source src={`/videos/${bgVideo}.mp4`} type="video/mp4" />
        </video>
      </div>
  );
}

