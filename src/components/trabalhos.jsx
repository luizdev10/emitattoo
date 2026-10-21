import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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
  { id: 1, url: foto1, tag: "Black and grey", alt: "Tatuagem de caveira com arame farpado na coxa", desc: "Caveira em black and grey envolta por arame farpado, com um punhal e ornamentos na base — contraste forte entre luz e sombra." },
  { id: 2, url: foto2, tag: "Lettering", alt: "Tatuagem de lettering no antebraço e na mão", desc: "Lettering em caligrafia gótica preenchendo o antebraço até a mão, com sombreamento em black and grey e efeito de fita entre as palavras." },
  { id: 3, url: foto3, tag: "Neo-tradicional", alt: "Tatuagem neotradicional de Alice no País das Maravilhas no ombro", desc: "Composição neotradicional reunindo o gato Cheshire, o Coelho Branco e um cogumelo, em black and grey com traço bem definido." },
  { id: 4, url: foto4, tag: "Abstrato", alt: "Tatuagem abstrata em black and grey na perna", desc: "Pinceladas fluidas em preto formam um desenho abstrato, quase um olho em espiral, acompanhando a curva da perna." },
  { id: 5, url: foto5, tag: "Realismo", alt: "Tatuagem realista de lobo com relógio quebrado no braço", desc: "Cabeça de lobo em realismo black and grey, com um relógio de bolso quebrado ao fundo e uma paisagem de floresta e lua na base." },
  { id: 6, url: foto6, tag: "Dotwork", alt: "Tatuagem de Medusa com cobras na coxa", desc: "Retrato de Medusa com serpentes entrelaçadas no cabelo, em traço neotradicional com sombreamento pontilhado." },
  { id: 7, url: foto7, tag: "Colorida", alt: "Tatuagens de cérebro e coração com cobras na coluna", desc: "Duas peças na coluna: um cérebro envolto por uma cobra em black and grey, e um coração com uma cobra vermelha — contraste entre tons neutros e cor viva." },
  { id: 8, url: foto8, tag: "Geométrica", alt: "Tatuagem geométrica pontilhada na coxa", desc: "Mandala geométrica em dotwork, com cubos em efeito 3D e padrão de flor da vida, mesclando precisão técnica e simetria." },
  { id: 9, url: foto9, tag: "Realismo", alt: "Tatuagem realista de tigre com rosto feminino no antebraço", desc: "Composição realista em dupla exposição unindo a face de uma tigre e o rosto de uma mulher, em black and grey no antebraço." },
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
    <>
    <section id="trabalhos" className="textura-grao scroll-mt-16 w-full bg-grafite px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-gotica text-6xl lowercase leading-none text-papel md:text-8xl">trabalhos</h2>
          <p className="mt-4 max-w-md text-cinza">
            Uma seleção de peças recentes. Toque numa foto para ver em tamanho maior.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 [grid-auto-flow:dense] auto-rows-[160px] gap-[10px] md:grid-cols-4 md:auto-rows-[200px]">
          {lista.map((item, index) => {
            const destaque = index === 0;
            const largo = index === 3;
            return (
              <figure
                key={item.id}
                className={`m-0 ${destaque ? "col-span-2 row-span-2" : largo ? "col-span-2" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  aria-label={`Ampliar: ${item.alt}`}
                  className="group relative block h-full w-full cursor-zoom-in overflow-hidden rounded-sm"
                >
                  <img
                    src={item.url}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                    className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-tinta/85 to-transparent px-3 py-2.5 text-xs text-papel opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100"
                  >
                    {item.tag}
                  </span>
                </button>
              </figure>
            );
          })}
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
    </section>

    {current && createPortal(
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
        </div>,
        document.body
      )}
    </>
  );
}

export default Trabalhos;
