import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  children?: ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  children,
}: HeroSectionProps) {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight animate-fade-in-up">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light animate-fade-in-up animate-delay-100">
          {subtitle}
        </p>
        {children && (
          <div className="animate-fade-in-up animate-delay-200">{children}</div>
        )}
      </div>
    </section>
  );
}
