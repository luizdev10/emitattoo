import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";

import bgStart from "../assets/img/bg-start.png";

import foto1 from "../assets/img/foto1.png";
import foto2 from "../assets/img/foto2.png";
import foto3 from "../assets/img/foto3.png";
import foto4 from "../assets/img/foto4.png";
import foto5 from "../assets/img/foto5.png";
import foto6 from "../assets/img/foto6.png";
import foto7 from "../assets/img/foto7.png";
import foto8 from "../assets/img/foto8.png";
import foto9 from "../assets/img/foto9.png";

const photosWork = [
  { id: 1, url: foto1, tag: "Realismo", alt: "Tatuagem realista de escultura clássica", desc: "Tatuagem realista, escultura clássica, com contraste marcante e riqueza de detalhes." },
  { id: 2, url: foto2, tag: "Colorida", alt: "Tatuagem colorida do Homem-Aranha", desc: "Tatuagem colorida do Homem-Aranha com traço vibrante, alto contraste e acabamento em estilo comic." },
  { id: 3, url: foto3, tag: "Black and grey", alt: "Tatuagem black and grey de samurai", desc: "Tatuagem em black and grey com temática samurai, unindo força e tradição em uma composição imponente, com profundidade de sombras e detalhes que destacam armadura, postura e presença." },
  { id: 4, url: foto4, tag: "Realismo", alt: "Tatuagem realista do Homem de Ferro em black and grey", desc: "Tatuagem realista do Homem de Ferro em black and grey, com contraste forte e sombreamento preciso." },
  { id: 5, url: foto5, tag: "Black and grey", alt: "Tatuagem black and grey de caveira samurai", desc: "Tatuagem em black and grey com caveira samurai, combinando simbolismo e impacto visual em uma composição marcante, com sombras profundas e detalhes que reforçam atitude, força e personalidade." },
  { id: 6, url: foto6, tag: "Realismo", alt: "Tatuagem realista do Chester Bennington em black and grey", desc: "Tatuagem realista em black and grey do Chester Bennington, capturando emoção e intensidade em cada detalhe, com contraste forte e acabamento que homenageia sua presença e legado." },
  { id: 7, url: foto7, tag: "Anime", alt: "Tatuagem do Vegeta em black and grey", desc: "Tatuagem do Vegeta em black and grey com traço de anime, expressão marcante e sombreamento equilibrado, trazendo atitude e fidelidade ao personagem em uma peça cheia de personalidade." },
  { id: 8, url: foto8, tag: "Black and grey", alt: "Tatuagem black and grey de múmias", desc: "Tatuagem em black and grey com composição de múmias, explorando textura, contraste e profundidade para criar uma peça sombria, expressiva e cheia de impacto visual." },
  { id: 9, url: foto9, tag: "Fineline", alt: "Tatuagem de mariposa em black and grey", desc: "Tatuagem de mariposa em black and grey com traço delicado e simbologia mística, unindo equilíbrio, contraste suave e detalhes finos para uma peça elegante e cheia de significado." },
];

function Trabalhos() {
  const [openIndex, setOpenIndex] = useState(null);
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i - 1 + photosWork.length) % photosWork.length),
    []
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i + 1) % photosWork.length),
    []
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, prev, next]);

  const current = isOpen ? photosWork[openIndex] : null;

  return (
    <section
      id="trabalhos"
      className="scroll-m-20 relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-neutral-900 px-6 py-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-top bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${bgStart})` }}
      />

      <div className="relative z-10 flex w-full max-w-6xl flex-col">
        <div className="mb-10">
          <span className="block font-[Pirata_One] text-5xl md:text-6xl lg:text-7xl text-gray-400">ALGUNS</span>
          <h2 className="block font-[Pirata_One] text-6xl md:text-7xl lg:text-8xl text-gray-200">TRABALHOS</h2>
        </div>

        <div className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
          {photosWork.map((item, index) => (
            <article
              key={item.id}
              className="group relative flex min-w-[82vw] snap-center flex-col overflow-hidden rounded-xl border border-amber-100/20 bg-neutral-950 shadow-lg shadow-black/30 transition-colors hover:border-amber-500/50 sm:min-w-[320px] md:min-w-0"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Ampliar: ${item.alt}`}
                className="relative block cursor-zoom-in overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-neutral-950/70 px-3 py-1 font-[Montserrat] text-xs uppercase tracking-widest text-amber-100/90 backdrop-blur-sm">
                  {item.tag}
                </span>
              </button>

              <p className="flex-1 px-4 py-3 font-[Montserrat] text-sm tracking-wide text-amber-100/85">
                {item.desc}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-2 text-center font-[Montserrat] text-xs uppercase tracking-widest text-gray-400 md:hidden">
          Arraste para ver mais →
        </p>

        <a
          href="https://www.instagram.com/pedromenezes_3/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-fit items-center justify-center gap-3 rounded-full bg-amber-600 px-6 py-3 font-[Medula_One] text-2xl text-neutral-900 transition-colors hover:bg-amber-500"
        >
          <SiInstagram className="h-5 w-5" />
          VER MAIS NO INSTAGRAM
        </a>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-4 top-4 rounded-full p-2 text-gray-200 transition-colors hover:bg-white/10"
          >
            <X className="h-7 w-7" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-200 transition-colors hover:bg-white/10 md:left-6"
          >
            <ChevronLeft className="h-9 w-9" />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full max-w-3xl flex-col items-center"
          >
            <img
              src={current.url}
              alt={current.alt}
              className="max-h-[75vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-4 max-w-2xl text-center font-[Montserrat] text-sm text-amber-100/85">
              {current.desc}
              <span className="mt-2 block text-xs text-gray-500">
                {openIndex + 1} / {photosWork.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Próxima foto"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-200 transition-colors hover:bg-white/10 md:right-6"
          >
            <ChevronRight className="h-9 w-9" />
          </button>
        </div>
      )}
    </section>
  );
}

export default Trabalhos;
