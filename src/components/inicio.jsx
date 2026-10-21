import fotoHero from "../assets/img/bg-works-emi.webp";

const NUMERO_WHATS = "5588997082957";

const estatisticas = [
    { numero: "7+", legenda: "anos de experiência" },
    { numero: "+300", legenda: "trabalhos realizados" },
    { numero: "+3.500", legenda: "seguidores no Instagram" },
];

function Inicio() {
    const texto = "Olá! Quero fazer uma tatuagem";
    const mensagem = `https://wa.me/${NUMERO_WHATS}?text=${encodeURIComponent(texto)}`;

    return (
        <section id="inicio" className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-tinta pt-16">
            <img
                src={fotoHero}
                alt="Tatuadora da EmiTattoo em seu estúdio"
                className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-tinta via-tinta/65 to-tinta/20" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-tinta via-transparent to-tinta/50" />
            <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-acento/25 blur-[110px]" />

            <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-4 py-24 sm:px-6 md:grid-cols-[6fr_3fr] md:items-center md:gap-10">
                <div>
                    <h1 className="leading-none text-papel">
                        <span className="revela block font-display text-[clamp(2.75rem,9vw,5.5rem)] font-extrabold tracking-tight">
                            emi
                        </span>
                        <span className="revela block font-assinatura text-acento-luz text-[clamp(3.5rem,13vw,8rem)] leading-[0.75] [text-shadow:0_0_40px_var(--color-acento)]">
                            tattoo
                        </span>
                    </h1>

                    <p className="surge mt-8 max-w-md text-lg leading-relaxed text-papel/80">
                        Estúdio de tatuagem e piercing, especialista em fineline, em Crato - CE.
                        Cada traço nasce da sua ideia e é pensado para ser só seu.
                    </p>

                    <div className="surge mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                        <a
                            href={mensagem}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-acento px-7 py-3.5 font-medium text-papel shadow-[0_8px_30px_-8px_var(--color-acento)] transition-all duration-500 ease-in-out hover:bg-acento-luz hover:text-tinta"
                        >
                            Pedir orçamento no WhatsApp
                        </a>
                        <a
                            href="#trabalhos"
                            className="rounded-full border border-papel/30 px-6 py-3.5 font-medium text-papel transition-all duration-500 ease-in-out hover:border-acento-luz hover:text-acento-luz"
                        >
                            Ver trabalhos
                        </a>
                    </div>
                </div>

                <div className="surge flex flex-col items-start">
                    {estatisticas.map((item, index) => (
                        <div key={item.legenda} className="w-full">
                            {index > 0 && (
                                <span aria-hidden="true" className="linha-stencil my-6 block w-14 text-stencil-claro/60" />
                            )}
                            <p className="font-display text-4xl font-bold text-papel md:text-5xl">{item.numero}</p>
                            <p className="mt-1 text-sm leading-snug text-papel/70">{item.legenda}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Inicio;
