import { Cpu, Ratio } from "lucide-react";

const specs = [
  {
    icon: Cpu,
    title: "M2 & R1",
    label: "Sức mạnh xử lý kép",
    description:
      "Chip M2 cung cấp hiệu năng đỉnh cao, trong khi chip R1 hoàn toàn mới xử lý dữ liệu cảm biến với độ trễ gần như bằng không.",
  },
  {
    icon: Ratio,
    title: "23 Triệu",
    label: "Điểm ảnh Micro-OLED",
    description:
      "Hệ thống hiển thị tùy chỉnh đóng gói nhiều điểm ảnh hơn một TV 4K cho mỗi mắt, mang lại độ sắc nét đáng kinh ngạc.",
  },
];

export default function TechSpecsSection() {
  return (
    <section
      id="specs"
      className="mx-auto max-w-container-max border-t border-white/5 px-margin-mobile py-section-gap md:px-gutter"
    >
      <h2 className="mb-stack-lg text-center font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg">
        Công nghệ cốt lõi
      </h2>

      <div className="grid grid-cols-1 gap-stack-md md:grid-cols-2">
        {specs.map((spec) => (
          <div
            key={spec.title}
            className="glass-panel group relative flex h-[250px] flex-col overflow-hidden rounded-2xl p-8"
          >
            <spec.icon
              className="absolute -right-10 -bottom-10 h-[150px] w-[150px] text-on-surface opacity-10"
              strokeWidth={1}
            />
            <h3 className="font-display-2xl-mobile text-display-2xl-mobile text-gradient-blue mb-2">
              {spec.title}
            </h3>
            <p className="mb-4 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
              {spec.label}
            </p>
            <p className="mt-auto font-body-md text-body-md text-on-surface/80">
              {spec.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
