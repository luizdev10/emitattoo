import fotoSobre from "../assets/img/fotosobre.webp";
import Reveal from "./reveal.jsx";

/* PLACEHOLDER: texto genérico — substituir pela história real do Walney assim que for enviada */
const history = [
    { id: 1, Etapa: "1", Title: "O início", Text: "O contato com a tatuagem despertou um interesse que, aos poucos, se tornou paixão." },
    { id: 2, Etapa: "2", Title: "O aprendizado", Text: "Estudo, prática e dedicação foram moldando a técnica a cada novo trabalho." },
    { id: 3, Etapa: "3", Title: "A evolução", Text: "Cada tatuagem trouxe novos aprendizados e aprimorou o olhar para os detalhes." },
    { id: 4, Etapa: "4", Title: "A profissão", Text: "A soma dessa trajetória resultou no trabalho feito hoje, com cuidado e comprometimento." },
];


function Sobre() {
    return (
        <section id="sobre" className="scroll-mt-16 w-full bg-papel px-4 py-20 text-tinta sm:px-6 md:py-28">
            <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[5fr_7fr] md:gap-20">
                <div className="md:sticky md:top-24 md:self-start">
                    <Reveal>
                        <h2 className="font-gotica text-6xl lowercase leading-none md:text-8xl">sobre o walney</h2>
                    </Reveal>

                    <figure className="relative mt-10 max-w-xs">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 -translate-x-3 translate-y-3 rounded-sm border-1 border-solid border-stencil"
                        />
                        <img
                            src={fotoSobre}
                            alt="Walney, tatuador responsável pelo estúdio Walney TattooInk"
                            className="relative aspect-[3/4] w-full rounded-sm object-cover"
                        />
                    </figure>

                    <blockquote className="mt-10 font-gotica text-4xl leading-tight text-stencil">
                        A pele é a tela.
                        <br />
                        A tatuagem é a história.
                    </blockquote>
                </div>

                <div className="md:pt-4">
                    <p className="max-w-lg text-lg leading-relaxed text-tinta/75">
                        Uma trajetória marcada por dedicação, prática constante e a busca por aperfeiçoar a técnica a cada tatuagem.
                    </p>

                    <ol className="mt-12 border-l-2 border-dotted border-stencil">
                        {history.map((item) => (
                            <li key={item.id} className="relative pb-12 pl-10 last:pb-0">
                                <span
                                    aria-hidden="true"
                                    className="absolute -left-[15px] top-0 flex h-7 w-7 items-center justify-center rounded-full bg-stencil text-sm font-semibold text-papel"
                                >
                                    {item.Etapa}
                                </span>
                                <h3 className="text-xl font-semibold">{item.Title}</h3>
                                <p className="mt-2 max-w-lg leading-relaxed text-tinta/75">{item.Text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Sobre;
