import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function BotaoTopo() {
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisivel(window.scrollY > 400);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            tabIndex={visivel ? 0 : -1}
            className={`fixed bottom-5 right-5 z-40 rounded-full border border-white/20 bg-tinta/85 p-3 text-papel backdrop-blur transition-all duration-300 hover:border-stencil-claro hover:text-stencil-claro ${
                visivel ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
            }`}
        >
            <ArrowUp className="h-5 w-5" strokeWidth={1.5} />
        </button>
    );
}

export default BotaoTopo;
