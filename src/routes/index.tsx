import { createFileRoute } from "@tanstack/react-router";
import {
  Cake, PlayCircle, Package, ClipboardList, Calculator, Megaphone,
  Sparkles, Video, TrendingUp, Wallet, Check, ShieldCheck, Star, User, Mail, MessageCircle,
} from "lucide-react";
import type { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CHECKOUT_URL, PRICE, CONTACT, LEGAL_LINKS, HAS_7_DAY_GUARANTEE, TESTIMONIALS } from "@/config/site";
import hero from "@/assets/hero.jpg";
import r1 from "@/assets/r1.jpg";
import r2 from "@/assets/r2.jpg";
import r3 from "@/assets/r3.jpg";
import r4 from "@/assets/r4.jpg";
import r5 from "@/assets/r5.jpg";
import r6 from "@/assets/r6.jpg";
import r7 from "@/assets/r7.jpg";
import r8 from "@/assets/r8.jpg";
import r9 from "@/assets/r9.jpg";
import r10 from "@/assets/r10.jpg";
import r11 from "@/assets/r11.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucro com Bolo Gelado — Curso online de bolos gelados" },
      { name: "description", content: "Aprenda 11 receitas de bolo gelado em videoaulas e dê os primeiros passos para vender. Acesso por R$ 27,00." },
      { property: "og:title", content: "Lucro com Bolo Gelado — Curso online" },
      { property: "og:description", content: "11 receitas de bolo gelado em videoaulas, versões embrulhadas e na marmita. Aprenda no seu ritmo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const RECIPES = [
  { name: "Bolo Gelado Embrulhado de Coco com Abacaxi", img: r1 },
  { name: "Bolo Gelado Embrulhado de Ninho com Brigadeiro", img: r2 },
  { name: "Bolo Gelado de Prestígio", img: r3 },
  { name: "Bolo Gelado Embrulhado de Olho de Sogra", img: r4 },
  { name: "Bolo Gelado de Leite Ninho na Marmita", img: r5 },
  { name: "Bolo Gelado de Coco na Marmita", img: r6 },
  { name: "Bolo Gelado de Brigadeiro com Calda Cremosa na Marmita", img: r7 },
  { name: "Bolo Gelado de Limão na Marmita", img: r8 },
  { name: "Bolo Gelado de Leite Ninho", img: r9 },
  { name: "Bolo Gelado Prestígio Bem Molhadinho e Suculento", img: r10 },
  { name: "Bolo Gelado Embrulhado de Coco Super Molhadinho e Suculento", img: r11 },
];

const LEARN = [
  { icon: Cake, t: "Receitas de bolo gelado", d: "Aprenda diferentes sabores e combinações." },
  { icon: PlayCircle, t: "Preparo passo a passo", d: "Acompanhe as demonstrações em videoaulas." },
  { icon: Package, t: "Diferentes apresentações", d: "Conheça versões embrulhadas e na marmita." },
  { icon: ClipboardList, t: "Organização da produção", d: "Planeje ingredientes e quantidades." },
  { icon: Calculator, t: "Precificação", d: "Aprenda a considerar ingredientes, embalagens e outros custos." },
  { icon: Megaphone, t: "Estratégias de venda", d: "Conheça ideias para divulgar seus produtos e atender clientes." },
];

const WHY = [
  { icon: Sparkles, t: "Receitas variadas", d: "Conheça diferentes sabores para ampliar seu repertório." },
  { icon: Video, t: "Aprendizado prático", d: "Acompanhe as receitas em videoaulas." },
  { icon: TrendingUp, t: "Planejamento de vendas", d: "Entenda a importância de organizar custos e preços." },
  { icon: Wallet, t: "Possibilidade de renda extra", d: "Utilize o conhecimento para planejar seu próprio negócio." },
];

const INCLUDED = [
  "Aulas em vídeo com as receitas incluídas no curso",
  "11 receitas de bolo gelado",
  "Versões embrulhadas e preparadas na marmita",
  "Conteúdo demonstrativo de diferentes sabores",
  "Orientações de organização e planejamento de vendas",
];

// Respostas marcadas com [EDITAR] dependem da configuração real do curso.
const FAQ = [
  { q: "Preciso ter experiência com confeitaria?", a: "Não. As receitas são demonstradas passo a passo em vídeo, para que você possa acompanhar mesmo começando agora." },
  { q: "Como funcionam as videoaulas?", a: "Cada receita é apresentada em vídeo, mostrando o preparo e a montagem. Você assiste quando quiser e pode rever quantas vezes precisar." },
  { q: "Quais receitas estão incluídas?", a: "São 11 receitas de bolo gelado, entre versões embrulhadas e na marmita — como coco, Prestígio, Leite Ninho, brigadeiro, limão e olho de sogra. Veja a lista completa na seção de receitas." },
  { q: "Como posso começar a vender bolos gelados?", a: "O curso traz orientações sobre organização da produção, precificação e ideias de divulgação. Os resultados dependem da sua dedicação, região e outros fatores." },
  { q: "Como recebo o acesso ao curso?", a: "Após a confirmação do pagamento, as instruções de acesso são enviadas pela plataforma de checkout para o e-mail informado na compra." },
  { q: "Por quanto tempo terei acesso?", a: "O período de acesso é informado na página de checkout. Consulte as condições antes de concluir a compra." },
  { q: "Posso assistir às aulas pelo celular?", a: "Sim. As aulas podem ser assistidas pelo celular, tablet ou computador com acesso à internet." },
  { q: "Como funciona a política de reembolso?", a: "As condições de reembolso seguem a política da plataforma de pagamento e são apresentadas no checkout." },
];

function BuyButton({ children, href = CHECKOUT_URL, className = "" }: { children: ReactNode; href?: string; className?: string }) {
  return (
    <a
      href={href}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      data-analytics="cta-checkout"
      className={`inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-extrabold tracking-wide text-accent-foreground shadow-gold transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50 sm:text-base ${className}`}
    >
      {children}
    </a>
  );
}

function SectionHead({ title, sub, light = false }: { title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className={`text-3xl font-bold leading-tight sm:text-4xl ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
      {sub && <p className={`mt-4 text-lg ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

function IconCard({ icon: Icon, t, d }: { icon: typeof Cake; t: string; d: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-secondary">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="text-xl font-semibold text-primary">{t}</h3>
      <p className="mt-2 text-muted-foreground">{d}</p>
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  // Substitua por <img src={logo} /> quando a logo oficial for adicionada.
  return (
    <span className={`font-display text-xl font-bold ${light ? "text-primary-foreground" : "text-primary"}`}>
      Lucro com <span className="text-accent">Bolo Gelado</span>
    </span>
  );
}

function Index() {
  return (
    <div className="overflow-x-hidden">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#topo" aria-label="Lucro com Bolo Gelado — início"><Logo /></a>
          <a href="#oferta" className="hidden rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition hover:bg-secondary sm:inline-flex">
            Quero aprender
          </a>
        </div>
      </header>

      <main id="topo">
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
          <div>
            <span className="inline-block rounded-full bg-muted px-4 py-1.5 text-xs font-bold tracking-widest text-secondary">CURSO ONLINE DE BOLO GELADO</span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-primary sm:text-5xl">
              Aprenda a fazer <span className="text-accent italic">bolos gelados</span> irresistíveis e descubra como começar a <span className="underline decoration-accent decoration-4 underline-offset-8">vender</span>!
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Aprenda receitas cremosas e deliciosas, conheça diferentes apresentações e dê os primeiros passos para transformar sua produção em uma oportunidade de renda extra.
            </p>
            <ul className="mt-6 space-y-2">
              {["Videoaulas passo a passo.", "Receitas de diferentes sabores.", "Aprenda no seu ritmo."].map((b) => (
                <li key={b} className="flex items-center gap-3 font-semibold text-foreground">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check className="h-4 w-4" aria-hidden /></span>
                  {b}
                </li>
              ))}
            </ul>
            <BuyButton href="#oferta" className="mt-8 w-full sm:w-auto">QUERO APRENDER AGORA</BuyButton>
          </div>
          <div className="relative">
            <img src={hero} alt="Fatia de bolo gelado de coco com cobertura de coco ralado, com bolos de chocolate e Prestígio ao fundo" width={1200} height={1408} className="aspect-[6/7] w-full rounded-3xl object-cover shadow-soft" />
            <div className="absolute -bottom-5 left-5 rounded-2xl bg-card px-5 py-3 shadow-soft">
              <p className="font-display text-2xl font-bold text-primary">11 receitas</p>
              <p className="text-sm text-muted-foreground">em videoaulas</p>
            </div>
          </div>
        </section>

        {/* APRENDER */}
        <section className="bg-muted/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead title="O que você vai aprender no curso?" sub="Conheça receitas deliciosas e aprenda diferentes formas de preparar e apresentar seus bolos gelados." />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {LEARN.map((c) => <IconCard key={c.t} {...c} />)}
            </div>
          </div>
        </section>

        {/* RECEITAS */}
        <section id="receitas" className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead title="Receitas deliciosas para você aprender!" sub="Descubra os sabores que fazem parte do curso Lucro com Bolo Gelado." />
            <ul className="grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 lg:grid-cols-4">
              {RECIPES.map((r, i) => (
                <li key={r.name} className="group overflow-hidden rounded-2xl bg-card shadow-soft">
                  <div className="overflow-hidden">
                    <img src={r.img} alt={r.name} loading="lazy" width={816} height={816} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-bold text-accent">RECEITA {String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-1 font-sans text-base font-bold leading-snug text-primary">{r.name}</h3>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-12 text-center"><BuyButton href="#oferta">QUERO APRENDER AGORA</BuyButton></div>
          </div>
        </section>

        {/* POR QUE */}
        <section className="bg-muted/60 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead title="Comece a aprender no seu ritmo!" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {WHY.map((c) => <IconCard key={c.t} {...c} />)}
            </div>
          </div>
        </section>

        {/* RECEBE */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-5">
            <SectionHead title="Tudo para começar a aprender!" />
            <ul className="space-y-4">
              {INCLUDED.map((i) => (
                <li key={i} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-accent"><Check className="h-5 w-5" aria-hidden /></span>
                  <span className="font-semibold text-foreground">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* OFERTA */}
        <section id="oferta" className="scroll-mt-16 bg-primary py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead light title="Comece hoje sua jornada no mundo dos bolos gelados!" sub="Tenha acesso às receitas do curso Lucro com Bolo Gelado e aprenda no seu ritmo." />
            <div className="mx-auto max-w-md rounded-3xl bg-background p-8 text-center shadow-soft sm:p-10">
              <Logo />
              <ul className="mt-6 space-y-2 text-left">
                {INCLUDED.slice(0, 3).map((i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />{i}</li>
                ))}
              </ul>
              <div className="my-8 border-y border-border py-6">
                <p className="text-sm font-semibold text-muted-foreground">Acesso ao curso por</p>
                <p className="font-display text-primary">
                  <span className="align-top text-2xl font-bold">R$</span>{" "}
                  <span className="text-7xl font-bold">{PRICE.split(",")[0]}</span>
                  <span className="text-3xl font-bold">,{PRICE.split(",")[1]}</span>
                </p>
              </div>
              <BuyButton className="w-full">QUERO ACESSAR O CURSO AGORA</BuyButton>
              <p className="mt-4 text-xs text-muted-foreground">O pagamento é processado com segurança pela plataforma de checkout.</p>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHead title="Experiências de quem aprende e empreende" sub="Espaço reservado para depoimentos reais de alunas, publicados com autorização." />
            <div className="grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <figure key={i} className="relative rounded-2xl border border-dashed border-border bg-card p-7 shadow-soft">
                  {t.isExample && <span className="absolute right-4 top-4 rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">Exemplo</span>}
                  <div className="flex gap-1 text-accent" aria-label={`${t.rating} de 5 estrelas`}>
                    {Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" aria-hidden />)}
                  </div>
                  <blockquote className="mt-4 text-muted-foreground">“{t.text}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    {t.photo ? (
                      <img src={t.photo} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                    ) : (
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground"><User className="h-6 w-6" aria-hidden /></span>
                    )}
                    <span>
                      <span className="block font-bold text-primary">{t.name}</span>
                      <span className="block text-sm text-muted-foreground">{t.location}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* GARANTIA */}
        <section className="pb-20">
          <div className="mx-auto max-w-3xl px-5">
            <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-muted/60 p-8 text-center sm:flex-row sm:text-left">
              <span className="inline-flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary text-accent"><ShieldCheck className="h-10 w-10" aria-hidden /></span>
              <div>
                <h2 className="text-2xl font-bold text-primary">Compre com tranquilidade</h2>
                <p className="mt-2 text-muted-foreground">
                  {HAS_7_DAY_GUARANTEE
                    ? "Você conta com garantia de 7 dias, conforme as condições informadas no checkout."
                    : "As condições de acesso e de reembolso são apresentadas na página de checkout. Consulte-as antes de concluir sua compra."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/60 py-20">
          <div className="mx-auto max-w-3xl px-5">
            <SectionHead title="Perguntas frequentes" />
            <Accordion type="single" collapsible className="space-y-3">
              {FAQ.map((f, i) => (
                <AccordionItem key={f.q} value={`f${i}`} className="rounded-2xl border border-border bg-card px-6">
                  <AccordionTrigger className="text-left text-base font-bold text-primary hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-12 text-center"><BuyButton>QUERO ACESSAR O CURSO AGORA</BuyButton></div>
          </div>
        </section>
      </main>

      <footer className="bg-primary py-12 text-primary-foreground">
        <div className="mx-auto max-w-6xl space-y-6 px-5 text-center">
          <Logo light />
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href={LEGAL_LINKS.privacy} className="hover:text-accent">Política de Privacidade</a>
            <a href={LEGAL_LINKS.terms} className="hover:text-accent">Termos de Uso</a>
            <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-1 hover:text-accent"><Mail className="h-4 w-4" aria-hidden />{CONTACT.email}</a>
            {CONTACT.whatsapp && (
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent"><MessageCircle className="h-4 w-4" aria-hidden />WhatsApp</a>
            )}
          </nav>
          <p className="mx-auto max-w-2xl text-xs text-primary-foreground/70">
            Os resultados financeiros dependem de diversos fatores, como dedicação, região, custos e demanda, e não são garantidos.
          </p>
          <p className="text-xs text-primary-foreground/70">© {new Date().getFullYear()} Lucro com Bolo Gelado. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
