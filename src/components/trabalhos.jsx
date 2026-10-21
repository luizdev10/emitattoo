import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import Reveal from "./reveal.jsx";

import trabalho1 from "../assets/img/trabalho1.webp";
import trabalho2 from "../assets/img/trabalho2.webp";
import trabalho3 from "../assets/img/trabalho3.webp";
import trabalho4 from "../assets/img/trabalho4.webp";
import trabalho5 from "../assets/img/trabalho5.webp";
import trabalho6 from "../assets/img/trabalho6.webp";
import trabalho7 from "../assets/img/trabalho7.webp";
import trabalho8 from "../assets/img/trabalho8.webp";
import trabalho9 from "../assets/img/trabalho9.webp";
import trabalho10 from "../assets/img/trabalho10.webp";

const photosWork = [
  { id: 1, url: trabalho1, tag: "Fineline", alt: "Tatuagem fineline com chapéu de palha e Goku no antebraço", desc: "Composição fineline misturando referências de anime, com sombreamento leve em pontilhismo no antebraço." },
  { id: 2, url: trabalho2, tag: "Fineline", alt: "Tatuagem fineline de rainha egípcia com Olho de Hórus no antebraço", desc: "Rainha egípcia com tocado hieroglífico e o Olho de Hórus abaixo, em fineline com sombreamento suave no antebraço." },
  { id: 3, url: trabalho3, tag: "Fineline", alt: "Tatuagem fineline de anjo com raios de luz nas costas", desc: "Anjo com asas abertas e raios irradiando, em fineline na parte superior das costas." },
  { id: 4, url: trabalho4, tag: "Fineline", alt: "Tatuagem fineline de olhos com o nome Helena no bíceps", desc: "Retrato minimalista dos olhos com o nome em caligrafia, fineline delicado no bíceps." },
  { id: 5, url: trabalho5, tag: "Pontilhismo", alt: "Tatuagem em pontilhismo inspirada em capa de álbum nas costelas", desc: "Silhueta em pontilhismo com sombreado suave, nas costelas." },
  { id: 6, url: trabalho6, tag: "Mandala", alt: "Tatuagem de mandala floral com olho na panturrilha", desc: "Mandala floral com olho ao centro, traço fino e detalhado na panturrilha." },
  { id: 7, url: trabalho7, tag: "Fineline", alt: "Tatuagem fineline de aranha sobre teia no tornozelo", desc: "Aranha sobre teia em traço fino e ilustrativo, no tornozelo." },
  { id: 8, url: trabalho8, tag: "Fineline", alt: "Tatuagem fineline de águia com asas abertas no peito", desc: "Águia com asas abertas em traço fino, no peito." },
  { id: 9, url: trabalho9, tag: "Fineline", alt: "Tatuagem fineline de bússola vikinga com asas no ombro", desc: "Bússola vikinga (Vegvísir) ladeada por asas, traço fino no ombro." },
  { id: 10, url: trabalho10, tag: "Fineline", alt: "Tatuagem fineline de tridente com serpente no peito", desc: "Tridente entrelaçado por uma serpente, traço fino no peito." },
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
          href="https://www.instagram.com/_emitattoo/"
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
