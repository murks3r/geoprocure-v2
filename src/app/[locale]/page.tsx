import ContactForm from "@/components/ContactForm";
import Link from "next/link";

const translations: Record<string, any> = {
  en: {
    nav: { home: "Home", materials: "Materials", process: "Process", contact: "Contact" },
    hero: {
      subtitle: "Estonian Trading House · German Quality Standards",
      title: "Secure Sourcing of Phosphate & Industrial Minerals",
      description: "Geoprocure structures physical deliveries of phosphate, fertilizer raw materials and industrial minerals. We verify suppliers, document specifications and secure settlement and logistics.",
      cta: "Send RFQ",
      responseTime: "Response on RFQ ≤ 1 AT",
      minVolume: "Min. volume 10,000 MT",
      transit: "Tartous → Augusta 4–5 days",
      standards: "Standards EU 2019/1009",
    },
    features: {
      title: "Why Geoprocure",
      subtitle: "Three bottlenecks we remove from your procurement process.",
      reliability: { title: "01 · Supplier Reliability", heading: "Verified Origin & Quality", description: "We work directly with licensed mining operations." },
      compliance: { title: "02 · Compliance", heading: "EU Regulation & Sanction Screening", description: "REACH, EU 2019/1009, EU Sanctions." },
      risk: { title: "03 · Risk Management", heading: "Structured Settlement", description: "LC, SBLC, Escrow or Staged Payment." },
    },
    materials: {
      title: "Materials", subtitle: "What we trade.",
      phosphate: "Phosphate", fertilizer: "Fertilizer", sulphur: "Sulphur", minerals: "Minerals", stone: "Stone & REE",
    },
    process: {
      title: "How a Delivery Works", subtitle: "From RFQ to Discharge in 5 Steps",
      step1: { heading: "RFQ & Qualification", description: "You send specification, volume and target port." },
      step2: { heading: "Quote & Term Sheet", description: "Indicative FOB/CFR quote with quality and delivery window." },
      step3: { heading: "Contract & Settlement Setup", description: "Sales contract, pre-shipment inspection, bank instruments." },
      step4: { heading: "Shipment", description: "Charter, loading at origin port, analysis, Bills of Lading." },
      step5: { heading: "Discharge & Settlement", description: "Unloading at destination port, final settlement." },
    },
    cta: {
      title: "Next Step", subtitle: "Send us your specification. We respond within one business day.",
      note: "Minimum volume 10,000 MT per shipment.", button: "Send Inquiry",
    },
    footer: { rights: "All rights reserved." },
  },
  de: {
    nav: { home: "Startseite", materials: "Materialien", process: "Prozess", contact: "Kontakt" },
    hero: {
      subtitle: "Estnisches Handelshaus · Deutsche Qualitätsstandards",
      title: "Sichere Beschaffung von Phosphat & Industriemineralien",
      description: "Geoprocure strukturiert physische Lieferungen von Phosphat und Industriemineralien.",
      cta: "Anfrage senden",
      responseTime: "Antwort auf RFQ ≤ 1 AT",
      minVolume: "Mindestvolumen 10.000 MT",
      transit: "Tartous → Augusta 4–5 Tage",
      standards: "Standards EU 2019/1009",
    },
    features: {
      title: "Warum Geoprocure",
      subtitle: "Drei Engpässe, die wir aus Ihrem Beschaffungsprozess nehmen.",
      reliability: { title: "01 · Lieferzuverlässigkeit", heading: "Verifizierte Herkunft & Qualität", description: "Wir arbeiten direkt mit lizenzierten Förderbetrieben." },
      compliance: { title: "02 · Compliance", heading: "EU-Regulierung & Sanktions-Screening", description: "REACH, EU 2019/1009, EU-Sanktionen." },
      risk: { title: "03 · Risikomanagement", heading: "Strukturiertes Settlement", description: "LC, SBLC, Treuhand oder Stufenzahlung." },
    },
    materials: {
      title: "Materialien", subtitle: "Was wir handeln.",
      phosphate: "Phosphat", fertilizer: "Dünger", sulphur: "Schwefel", minerals: "Mineralien", stone: "Stein & Seltenerden",
    },
    process: {
      title: "So funktioniert eine Lieferung", subtitle: "Vom RFQ bis zur Discharge in 5 Schritten",
      step1: { heading: "RFQ & Qualifizierung", description: "Sie senden Spezifikation, Volumen und Zielhafen." },
      step2: { heading: "Quote & Term Sheet", description: "Indikativer FOB/CFR-Quote mit Qualität und Lieferfenster." },
      step3: { heading: "Vertrag & Settlement-Setup", description: "Sales-Contract, Pre-Shipment Inspection, Bank-Instrumente." },
      step4: { heading: "Verschiffung", description: "Charter, Verladung am Ursprungshafen, Analyse, Bills of Lading." },
      step5: { heading: "Discharge & Settlement", description: "Entladung am Zielhafen, finales Settlement." },
    },
    cta: {
      title: "Nächster Schritt", subtitle: "Senden Sie uns Ihre Spezifikation. Wir antworten innerhalb eines Arbeitstages.",
      note: "Mindestvolumen 10.000 MT pro Lieferung.", button: "Anfrage senden",
    },
    footer: { rights: "Alle Rechte vorbehalten." },
  },
};

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = translations[params.locale] || translations.en;
  return {
    title: t.hero.title,
    description: t.hero.description,
  };
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as keyof typeof translations;
  const t = translations[locale] || translations.en;

  const languages = [
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
  ];

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href={`/${params.locale}`} className="text-xl font-bold text-gray-900">
              Geoprocure
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {Object.entries(t.nav).map(([key, label]) => (
                <a key={key} href={`/${params.locale}#${key}`} className="text-sm font-medium text-gray-700 hover:text-blue-600">
                  {label as string}
                </a>
              ))}
              <div className="relative group">
                <button className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-gray-700">
                  {params.locale.toUpperCase()}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute right-0 mt-1 w-28 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={lang.code === "en" ? "/" : `/${lang.code}`}
                      className={`block px-3 py-2 text-sm first:rounded-t-lg last:rounded-b-lg ${
                        params.locale === lang.code ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {lang.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-4">{t.hero.subtitle}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">{t.hero.title}</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{t.hero.description}</p>
            <Link
              href={`/${params.locale}#contact`}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
            >
              {t.hero.cta}
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-500">
              {["responseTime", "minVolume", "transit", "standards"].map((key) => (
                <span key={key} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {(t.hero as Record<string, string>)[key]}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.features.title}</h2>
            <p className="text-gray-600">{t.features.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(t.features).filter(([k]) => !["title", "subtitle"].includes(k)).map(([key, val]) => (
              <div key={key} className="bg-gray-50 rounded-xl p-8">
                <div className="text-blue-600 font-bold text-lg mb-4">{(val as Record<string, string>).title}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{(val as Record<string, string>).heading}</h3>
                <p className="text-gray-600">{(val as Record<string, string>).description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section id="materials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.materials.title}</h2>
            <p className="text-gray-600">{t.materials.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {["phosphate", "fertilizer", "sulphur", "minerals", "stone"].map((key, i) => (
              <div key={key} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-4xl mb-3">{["🧪", "🌱", "⚡", "🪨", "💎"][i]}</div>
                <div className="font-semibold text-gray-900">{(t.materials as Record<string, string>)[key]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.process.title}</h2>
            <p className="text-gray-600">{t.process.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{num}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{(t.process as Record<string, any>)[`step${num}`].heading}</h3>
                <p className="text-sm text-gray-600">{(t.process as Record<string, any>)[`step${num}`].description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">{t.cta.title}</h2>
            <p className="text-blue-100">{t.cta.subtitle}</p>
            <p className="text-blue-200 text-sm mt-2">{t.cta.note}</p>
          </div>
          <div className="bg-white rounded-xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold text-white">Geoprocure</span>
              <p className="text-gray-400 text-sm">Estonian Trading House</p>
            </div>
            <div className="text-gray-400 text-sm">© {new Date().getFullYear()} Geoprocure. {t.footer.rights}</div>
          </div>
        </div>
      </footer>
    </main>
  );
}