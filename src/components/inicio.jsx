import React from "react";
import bgWorks from "../assets/img/bg-works.png";
import { MoveRight } from "lucide-react";

function Inicio() {
    const NUMERO_WHATS = "5588988151026";
    const texto = "Olá Pedro! Quero fazer uma tatuagem";
    const mensagem = `https://wa.me/${NUMERO_WHATS}?text=${encodeURIComponent(texto)}`;
    return (
        <section id="inicio" className="relative flex min-h-svh w-full items-center overflow-hidden bg-neutral-950 pt-20 pb-12">
            <div
                className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-25 lg:bg-top"
                style={{ backgroundImage: `url(${bgWorks})` }}
            />
            <div className="absolute inset-0  from-black/70 via-transparent to-neutral-900 " />
            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 sm:px-10 lg:px-16">
                <h1 className="font-[Pirata_One] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-wide sm:tracking-widest text-gray-200 drop-shadow-lg">
                    PEDRO MENEZES
                </h1>

                <p className="mt-4 md:mt-6 max-w-lg text-lg sm:text-xl md:text-2xl font-light leading-relaxed tracking-wide text-gray-300 font-[Medula_One]">
                    Mais do que uma tatuagem, uma forma de expressar quem você é. Cada ideia nasce de uma história e ganha vida em uma arte feita com cuidado, personalidade e atenção a cada detalhe para que ela seja única e tenha significado para você.
                </p>
                <a
                    href={mensagem}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative isolate mt-8 md:mt-10 inline-flex w-fit items-center gap-4 overflow-hidden rounded-sm border border-amber-100/60 px-6 py-3 text-lg font-medium tracking-wide text-amber-50 transition-colors duration-300 before:absolute before:inset-0 before:-z-10 before:-translate-x-full before:bg-amber-100 before:transition-transform before:duration-500 hover:text-neutral-950 hover:before:translate-x-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-100"
                >
                    <span>Fale comigo</span>
                    <MoveRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
            </div>
        </section>
    );
}

export default Inicio;