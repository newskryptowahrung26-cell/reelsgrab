import { Metadata } from "next";
import DownloadTool from "@/components/DownloadTool";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowToSteps from "@/components/HowToSteps";
import FaqSection from "@/components/FaqSection";
import RelatedTools from "@/components/RelatedTools";
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
  title: "Baixar Vídeos do Facebook Grátis HD 1080p e 4K | Sem Programas",
  description:
    "Baixe vídeos do Facebook grátis em HD 1080p e 4K sem instalar programas. O melhor baixador de vídeos do Facebook online: rápido, seguro, sem marca d'água e com áudio original. Funciona no iPhone, Android e PC.",
  keywords: [
    "baixar video do facebook",
    "baixar video facebook",
    "baixador de video do facebook",
    "como baixar video do facebook",
    "baixar video privado do facebook",
    "baixar videos do facebook gratis",
    "baixar video facebook hd",
    "baixar video facebook 1080p",
    "baixar video facebook 4k",
    "baixar video de facebook sem aplicativo",
    "baixar video facebook iphone",
    "baixar video facebook android",
    "fdown alternativa",
    "snapsave alternativa",
    "getfvid alternativa",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/pt/baixar-video-facebook`,
    languages: {
      en: `${SITE_CONFIG.url}/facebook-video-download`,
      es: `${SITE_CONFIG.url}/es/descargar-videos-facebook`,
      pt: `${SITE_CONFIG.url}/pt/baixar-video-facebook`,
      "x-default": `${SITE_CONFIG.url}/facebook-video-download`,
    },
  },
  openGraph: {
    title: "Baixar Vídeos do Facebook Grátis HD 1080p e 4K | Sem Programas",
    description:
      "Baixe vídeos do Facebook grátis em HD 1080p e 4K sem instalar programas. Rápido, seguro e com áudio original completo.",
    url: `${SITE_CONFIG.url}/pt/baixar-video-facebook`,
  },
};

const features = [
  {
    icon: Film,
    title: "Qualidade Full HD 1080p e 4K",
    description:
      "Baixe vídeos do Facebook na resolução máxima original: 1080p Full HD, 2K ou 4K com a maior taxa de bits disponível.",
  },
  {
    icon: Music,
    title: "Áudio e Som Originais Intactos",
    description:
      "Esqueça os vídeos mudos. Nossos servidores unem os fluxos DASH de áudio e vídeo para entregar um arquivo MP4 com som perfeito.",
  },
  {
    icon: Shield,
    title: "100% Sem Marca d'Água",
    description:
      "Obtenha arquivos limpos sem logotipos do Facebook, marcas d'água ou banners promocionais sobrepostos.",
  },
  {
    icon: Video,
    title: "Todos os Tipos de Vídeo",
    description:
      "Compatível com vídeos do Facebook Watch, postagens do feed, Reels, transmissões ao vivo finalizadas e vídeos de grupos públicos.",
  },
  {
    icon: Lock,
    title: "Sem Login ou Senha",
    description:
      "Baixe de forma totalmente anônima. Nunca pedimos sua senha do Facebook nem acesso aos seus dados pessoais.",
  },
  {
    icon: Smartphone,
    title: "iPhone, Android e Computador",
    description:
      "Funciona diretamente no navegador do celular (Safari ou Chrome) e no computador (Windows ou Mac) sem instalar nada.",
  },
  {
    icon: Zap,
    title: "Downloads em 3 Segundos",
    description:
      "Servidores de alta velocidade processam seu link de download em menos de 3 segundos, sem filas de espera.",
  },
  {
    icon: Sparkles,
    title: "Converter Vídeo em MP3",
    description:
      "Extraia a faixa de música, discursos ou podcasts de qualquer vídeo do Facebook diretamente em áudio MP3 a 320kbps.",
  },
];

const passos = [
  {
    title: "Copie o link do vídeo",
    description:
      "Abra o Facebook, localize o vídeo que deseja salvar, clique no botão Compartilhar ou nos três pontos (···) e selecione 'Copiar link'.",
  },
  {
    title: "Cole o link no ReelsGrab",
    description:
      "Abra o ReelsGrab no seu navegador e cole a URL no campo de busca na parte superior desta página.",
  },
  {
    title: "Escolha a qualidade desejada",
    description:
      "Selecione entre resolução Full HD 1080p, 720p HD, qualidade padrão ou extrair apenas o áudio em formato MP3.",
  },
  {
    title: "Baixe e salve o arquivo",
    description:
      "Clique em 'Baixar'. No iPhone Safari, o vídeo será salvo no app Arquivos/Fotos. No Android ou PC, irá direto para a pasta Downloads.",
  },
];

const competitorMatrix = [
  {
    feature: "Áudio Completo (DASH Muxed)",
    reelsgrab: "✅ Áudio Completo (Sem Vídeos Mudos)",
    fdown: "⚠️ Frequentemente Mudo em 1080p",
    snapsave: "⚠️ Descompasso de áudio",
    getfvid: "❌ Áudio em arquivo separado",
    nativeApp: "❌ Não permite exportar vídeos",
  },
  {
    feature: "Qualidade Máxima de Vídeo",
    reelsgrab: "✅ Até 1080p / 4K HD",
    fdown: "⚠️ Geralmente 720p HD",
    snapsave: "⚠️ Taxa de bits comprimida",
    getfvid: "⚠️ Máximo 720p",
    nativeApp: "❌ Baixa resolução no app",
  },
  {
    feature: "Sem Marca d'Água",
    reelsgrab: "✅ 100% Limpo",
    fdown: "⚠️ Às vezes adiciona marcas",
    snapsave: "⚠️ Marca periódica",
    getfvid: "⚠️ Básico",
    nativeApp: "N/A",
  },
  {
    feature: "Anúncios Invasivos / Popups",
    reelsgrab: "✅ 0% (Sem Popups Enganosos)",
    fdown: "❌ Popunders agressivos",
    snapsave: "❌ Várias abas novas",
    getfvid: "❌ Banners falsos de vírus",
    nativeApp: "N/A",
  },
  {
    feature: "Login Obrigatório",
    reelsgrab: "✅ Não precisa de login",
    fdown: "✅ Não precisa",
    snapsave: "✅ Não precisa",
    getfvid: "✅ Não precisa",
    nativeApp: "❌ Conta obrigatória",
  },
  {
    feature: "Salvar no Rolo da Câmera (iPhone)",
    reelsgrab: "✅ Download direto no Safari",
    fdown: "⚠️ Falha frequentemente no iOS",
    snapsave: "⚠️ Armadilhas de anúncios",
    getfvid: "⚠️ Processo confuso",
    nativeApp: "⚠️ Apenas salvos no app",
  },
  {
    feature: "Velocidade de Processamento",
    reelsgrab: "⚡ Menos de 3 segundos",
    fdown: "⏳ 10 - 25 segundos",
    snapsave: "⏳ 8 - 20 segundos",
    getfvid: "⏳ 12 - 30 segundos",
    nativeApp: "⚡ Rápido (apenas no app)",
  },
  {
    feature: "Segurança e Zero Malware",
    reelsgrab: "🛡️ 100% Seguro (Sem APKs ou programas)",
    fdown: "⚠️ Falsos alertas de atualização",
    snapsave: "⚠️ Notificações indesejadas",
    getfvid: "⚠️ Redirecionamentos suspeitos",
    nativeApp: "🛡️ Seguro",
  },
];

const videoResolutions = [
  {
    resolution: "4K Ultra HD (2160p / 3840x2160)",
    aspectRatio: "16:9 Panorâmico / 9:16 Vertical",
    fps: "60 fps",
    bitrate: "12.000 - 20.000 kbps",
    bestFor: "TVs 4K, edição profissional e arquivo de máxima qualidade",
  },
  {
    resolution: "1080p Full HD (1920x1080 / 1080x1920)",
    aspectRatio: "16:9 Panorâmico / 9:16 Vertical",
    fps: "30 / 60 fps",
    bitrate: "3.500 - 6.500 kbps",
    bestFor: "Republicar no YouTube, Instagram, monitores de computador",
  },
  {
    resolution: "720p HD (1280x720 / 720x1280)",
    aspectRatio: "16:9 Panorâmico / 9:16 Vertical",
    fps: "30 fps",
    bitrate: "1.500 - 2.800 kbps",
    bestFor: "Compartilhar no WhatsApp, visualização em celulares",
  },
  {
    resolution: "480p Padrão (SD)",
    aspectRatio: "16:9 Panorâmico / 9:16 Vertical",
    fps: "30 fps",
    bitrate: "600 - 1.200 kbps",
    bestFor: "Conexões lentas de internet e economia de espaço",
  },
  {
    resolution: "Apenas Áudio (MP3)",
    aspectRatio: "N/A (Áudio)",
    fps: "N/A",
    bitrate: "128 - 320 kbps",
    bestFor: "Podcasts, discursos, músicas e palestras",
  },
];

const perguntas = [
  {
    q: "Como baixar vídeos do Facebook grátis sem programas?",
    a: "Copie o link do vídeo do Facebook, cole no campo de busca do ReelsGrab e clique em 'Baixar Vídeo'. Escolha a qualidade desejada (1080p Full HD recomendada) e o arquivo será salvo diretamente no seu celular ou computador sem instalar programas.",
  },
  {
    q: "Por que os vídeos baixados em outros sites ficam sem som?",
    a: "O Facebook usa o protocolo DASH para vídeos em alta resolução (720p, 1080p e 4K), separando a faixa de vídeo da faixa de áudio. A maioria dos sites gratuitos baixa apenas o vídeo, deixando o arquivo mudo. O ReelsGrab une automaticamente o vídeo e o áudio em tempo real, garantindo som nítido e sincronizado.",
  },
  {
    q: "Como baixar vídeos do Facebook no iPhone?",
    a: "No app do Facebook, toque em Compartilhar no vídeo e escolha 'Copiar link'. Abra o Safari, acesse o ReelsGrab, cole o link e clique em Baixar. Toque em 'Baixar Vídeo HD' e confirme o download no Safari. Em seguida, toque na seta azul de downloads, abra o vídeo e escolha 'Salvar Vídeo' para que ele vá para o app Fotos.",
  },
  {
    q: "Como baixar vídeos do Facebook no Android?",
    a: "Toque nos três pontos ou Compartilhar no vídeo do Facebook e escolha 'Copiar link'. Abra o Chrome, entre no ReelsGrab, cole a URL e clique em Baixar. O arquivo será salvo na pasta Downloads do seu dispositivo e aparecerá na Galeria.",
  },
  {
    q: "Dá para baixar vídeos do Facebook em 4K ou 1080p?",
    a: "Sim! Se o vídeo original foi enviado em 1080p ou 4K, o ReelsGrab fornecerá a opção de download nessa resolução exata com a melhor taxa de bits possível.",
  },
  {
    q: "Dá para baixar transmissões ao vivo do Facebook?",
    a: "Sim! Assim que a live do Facebook termina e fica disponível na página ou perfil, você pode copiar o link e baixar a reprise completa usando o ReelsGrab.",
  },
  {
    q: "Como baixar vídeo privado do Facebook?",
    a: "Para vídeos em grupos fechados ou com privacidade personalizada que você tenha permissão para ver, utilize nossa ferramenta especializada: o Baixador de Vídeos Privados do Facebook.",
  },
  {
    q: "Posso extrair apenas o áudio de um vídeo do Facebook?",
    a: "Sim. Ao processar o link no ReelsGrab, selecione a opção 'Áudio MP3' para extrair apenas a faixa de som em formato MP3 de alta fidelidade a 320kbps.",
  },
  {
    q: "O ReelsGrab é seguro?",
    a: "Totalmente seguro. Não solicitamos senhas, não instalamos softwares no seu aparelho e não salvamos seus dados pessoais. O processo é 100% anônimo no navegador.",
  },
  {
    q: "Tem limite de downloads?",
    a: "Não há limites. Você pode baixar quantos vídeos do Facebook quiser, sempre que precisar e sem nenhum custo.",
  },
];

const relatedTools = [
  { emoji: "📸", label: "Baixar Reels Instagram", href: "/pt/baixar-reels-instagram", description: "Baixe Reels do IG em 1080p" },
  { emoji: "🎵", label: "YouTube para MP3 (PT)", href: "/pt/youtube-para-mp3", description: "Converta vídeos do YouTube em MP3 320kbps" },
  { emoji: "🎬", label: "YouTube para MP4 (PT)", href: "/pt/youtube-para-mp4", description: "Baixe vídeos do YouTube em 1080p HD" },
  { emoji: "🎧", label: "Reels para MP3", href: "/reels-to-mp3", description: "Extraia áudio de qualquer Reel" },
  { emoji: "🔒", label: "Vídeo Privado Facebook", href: "/facebook-private-video-download", description: "Baixe vídeos privados do FB" },
  { emoji: "🇬🇧", label: "English Version", href: "/facebook-video-download", description: "Download Facebook Videos in HD" },
];

export default function BaixarVideoFacebookPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Baixar Vídeo do Facebook", url: "/pt/baixar-video-facebook" },
        ])}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={softwareSchema(
          "Baixar Vídeo do Facebook",
          "Baixe vídeos do Facebook grátis em HD 1080p e 4K sem programas e com áudio original online.",
          `${SITE_CONFIG.url}/pt/baixar-video-facebook`,
          "4.9",
          "178500"
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={faqSchema(perguntas)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={howToSchema(
          "Como Baixar Vídeos do Facebook em HD",
          "Guia passo a passo para baixar qualquer vídeo do Facebook em resolução HD 1080p com áudio no iPhone, Android e PC.",
          passos
        )}
      />

      {/* HERO SECTION */}
      <section className="hero-gradient py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li>
                <a href="/" className="hover:text-slate-300">
                  Início
                </a>
              </li>
              <li>/</li>
              <li className="text-slate-300">Baixar Vídeo do Facebook</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-medium mb-5">
            <Film size={14} /> Baixar Vídeo do Facebook | HD 1080p e 4K Sem Marca d&apos;Água
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Baixar Vídeo do Facebook{" "}
            <span className="gradient-text">Grátis HD Sem Programa</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Baixe qualquer vídeo do Facebook em <strong className="text-white">HD 1080p e 4K</strong> grátis:
            vídeos do feed, Facebook Watch, Reels e reprises de transmissões ao vivo. Sem programas, sem login e com áudio original completo.
          </p>

          <DownloadTool
            platform="facebook"
            placeholder="Cole o link do vídeo do Facebook aqui... (facebook.com/... ou fb.watch/...)"
            buttonLabel="Baixar Vídeo"
          />

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a href="/pt/baixar-reels-instagram" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              📸 Baixar Reels Instagram
            </a>
            <a href="/pt/youtube-para-mp3" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🎵 YouTube para MP3 (PT)
            </a>
            <a href="/pt/youtube-para-mp4" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🎬 YouTube para MP4 (PT)
            </a>
            <a href="/facebook-video-download" className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700">
              🇬🇧 English Version
            </a>
          </div>
        </div>
      </section>

      {/* Ad Slot */}
      <div className="max-w-4xl mx-auto px-4 my-6">
        <div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">
          Publicidade
        </div>
      </div>

      {/* FEATURES GRID */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Por Que o ReelsGrab é o Melhor Baixador de Vídeos do Facebook?
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Elimina todos os problemas dos sites antigos: sem anúncios fraudulentos, áudio sempre sincronizado e resolução real em 1080p e 4K.
          </p>
        </div>
        <FeaturesGrid features={features} columns={4} />
      </section>

      {/* HOW TO STEPS */}
      <section className="bg-slate-900/40 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            Como Baixar Vídeos do Facebook em 4 Passos Rápidos
          </h2>
          <p className="text-center text-slate-400 text-sm mb-10">
            Salve qualquer vídeo público do Facebook no seu aparelho em menos de 15 segundos.
          </p>
          <HowToSteps steps={passos} />
        </div>
      </section>

      {/* GUIA DE AUTORIDADE SEO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <article className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-12">

          {/* SEÇÃO 1: Introdução */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Guia Completo para Baixar Vídeos do Facebook em Alta Definição
            </h2>
            <p>
              O Facebook possui um dos maiores acervos de vídeo do mundo. De programas completos e documentários no Facebook Watch
              a receitas culinárias, lives, vídeos engraçados e reportagens, milhões de conteúdos são compartilhados diariamente.
            </p>
            <p>
              Contudo, o Facebook não disponibiliza um botão nativo para baixar esses vídeos diretamente para a memória do seu computador
              ou celular. Ao tocar em &quot;Salvar vídeo&quot;, ele apenas fica marcado nos seus favoritos. Sem internet ou caso o autor
              apague a postagem, você perde o vídeo.
            </p>
            <p>
              O <strong>ReelsGrab</strong> oferece uma solução moderna, limpa e gratuita para você baixar qualquer vídeo público do Facebook em
              <strong>resolução 1080p Full HD e 4K</strong>, <strong>sem marca d&apos;água</strong> e com <strong>áudio original completo</strong>.
            </p>
          </div>

          {/* SEÇÃO 2: A arquitetura DASH */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Music size={22} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Por Que os Vídeos em HD do Facebook Costumam Ficar Sem Som?
              </h3>
            </div>
            <p>
              Para vídeos de baixa resolução (SD 360p ou 480p), o Facebook salva o vídeo e o áudio juntos no mesmo arquivo.
              Porém, para qualidades em alta definição (720p, 1080p e 4K), o Facebook utiliza o protocolo <strong>DASH</strong>,
              armazenando a trilha de vídeo em HD separada da trilha de áudio estéreo AAC em servidores diferentes.
            </p>
            <p>
              A maioria dos baixadores gratuitos da internet não tem servidores capazes de unir esses dois arquivos em tempo real,
              entregando um vídeo mudo ao usuário.
              No <strong>ReelsGrab</strong>, nossos servidores em nuvem unem automaticamente o vídeo em 1080p/4K com o áudio AAC
              original em menos de 3 segundos, entregando um arquivo MP4 perfeitamente sincronizado e com som de alta fidelidade.
            </p>
          </div>

          {/* SEÇÃO 3: Tabela comparativa */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Tabela Comparativa: ReelsGrab vs. Outros Baixadores do Facebook
            </h3>
            <div className="overflow-x-auto my-6 border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">Recurso</th>
                    <th className="p-3.5 font-semibold text-blue-400 bg-blue-950/20">ReelsGrab</th>
                    <th className="p-3.5 font-semibold">FDown (FBDown)</th>
                    <th className="p-3.5 font-semibold">SnapSave</th>
                    <th className="p-3.5 font-semibold">Getfvid</th>
                    <th className="p-3.5 font-semibold">App Nativo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {competitorMatrix.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                      <td className="p-3.5 font-medium text-white">{row.feature}</td>
                      <td className="p-3.5 font-semibold text-emerald-400 bg-blue-950/20">{row.reelsgrab}</td>
                      <td className="p-3.5 text-slate-400">{row.fdown}</td>
                      <td className="p-3.5 text-slate-400">{row.snapsave}</td>
                      <td className="p-3.5 text-slate-400">{row.getfvid}</td>
                      <td className="p-3.5 text-slate-400">{row.nativeApp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SEÇÃO 4: Tutoriais por aparelho */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Como Baixar Vídeos do Facebook em Qualquer Aparelho
            </h3>

            {/* iPhone */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Smartphone size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Como Baixar Vídeos do Facebook no iPhone e iPad (iOS)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>No app do Facebook, localize o vídeo, toque em Compartilhar e escolha <strong>&quot;Copiar link&quot;</strong>.</li>
                <li>Abra o Safari e acesse <code>www.reelsgrab.net/pt/baixar-video-facebook</code>.</li>
                <li>Cole o link no campo de busca e toque em <strong>&quot;Baixar Vídeo&quot;</strong>.</li>
                <li>Toque em <strong>&quot;Baixar Vídeo HD&quot;</strong> e confirme o download no Safari.</li>
                <li>Toque na seta azul de downloads no Safari, abra o vídeo e selecione <strong>&quot;Salvar Vídeo&quot;</strong> para enviar para a Galeria/Fotos.</li>
              </ol>
            </div>

            {/* Android */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Smartphone size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Como Baixar Vídeos do Facebook no Android (Samsung, Xiaomi, Motorola)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Toque em Compartilhar no vídeo do Facebook e escolha <strong>&quot;Copiar link&quot;</strong>.</li>
                <li>Abra o Chrome ou seu navegador móvel, acesse o ReelsGrab e cole o link.</li>
                <li>Escolha a qualidade 1080p e toque em Baixar. O arquivo será salvo na pasta Downloads e aparecerá na sua Galeria.</li>
              </ol>
            </div>

            {/* PC e Mac */}
            <div className="mt-8 border border-slate-800 rounded-2xl p-6 bg-slate-900/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Laptop size={20} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Como Baixar Vídeos do Facebook no PC e Mac (Windows, macOS)
                </h4>
              </div>
              <ol className="list-decimal pl-6 space-y-3 text-slate-300">
                <li>Acesse <code>facebook.com</code> no navegador do seu computador e encontre o vídeo.</li>
                <li>Copie a URL da barra de endereços ou clique com o botão direito sobre o vídeo para copiar o link.</li>
                <li>Cole no ReelsGrab e clique em <strong>&quot;Baixar Vídeo&quot;</strong>.</li>
                <li>Clique em Baixar HD e o arquivo MP4 será salvo diretamente na sua pasta de Downloads.</li>
              </ol>
            </div>
          </div>

          {/* SEÇÃO 5: Resoluções */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Especificações Técnicas: Resoluções de Vídeo do Facebook
            </h3>
            <div className="overflow-x-auto my-6 border border-slate-800 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-300">
                    <th className="p-3.5 font-semibold">Perfil de Resolução</th>
                    <th className="p-3.5 font-semibold">Proporção</th>
                    <th className="p-3.5 font-semibold">Quadros (FPS)</th>
                    <th className="p-3.5 font-semibold">Taxa de Bits</th>
                    <th className="p-3.5 font-semibold">Uso Recomendado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {videoResolutions.map((res, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-slate-950/40" : "bg-slate-900/20"}>
                      <td className="p-3.5 font-medium text-white">{res.resolution}</td>
                      <td className="p-3.5 text-slate-400">{res.aspectRatio}</td>
                      <td className="p-3.5 text-slate-400">{res.fps}</td>
                      <td className="p-3.5 text-slate-400">{res.bitrate}</td>
                      <td className="p-3.5 text-slate-300">{res.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SEÇÃO 6: Conclusão */}
          <div className="border-t border-slate-800 pt-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Comece a Baixar Vídeos do Facebook com o ReelsGrab
            </h3>
            <p>
              O ReelsGrab proporciona a experiência mais limpa, rápida e confiável para baixar vídeos do Facebook na internet.
              Sem programas, sem anúncios enganosos e com áudio original completo. Cole seu link acima e faça o download agora!
            </p>
          </div>

        </article>
      </section>

      {/* RELATED TOOLS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-xl font-bold text-white mb-6">Ferramentas Relacionadas</h2>
        <RelatedTools tools={relatedTools} />
      </section>

      {/* Ad Slot */}
      <div className="max-w-4xl mx-auto px-4 mb-6">
        <div className="h-24 bg-slate-900 border border-dashed border-slate-700 rounded-xl flex items-center justify-center text-slate-600 text-xs">
          Publicidade
        </div>
      </div>

      {/* FAQ SECTION */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-white text-center mb-10">
          Perguntas Frequentes | Baixar Vídeo do Facebook
        </h2>
        <FaqSection faqs={perguntas} />
      </section>
    </>
  );
}
