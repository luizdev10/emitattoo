import fotoHero from "../assets/img/bg-works.webp";

const NUMERO_WHATS = "558897234574";

function Inicio() {
    const texto = "Olá Walney! Quero fazer uma tatuagem";
    const mensagem = `https://wa.me/${NUMERO_WHATS}?text=${encodeURIComponent(texto)}`;

    return (
        <section id="inicio" className="textura-grao relative w-full overflow-hidden bg-tinta pt-16">
            <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr] md:gap-16">
                <div>
                    <h1 className="revela font-gotica text-[clamp(4.25rem,14vw,10.5rem)] lowercase leading-[0.82] text-papel">
                        walney
                        <br />
                        tattooink
                    </h1>

                    <p className="mt-8 max-w-md text-lg leading-relaxed text-cinza">
                        Tatuagem realista em black and grey, em Juazeiro do Norte.
                        Cada desenho nasce da sua história e é pensado para ser só seu.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                        <a
                            href={mensagem}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-sm bg-papel px-6 py-3.5 font-medium text-tinta transition-all duration-500 ease-in-out hover:bg-stencil-claro hover:text-tinta"
                        >
                            Pedir orçamento no WhatsApp
                        </a>
                        <a
                            href="#trabalhos"
                            className="rounded-sm bg-stencil p-3 font-medium text-papel transition-all duration-500 ease-in-out hover:bg-stencil-claro hover:text-tinta"
                        >
                            Ver trabalhos
                        </a>
                    </div>
                </div>

                <figure className="surge relative mx-auto w-full max-w-sm md:max-w-none">
                    <div
                        aria-hidden="true"
                        className="absolute -inset-12 -z-10 rounded-full bg-stencil-claro/25 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm border-1 border-solid border-stencil-claro sm:translate-x-5 sm:translate-y-5"
                    />
                    <img
                        src={fotoHero}
                        alt="Walney calçando as luvas antes de tatuar"
                        className="relative aspect-[4/5] w-full rounded-sm object-cover object-[72%_center]"
                    />
                </figure>
            </div>
        </section>
    );
}

export default Inicio;
