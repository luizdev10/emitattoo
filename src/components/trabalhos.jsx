import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import Reveal from "./reveal.jsx";

import foto1 from "../assets/img/foto1.webp";
import foto2 from "../assets/img/foto2.webp";
import foto3 from "../assets/img/foto3.webp";
import foto4 from "../assets/img/foto4.webp";
import foto5 from "../assets/img/foto5.webp";
import foto6 from "../assets/img/foto6.webp";
import foto7 from "../assets/img/foto7.webp";
import foto8 from "../assets/img/foto8.webp";
import foto9 from "../assets/img/foto9.webp";

const photosWork = [
  { id: 3, url: foto3, tag: "Black and grey", alt: "Tatuagem black and grey de samurai", desc: "Tatuagem em black and grey com temática samurai, unindo força e tradição em uma composição imponente, com profundidade de sombras e detalhes que destacam armadura, postura e presença." },
  { id: 1, url: foto1, tag: "Realismo", alt: "Tatuagem realista de escultura clássica", desc: "Tatuagem realista, escultura clássica, com contraste marcante e riqueza de detalhes." },
  { id: 6, url: foto6, tag: "Realismo", alt: "Tatuagem realista do Chester Bennington em black and grey", desc: "Tatuagem realista em black and grey do Chester Bennington, capturando emoção e intensidade em cada detalhe, com contraste forte e acabamento que homenageia sua presença e legado." },
  { id: 2, url: foto2, tag: "Colorida", alt: "Tatuagem colorida do Homem-Aranha", desc: "Tatuagem colorida do Homem-Aranha com traço vibrante, alto contraste e acabamento em estilo comic." },
  { id: 5, url: foto5, tag: "Black and grey", alt: "Tatuagem black and grey de caveira samurai", desc: "Tatuagem em black and grey com caveira samurai, combinando simbolismo e impacto visual em uma composição marcante, com sombras profundas e detalhes que reforçam atitude, força e personalidade." },
  { id: 4, url: foto4, tag: "Realismo", alt: "Tatuagem realista do Homem de Ferro em black and grey", desc: "Tatuagem realista do Homem de Ferro em black and grey, com contraste forte e sombreamento preciso." },
  { id: 7, url: foto7, tag: "Anime", alt: "Tatuagem do Vegeta em black and grey", desc: "Tatuagem do Vegeta em black and grey com traço de anime, expressão marcante e sombreamento equilibrado, trazendo atitude e fidelidade ao personagem em uma peça cheia de personalidade." },
  { id: 9, url: foto9, tag: "Fineline", alt: "Tatuagem de mariposa em black and grey", desc: "Tatuagem de mariposa em black and grey com traço delicado e simbologia mística, unindo equilíbrio, contraste suave e detalhes finos para uma peça elegante e cheia de significado." },
  { id: 8, url: foto8, tag: "Black and grey", alt: "Tatuagem black and grey de múmias", desc: "Tatuagem em black and grey com composição de múmias, explorando textura, contraste e profundidade para criar uma peça sombria, expressiva e cheia de impacto visual." },
];

function Trabalhos() {
  const [openIndex, setOpenIndex] = useState(null);

  const lista = photosWork;
  const total = lista.length;
  const isOpen = openIndex !== null;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => setOpenIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setOpenIndex((i) => (i + 1) % total), [total]);

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

  const current = isOpen ? lista[openIndex] : null;

  return (
    <section id="trabalhos" className="textura-grao scroll-mt-16 w-full bg-grafite px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-gotica text-6xl lowercase leading-none text-papel md:text-8xl">trabalhos</h2>
          <p className="mt-4 max-w-md text-cinza">
            Uma seleção de peças recentes. Toque numa foto para ver em tamanho maior.
          </p>
        </Reveal>

        <div className="mt-12 columns-2 gap-3 sm:gap-5 lg:columns-3">
          {lista.map((item, index) => (
            <figure key={item.id} className="mb-3 break-inside-avoid sm:mb-5">
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Ampliar: ${item.alt}`}
                className="group relative block w-full cursor-zoom-in overflow-hidden rounded-sm"
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className="w-full transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 flex items-center justify-center bg-tinta/0 opacity-0 transition-all duration-300 group-hover:bg-tinta/30 group-hover:opacity-100"
                >
                  <ZoomIn className="h-8 w-8 text-papel" strokeWidth={1.5} />
                </span>
              </button>
            </figure>
          ))}
        </div>

        <a
          href="https://www.instagram.com/walneytattooink/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-sm border border-white/20 px-5 py-3 text-papel transition-colors hover:border-papel"
        >
          <SiInstagram className="h-4 w-4" />
          Ver mais no Instagram
        </a>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-tinta/95 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={close}
            autoFocus
            aria-label="Fechar"
            className="absolute right-4 top-4 rounded-full p-2 text-papel transition-colors hover:bg-white/10"
          >
            <X className="h-7 w-7" strokeWidth={1.5} />
          </button>

          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-papel transition-colors hover:bg-white/10 md:left-6"
            >
              <ChevronLeft className="h-9 w-9" strokeWidth={1.5} />
            </button>
          )}

          <figure onClick={(e) => e.stopPropagation()} className="flex max-h-full max-w-3xl flex-col items-center">
            <img src={current.url} alt={current.alt} className="max-h-[72vh] w-auto rounded-sm object-contain" />
            <figcaption className="mt-5 max-w-xl text-center text-sm leading-relaxed text-papel/85">
              {current.desc}
              <span className="mt-2 block text-xs text-cinza">
                {openIndex + 1} de {total}
              </span>
            </figcaption>
          </figure>

          {total > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Próxima foto"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-papel transition-colors hover:bg-white/10 md:right-6"
            >
              <ChevronRight className="h-9 w-9" strokeWidth={1.5} />
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default Trabalhos;
