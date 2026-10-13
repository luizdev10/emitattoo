import { useState } from "react";
import { MapPin, Clock, MessageCircle, Calendar, DollarSign, FileText } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { Link } from 'react-router-dom';
const NUMERO_WHATS = "5588988151026";
const campo =
  "w-full border-b border-amber-100/25 bg-transparent py-3 text-amber-100 outline-none placeholder:text-amber-100/40 focus:border-amber-100 autofill:shadow-[inset_0_0_0_1000px_#171717] [&:-webkit-autofill]:[-webkit-text-fill-color:#fef3c7] [color-scheme:dark]";
const rotulo = "text-xs uppercase tracking-wider text-amber-100/40";
const iconeCampo =
  "pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-100/50";
const hojeISO = () => new Date().toISOString().split("T")[0];
function formatarDiaMes(iso) {
  if (!iso) return "";
  const [, mes, dia] = iso.split("-");
  return `${dia}/${mes}`;
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
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const calcularEstimativa = () => {
    const tamanho = parseFloat(form.tamanho);
    if (!tamanho || tamanho <= 0) return null;
    return Math.ceil(tamanho / 5) * 80;
  };
  const estimativa = calcularEstimativa();
  const enviar = (e) => {
    e.preventDefault();
    const data = formatarDiaMes(form.disponibilidade);
    const quando = [data, form.hora && `às ${form.hora}`]
      .filter(Boolean)
      .join(" ");
    const texto =
      `Olá Pedro! Me chamo ${form.nome}.\n` +
      `Estou com uma ideia de fazer um(a) ${form.ideia}, no(a) ${form.local} com ${form.tamanho}cm.\n` +
      `Tenho disponibilidade ${quando || "a combinar"}. \n` +
      `Estimativa de : ${estimativa} R$`;
    window.open(
      `https://wa.me/${NUMERO_WHATS}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  };
  return (
    <section
      id="contato"
      className="min-h-2xl w-full bg-neutral-900 px-6 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="font-[Pirata_One] flex flex-col">
            <p className="text-3xl sm:text-4xl md:text-5xl text-gray-400">VAMOS CRIAR</p>
            <p className="text-4xl sm:text-5xl md:text-6xl text-gray-200">SUA HISTÓRIA</p>
            <span className="mt-2 mb-3 h-0.5 w-32 bg-amber-100" />
          </div>
          <div className="font-[Montserrat] mt-4 flex flex-col gap-4 text-gray-100/80">
            <a
              href="https://www.instagram.com/pedromenezes_3/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[20px] transition-colors hover:text-gray-100"
            >
              <SiInstagram className="h-5 w-5 shrink-0 opacity-70" />
              @pedromenezes_3
            </a>
            <a href="https://www.google.com/maps/@-7.2291944,-39.3032022,3a,75y,149.62h,78.04t/data=!3m7!1e1!3m5!1sLrtD5QBlqkwoPB99mrnvPw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D11.960293368812316%26panoid%3DLrtD5QBlqkwoPB99mrnvPw%26yaw%3D149.6185047435401!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="flex items-start gap-3 text-[15px] leading-relaxed hover:text-gray-100">
              <MapPin className="mt-1 h-5 w-5 shrink-0" strokeWidth={1.25} />
              RUA CORONEL FILEMON TELES, 30 — BAIRRO JOSÉ GERALDO DA CRUZ
            </a>


          </div>
        </div>
        <div className="border-2 rounded-xl border-amber-500/50 p-6 ">
          <form
            onSubmit={enviar}
            className="font-[Montserrat] flex flex-col gap-4"
          >
            <input
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome"
              autoComplete="name"
              className={campo}
            />
            <textarea
              name="ideia"
              value={form.ideia}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Conte sua ideia"
              className={`${campo} resize-none`}
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                name="local"
                value={form.local}
                onChange={handleChange}
                placeholder="Local do corpo"
                autoComplete="off"
                className={campo}
              />
              <input
                name="tamanho"
                value={form.tamanho}
                onChange={handleChange}
                placeholder="Tamanho (cm)"
                autoComplete="off"
                type="number"
                step="0.1"
                min="0"
                className={campo}
              />
            </div>
            {estimativa && (
              <div className="rounded-lg border border-amber-100/30 bg-amber-100/5 p-4">
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="h-4 w-4 text-amber-100/70" strokeWidth={1.5} />
                  <span className={rotulo}>Estimativa de Preço</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-amber-100">
                    R$ {estimativa.toLocaleString('pt-BR')}
                  </span>
                  <span className="text-sm text-amber-100/60">
                    (baseado em {form.tamanho}cm)
                  </span>
                </div>
                <p className="mt-2 text-xs text-gray-100 leading-relaxed">
                  * Valor estimado baseado no tamanho informado.
                  O preço final pode variar conforme complexidade do desenho e detalhes.*
                </p>
              </div>
            )}
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col gap-1">
                <span className={rotulo}>Dia (preferência)</span>
                <div className="relative">
                  <Calendar className={iconeCampo} strokeWidth={1.5} />
                  <input
                    type="date"
                    name="disponibilidade"
                    value={form.disponibilidade}
                    onChange={handleChange}
                    required
                    min={hojeISO()}
                    className={`${campo} pl-6`}
                  />
                </div>
              </label>
              <label className="flex flex-col gap-1">
                <span className={rotulo}>Hora (preferência)</span>
                <div className="relative">
                  <Clock className={iconeCampo} strokeWidth={1.5} />
                  <input
                    type="time"
                    name="hora"
                    value={form.hora}
                    onChange={handleChange}
                    required
                    step="1800"
                    className={`${campo} pl-6`}
                  />
                </div>
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-amber-100/40 py-4 tracking-widest text-amber-100 transition-colors hover:bg-amber-100 hover:text-neutral-900"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.25} />
              CHAMAR NO WHATSAPP
            </button>
            <p className="text-center text-xs text-amber-100/40">
              Dia e horário são apenas preferências — confirmamos pelo WhatsApp.
            </p>
          </form>
        </div>
      </div>
      <div className="text-sm flex justify-center items-center pt-4 text-amber-100/60 hover:text-amber-100">
        <Link
          to="/politicas-de-privacidade"
          target="_blank"
          rel="noopener noreferrer"
        >
          Política de Privacidade
        </Link>
      </div>
    </section>
  );
}