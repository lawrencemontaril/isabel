"use client";

export default function Button({ album }) {
  function handleClick() {
    console.log(album.artist.name);
  }

  return <button onClick={handleClick}>click</button>;
}
