"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ShoppingBag, X } from "lucide-react";
import { useShop } from "@/contexts/ShopContext";
import { useToast } from "@/contexts/ToastContext";
import { VISION_PRO, formatPrice } from "@/lib/product";

export default function ShopPanel() {
  const { cart, recentlyViewed, removeFromCart, cartCount, isCartOpen, openCart, closeCart } =
    useShop();
  const { showToast } = useToast();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isCartOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  const drawer =
    isCartOpen && mounted
      ? createPortal(
          <>
            <div
              className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm"
              onClick={closeCart}
              aria-hidden
            />
            <aside
              role="dialog"
              aria-modal="true"
              aria-label="Giỏ hàng"
              className="fixed top-0 right-0 z-[201] flex h-dvh w-full max-w-sm flex-col border-l border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-[#1f1f1f]"
            >
              <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 dark:border-white/10">
                <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-[#e2e2e2]">
                  Giỏ hàng
                </h3>
                <button
                  type="button"
                  onClick={closeCart}
                  aria-label="Đóng"
                  className="rounded-full p-1 text-[#1d1d1f] transition-colors hover:bg-black/5 dark:text-[#e2e2e2] dark:hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-6">
                {cart.length === 0 ? (
                  <p className="text-sm text-[#3a3a3c] dark:text-[#cfc4c5]">
                    Giỏ hàng trống
                  </p>
                ) : (
                  <div className="flex gap-3 rounded-xl border border-black/10 p-3 dark:border-white/10">
                    <Image
                      src={VISION_PRO.image}
                      alt={VISION_PRO.name}
                      width={72}
                      height={72}
                      className="h-[72px] w-[72px] shrink-0 rounded-lg object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-[#1d1d1f] dark:text-[#e2e2e2]">
                        {VISION_PRO.name}
                      </p>
                      <p className="text-sm font-medium text-galaxy-blue">
                        {formatPrice(VISION_PRO.price)}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          removeFromCart(VISION_PRO.id);
                          showToast("Đã xóa khỏi giỏ hàng");
                        }}
                        className="mt-1 text-xs text-[#6e6e73] hover:text-[#1d1d1f] dark:hover:text-white"
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                )}

                {recentlyViewed.length > 0 && (
                  <section>
                    <h4 className="mb-3 text-xs font-medium uppercase tracking-widest text-[#3a3a3c] dark:text-[#cfc4c5]">
                      Đã xem gần đây
                    </h4>
                    <ul className="space-y-2 text-sm text-[#1d1d1f] dark:text-[#e2e2e2]">
                      {recentlyViewed.map((id) => (
                        <li key={id}>{VISION_PRO.name}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </aside>
          </>,
          document.body
        )
      : null;

  return (
    <>
      <button
        type="button"
        data-track="shop_open"
        onClick={openCart}
        className="relative text-on-surface/60 transition-colors hover:text-on-surface"
        aria-label="Xem giỏ hàng"
      >
        <ShoppingBag className="h-5 w-5" />
        {cartCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-galaxy-blue text-[10px] text-white">
            {cartCount}
          </span>
        )}
      </button>
      {drawer}
    </>
  );
}
