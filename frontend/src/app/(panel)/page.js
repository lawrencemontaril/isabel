import Link from "next/link";
import Image from "next/image";

async function getAlbums() {
  const res = await fetch("http://127.0.0.1:8000/api/albums/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const albums = res.json();
  console.log(albums);

  return albums;
}

export default async function Panel() {
  const albums = await getAlbums();

  if (!albums) return <h1>No albums</h1>;

  const albumList = albums.map((album, index) => {
    return (
      <Link
        href={`/album/${album.id}`}
        key={album.id}
        className="max-w-[8rem] flex-1 basis-32 cursor-pointer rounded-md bg-zinc-900 p-2 hover:bg-zinc-800"
      >
        <Image
          width={256}
          height={256}
          priority
          className="mb-1 aspect-square w-full rounded-sm bg-zinc-800"
          src={album.cover}
          alt={`${album.title} album`}
        />
        <h4 className="mb-0.5 max-w-full overflow-hidden text-ellipsis text-nowrap text-xs">
          {album.title}
        </h4>
        <p className="text-[0.6rem]">{album.artist.name}</p>
      </Link>
    );
  });

  return (
    <>
      <h1 className="py-2 text-2xl font-bold">Albums</h1>
      <div className="flex flex-row flex-wrap gap-2 py-2 text-white">
        {albumList}
      </div>
    </>
  );
}
