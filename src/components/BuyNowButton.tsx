"use client";

import { useShop } from "@/contexts/ShopContext";
import { useToast } from "@/contexts/ToastContext";

export default function BuyNowButton() {
  const { addToCart, isInCart, openCart } = useShop();
  const { showToast } = useToast();

  function handleBuyNow() {
    if (!isInCart) {
      addToCart();
      showToast("Đã thêm Vision Pro vào giỏ hàng");
    } else {
      showToast("Vision Pro đã có trong giỏ hàng");
    }
    openCart();
  }

  return (
    <button
      type="button"
      data-track="hero_buy_now"
      onClick={handleBuyNow}
      className="btn-primary px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest"
    >
      Đặt mua ngay
    </button>
  );
}
