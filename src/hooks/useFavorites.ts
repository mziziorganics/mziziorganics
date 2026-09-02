import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "mzizi-favorites";
const EVENT = "mzizi-favorites-change";

const read = (): string[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
};

const write = (ids: string[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    // ignore
  }
  window.dispatchEvent(new CustomEvent(EVENT));
};

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() =>
    typeof window === "undefined" ? [] : read()
  );

  useEffect(() => {
    const sync = () => setFavorites(read());
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    const current = read();
    write(current.includes(id) ? current.filter((f) => f !== id) : [...current, id]);
  }, []);

  const isFavorite = useCallback((id: string) => favorites.includes(id), [favorites]);

  const removeFavorite = useCallback((id: string) => {
    write(read().filter((f) => f !== id));
  }, []);

  return { favorites, toggleFavorite, isFavorite, removeFavorite };
};
