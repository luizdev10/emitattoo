import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Politicas() {
  return (
    <div className="min-h-screen bg-tinta text-papel font-texto px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-cinza hover:text-papel transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o início
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="font-gotica text-5xl md:text-7xl lowercase leading-none text-papel mb-6">
            Política de Privacidade
          </h1>
          <span className="linha-stencil block w-32 text-stencil-claro" />
        </div>

        <div className="space-y-10 leading-relaxed text-sm md:text-base text-cinza">
          <section>
            <p className="text-papel/85 text-lg">
              A sua privacidade é importante para nós. É política deste site respeitar a sua privacidade em relação a qualquer informação que possamos coletar.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-papel font-semibold mb-3">1. Coleta de Informações</h2>
            <p>
              Este site não possui formulários próprios: ele leva você diretamente ao nosso WhatsApp oficial. As informações pessoais (como nome, ideia da tatuagem, tamanho aproximado e local do corpo) são as que você mesmo compartilha na conversa, apenas para fornecermos um atendimento personalizado e orçamento referente aos nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-papel font-semibold mb-3">2. Uso dos Dados</h2>
            <p>
              Nenhum dado é coletado ou armazenado pelo site. As informações trocadas na conversa servem exclusivamente para o nosso atendimento via WhatsApp e não são vendidas a terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-papel font-semibold mb-3">3. Compartilhamento e Retenção</h2>
            <p>
              Não compartilhamos dados de identificação pessoal publicamente ou com terceiros. A retenção das informações fornecidas ocorre apenas dentro do histórico de conversa do próprio aplicativo WhatsApp, onde o atendimento será conduzido.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-papel font-semibold mb-3">4. Seus Direitos (LGPD)</h2>
            <p>
              Você tem o direito de solicitar a exclusão de qualquer dado ou histórico de conversa a qualquer momento, diretamente pelo nosso canal de atendimento.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-papel font-semibold mb-3">5. Pagamentos e Reembolsos</h2>
            <p>
              Orçamentos e agendamentos são realizados exclusivamente pelo WhatsApp oficial informado no site. Não trabalhamos com reembolso de valores pagos por serviços já realizados.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-papel font-semibold mb-3">6. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através do nosso WhatsApp oficial fornecido no site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}