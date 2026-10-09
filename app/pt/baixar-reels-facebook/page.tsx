import { Metadata } from "next";
import Link from "next/link";
import DownloadTool from "@/components/DownloadTool";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
import FeaturesGrid from "@/components/FeaturesGrid";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { faqSchema, howToSchema, softwareSchema, breadcrumbSchema } from "@/lib/schema";
import {
  Shield,
  Video,
  Zap,
  Lock,
  Music,
  Globe,
  Download,
  Film,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Sparkles,
  Share2,
  Laptop,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Baixar Reels do Facebook Gratis em HD 1080p",
  description:
    "Baixe Reels do Facebook gratis em HD 1080p sem marca d'agua e com audio original completo. O melhor baixador online para iPhone, Android e PC sem cadastro.",
  keywords: [
    "baixar reels do facebook",
    "baixar reels facebook",
    "baixador de reels do facebook",
    "como baixar reels do facebook",
    "baixar reels facebook 1080p",
    "baixar reels do facebook com audio",
    "baixar reels do facebook sem marca d agua",
    "baixar video reels facebook",
    "salvar reels do facebook na galeria",
    "baixar reels do facebook no celular",
    "snapsave facebook alternativa",
    "fdown alternativa facebook reels",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/pt/baixar-reels-facebook`,
    languages: {
      en: `${SITE_CONFIG.url}/facebook-reels-download`,
      es: `${SITE_CONFIG.url}/es/descargar-reels-facebook`,
      pt: `${SITE_CONFIG.url}/pt/baixar-reels-facebook`,
      "x-default": `${SITE_CONFIG.url}/facebook-reels-download`,
    },
  },
  openGraph: {
    title: "Baixar Reels do Facebook Gratis em HD 1080p | ReelsGrab",
    description:
      "Baixe Reels do Facebook gratis em HD 1080p sem marca d'agua e com audio original completo. O melhor baixador online para iPhone, Android e PC sem cadastro.",
    url: `${SITE_CONFIG.url}/pt/baixar-reels-facebook`,
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
};

const recursos = [
  {
    icon: Film,
    title: "Full HD 1080p e 4K Sem Perda",
    description: "Baixe Reels do Facebook na resolucao maxima original. Preservamos taxa de quadros e nitidez visual.",
  },
  {
    icon: Music,
    title: "Audio Stereo Completo Muxed",
    description: "Combinamos trilha sonora original e video DASH para garantir som limpo em todas as suas reproducoes.",
  },
  {
    icon: Shield,
    title: "100% Livre de Marca d'Agua",
    description: "Seus arquivos sao salvos perfeitamente limpos, ideais para republicacao no TikTok, Kwai e YouTube Shorts.",
  },
  {
    icon: Zap,
    title: "Velocidade Relampago",
    description: "Conexao direta com servidores de borda para download em menos de 3 segundos sem filas.",
  },
  {
    icon: Lock,
    title: "Zero Cadastro e Sem Login",
    description: "Voce nunca precisa informar senha, instalar aplicativos suspeitos ou fornecer dados pessoais.",
  },
  {
    icon: Globe,
    title: "Compativel com Qualquer Dispositivo",
    description: "Funciona diretamente no navegador no iPhone, iPad, Android, macOS e Windows PC sem extensoes.",
  },
];

const passos = [
  {
    title: "Copie o Link do Reel no Facebook",
    description: "Abra o aplicativo ou site do Facebook, va ate o Reel desejado, clique no botao Compartilhar e selecione Copiar Link.",
  },
  {
    title: "Cole a URL no ReelsGrab",
    description: "Cole o link copiado no campo acima e clique no botao Baixar Reel para iniciar a analise instantanea.",
  },
  {
    title: "Escolha a Qualidade HD",
    description: "Selecione a resolucao desejada (Full HD 1080p, 720p ou Extracao de Audio MP3).",
  },
  {
    title: "Salve no Seu Dispositivo",
    description: "O arquivo MP4 e baixado diretamente para a galeria ou pasta de downloads do seu aparelho.",
  },
];

const perguntas = [
  {
    q: "Como baixar Reels do Facebook de graca?",
    a: "Basta copiar o link do Reel desejado no Facebook, colar no campo de download do ReelsGrab e clicar em Baixar Reel. Em seguida, selecione a opcao HD 1080p para salvar no seu celular ou computador sem pagar nada.",
  },
  {
    q: "O ReelsGrab remove marca d'agua dos Reels do Facebook?",
    a: "Sim. O ReelsGrab extrai o fluxo de video direto dos servidores de entrega de conteudo, entregando o arquivo original limpo, sem logotipos sobrepostos ou marcas d'agua adicionais.",
  },
  {
    q: "Os videos baixados vem com o som e musica originais?",
    a: "Sim, garantimos 100% de audio integrado. Muitas ferramentas entregam videos mudos devido a separacao de trilhas DASH do Facebook. Nosso sistema funde o audio AAC stereo ao video MP4 automaticamente.",
  },
  {
    q: "Como salvar Reels do Facebook no iPhone (iOS)?",
    a: "No Safari, cole o link no ReelsGrab e toque em Baixar. Quando o Safari perguntar se deseja baixar o arquivo, confirme. Abra a lista de downloads do Safari, toque no video, clique no icone de compartilhamento do iOS e selecione Salvar Video para transferir para o rolo da camera.",
  },
  {
    q: "E possivel extrair apenas a musica do Reel em MP3?",
    a: "Sim. Apos colar o link do Reel no ReelsGrab, clique em Baixar e selecione a opcao 'Audio MP3' para salvar apenas a trilha sonora em alta qualidade.",
  },
  {
    q: "Existe limite de downloads diarios?",
    a: "Nao ha limites. Voce pode baixar quantos Reels do Facebook quiser, 24 horas por dia, totalmente gratuito.",
  },
  {
    q: "E seguro usar o ReelsGrab?",
    a: "Totalmente seguro. Nao exigimos senhas, nao instalamos extensoes no seu navegador e nao salvamos historico de downloads em nossos servidores.",
  },
];

const relatedTools = [
  { emoji: "📹", label: "Baixar Video do Facebook", href: "/pt/baixar-video-facebook", description: "Baixe qualquer video publico do Facebook em HD" },
  { emoji: "📸", label: "Baixar Reels do Instagram", href: "/pt/baixar-reels-instagram", description: "Baixe Reels do Instagram sem marca d'agua" },
  { emoji: "🎵", label: "YouTube para MP3", href: "/pt/youtube-para-mp3", description: "Converta videos do YouTube em MP3 320kbps" },
  { emoji: "🎬", label: "YouTube para MP4", href: "/pt/youtube-para-mp4", description: "Baixe videos do YouTube em 1080p Full HD" },
];

export default function BaixarReelsFacebookPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang = 'pt-BR';" }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={breadcrumbSchema([
          { name: "Inicio", url: "/" },
          { name: "Baixar Reels do Facebook", url: "/pt/baixar-reels-facebook" },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={softwareSchema(
          "Baixador de Reels do Facebook",
          "Baixe Reels do Facebook gratis em HD 1080p sem marca d'agua e com audio original.",
          `${SITE_CONFIG.url}/pt/baixar-reels-facebook`
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(perguntas)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={howToSchema(
          "Como Baixar Reels do Facebook em HD",
          "Passo a passo simples para salvar Reels do Facebook sem marca d'agua no celular e computador",
          passos
        )}
      />

      <section className="hero-gradient py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li>
                <Link href="/" className="hover:text-slate-300">
                  Inicio
                </Link>
              </li>
              <li>/</li>
              <li className="text-slate-300">Baixar Reels do Facebook</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-medium mb-5">
            📘 Baixador de Reels do Facebook em Alta Definicao
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Baixar <span className="gradient-text">Reels do Facebook</span> Gratis em HD
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Salve <strong className="text-white">Reels do Facebook sem marca d&apos;agua</strong> e com audio original em
            Full HD 1080p. Rapido, seguro, gratuito e compativel com iPhone, Android e PC.
          </p>

          <DownloadTool
            platform="facebook"
            placeholder="Cole o link do Reel do Facebook aqui (ex: facebook.com/reel/...)"
            buttonLabel="Baixar Reel"
          />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
          Por Que Escolher o ReelsGrab Para Baixar Reels do Facebook?
        </h2>
        <p className="text-center text-slate-400 text-sm mb-10 max-w-xl mx-auto">
          A ferramenta mais rapida e estavel para criadores de conteudo e usuarios que buscam a mais alta qualidade.
        </p>
        <FeaturesGrid features={recursos} columns={3} />
      </section>

      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            Como Baixar Reels do Facebook Passo a Passo
          </h2>
          <p className="text-center text-slate-400 text-sm mb-10">
            Processo facil em 4 passos: sem programas pesados e sem cadastro.
          </p>
          <HowToSteps steps={passos} />
        </div>
      </section>

      {/* GUIA EDITORIAL COMPLETO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <article className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Guia Definitivo: Como Salvar Reels do Facebook em Alta Qualidade
            </h2>
            <p>
              O formato Reels se consolidou como uma das principais ferramentas de descoberta e entretenimento no Facebook.
              Com milhoes de videos curtos sobre culinaria, comedia, tutoriais tecnicos, esportes e dicas profissionais publicados
              diariamente, salvar esse conteudo para assistir offline ou para reutilizar em projetos criativos se tornou uma necessidade comum.
            </p>
            <p>
              No entanto, a Meta nao disponibiliza um botao nativo de download direto para a galeria que mantenha o som original e
              uma resolucao limpa sem cortes. E exatamente para solucionar essa limitacao que criamos o{" "}
              <strong>ReelsGrab Baixador de Reels do Facebook</strong>. Nossa plataforma online extrai o video diretamente dos servidores
              oficiais da CDN da Meta em qualidade Full HD 1080p, preservando a taxa de quadros e o audio stereo.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Resolvendo o Problema de Videos Sem Som em Downloads do Facebook
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Um dos problemas mais comuns ao utilizar baixadores genericos e o download de Reels que chegam completamente mudos.
              Isso ocorre porque o Facebook divide o video em dois canais separados utilizando a tecnologia DASH (Dynamic Adaptive Streaming
              over HTTP):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-300">
              <li>
                <strong className="text-white">Canal de Video MP4/H.264:</strong> Contem apenas a imagem em alta definicao, sem audio integrado.
              </li>
              <li>
                <strong className="text-white">Canal de Audio AAC:</strong> Contem a musica e os efeitos sonoros transmitidos separadamente.
              </li>
            </ul>
            <p className="text-sm text-slate-300 leading-relaxed mt-4">
              Muitas ferramentas antigas capturam apenas o canal de video, resultando em arquivos sem audio. O ReelsGrab conta com
              um sistema na nuvem que une automaticamente as duas faixas com sincronizacao perfeita de milissegundos antes de entregar o
              arquivo para download.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Como Baixar no Celular (iPhone e Android) e no Computador
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-indigo-400" />
                  iPhone e iPad (iOS)
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-2">
                  No Safari, acesse o ReelsGrab e cole o link copiado do Facebook. Toque em Baixar e confirme o download do arquivo.
                  Em seguida, abra o gerenciador de downloads do Safari, toque no video baixado, selecione o botao Compartilhar do iOS
                  e clique em <strong>Salvar Video</strong> para transferir o MP4 diretamente para o aplicativo Fotos.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-indigo-400" />
                  Android, Windows e Mac
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-2">
                  No Google Chrome, Samsung Internet ou qualquer navegador desktop, basta colar a URL e clicar no botao de download.
                  O arquivo e salvo automaticamente na sua pasta padrao de Downloads com compatibilidade universal para qualquer reprodutor.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 pb-6">
        <h2 className="text-xl font-bold text-white mb-6">Ferramentas Relacionadas</h2>
        <RelatedTools tools={relatedTools} />
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Perguntas Frequentes (FAQ)</h2>
        <FaqSection faqs={perguntas} />
      </section>
    </>
  );
}
