import fotoHero from "../assets/img/bg-works.webp";

const NUMERO_WHATS = "558897234574";

function Inicio() {
    const texto = "Olá Walney! Quero fazer uma tatuagem";
    const mensagem = `https://wa.me/${NUMERO_WHATS}?text=${encodeURIComponent(texto)}`;

    return (
        <section id="inicio" className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-tinta pt-16">
            <img
                src={fotoHero}
                alt="Walney tatuando em seu estúdio"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-tinta/60" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-tinta via-tinta/10 to-tinta/40" />

            <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
                <h1 className="revela font-gotica text-[clamp(3.75rem,13vw,9rem)] lowercase leading-[0.85] text-papel">
                    walney
                    <br />
                    tattooink
                </h1>

                <p className="surge mx-auto mt-8 max-w-md text-lg leading-relaxed text-papel/80">
                    Tatuagem realista em black and grey, em Juazeiro do Norte.
                    Cada desenho nasce da sua história e é pensado para ser só seu.
                </p>

                <div className="surge mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
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
                        className="rounded-sm border border-papel/40 p-3 font-medium text-papel transition-all duration-500 ease-in-out hover:border-stencil-claro hover:text-stencil-claro"
                    >
                        Ver trabalhos
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Inicio;
