import fotoSobre from "../assets/img/fotosobre.webp";
import Reveal from "./reveal.jsx";

/* PLACEHOLDER: texto genérico — substituir pela história real do Walney assim que for enviada */
const paragrafos = [
    "Uma trajetória marcada por dedicação, prática constante e a busca por aperfeiçoar a técnica a cada tatuagem.",
    "Cada tatuagem trouxe novos aprendizados, do primeiro traço até as peças mais complexas, sempre com atenção aos detalhes e ao resultado final.",
];

const destaque =
    "É essencial que cada cliente saia satisfeito. Por isso, todo cuidado é colocado no atendimento, na escuta da ideia e na execução de cada tatuagem.";

const fechamento =
    "Esse cuidado guia cada etapa do trabalho, do primeiro contato até a entrega da tatuagem pronta.";

function Sobre() {
    return (
        <section id="sobre" className="scroll-mt-16 w-full bg-papel px-4 py-20 text-tinta sm:px-6 md:py-28">
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <h2 className="font-gotica text-6xl lowercase leading-none md:text-8xl">sobre o walney</h2>
                </Reveal>

                <div className="mt-14 grid gap-14 md:grid-cols-[6fr_5fr] md:gap-20">
                    <div className="flex max-w-xl flex-col gap-6 text-lg leading-relaxed text-tinta/75">
                        {paragrafos.map((texto) => (
                            <p key={texto}>{texto}</p>
                        ))}
                        <p className="text-2xl font-semibold leading-snug text-tinta">{destaque}</p>
                        <p>{fechamento}</p>
                    </div>

                    <figure className="relative mx-auto w-full max-w-sm md:max-w-none">
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
                </div>
            </div>
        </section>
    );
}

export default Sobre;
