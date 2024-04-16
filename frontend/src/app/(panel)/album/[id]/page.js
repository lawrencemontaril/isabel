import Image from "next/image";
import Button from "./Button";

async function getAlbum(albumId) {
  const res = await fetch(`http://127.0.0.1:8000/api/albums/${albumId}/`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function AlbumPage({ params }) {
  const album = await getAlbum(params.id);

  return (
    <div className="p-2">
      <div className="flex gap-2">
        <Image
          width={640}
          height={640}
          src={album.cover}
          className="w-32 rounded-md"
          alt={`${album.title} album`}
        />
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-2xl font-bold">{album.title}</h1>
          <p>{album.artist.name}</p>
        </div>
      </div>
    </div>
  );
}
