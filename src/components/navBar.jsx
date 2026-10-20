import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const itens = [
    { id: "inicio", label: "Início" },
    { id: "trabalhos", label: "Trabalhos" },
    { id: "sobre", label: "Sobre" },
    { id: "contato", label: "Contato" },
];

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [ativo, setAtivo] = useState("inicio");
    const [rolado, setRolado] = useState(false);

    useEffect(() => {
        const onScroll = () => setRolado(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entradas) => entradas.forEach((e) => e.isIntersecting && setAtivo(e.target.id)),
            { rootMargin: "-45% 0px -50% 0px" }
        );
        itens.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const clique = (e, id) => {
        e.preventDefault();
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    const link = (item, extra = "") => (
        <a
            href={`#${item.id}`}
            onClick={(e) => clique(e, item.id)}
            aria-current={ativo === item.id ? "true" : undefined}
            className={`relative block transition-colors ${extra} ${
                ativo === item.id ? "text-papel" : "text-cinza hover:text-papel"
            }`}
        >
            {item.label}
            {ativo === item.id && (
                <span className="border-b absolute inset-x-0 -bottom-2 text-stencil-claro" />
            )}
        </a>
    );

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
                rolado ? "border-white/15 bg-tinta/90 backdrop-blur-md" : "border-white/10 bg-tinta"
            }`}
        >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
                <a
                    href="#inicio"
                    onClick={(e) => clique(e, "inicio")}
                    aria-label="Walney TattooInk, voltar ao início"
                    className="flex h-12 flex-col justify-center font-gotica text-xl leading-[0.95] lowercase text-papel"
                >
                    walney
                    <br />
                    tattooink
                </a>

                <ul className="hidden items-center gap-9 font-texto text-[15px] font-medium md:flex">
                    {itens.map((item) => (
                        <li key={item.id}>{link(item)}</li>
                    ))}
                </ul>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                    className="p-2 text-papel md:hidden"
                >
                    {menuOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
                </button>
            </div>

            {menuOpen && (
                <ul className="flex flex-col gap-1 border-t border-white/10 px-4 pb-6 pt-3 font-texto text-lg md:hidden">
                    {itens.map((item) => (
                        <li key={item.id}>{link(item, "w-fit py-2")}</li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

export default NavBar;
