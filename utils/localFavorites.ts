

const toggleFavorites = (id: number) => {

  //obtiene de favoritos
  let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]');
  //                                    .getItem obtiene el valor de la key 'favorites' en el localStorage
  //                                    luego JSON.parse convierte el string a un array de números, si llega null devuelve []


  //Verifica si el id pasado como parámetro ya está presente en la lista de favoritos.
  //Si está presente, lo elimina de la lista.
  //Si no está presente, lo agrega a la lista de favoritos.
  if ( favorites.includes(id) ) {
    favorites = favorites.filter(pokeId => pokeId !== id); // excluye el pokemon que sea diferente del id pasado por parámetro
    // y retorna un nuevo arreglo sin ese pokemon 
  } else {
    favorites.push( id );
  }

  // guardamos en localStorage,     JSON.stringify Convierte el array de números (favorites) en un string JSON antes de almacenarlo en el localStorage con el key 'favorites'.
  localStorage.setItem('favorites', JSON.stringify( favorites ))

}

const existInFavorites = ( id: number ): boolean => {

  if (typeof window === 'undefined') {
    return false
  }

  const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]');

  return favorites.includes( id );
}

const pokemons = (): number[] => {
  return JSON.parse( localStorage.getItem('favorites') || '[]');
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  pokemons,
  toggleFavorites,
  existInFavorites
}