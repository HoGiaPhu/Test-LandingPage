import Link from "next/link";

const footerLinks = [
  { href: "#", label: "Chính sách bảo mật" },
  { href: "#", label: "Điều khoản sử dụng" },
  { href: "#support", label: "Liên hệ" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 bg-white py-stack-lg dark:border-white/10 dark:bg-surface-container-lowest">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-stack-md px-margin-mobile md:flex-row">
        <div className="font-display-2xl text-headline-lg-mobile font-bold text-on-surface">
          Vision Pro
        </div>

        <div className="flex gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body-md text-label-sm text-on-surface transition-colors hover:text-galaxy-blue dark:text-on-surface-variant dark:hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="font-body-md text-label-sm text-on-surface dark:text-on-surface-variant">
          © 2024 Vision Pro. Thiết kế bởi Tương Lai
        </div>
      </div>
    </footer>
  );
}
