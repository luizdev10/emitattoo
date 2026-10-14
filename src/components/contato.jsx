import { useState } from "react";
import { MapPin, MessageCircle } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { Link } from "react-router-dom";

const NUMERO_WHATS = "5588988151026";
const campo =
  "w-full border-b border-white/25 bg-transparent py-2.5 text-papel outline-none transition-colors placeholder:text-cinza/70 focus:border-stencil-claro autofill:shadow-[inset_0_0_0_1000px_#000] [&:-webkit-autofill]:[-webkit-text-fill-color:#eceaf2] [color-scheme:dark]";
const rotulo = "text-sm text-cinza";
const hojeISO = () => new Date().toISOString().split("T")[0];

function formatarDiaMes(iso) {
  if (!iso) return "";
  const [, mes, dia] = iso.split("-");
  return `${dia}/${mes}`;
}

function Campo({ label, children }) {
  return (
    <label className="flex flex-col gap-1">
      <span className={rotulo}>{label}</span>
      {children}
    </label>
  );
}

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    ideia: "",
    local: "",
    tamanho: "",
    disponibilidade: "",
    hora: "",
  });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const calcularEstimativa = () => {
    const tamanho = parseFloat(form.tamanho);
    if (!tamanho || tamanho <= 0) return null;
    return Math.ceil(tamanho / 5) * 80;
  };
  const estimativa = calcularEstimativa();

  const enviar = (e) => {
    e.preventDefault();
    const data = formatarDiaMes(form.disponibilidade);
    const quando = [data, form.hora && `às ${form.hora}`].filter(Boolean).join(" ");
    const onde = [form.local && `no(a) ${form.local}`, form.tamanho && `com ${form.tamanho}cm`]
      .filter(Boolean)
      .join(" ");
    const texto =
      `Olá Pedro! Me chamo ${form.nome}.\n` +
      `Estou com uma ideia de fazer um(a) ${form.ideia}${onde ? `, ${onde}` : ""}.\n` +
      `Tenho disponibilidade ${quando || "a combinar"}.` +
      (estimativa ? `\nEstimativa do site: R$ ${estimativa.toLocaleString("pt-BR")}` : "");
    window.open(`https://wa.me/${NUMERO_WHATS}?text=${encodeURIComponent(texto)}`, "_blank");
  };

  return (
    <section id="contato" className="scroll-mt-16 w-full bg-tinta px-4 pt-20 sm:px-6 md:pt-28">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[5fr_6fr] md:gap-20">
        <div>
          <h2 className="font-gotica text-6xl lowercase leading-[0.9] text-papel md:text-8xl">
            vamos criar
            <br />
            sua história
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-cinza">
            Preencha o formulário e a mensagem chega pronta no WhatsApp do Pedro.
            O orçamento final é combinado na conversa.
          </p>

          <div className="mt-10 flex flex-col gap-5 text-papel/85">
            <a
              href="https://www.instagram.com/pedromenezes_3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-3 transition-colors hover:text-papel"
            >
              <SiInstagram className="h-5 w-5 shrink-0 opacity-70" />
              @pedromenezes_3
            </a>
            <a
              href="https://www.google.com/maps/@-7.2291944,-39.3032022,3a,75y,149.62h,78.04t/data=!3m7!1e1!3m5!1sLrtD5QBlqkwoPB99mrnvPw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D11.960293368812316%26panoid%3DLrtD5QBlqkwoPB99mrnvPw%26yaw%3D149.6185047435401!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex max-w-xs items-start gap-3 leading-relaxed transition-colors hover:text-papel"
            >
              <MapPin className="mt-1 h-5 w-5 shrink-0 opacity-70" strokeWidth={1.5} />
              Rua Coronel Filemon Teles, 30, bairro José Geraldo da Cruz
            </a>
          </div>
        </div>

        <form onSubmit={enviar} className="flex flex-col gap-6">
          <Campo label="Seu nome">
            <input name="nome" value={form.nome} onChange={handleChange} required autoComplete="name" className={campo} />
          </Campo>

          <Campo label="Sua ideia">
            <textarea
              name="ideia"
              value={form.ideia}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Ex.: um leão realista com rosas"
              className={`${campo} resize-none`}
            />
          </Campo>

          <div className="grid grid-cols-2 gap-5">
            <Campo label="Local do corpo">
              <input name="local" value={form.local} onChange={handleChange} placeholder="Ex.: antebraço" autoComplete="off" className={campo} />
            </Campo>
            <Campo label="Tamanho (cm)">
              <input
                name="tamanho"
                value={form.tamanho}
                onChange={handleChange}
                placeholder="Ex.: 15"
                autoComplete="off"
                type="number"
                inputMode="decimal"
                step="0.1"
                min="0"
                className={campo}
              />
            </Campo>
          </div>

          {estimativa && (
            <div aria-live="polite" className="border-l-2 border-solid border-stencil-claro pl-5">
              <p className={rotulo}>Estimativa para {form.tamanho}cm</p>
              <p className="mt-1 text-3xl font-semibold text-papel">R$ {estimativa.toLocaleString("pt-BR")}</p>
              <p className="mt-2 text-xs leading-relaxed text-cinza">
                Valor de referência. O preço final depende da complexidade e dos detalhes do desenho.
              </p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-5">
            <Campo label="Dia de preferência">
              <input
                type="date"
                name="disponibilidade"
                value={form.disponibilidade}
                onChange={handleChange}
                required
                min={hojeISO()}
                className={campo}
              />
            </Campo>
            <Campo label="Horário de preferência">
              <input type="time" name="hora" value={form.hora} onChange={handleChange} required step="1800" className={campo} />
            </Campo>
          </div>

          <button
            type="submit"
            className="mt-2 flex items-center justify-center gap-2.5 rounded-sm bg-papel py-4 font-medium text-tinta transition-colors hover:bg-gray-500 hover:text-papel transition-all ease-in-out duration-600"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
            Enviar pelo WhatsApp
          </button>
          <p className="text-center text-xs text-cinza">
            Dia e horário são só preferência. A data é confirmada pelo WhatsApp.
          </p>
        </form>
      </div>

      <footer className="mx-auto mt-24 flex max-w-6xl flex-col gap-3 border-t border-white/10 py-8 text-sm text-cinza sm:flex-row sm:justify-between">
        <p>Pedro Menezes Tattoo</p>
        <Link to="/politicas-de-privacidade" className="w-fit transition-colors hover:text-papel">
          Política de privacidade
        </Link>
      </footer>
    </section>
  );
}
