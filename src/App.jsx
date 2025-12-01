function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Edou Mota <span className="text-blue-400">| Consulting</span>
          </div>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              CRM & Marketing Automation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            I help marketing teams turn messy journeys into scalable, data-driven CRM programs. Ex-Shopify & M&S, 10+ years in SFMC, lifecycle, and high-impact email.
          </p>

          <p className="text-lg text-blue-300 mb-12">
            Available for CRM & Marketing Automation consulting (project, fractional, or contract).
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://calendly.com/edou-mota/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Book a 20-minute intro call
            </a>
            <a
              href="mailto:edou.mota@me.com"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border border-white/20"
            >
              Email me
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-blue-400">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">Ex-Shopify</div>
              <div className="text-gray-400">& M&S</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">SFMC</div>
              <div className="text-gray-400">Specialist</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">Lifecycle</div>
              <div className="text-gray-400">& CRM Expert</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Work With Section */}
      <section className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Who I work with
          </h2>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <p className="text-xl text-gray-300 mb-6">
              I'm a good fit for Heads of Marketing, Growth, or CRM who:
            </p>
            <ul className="space-y-4">
              {[
                "Know they should be doing more with SFMC / HubSpot / email automation, but aren't getting the time or focus.",
                "Have journeys running, but they're fragile, stitched together over time, or hard to report on.",
                "Need someone who can design the lifecycle strategy and build it properly in the tools, not just write a deck."
              ].map((item, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3 text-xl">•</span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            How I can help
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Three ways to work together
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "CRM & Automation Audit",
                description: "A diagnostic of your current journeys, data, and SFMC setup. You get a prioritised roadmap: what to fix, what to scrap, and what to build next for impact."
              },
              {
                title: "Journey Design & Build",
                description: "I design and build lifecycle journeys (onboarding, activation, cross-sell, win-back) in SFMC or your existing stack — including segmentation, dynamic content, and experimentation."
              },
              {
                title: "Optimisation & Coaching",
                description: "Ongoing help to improve performance: testing plans, new triggers, better personalisation, and coaching your team so they can own it long term."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-8 hover:bg-blue-900/40 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Perfect For
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Scale-ups & SMBs",
                description: "You've outgrown basic newsletters. You need enterprise-level CRM and automation but don't have a full-time marketing ops team."
              },
              {
                title: "Marketing Directors",
                description: "You know what needs to happen across the lifecycle, but don't have the hands-on SFMC/HubSpot bandwidth to implement it properly."
              },
              {
                title: "Platform Licensees",
                description: "You bought SFMC, HubSpot, or another platform, but it's under-used because it feels too complex or risky to touch."
              },
              {
                title: "Ecommerce & Product-led Brands",
                description: "You rely on repeat customers and LTV, and need journeys that actually drive activation, adoption, and retention."
              }
            ].map((audience, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg font-bold text-blue-400 mb-2">{audience.title}</h3>
                <p className="text-gray-400">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            What You Get
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Complete CRM & marketing automation support — from data and journeys to copy and creative.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Technical Implementation",
                items: [
                  "Platform setup & configuration (SFMC, HubSpot, Braze, Marketo)",
                  "Journey Builder & automation workflows (onboarding, activation, win-back)",
                  "Data management & segmentation",
                  "SQL queries, custom scripting & dynamic content logic",
                  "API integrations & webhooks",
                  "Testing, QA & monitoring"
                ]
              },
              {
                title: "Messaging & Creative",
                items: [
                  "Custom email templates and component library",
                  "Responsive, mobile-first layouts",
                  "Brand-aligned visuals and copy",
                  "A/B test variants for subject lines, content, and CTAs",
                  "Landing page / preference centre support",
                  "Asset library organisation"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 border-b border-blue-500/30 pb-4">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-blue-400 mr-3 text-xl">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Results */}
      <section className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Selected results
          </h2>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <ul className="space-y-6">
              {[
                "19% stat-sig lift in MQL conversion for a global B2B nurture (~£950k influenced GP annually)",
                "4.31% lift in product adoption from shipping cross-sell journeys (100K+ merchants per month)",
                "9–14% engagement uplift and 40% less manual ops for a 2M+ subscriber retail program"
              ].map((result, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-blue-400 mr-3 text-xl">✓</span>
                  <span className="text-lg">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio Link */}
      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to see my work?
          </h2>
          <p className="text-gray-300 mb-8">
            View detailed case studies and my full background on my portfolio site.
          </p>
          <a
            href="https://edoumota.me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border border-white/20"
          >
            View my portfolio →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-gradient-to-br from-blue-900/30 to-cyan-900/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to improve your CRM & automation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Tell me a bit about your stack and challenges, and we'll see if I can help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://calendly.com/edou-mota/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Book a 20-minute intro call
            </a>
            <a
              href="mailto:edou.mota@me.com"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border border-white/20"
            >
              Email me
            </a>
          </div>

          {/* Alternative Contact */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-gray-400 mb-4">Or find me on</p>
            <a
              href="https://www.linkedin.com/in/edou-mota-b6489a27/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-slate-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2025 Edou Mota. All rights reserved.</p>
          <p className="mt-2">CRM & Marketing Automation Consulting • SFMC • Lifecycle • Data-driven Email</p>
        </div>
      </footer>
    </div>
  )
}

export default App
