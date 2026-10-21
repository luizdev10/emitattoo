import fotoSobre from "../assets/img/fotosobre-emi.webp";
import Reveal from "./reveal.jsx";

const paragrafos = [
    "Desde 2019, o estúdio EmiTattoo se dedica à tatuagem fineline em Crato - CE, unindo traço fino e detalhado a composições autorais.",
    "Além da tatuagem, o espaço também oferece piercing, sempre com atenção à higiene e ao conforto durante todo o atendimento.",
];

const destaque =
    "Cada ideia é ouvida com atenção antes de virar desenho — o objetivo é que o resultado final seja só seu.";

const fechamento =
    "Esse cuidado guia cada etapa do trabalho, do primeiro contato até a entrega da peça pronta.";

function Sobre() {
    return (
        <section id="sobre" className="scroll-mt-16 w-full bg-papel px-4 py-20 text-tinta sm:px-6 md:py-28">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <h2 className="font-display text-5xl font-bold lowercase leading-[1.05] text-acento md:text-7xl">
                        sobre a emitattoo
                    </h2>
                </Reveal>

                <div className="mt-14 grid gap-14 md:grid-cols-[6fr_5fr] md:gap-20">
                    <div className="flex max-w-xl flex-col gap-6 text-lg leading-relaxed text-tinta/75">
                        {paragrafos.map((texto) => (
                            <p key={texto}>{texto}</p>
                        ))}
                        <p className="border-l-2 border-solid border-acento py-1 pl-5 text-2xl font-semibold leading-snug text-tinta">
                            {destaque}
                        </p>
                        <p>{fechamento}</p>
                    </div>

                    <figure className="relative mx-auto w-full max-w-sm md:max-w-none">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 -translate-x-3 translate-y-3 rounded-sm border-1 border-solid border-stencil"
                        />
                        <img
                            src={fotoSobre}
                            alt="Tatuadora responsável pelo estúdio EmiTattoo"
                            className="relative aspect-[3/4] w-full rounded-sm object-cover"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Sobre;
