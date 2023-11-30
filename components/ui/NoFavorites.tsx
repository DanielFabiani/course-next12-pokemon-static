import Image from "next/image";

const NoFavorites = () => {
  return (
    <div className="mt-[100px] flex h-full flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold">No hay nada en Favoritos</h1>
      <Image
        className="opacity-50"
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        }
        alt="Picachu"
        width={250}
        height={250}
      />
    </div>
  );
};
export default NoFavorites;
