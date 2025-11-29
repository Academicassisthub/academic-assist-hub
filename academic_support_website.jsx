import React from 'react'

export default function AcademicSupportWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-semibold">AS</div>
            <div>
              <h1 className="text-lg font-bold">Academic Support Services</h1>
              <p className="text-sm text-gray-500">Research paper • Thesis • Data analysis • Editing</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#packages" className="hover:underline">Packages</a>
            <a href="#business-plan" className="hover:underline">Business Plan</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">Professional Academic Support — on your schedule</h2>
          <p className="mt-4 text-gray-600">Editing, formatting, thesis guidance, data analysis and publication support — ethical, high-quality help that improves your work while keeping academic integrity first.</p>

          <div className="mt-6 flex gap-3">
            <a href="#order" className="inline-block bg-blue-600 text-white px-5 py-3 rounded-lg shadow">Place an order</a>
            <a href="#services" className="inline-block border border-gray-200 px-5 py-3 rounded-lg">View services</a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-sm text-gray-500">Turnaround</p>
              <p className="font-semibold">24–72 hours</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-sm text-gray-500">Guarantee</p>
              <p className="font-semibold">Confidentiality & quality</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-sm text-gray-500">Payment</p>
              <p className="font-semibold">UPI / Paytm / Bank transfer</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-bold text-lg">Quick order</h3>
            <p className="text-sm text-gray-500 mt-1">Fill this and we'll contact you to confirm the scope & price.</p>
            <form id="quick-order" className="mt-4 space-y-3" onSubmit={(e)=>{e.preventDefault(); alert('This is a demo form — replace the handler with your backend or Google Form link.')}}>
              <input required placeholder="Your name" className="w-full border rounded px-3 py-2" />
              <input required type="email" placeholder="Email" className="w-full border rounded px-3 py-2" />
              <input placeholder="Phone (optional)" className="w-full border rounded px-3 py-2" />
              <select className="w-full border rounded px-3 py-2" defaultValue="Research Paper">
                <option>Research Paper Editing</option>
                <option>Thesis Support</option>
                <option>Data Analysis</option>
                <option>Formatting</option>
                <option>Presentation / Poster</option>
              </select>
              <input placeholder="Word count / pages" className="w-full border rounded px-3 py-2" />
              <textarea placeholder="Brief instructions" className="w-full border rounded px-3 py-2" rows={3} />
              <div className="flex gap-2">
                <button type="submit" className="flex-1 bg-blue-600 text-white py-2 rounded">Send order</button>
                <a href="#contact" className="flex-1 text-center border border-gray-200 py-2 rounded">Contact</a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold">Services</h3>
        <p className="text-gray-600 mt-2">A full range of ethical academic services — we never submit work on your behalf.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow">
            <h4 className="font-semibold">Research Paper Support</h4>
            <ul className="mt-3 text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Literature review guidance</li>
              <li>Structuring & flow</li>
              <li>Language editing & proofreading</li>
              <li>Citation & formatting</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <h4 className="font-semibold">Thesis / Dissertation Support</h4>
            <ul className="mt-3 text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Chapter-wise feedback</li>
              <li>Formatting to university guidelines</li>
              <li>Plagiarism reduction advice</li>
              <li>Proposal & defense slides</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <h4 className="font-semibold">Data Analysis & Visualization</h4>
            <ul className="mt-3 text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>SPSS, R, Python, Excel</li>
              <li>Statistical tests & interpretation</li>
              <li>Graphs, tables, and report-ready figures</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow">
            <h4 className="font-semibold">Formatting & Submission Support</h4>
            <p className="mt-2 text-sm text-gray-600">APA, MLA, IEEE, Springer and journal-specific formatting. Journal submission checklist support available.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <h4 className="font-semibold">Plagiarism Checking & Reduction</h4>
            <p className="mt-2 text-sm text-gray-600">We run checks and advise rewrites to improve originality while preserving your ideas.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <h4 className="font-semibold">Presentation & Poster Design</h4>
            <p className="mt-2 text-sm text-gray-600">Slide decks, conference posters and speaker notes designed for clarity and impact.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold">Pricing</h3>
        <p className="mt-2 text-gray-600">Transparent packages. Exact price depends on word count, complexity and deadline.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Basic</h4>
            <p className="text-sm text-gray-600">Proofreading, grammar, basic formatting</p>
            <p className="mt-4 font-bold">₹250–₹500 / 1000 words</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow border-2 border-blue-600">
            <h4 className="font-semibold">Standard</h4>
            <p className="text-sm text-gray-600">Complete editing, plagiarism reduction, formatting</p>
            <p className="mt-4 font-bold">₹500–₹1200 / 1000 words</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Premium</h4>
            <p className="text-sm text-gray-600">Deep editing, data interpretation, unlimited revisions</p>
            <p className="mt-4 font-bold">₹1500–₹3000 / 1000 words</p>
          </div>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <h4 className="font-semibold">Data Analysis Pricing (examples)</h4>
          <ul className="text-sm text-gray-600 list-disc list-inside mt-2">
            <li>SPSS analysis: ₹1,000–₹5,000</li>
            <li>Python/R analysis: ₹2,000–₹10,000</li>
            <li>Complete report + graphs: ₹3,000–₹15,000</li>
          </ul>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold">Ready-made Packages</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Proposal Review</h4>
            <p className="text-sm text-gray-600">Detailed feedback on research proposals. 3-day delivery.</p>
            <p className="mt-3 font-bold">From ₹2,000</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Thesis Starter</h4>
            <p className="text-sm text-gray-600">Structure planning + first chapter review.</p>
            <p className="mt-3 font-bold">From ₹5,000</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Publication Package</h4>
            <p className="text-sm text-gray-600">Formatting + cover letter + submission checklist.</p>
            <p className="mt-3 font-bold">From ₹3,500</p>
          </div>
        </div>
      </section>

      {/* Marketing & Assets */}
      <section id="marketing" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold">Marketing Content & Assets</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Instagram Caption</h4>
            <p className="mt-2 text-sm text-gray-600">🚀 Need help with your Research Paper or Thesis? We provide professional academic support including editing, formatting, plagiarism reduction, data analysis, and structured guidance. DM to get started.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">WhatsApp Message</h4>
            <p className="mt-2 text-sm text-gray-600">Hello! We offer professional support for Research Papers, Theses, Assignments & Data Analysis. Reply “Hi” to know more.</p>
          </div>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <h4 className="font-semibold">Logo Prompts</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
            <li>“A clean, professional logo for an academic support service, featuring a book + pen + digital touch, minimalist style, blue & black tones.”</li>
            <li>“Modern logo with an abstract academic symbol, representing research & writing, simple typography, premium look.”</li>
            <li>“Elegant logo with initials, soft gradients, minimal lines, academic consulting theme.”</li>
          </ul>
        </div>
      </section>

      {/* Business plan */}
      <section id="business-plan" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold">Simple Business Plan</h3>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Model & Customers</h4>
            <p className="text-sm text-gray-600 mt-2">We provide online academic support to college students, PG & PhD researchers, and professionals. Revenue from editing, data analysis and packages.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Tools & Marketing</h4>
            <p className="text-sm text-gray-600 mt-2">Tools: Grammarly, Turnitin, Canva, SPSS/Python/R. Marketing: Instagram, WhatsApp, LinkedIn, Fiverr, referrals.</p>
          </div>
        </div>
      </section>

      {/* Taglines & Terms */}
      <section id="terms" className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Taglines</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              <li>We refine your research.</li>
              <li>Your trusted academic partner.</li>
              <li>Write smarter. Research better.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Terms & Conditions (summary)</h4>
            <ol className="list-decimal list-inside text-sm text-gray-600 mt-2 space-y-1">
              <li>We provide support, editing and guidance only.</li>
              <li>We do not submit work on behalf of clients.</li>
              <li>50% advance for new clients; final delivery after full payment.</li>
              <li>Confidentiality assured; revisions within scope only.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Order / Google Form links */}
      <section id="order" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold">Order & Intake</h3>
        <p className="text-gray-600 mt-2">Use the quick order above or use the full intake form (link below). Replace the URL with your Google Form when ready.</p>
        <div className="mt-4 flex gap-3">
          <a href="https://docs.google.com/forms/" target="_blank" rel="noreferrer" className="bg-indigo-600 text-white px-4 py-2 rounded">Open sample Google Form</a>
          <a href="#contact" className="border px-4 py-2 rounded">Contact us</a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold">Contact</h3>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Get in touch</h4>
            <p className="text-sm text-gray-600 mt-2">Email: <a className="text-blue-600" href="mailto:hello@academicsupport.example">hello@academicsupport.example</a></p>
            <p className="text-sm text-gray-600">Phone/WhatsApp: +91 90000 00000 (replace with your number)</p>
            <p className="text-sm text-gray-600 mt-2">Follow us: <span className="text-blue-600">Instagram</span> • <span className="text-blue-600">LinkedIn</span></p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Business hours</h4>
            <p className="text-sm text-gray-600 mt-2">Mon–Sat: 10:00 – 19:00 IST</p>
            <p className="text-sm text-gray-600 mt-2">Typical response time: within 24 hours</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white mt-10 border-t">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Academic Support Services. All rights reserved.</p>
          <div className="text-sm text-gray-600">Designed with care • Privacy & Terms</div>
        </div>
      </footer>
    </div>
  )
}
