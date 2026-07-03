export const VISION_PRO = {
  id: "vision-pro",
  name: "Apple Vision Pro",
  price: 89_999_000,
  currency: "VND",
  image: "/hero-vision-pro.png",
  description: "Kính thực tế hỗn hợp đột phá cho kỷ nguyên điện toán không gian.",
} as const;

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(amount);
}
