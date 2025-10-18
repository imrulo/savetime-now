import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[#0A2540] to-[#1a365d] text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Save Time Now—Get a Professional Website Without Lifting a Finger
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              I build your strategic, SEO-optimized, mobile-perfect website from scratch—so you save time, attract clients, and grow. You run your business. I handle the web.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="https://wa.link/6difl3" 
                className="btn-primary text-lg px-10 py-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Let's Build Your Site
              </Link>
              <Link 
                href="#portfolio" 
                className="btn-secondary text-lg px-10 py-5"
              >
                See Past Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-6">
                Tired of Wrestling with Website Builders?
              </h2>
              <div className="space-y-4 text-lg text-gray-600 mb-8">
                <p>❌ <strong>DIY frustration:</strong> Hours spent on templates that never look quite right</p>
                <p>❌ <strong>Tech overwhelm:</strong> Learning platforms when you should be serving clients</p>
                <p>❌ <strong>Generic results:</strong> Cookie-cutter sites that don't convert visitors</p>
                <p>❌ <strong>Time drain:</strong> Endless tweaking instead of business growth</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-6">
                Here's What You Get Instead:
              </h3>
              <div className="space-y-4 text-lg text-gray-600">
                <p>✅ <strong>Zero tech stress:</strong> I handle everything from design to deployment</p>
                <p>✅ <strong>Built to convert:</strong> Strategic design that turns visitors into clients</p>
                <p>✅ <strong>SEO-ready:</strong> Optimized from day one to rank in Google</p>
                <p>✅ <strong>Mobile-perfect:</strong> Flawless on every device, every time</p>
                <p>✅ <strong>Your time back:</strong> Focus on what you do best—growing your business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-6">
              How It Works (It's Simple)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three steps from vision to live website. No technical knowledge required.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#00C9A7] text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                Share Your Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tell me about your business, goals, and style preferences. I'll ask the right questions to understand exactly what you need.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#00C9A7] text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                I Build Your Site
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I design, develop, and optimize your website while you focus on your business. You'll get regular updates on progress.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#00C9A7] text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">
                You Grow Your Business
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your professional website goes live, ready to attract and convert clients. You get full control and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-6">
              Why Choose Done-For-You Web Design?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop wasting time on tech. Start growing your business with a website that actually works.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">Zero Tech Stress</h3>
              <p className="text-gray-600">No learning curves, no technical headaches. Just results.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">Built to Convert</h3>
              <p className="text-gray-600">Strategic design that turns visitors into paying clients.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">SEO-Ready from Day One</h3>
              <p className="text-gray-600">Optimized to rank in Google and attract organic traffic.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">Flawless on Mobile</h3>
              <p className="text-gray-600">Perfect on every device, every screen size, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Proof Section */}
      <section id="portfolio" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-6">
              Real Results for Real Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how I've helped entrepreneurs save time and grow their businesses with professional websites.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhedmpc0f/image/upload/v1760792225/Screenshot_2025-10-18_at_14.55.58_kv3wxa.png"
                  alt="Professional website design for business services"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-3">Business Services Website</h3>
              <p className="text-gray-600 mb-4">Modern, professional website design showcasing business services with clean layout and strategic conversion elements.</p>
              <div className="bg-[#00C9A7] text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                +40% bookings in 30 days
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhedmpc0f/image/upload/v1758190669/assets_now_bjyxjj.png"
                  alt="Assets management platform interface"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-3">Assets Management Platform</h3>
              <p className="text-gray-600 mb-4">Comprehensive digital assets management solution with intuitive dashboard and user-friendly interface design.</p>
              <div className="bg-[#00C9A7] text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                +60% user engagement
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhedmpc0f/image/upload/v1758190668/domain_industries_hhrpqb.png"
                  alt="Domain industries showcase website"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-3">Domain Industries Showcase</h3>
              <p className="text-gray-600 mb-4">Multi-industry website showcasing various business domains with sector-specific design and content strategy.</p>
              <div className="bg-[#00C9A7] text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                +50% lead generation
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="aspect-video rounded-lg mb-6 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dhedmpc0f/image/upload/v1758190670/janeiro_ai_e8jvht.png"
                  alt="Janeiro AI technology platform"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-3">Janeiro AI Platform</h3>
              <p className="text-gray-600 mb-4">Cutting-edge AI technology platform with modern design, showcasing advanced features and user experience.</p>
              <div className="bg-[#00C9A7] text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                +70% conversion rate
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0A2540] text-white rounded-xl p-8">
              <p className="text-lg italic mb-6">
                "I was spending hours every week trying to fix my website. Now I have a professional site that actually brings in clients. Best investment I've made for my business."
              </p>
              <div className="font-semibold">Sarah M.</div>
              <div className="text-gray-300">Life Coach</div>
            </div>
            
            <div className="bg-[#0A2540] text-white rounded-xl p-8">
              <p className="text-lg italic mb-6">
                "The website looks amazing and works perfectly on mobile. I've gotten so many compliments from clients. Worth every penny."
              </p>
              <div className="font-semibold">Mike R.</div>
              <div className="text-gray-300">Business Consultant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <section className="section-padding bg-gradient-to-r from-[#0A2540] to-[#1a365d] text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Your Time Is Worth More Than Web Design
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Stop wasting hours on website builders. Get a professional site that converts while you focus on what you do best.
          </p>
          <Link 
            href="https://wa.link/6difl3" 
            className="btn-primary text-lg px-10 py-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Your Free Website Plan
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about getting your website built.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">How long does it take to build my website?</h3>
              <p className="text-gray-600">Most websites are completed in 7-10 business days. Complex projects may take up to 2 weeks. You'll get regular updates throughout the process.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">Do I need any technical knowledge?</h3>
              <p className="text-gray-600">None at all! I handle everything from design to deployment. You just need to provide content and feedback. I'll guide you through the entire process.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">Can you customize the design to match my brand?</h3>
              <p className="text-gray-600">Absolutely! Every website is 100% bespoke and designed specifically for your business. I'll incorporate your brand colors, fonts, and style preferences.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">Will my website be mobile-friendly?</h3>
              <p className="text-gray-600">Yes! Every website I build is fully responsive and optimized for mobile devices. It will look and work perfectly on phones, tablets, and desktops.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[#0A2540] mb-3">What if I need changes after the website is live?</h3>
              <p className="text-gray-600">I provide 30 days of free support after launch for any minor adjustments. For major changes or ongoing maintenance, I offer affordable support packages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-[#0A2540] text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Save Time Now?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Stop wrestling with website builders. Get a professional website that converts while you focus on growing your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="https://wa.link/6difl3" 
              className="btn-primary text-lg px-10 py-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start on WhatsApp
            </Link>
            <Link 
              href="mailto:imrulo.eth@proton.me" 
              className="btn-secondary text-lg px-10 py-5"
            >
              Send Email
            </Link>
          </div>
          
          <p className="text-gray-300 mt-8 text-sm">
            Response time: Usually within 2 hours during business hours
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container-max text-center">
          <p className="text-gray-400 mb-2">
            © 2025 SaveTime.Now. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with ❤️ by imrulo.eth
          </p>
        </div>
      </footer>
    </main>
  )
}