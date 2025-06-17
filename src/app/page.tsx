'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#212529] text-[#E9ECEF] font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="px-8 py-4 flex justify-between items-center bg-[#2C3034]">
        <div className="text-xl font-bold text-[#FFFFFF]">Testovací Kavárna "U Kódu"</div>
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-[#ADB5BD]">Domů</a>
          <a href="#about" className="hover:text-[#ADB5BD]">O nás</a>
          <a href="#services" className="hover:text-[#ADB5BD]">Služby</a>
          <a href="#team" className="hover:text-[#ADB5BD]">Tým</a>
          <a href="#pricing" className="hover:text-[#ADB5BD]">Ceník</a>
          <a href="#contact" className="hover:text-[#ADB5BD]">Kontakt</a>
        </div>
        {/* Mobile menu icon */}
        <div className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-8 bg-[#212529]">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#FFFFFF] mb-4 tracking-tight leading-tight">
          Testovací Kavárna <br /> "U Kódu"
        </h1>
        <p className="text-xl md:text-2xl text-[#ADB5BD] mb-8 max-w-2xl">
          Nejlepší káva pro vaše bugy.
        </p>
        <a href="#about" className="px-8 py-3 bg-[#495057] text-[#FFFFFF] rounded-md hover:bg-[#6C757D] transition-colors">
          Zjistit více
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8 bg-[#2C3034] text-center">
        <h2 className="text-4xl font-bold text-[#FFFFFF] mb-8">O nás</h2>
        <p className="text-lg text-[#E9ECEF] max-w-3xl mx-auto leading-relaxed">
          Jsme moderní kavárna v srdci Prahy, která nabízí nejen skvělou kávu, ale i klidné prostředí pro práci a setkávání. Naše specialita je "debuggovací doppio".
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-8 bg-[#212529]">
        <h2 className="text-4xl font-bold text-[#FFFFFF] text-center mb-12">Naše Služby</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#2C3034] p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
            <svg className="w-12 h-12 text-[#ADB5BD] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 2m0 0l-2-2m2 2V9m6 2a6 6 0 00-6-6H6a6 6 0 00-6 6v2a6 6 0 006 6h2m2-8H6a2 2 0 00-2 2v2a2 2 0 002 2h2"></path>
            </svg>
            <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Programování a kódování</h3>
            <p className="text-[#E9ECEF]">Pohodlné pracovní prostředí s vysokorychlostním internetem pro vaše projekty.</p>
          </div>
          <div className="bg-[#2C3034] p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
            <svg className="w-12 h-12 text-[#ADB5BD] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Nejlepší káva</h3>
            <p className="text-[#E9ECEF]">Široká nabídka kávových specialit, včetně našeho "debuggovacího doppia".</p>
          </div>
          <div className="bg-[#2C3034] p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
            <svg className="w-12 h-12 text-[#ADB5BD] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h-3m4-4H7m11 0l-4-4-4 4m6-6l4-4-4 4m0 0H7"></path>
            </svg>
            <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Networking</h3>
            <p className="text-[#E9ECEF]">Ideální místo pro setkání a navazování nových pracovních kontaktů.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-8 bg-[#2C3034]">
        <h2 className="text-4xl font-bold text-[#FFFFFF] text-center mb-12">Náš Tým</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#212529] p-6 rounded-lg shadow-lg text-center">
            <div className="w-24 h-24 rounded-full bg-[#495057] mx-auto mb-4 flex justify-center items-center text-xl font-bold text-[#E9ECEF]">JP</div>
            <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">Jan Programátor</h3>
            <p className="text-[#ADB5BD]">Zakladatel & Chief Coffee Officer</p>
          </div>
          <div className="bg-[#212529] p-6 rounded-lg shadow-lg text-center">
            <div className="w-24 h-24 rounded-full bg-[#495057] mx-auto mb-4 flex justify-center items-center text-xl font-bold text-[#E9ECEF]">KM</div>
            <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">Klára Manažerka</h3>
            <p className="text-[#ADB5BD]">Provozní manažerka</p>
          </div>
          <div className="bg-[#212529] p-6 rounded-lg shadow-lg text-center">
            <div className="w-24 h-24 rounded-full bg-[#495057] mx-auto mb-4 flex justify-center items-center text-xl font-bold text-[#E9ECEF]">PV</div>
            <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">Petr Vývojář</h3>
            <p className="text-[#ADB5BD]">Barista & Developer Rel. Mgr.</p>
          </div>
          <div className="bg-[#212529] p-6 rounded-lg shadow-lg text-center">
            <div className="w-24 h-24 rounded-full bg-[#495057] mx-auto mb-4 flex justify-center items-center text-xl font-bold text-[#E9ECEF]">AK</div>
            <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">Anna Káva</h3>
            <p className="text-[#ADB5BD]">Hlavní Barista</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-8 bg-[#212529]">
        <h2 className="text-4xl font-bold text-[#FFFFFF] text-center mb-12">Ceník</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#2C3034] p-8 rounded-lg shadow-lg text-center flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Starter</h3>
              <p className="text-4xl font-bold text-[#FFFFFF] mb-6">50 Kč<span className="text-lg font-normal text-[#ADB5BD]">/hodina</span></p>
              <ul className="text-[#E9ECEF] space-y-3 mb-8">
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 text-[#ADB5BD]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Přístup k Wi-Fi
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 text-[#ADB5BD]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Základní káva/čaj
                </li>
                <li className="flex items-center justify-center text-[#6C757D]">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path></svg>
                  Bez prioritního sezení
                </li>
              </ul>
            </div>
            <button className="px-6 py-3 bg-[#495057] text-[#FFFFFF] rounded-md hover:bg-[#6C757D] transition-colors">Vybrat</button>
          </div>

          <div className="bg-[#2C3034] p-8 rounded-lg shadow-lg text-center flex flex-col justify-between border-2 border-[#ADB5BD]">
            <div>
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Developer</h3>
              <p className="text-4xl font-bold text-[#FFFFFF] mb-6">150 Kč<span className="text-lg font-normal text-[#ADB5BD]">/hodina</span></p>
              <ul className="text-[#E9ECEF] space-y-3 mb-8">
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 text-[#ADB5BD]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Vše ze Starter
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 text-[#ADB5BD]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Neomezená káva/čaj
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 text-[#ADB5BD]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Prioritní sezení
                </li>
              </ul>
            </div>
            <button className="px-6 py-3 bg-[#ADB5BD] text-[#212529] rounded-md hover:bg-[#6C757D] transition-colors">Vybrat</button>
          </div>

          <div className="bg-[#2C3034] p-8 rounded-lg shadow-lg text-center flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Team</h3>
              <p className="text-4xl font-bold text-[#FFFFFF] mb-6">500 Kč<span className="text-lg font-normal text-[#ADB5BD]">/den</span></p>
              <ul className="text-[#E9ECEF] space-y-3 mb-8">
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 text-[#ADB5BD]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Vše z Developer
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 text-[#ADB5BD]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Rezervace stolu
                </li>
                <li className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 text-[#ADB5BD]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Slevy na jídlo
                </li>
              </ul>
            </div>
            <button className="px-6 py-3 bg-[#495057] text-[#FFFFFF] rounded-md hover:bg-[#6C757D] transition-colors">Vybrat</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 bg-[#2C3034] text-center">
        <h2 className="text-4xl font-bold text-[#FFFFFF] mb-8">Kontakt</h2>
        <div className="max-w-2xl mx-auto space-y-4 text-lg text-[#E9ECEF]">
          <p className="flex items-center justify-center">
            <svg className="w-6 h-6 mr-3 text-[#ADB5BD]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 13H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z"></path></svg>
            Email: test@kavarna.cz
          </p>
          <p className="flex items-center justify-center">
            <svg className="w-6 h-6 mr-3 text-[#ADB5BD]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            Telefon: +420 777 123 456
          </p>
          <p className="flex items-center justify-center">
            <svg className="w-6 h-6 mr-3 text-[#ADB5BD]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            Adresa: Bugfixová 1, 110 00 Praha 1
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-[#212529] text-center text-[#ADB5BD] text-sm">
        <p>&copy; {new Date().getFullYear()} Testovací Kavárna "U Kódu". Všechna práva vyhrazena.</p>
      </footer>
    </div>
  );
}