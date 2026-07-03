"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { VISION_PRO } from "@/lib/product";

type ShopContextValue = {
  cart: string[];
  favorites: string[];
  recentlyViewed: string[];
  isCartOpen: boolean;
  addToCart: () => void;
  removeFromCart: (id: string) => void;
  toggleFavorite: () => void;
  openCart: () => void;
  closeCart: () => void;
  isFavorite: boolean;
  isInCart: boolean;
  cartCount: number;
};

const ShopContext = createContext<ShopContextValue | null>(null);
const PRODUCT_ID = VISION_PRO.id;

function load<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    setCart(load<string[]>("vp-cart", []));
    setFavorites(load<string[]>("vp-favorites", []));
    setRecentlyViewed(load<string[]>("vp-recent", []));
    setRecentlyViewed((prev) => {
      const next = [PRODUCT_ID, ...prev.filter((id) => id !== PRODUCT_ID)].slice(
        0,
        5
      );
      localStorage.setItem("vp-recent", JSON.stringify(next));
      return next;
    });
  }, []);

  const persist = useCallback(
    (key: string, value: string[]) => localStorage.setItem(key, JSON.stringify(value)),
    []
  );

  const addToCart = useCallback(() => {
    setCart((prev) => {
      if (prev.includes(PRODUCT_ID)) return prev;
      const next = [...prev, PRODUCT_ID];
      persist("vp-cart", next);
      return next;
    });
  }, [persist]);

  const removeFromCart = useCallback(
    (id: string) => {
      setCart((prev) => {
        const next = prev.filter((item) => item !== id);
        persist("vp-cart", next);
        return next;
      });
    },
    [persist]
  );

  const toggleFavorite = useCallback(() => {
    setFavorites((prev) => {
      const next = prev.includes(PRODUCT_ID)
        ? prev.filter((id) => id !== PRODUCT_ID)
        : [...prev, PRODUCT_ID];
      persist("vp-favorites", next);
      return next;
    });
  }, [persist]);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const value = useMemo(
    () => ({
      cart,
      favorites,
      recentlyViewed,
      isCartOpen,
      addToCart,
      removeFromCart,
      toggleFavorite,
      openCart,
      closeCart,
      isFavorite: favorites.includes(PRODUCT_ID),
      isInCart: cart.includes(PRODUCT_ID),
      cartCount: cart.length,
    }),
    [
      cart,
      favorites,
      recentlyViewed,
      isCartOpen,
      addToCart,
      removeFromCart,
      toggleFavorite,
      openCart,
      closeCart,
    ]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within ShopProvider");
  return ctx;
}
