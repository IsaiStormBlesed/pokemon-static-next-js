const toggleFavorites = (id: number) => {
  let ids: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");

  if (ids.includes(id)) {
    ids = ids.filter((i) => i !== id);
  } else {
    ids.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(ids));
};

const isThereMyPokemon = (id: number): boolean => {
  if (typeof window === "undefined") return false;

  let ids: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");
  return ids.includes(id);
};

const getFavoritesPokemon = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  toggleFavorites,
  isThereMyPokemon,
  getFavoritesPokemon,
};
