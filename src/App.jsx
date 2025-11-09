import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, this would send to your email service
    // For now, just show success message
    console.log('Email submitted:', email)
    setSubmitted(true)

    // Reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 5000)
  }

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
            Transform Your Marketing Automation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              From Chaos to Campaigns
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Done-for-you marketing automation setup + beautiful email designs.
            <span className="block mt-2 text-blue-300">
              SFMC • HubSpot • Braze • Marketo & more
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#services"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              See What's Included
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border border-white/20"
            >
              Book a Free Consultation
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-blue-400">12+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">5+</div>
              <div className="text-gray-400">Platforms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">4 Languages</div>
              <div className="text-gray-400">EN, ES, FR, PT</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">Full Stack</div>
              <div className="text-gray-400">Tech + Creative</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Sound Familiar?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Drowning in Tools",
                description: "You have a marketing automation platform but don't know where to start. The learning curve is steep and you need campaigns running yesterday.",
                icon: "⚙️"
              },
              {
                title: "Technical + Creative Gap",
                description: "Your developer can build automations but can't design. Your designer creates beautiful emails but can't implement them.",
                icon: "🎨"
              },
              {
                title: "No Time to Learn",
                description: "YouTube tutorials and documentation take forever. You need an expert who can just get it done.",
                icon: "⏰"
              }
            ].map((problem, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                <p className="text-gray-400">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            What You Get
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            Complete marketing automation setup from strategy to launch
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Technical Implementation",
                items: [
                  "Platform setup & configuration (SFMC, HubSpot, Braze, Marketo)",
                  "Journey Builder & automation workflows",
                  "Data management & segmentation",
                  "SQL queries & custom scripting",
                  "API integrations & webhooks",
                  "Testing & quality assurance"
                ]
              },
              {
                title: "Creative Design",
                items: [
                  "Custom email templates",
                  "Responsive mobile designs",
                  "Brand-aligned visuals",
                  "A/B testing variations",
                  "Landing page design",
                  "Asset library creation"
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

          {/* Bonus */}
          <div className="mt-12 bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-500/30 rounded-xl p-8 text-center">
            <div className="inline-block bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-4">
              FOUNDING CLIENTS BONUS
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              First 5 Clients Get 40% Off
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              Help me build my portfolio and save £2-5k on your first project
            </p>
            <p className="text-amber-300 font-semibold">
              Plus: 2 months of free support & optimization after launch
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Simple 4-Step Process
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Discovery Call (30 min)",
                description: "We'll discuss your goals, current challenges, and ideal outcomes. No obligation."
              },
              {
                step: "2",
                title: "Custom Proposal (2 days)",
                description: "I'll send a detailed plan with scope, timeline, and pricing based on your needs."
              },
              {
                step: "3",
                title: "Build & Design (2-4 weeks)",
                description: "I'll handle all technical setup and design work. You review and approve milestones."
              },
              {
                step: "4",
                title: "Launch & Support",
                description: "We'll launch your campaigns together. I'll provide training and 2 months of support."
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Perfect For
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Scale-ups & SMBs",
                description: "You need enterprise-level marketing automation but don't have a full-time marketing ops team."
              },
              {
                title: "Marketing Directors",
                description: "You know what needs to happen, but don't have the technical bandwidth to implement it."
              },
              {
                title: "Portuguese Businesses",
                description: "You need bilingual campaigns and someone who understands your market + culture."
              },
              {
                title: "Platform Licensees",
                description: "You bought SFMC, HubSpot, or another tool but it's sitting unused because it's too complex."
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

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-gradient-to-br from-blue-900/30 to-cyan-900/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the waitlist for founding client spots
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                Get Early Access
              </button>
            </form>
          ) : (
            <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-6 text-white">
              <div className="text-2xl mb-2">✓ You're on the list!</div>
              <p className="text-gray-300">I'll reach out within 48 hours to schedule our discovery call.</p>
            </div>
          )}

          <p className="text-gray-400 text-sm mt-6">
            No spam. Just occasional updates about availability and case studies.
          </p>

          {/* Alternative Contact */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-400 mb-4">Prefer to talk first?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:edou.mota@me.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                edou.mota@me.com
              </a>
              <span className="hidden sm:inline text-gray-600">|</span>
              <a
                href="https://www.linkedin.com/in/edou-mota-b6489a27/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                LinkedIn Profile
              </a>
              <span className="hidden sm:inline text-gray-600">|</span>
              <a
                href="https://calendly.com/edou-mota/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-slate-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>© 2025 Edou Mota. All rights reserved.</p>
          <p className="mt-2">Marketing Automation • Design • SFMC • HubSpot • Braze • Marketo • Multilingual (EN/ES/FR/PT)</p>
        </div>
      </footer>
    </div>
  )
}

export default App
