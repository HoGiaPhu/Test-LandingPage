import Image from "next/image";
import { Eye, Hand, LayoutGrid } from "lucide-react";

const EYESIGHT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDZQpUpfXAVvmsKxb4lwl4zWfGN2PYJNbEaxks7Lgac_aDbf-_NcMJpAzkeanQRmzrzQ-v1qF59_hp5PbtMUeO8p2Zfq_Y6r8yh2ypgs8Sat8q4pzosN7XEKXzrLsL_1AEjj_Yu-5wmy0J7yoa4rqxhOhPIod71IVDSl2kICu3CRfhAlEUyHqjxJVfUeLBQzMAOk9601DlRUjiB4JloF9gP0XU3XpHgCi0cihQP28sIrgHMaIRAXTIiE4zV7sj8zo4U01H6vqPcs3Y";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-gutter"
    >
      <h2 className="mb-stack-lg text-center font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg">
        Trải nghiệm vượt giới hạn
      </h2>

      <div className="grid grid-cols-1 gap-stack-md md:grid-cols-12">
        <div className="glass-panel group relative flex min-h-[400px] flex-col justify-end overflow-hidden rounded-2xl p-8 md:col-span-8">
          <div className="absolute inset-0 z-0 bg-surface-container-low/50 transition-colors duration-500 group-hover:bg-surface-container-low/30" />
          <div className="pointer-events-none absolute -top-12 -right-12 z-0 h-64 w-64 rounded-full bg-galaxy-blue/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
          <LayoutGrid
            className="pointer-events-none absolute top-0 right-0 z-0 size-[150px] translate-x-1/4 -translate-y-1/4 text-on-surface opacity-5 transition-all duration-500 group-hover:text-galaxy-blue group-hover:opacity-20"
            strokeWidth={0.75}
            aria-hidden
          />
          <div className="z-10">
            <LayoutGrid className="mb-4 h-10 w-10 text-primary" strokeWidth={1.5} />
            <h3 className="mb-2 font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
              Không gian không giới hạn
            </h3>
            <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
              Giải phóng ứng dụng khỏi màn hình truyền thống. Canvas kỹ thuật số của
              bạn mở rộng ra toàn bộ căn phòng.
            </p>
          </div>
        </div>

        <div className="glass-panel group relative flex min-h-[400px] flex-col justify-end overflow-hidden rounded-2xl p-8 md:col-span-4">
          <div className="absolute inset-0 z-0 bg-surface-container-low/50 transition-colors duration-500 group-hover:bg-surface-container-low/30" />
          <div className="pointer-events-none absolute -top-12 -right-12 z-0 h-64 w-64 rounded-full bg-galaxy-blue/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
          <Hand
            className="pointer-events-none absolute top-0 right-0 z-0 size-[150px] translate-x-1/4 -translate-y-1/4 text-on-surface opacity-5 transition-all duration-500 group-hover:text-galaxy-blue group-hover:opacity-20"
            strokeWidth={0.75}
            aria-hidden
          />
          <div className="z-10">
            <Hand className="mb-4 h-10 w-10 text-primary" strokeWidth={1.5} />
            <h3 className="mb-2 font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
              Điều khiển tự nhiên
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Tương tác mượt mà bằng ánh mắt và đôi tay của bạn. Không cần tay cầm
              điều khiển.
            </p>
          </div>
        </div>

        <div className="glass-panel group relative flex min-h-[300px] flex-col items-center gap-stack-lg overflow-hidden rounded-2xl p-8 md:col-span-12 md:flex-row">
          <div className="absolute inset-0 z-0 bg-surface-container-low/50 transition-colors duration-500 group-hover:bg-surface-container-low/30" />
          <div className="z-10 md:w-1/2">
            <Eye className="mb-4 h-10 w-10 text-primary" strokeWidth={1.5} />
            <h3 className="mb-2 font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:font-headline-lg md:text-headline-lg">
              Gắn kết thực tại với EyeSight
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Luôn kết nối với người xung quanh. Màn hình ngoài hiển thị đôi mắt của
              bạn khi có người đến gần.
            </p>
          </div>
          <div className="relative z-10 h-full min-h-[200px] w-full overflow-hidden rounded-xl md:w-1/2">
            <Image
              src={EYESIGHT_IMAGE}
              alt="EyeSight display on Vision Pro"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
