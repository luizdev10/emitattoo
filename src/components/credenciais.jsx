/* PLACEHOLDER: números fictícios — substituir pelos dados reais do Walney TattooInk assim que forem enviados */
import { CalendarDays, PenTool, Trophy } from "lucide-react";
import Reveal from "./reveal.jsx";

const itens = [
    { icone: CalendarDays, numero: "8 anos", legenda: "tatuando em black and grey" },
    { icone: PenTool, numero: "+300", legenda: "tatuagens realizadas" },
    { icone: Trophy, numero: "1º lugar", legenda: "Convenção Onyx Tattoo Camp" },
];

function Credenciais() {
    return (
        <section className="textura-grao w-full border-y border-white/10 bg-grafite px-4 py-10 sm:px-6">
            <Reveal className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-around sm:gap-0">
                {itens.map((item, index) => (
                    <div key={item.numero} className="flex items-center gap-8 sm:gap-0">
                        <div className="flex items-center gap-4 text-center sm:flex-col sm:gap-2 sm:px-8">
                            <item.icone className="h-6 w-6 shrink-0 text-stencil-claro" strokeWidth={1.5} />
                            <div>
                                <p className="font-texto text-3xl font-semibold text-papel sm:text-4xl">{item.numero}</p>
                                <p className="mt-1 text-sm text-cinza">{item.legenda}</p>
                            </div>
                        </div>
                        {index < itens.length - 1 && (
                            <span aria-hidden="true" className="linha-stencil-v hidden h-14 text-stencil-claro/70 sm:block" />
                        )}
                    </div>
                ))}
            </Reveal>
        </section>
    );
}

export default Credenciais;
