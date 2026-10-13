import backP from "../assets/img/sobrePE.png";
import fotoSobre from "../assets/img/fotosobre.png";
import { ScrollText } from "lucide-react";

function Sobre() {

    const history = [
        { id: 1, Etapa: "01", Title: "O COMEÇO", Text: "Fiz minha primeira tatuagem aos 18 anos por curiosidade. O verdadeiro fascínio e a paixão pela arte vieram um pouco mais tarde." },
        { id: 2, Etapa: "02", Title: "A DESCOBERTA", Text: "Entendi cedo que o caminho tradicional não era para mim. Trabalhei em diversas áreas, onde aprendi a escutar pessoas e enxergar novas possibilidades." },
        { id: 3, Etapa: "03", Title: "O PRIMEIRO KIT", Text: "Com um kit básico nas mãos, transformei meu quarto em estúdio e comecei a praticar em EVA, cascas de bananas, laranjas e peles sintéticas caseiras." },
        { id: 4, Etapa: "04", Title: "A PROFISSÃO", Text: "Os primeiros traços em pele humana foram desafiadores, mas a persistência venceu. Não desisti, apurei a técnica e fiz da arte minha profissão." }
    ];

    return (
        <section
            id="sobre"
            className="relative w-full min-h-screen bg-neutral-900 overflow-hidden"
        >
            <div
                className="pointer-events-none absolute inset-0 bg-cover bg-left bg-no-repeat opacity-15"
                style={{ backgroundImage: `url(${backP})` }}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-transparent to-neutral-950/60" />

            <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pt-28 pb-16">
                <div className="flex items-center justify-center gap-10 md:flex-row md:items-center md:gap-16 md:justify-center md:h-[430px]">
                    <div className="relative shrink-0">
                        <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-amber-200/30 to-transparent" />
                        <img
                            src={fotoSobre}
                            alt="Foto Pedro Menezes"
                            className="relative h-64 w-36 sm:h-72 sm:w-48 md:h-[380px] md:w-64 lg:h-[420px] lg:w-72 rounded-xl object-cover shadow-2xl shadow-black/60"
                        />
                        <div className="absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full border border-amber-100/30 bg-neutral-900/90 shadow-lg backdrop-blur-sm">
                            <ScrollText className="h-7 w-7 text-amber-200/80" strokeWidth={1.25} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
                        <div className="font-[Pirata_One] leading-none">
                            <p className="text-3xl sm:text-4xl md:text-6xl text-gray-400 tracking-widest">SOBRE O</p>
                            <p className="text-5xl sm:text-6xl md:text-8xl text-gray-100 tracking-widest">PEDRO</p>
                        </div>
                        <span className="h-0.5 w-20 bg-amber-200/60 rounded-full" />
                        <p className="font-[Medula_One] text-xl sm:text-2xl md:text-5xl text-amber-100/80 leading-relaxed max-w-xs">
                            "A pele é a tela.<br />A tatuagem é a história."
                        </p>
                    </div>
                </div>
                <div className="mt-16 mb-10 flex items-center gap-4">
                    <span className="flex-1 h-px bg-gray-100/10" />
                    <p className="font-[Medula_One] text-2xl sm:text-3xl text-gray-400 tracking-[0.3em] uppercase">
                        Minha História
                    </p>
                    <span className="flex-1 h-px bg-gray-100/10" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {history.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-100/20 hover:bg-white/[0.06]"
                        >
                            <span className="font-[Pirata_One] text-5xl md:text-7xl text-amber-100/10 leading-none select-none">
                                {item.Etapa}
                            </span>
                            <p className="font-[Medula_One] text-2xl md:text-4xl text-gray-100 tracking-wider -mt-2">
                                {item.Title}
                            </p>
                            <p className="font-[Montserrat] text-sm sm:text-base md:text-xl text-gray-300/70 leading-relaxed">
                                {item.Text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Sobre;