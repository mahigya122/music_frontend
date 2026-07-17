import { Link } from "react-router-dom";
import PromptComposer from "@/components/PromptComposer";
import { Music, Music2, Guitar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="dark relative w-full h-screen min-h-[720px] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-compose.mp4"
        poster="/images/hero-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Scrim for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0.5) 100%), linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 30%)",
        }}
      />

      {/* Breadcrumb */}
      <div className="absolute top-7 left-8 z-10 flex items-center gap-2 text-sm text-white/60">
        <Link to="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-white font-medium">Compose</span>
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-[16%] z-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#e5c060] via-[#ffffff] to-[#e5c060] font-semibold tracking-tight text-[clamp(28px,4vw,46px)] leading-tight">
            The best AI composer for musicians
          </h1>
          <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-xl mx-auto mt-4">
            Describe a piece in plain language. Neural composition meets
            architectural music theory along with AI-powered chord progressions.
          </p>

          <div className="mt-8">
            <PromptComposer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;