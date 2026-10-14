import fotoSobre from "../assets/img/fotosobre.webp";

const history = [
    { id: 1, Etapa: "1", Title: "O começo", Text: "Fiz minha primeira tatuagem aos 18 anos por curiosidade. O verdadeiro fascínio e a paixão pela arte vieram um pouco mais tarde." },
    { id: 2, Etapa: "2", Title: "A descoberta", Text: "Entendi cedo que o caminho tradicional não era para mim. Trabalhei em diversas áreas, onde aprendi a escutar pessoas e enxergar novas possibilidades." },
    { id: 3, Etapa: "3", Title: "O primeiro kit", Text: "Com um kit básico nas mãos, transformei meu quarto em estúdio e comecei a praticar em EVA, cascas de bananas, laranjas e peles sintéticas caseiras." },
    { id: 4, Etapa: "4", Title: "A profissão", Text: "Os primeiros traços em pele humana foram desafiadores, mas a persistência venceu. Não desisti, apurei a técnica e fiz da arte minha profissão." },
];


function Sobre() {
    return (
        <section id="sobre" className="scroll-mt-16 w-full bg-papel px-4 py-20 text-tinta sm:px-6 md:py-28">
            <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[5fr_7fr] md:gap-20">
                <div className="md:sticky md:top-24 md:self-start">
                    <h2 className="font-gotica text-6xl lowercase leading-none md:text-8xl">sobre o pedro</h2>

                    <figure className="relative mt-10 max-w-xs">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 -translate-x-3 translate-y-3 rounded-sm border-1 border-solid border-stencil"
                        />
                        <img
                            src={fotoSobre}
                            alt="Pedro Menezes segurando um troféu em uma convenção de tatuagem, ao lado de uma cliente tatuada"
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
                        Do quarto que virou estúdio às convenções de tatuagem: o caminho até aqui, em quatro passos.
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
