import { useEffect, useRef, useState } from "react";

function Reveal({ children, className = "", delay = 0 }) {
    const ref = useRef(null);
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entrada]) => {
                if (entrada.isIntersecting) {
                    setVisivel(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: visivel ? `${delay}ms` : "0ms" }}
            className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                visivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            } ${className}`}
        >
            {children}
        </div>
    );
}

export default Reveal;
