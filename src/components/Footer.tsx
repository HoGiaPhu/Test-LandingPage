import Link from "next/link";

const footerLinks = [
  { href: "#", label: "Chính sách bảo mật" },
  { href: "#", label: "Điều khoản sử dụng" },
  { href: "#support", label: "Liên hệ" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container-lowest py-stack-lg">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-stack-md px-margin-mobile opacity-80 transition-opacity hover:opacity-100 md:flex-row">
        <div className="font-display-2xl text-headline-lg-mobile text-on-surface">
          Vision Pro
        </div>

        <div className="flex gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-body-md text-label-sm text-on-surface-variant transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="font-body-md text-label-sm text-on-surface">
          © 2024 Vision Pro. Thiết kế bởi Tương Lai.
        </div>
      </div>
    </footer>
  );
}
