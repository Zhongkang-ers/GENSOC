"use client";

import React, { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background Image with a Vibrant, Colorful Gradient Overlay to make text pop! */}
        <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-top bg-no-repeat opacity-60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/95 via-purple-900/80 to-slate-900/95"></div>

        {/* Top Navbar */}
        <nav className="relative z-10 flex items-center justify-between px-8 py-6 w-full border-b border-white/10 backdrop-blur-sm">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] tracking-[0.2em] text-indigo-300 uppercase font-bold">Module 9 • GEE001B</span>
            <span className="text-lg font-bold tracking-wide text-white">Gender & Society Forum</span>
          </div>

          <ul className="hidden xl:flex items-center gap-8 text-[13px] font-bold tracking-wide text-white/80">
            <li><a href="#overview" className="text-white hover:text-rose-300 transition">Overview</a></li>
            <li><a href="#law-explorer" className="hover:text-rose-300 transition">Law Explorer</a></li>
            <li><a href="#reality-law" className="hover:text-rose-300 transition">Reality vs. Law</a></li>
            <li><a href="#case-deck" className="hover:text-rose-300 transition">Case Deck</a></li>
            <li><a href="#references" className="hover:text-rose-300 transition">References</a></li>
          </ul>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-rose-500 to-indigo-600 px-6 py-2.5 text-[13px] font-bold text-white hover:shadow-lg hover:shadow-rose-500/30 transition-all rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            Join Discussion
          </button>
        </nav>

        {/* Hero Title Area */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-6 text-indigo-200 mb-8">
            <div className="w-16 h-[2px] bg-rose-500/50"></div>
            <span className="text-[12px] font-bold tracking-[0.3em] uppercase text-rose-300">Laws, Policies & Programs</span>
            <div className="w-16 h-[2px] bg-rose-500/50"></div>
          </div>

          <p className="text-xs md:text-sm tracking-[0.4em] text-white uppercase mb-4 font-semibold">
            Understanding the Framework of
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-serif mb-8 leading-[1.1] tracking-tight text-white drop-shadow-md">
            Philippine Laws <span className="font-light italic font-serif text-rose-300">&</span> <br />
            Women's Rights
          </h1>

          <p className="max-w-3xl text-indigo-50 text-sm md:text-lg font-medium leading-relaxed mb-12 drop-shadow-sm">
            The Philippines has made significant progress in promoting gender equality through various laws aimed at protecting and empowering women. This module explores the legal instruments and highlights the gaps and challenges in their implementation.
          </p>
        </main>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section id="overview" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold tracking-[0.3em] text-rose-600 uppercase mb-3">Module Foundations</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Overview</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 hover:-translate-y-1 transition-transform">
              <h3 className="font-serif text-2xl mb-4 text-indigo-900 font-bold">Intended Learning Outcomes</h3>
              <ul className="space-y-4 text-slate-600 text-sm font-medium">
                <li className="flex gap-3"><span className="text-rose-500 font-bold">01.</span> Recognize the laws that protect and empower women.</li>
                <li className="flex gap-3"><span className="text-rose-500 font-bold">02.</span> Explain the importance of policies that protect and empower women.</li>
                <li className="flex gap-3"><span className="text-rose-500 font-bold">03.</span> Research violent cases and how the authorities have responded.</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 hover:-translate-y-1 transition-transform">
              <h3 className="font-serif text-2xl mb-4 text-indigo-900 font-bold">Human Rights Approach</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed mb-4">
                Recognizes that the way the world is structured places some groups (especially women) at a disadvantage. 
              </p>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                These groups have special rights specific to their needs, including reproductive health care, protection from gender-based violence, and freedom from discrimination.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 hover:-translate-y-1 transition-transform">
              <h3 className="font-serif text-2xl mb-4 text-indigo-900 font-bold">Historical Context</h3>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                Women in the Philippines have long played crucial roles in nation-building, yet they continue to face gender-based challenges in health, employment, safety, and political participation. Government interventions exist to systematically correct this historical power imbalance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LAW EXPLORER ================= */}
      <section id="law-explorer" className="py-32 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="text-[11px] font-bold tracking-[0.3em] text-rose-600 uppercase mb-3">Statutory Frameworks</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Law Explorer</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Philippine Domestic Framework */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-3xl font-serif mb-8 text-indigo-900 border-b-2 border-rose-500/20 pb-4">Philippine Domestic Framework</h3>
              <div className="space-y-8">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-slate-900 text-lg">1987 Constitution (Art II, Sec 14)</h4>
                  <p className="text-sm text-slate-600 font-medium mt-1">Recognizes the vital role of women in nation-building and ensures fundamental equality before the law.</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-slate-900 text-lg">RA 7192 (WID Act)</h4>
                  <p className="text-sm text-slate-600 font-medium mt-1">Women in Development and Nation Building Act. Tasked the PCW to ensure gender-responsive policies.</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-bold text-slate-900 text-lg">RA 9710 (Magna Carta of Women)</h4>
                  <p className="text-sm text-slate-600 font-medium mt-1">Localized CEDAW. Mandates allocating at least 5% of agency budgets for Gender and Development (GAD) programs.</p>
                </div>
                <div className="border-l-4 border-rose-500 pl-4">
                  <h4 className="font-bold text-slate-900 text-lg">RA 9262 (Anti-VAWC Act)</h4>
                  <p className="text-sm text-slate-600 font-medium mt-1">Criminalizes physical, sexual, psychological, and economic abuse by intimate partners. Introduces immediate Protection Orders.</p>
                </div>
                <div className="border-l-4 border-rose-500 pl-4">
                  <h4 className="font-bold text-slate-900 text-lg">RA 10354 (RH Law)</h4>
                  <p className="text-sm text-slate-600 font-medium mt-1">Responsible Parenthood and Reproductive Health Act. Guarantees universal access to reproductive healthcare and sex education.</p>
                </div>
                <div className="border-l-4 border-rose-500 pl-4">
                  <h4 className="font-bold text-slate-900 text-lg">RA 11313 (Safe Spaces Act)</h4>
                  <p className="text-sm text-slate-600 font-medium mt-1">"Bastos Law" protecting individuals from gender-based sexual harassment in public spaces, schools, and online platforms.</p>
                </div>
              </div>
            </div>

            {/* International Treaties */}
            <div className="bg-indigo-900 p-8 md:p-12 rounded-3xl shadow-xl text-white">
              <h3 className="text-3xl font-serif mb-8 text-rose-300 border-b-2 border-white/20 pb-4">International Treaties</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-xl tracking-wide">UDHR (1948)</h4>
                  <p className="text-sm text-indigo-200 font-medium mt-2 leading-relaxed">A common standard of achievement for all peoples and nations, granting fundamental human rights regardless of sex or gender.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl tracking-wide">CEDAW (1979)</h4>
                  <p className="text-sm text-indigo-200 font-medium mt-2 leading-relaxed">The "International Bill of Rights of Women." Targets culture and tradition as influential forces shaping gender roles.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl tracking-wide">Beijing Platform for Action (1994)</h4>
                  <p className="text-sm text-indigo-200 font-medium mt-2 leading-relaxed">Aims for the full participation of women in all spheres of life. Addresses 12 Critical Areas of Concern and the "Feminization of Poverty".</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl tracking-wide">MDGs (2000) & SDGs (2015)</h4>
                  <p className="text-sm text-indigo-200 font-medium mt-2 leading-relaxed">Global goals aimed at reducing poverty. SDG 5 targets the end of all forms of discrimination against all women and girls everywhere.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REALITY VS. LAW ================= */}
      <section id="reality-law" className="py-32 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold tracking-[0.3em] text-rose-600 uppercase mb-3">Implementation Gaps</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Reality vs. Law</h2>
            <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto">
              Despite progressive national policies, many Filipino women still struggle to access the rights these laws guarantee due to weak enforcement, cultural barriers, and structural loopholes.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-xl shadow-md border border-slate-200 cursor-pointer hover:border-indigo-400 transition-all">
              <summary className="font-serif text-xl font-bold text-indigo-900 list-none flex justify-between items-center p-6 outline-none">
                <span>GAD Budget Calculator ("Ghost Audits")</span>
                <span className="text-rose-500 font-sans text-sm group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 border-t border-slate-100 text-slate-600 font-medium text-sm space-y-4 pt-4">
                <p><strong className="text-slate-900">The Law:</strong> RA 9710 mandates at least 5% of LGU budgets be spent exclusively on Gender and Development programs.</p>
                <p><strong className="text-slate-900">The Reality:</strong> LGUs weaponize gray areas in "gender mainstreaming" to spend the 5% budget on generic municipal park walls or dance contests instead of crisis shelters or legal aid for abuse victims.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-md border border-slate-200 cursor-pointer hover:border-indigo-400 transition-all">
              <summary className="font-serif text-xl font-bold text-indigo-900 list-none flex justify-between items-center p-6 outline-none">
                <span>Barangay VAW Desk Simulator (Mediation Culture)</span>
                <span className="text-rose-500 font-sans text-sm group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 border-t border-slate-100 text-slate-600 font-medium text-sm space-y-4 pt-4">
                <p><strong className="text-slate-900">The Law:</strong> Section 26 of RA 9262 explicitly prohibits mediation or conciliation of domestic violence cases by barangay officials.</p>
                <p><strong className="text-slate-900">The Reality:</strong> Untrained local officials routinely violate this, attempting amicable settlements by treating domestic abuse as a simple marital spat to preserve the family structure, exposing survivors to retaliatory violence.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-md border border-slate-200 cursor-pointer hover:border-indigo-400 transition-all">
              <summary className="font-serif text-xl font-bold text-indigo-900 list-none flex justify-between items-center p-6 outline-none">
                <span>RH Law Access Barriers</span>
                <span className="text-rose-500 font-sans text-sm group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 border-t border-slate-100 text-slate-600 font-medium text-sm space-y-4 pt-4">
                <p><strong className="text-slate-900">The Law:</strong> RA 10354 guarantees access to reproductive healthcare.</p>
                <p><strong className="text-slate-900">The Reality:</strong> Section 7 contains a "Conscientious Objection" clause allowing providers to refuse services based on religious beliefs. In single-hospital island municipalities, this effectively nullifies women's statutory rights.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-md border border-slate-200 cursor-pointer hover:border-indigo-400 transition-all">
              <summary className="font-serif text-xl font-bold text-indigo-900 list-none flex justify-between items-center p-6 outline-none">
                <span>Non-Domestic / Non-Partner Family Abuse Loophole</span>
                <span className="text-rose-500 font-sans text-sm group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 border-t border-slate-100 text-slate-600 font-medium text-sm space-y-4 pt-4">
                <p><strong className="text-slate-900">The Law:</strong> RA 9262 explicitly restricts its protection to acts committed by an intimate partner.</p>
                <p><strong className="text-slate-900">The Reality:</strong> It does not cover domestic abuse perpetrated by non-intimate family members (e.g., in-laws or siblings). Victims cannot file for immediate Protection Orders and must rely on standard penal provisions requiring higher burdens of proof.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-md border border-slate-200 cursor-pointer hover:border-indigo-400 transition-all">
              <summary className="font-serif text-xl font-bold text-indigo-900 list-none flex justify-between items-center p-6 outline-none">
                <span>Penal Code Asymmetry: Adultery vs. Concubinage</span>
                <span className="text-rose-500 font-sans text-sm group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 border-t border-slate-100 text-slate-600 font-medium text-sm space-y-4 pt-4">
                <p><strong className="text-slate-900">The Reality:</strong> Under Articles 333 and 334 of the Revised Penal Code, a wife can be convicted of Adultery for a single act of sexual intercourse. A husband commits Concubinage only if he keeps a mistress in the conjugal dwelling or acts under "scandalous circumstances".</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-md border border-slate-200 cursor-pointer hover:border-indigo-400 transition-all">
              <summary className="font-serif text-xl font-bold text-indigo-900 list-none flex justify-between items-center p-6 outline-none">
                <span>Digital Harassment (RA 11313) Jurisdictional Gaps</span>
                <span className="text-rose-500 font-sans text-sm group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 border-t border-slate-100 text-slate-600 font-medium text-sm space-y-4 pt-4">
                <p><strong className="text-slate-900">The Reality:</strong> While the Safe Spaces Act penalizes online harassment, frontline law enforcement units often lack the technical resources or international cooperation pipelines needed to unmask perpetrators on foreign-hosted platforms.</p>
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-md border border-slate-200 cursor-pointer hover:border-indigo-400 transition-all">
              <summary className="font-serif text-xl font-bold text-indigo-900 list-none flex justify-between items-center p-6 outline-none">
                <span>Absence of General Divorce Framework</span>
                <span className="text-rose-500 font-sans text-sm group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-6 pb-6 border-t border-slate-100 text-slate-600 font-medium text-sm space-y-4 pt-4">
                <p><strong className="text-slate-900">The Reality:</strong> The Philippines remains the only country outside the Vatican without a general divorce law. Article 36 Annulment is prohibitively expensive (often over ₱250,000) and lengthy, forcing low-income women to remain legally tied to abusive spouses.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ================= CASE DECK ================= */}
      <section id="case-deck" className="py-32 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-[11px] font-bold tracking-[0.3em] text-rose-600 uppercase mb-3">Jurisprudence</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900">Case Deck</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 border border-slate-200 p-10 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform">
              <h3 className="text-2xl font-serif font-bold text-indigo-900 mb-6 flex flex-col gap-2">
                Garcia v. Drilon 
                <span className="text-xs font-sans text-rose-500 tracking-widest uppercase bg-rose-100 w-fit px-3 py-1 rounded-full">Equal Protection</span>
              </h3>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-2">The Incident</p>
              <p className="text-sm text-slate-700 mb-6 font-medium">The husband appealed to the Supreme Court, arguing that RA 9262 was unconstitutional because it only protects women and children, thereby violating the "Equal Protection Clause".</p>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-2">The Ruling</p>
              <p className="text-sm text-slate-700 font-medium bg-white p-4 rounded-xl border border-slate-200">The Supreme Court upheld the validity of RA 9262. It ruled that equal protection allows reasonable classification, explicitly recognizing that women are disproportionately victims of intimate partner violence due to unequal power relations.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-10 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform">
              <h3 className="text-2xl font-serif font-bold text-indigo-900 mb-6 flex flex-col gap-2">
                G.R. No. 224946 
                <span className="text-xs font-sans text-rose-500 tracking-widest uppercase bg-rose-100 w-fit px-3 py-1 rounded-full">Psychological Abuse</span>
              </h3>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-2">The Incident</p>
              <p className="text-sm text-slate-700 mb-6 font-medium">A husband cohabited with another woman and fathered a child while his wife worked abroad to support the family. The psychological distress severely impacted the wife.</p>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mb-2">The Ruling</p>
              <p className="text-sm text-slate-700 font-medium bg-white p-4 rounded-xl border border-slate-200">The Supreme Court affirmed the conviction of the husband under Section 5(i) of RA 9262. The Court explicitly ruled that marital infidelity and family abandonment constitute psychological violence, causing mental and emotional anguish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REFERENCES ================= */}
      <section id="references" className="py-24 px-6 border-t border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <details className="group bg-white border border-slate-200 rounded-2xl cursor-pointer shadow-xl" open>
            <summary className="font-serif text-2xl font-bold text-indigo-900 list-none flex justify-between items-center p-8 outline-none">
              <span className="italic tracking-wide">References</span>
              <span className="text-rose-500 font-sans text-sm group-open:rotate-180 transition-transform">▼</span>
            </summary>
            
            <div className="px-8 pb-8 text-sm text-slate-600 font-medium space-y-6">
              <div className="border-t border-slate-100 pt-6">
                <p>Gender and Society by Agustin Martin G. Rodriguez, et.al. (2019) (C&E Publishing)</p>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <p>Alano, Minerva. Implementation of VAWC Law at the Barangay Level. University of the Philippines Center for Women's Studies. "Utilization of the GAD Budget in Local Governments." Philippine Institute for Development Studies, Policy Notes, no. 2020-07, 2020. <a href="https://pids.gov.ph" className="text-rose-500 hover:text-rose-600 break-words font-bold">https://pids.gov.ph</a></p>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <p>Melgar, Divina, et al. "Assessment of the Implementation of the Reproductive Health Law in the Philippines." Asian-Pacific Resource & Research Centre for Women (ARROW), vol. 24, no. 2, 2018, pp. 70-78.</p>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <p>Republic of the Philippines. Republic Act No. 9262: Anti-Violence Against Women and Their Children Act of 2004. <a href="https://lawphil.net/statutes/repacts/ra2004/ra_9262_2004.html" className="text-rose-500 hover:text-rose-600 break-words font-bold">https://lawphil.net/statutes/repacts/ra2004/ra_9262_2004.html</a></p>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <p>Supreme Court of the Philippines. (2023). G.R. No. 224946: A.A. vs. People of the Philippines [Decision on Psychological Abuse under RA 9262]. Supreme Court E-Library. <a href="https://elibrary.judiciary.gov.ph/" className="text-rose-500 hover:text-rose-600 break-words font-bold">https://elibrary.judiciary.gov.ph/</a></p>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <p>Respicio & Co. Law Firm. (2024). Scope and limitations of Republic Act No. 9262: Protection against intimate partner violence in the Philippines. Respicio & Co. Legal Commentaries. <a href="https://www.respicio.ph/commentaries/violence-against-women-and-children-law-philippines" className="text-rose-500 hover:text-rose-600 break-words font-bold">https://www.respicio.ph/commentaries/violence-against-women-and-children-law-philippines</a></p>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <p>Alburo, A. C. (2020, November 25). Distinction between adultery and concubinage under Philippine criminal law. Alburo Law Center. <a href="https://www.alburolaw.com/adultery-vs-concubinage/" className="text-rose-500 hover:text-rose-600 break-words font-bold">https://www.alburolaw.com/adultery-vs-concubinage/</a></p>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <p>Department of Health. (2015). Guidelines on conscientious objectors pursuant to the Responsible Parenthood and Reproductive Health Act of 2012 (Administrative Order No. 2015-0027). Department of Health Portal. <a href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/10/70264" className="text-rose-500 hover:text-rose-600 break-words font-bold">https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/10/70264</a></p>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <p>Jesus C. Garcia v. The Honorable Ray Alan T. Drilon, et al., G.R. No. 179267 (Supreme Court of the Philippines, En Banc, June 25, 2013). <a href="https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/1/55866" className="text-rose-500 hover:text-rose-600 break-words font-bold">https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/1/55866</a></p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* ================= VIBRANT LIGHT FOOTER ================= */}
      <footer className="py-16 px-6 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
            
            {/* Left Column: Course Information */}
            <div className="lg:w-1/2">
              <p className="text-[11px] font-bold tracking-[0.2em] text-rose-600 uppercase mb-3">
                Course Information
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-2">
                GEE001B – Gender and Society
              </h3>
              <p className="text-slate-500 font-medium mb-6">
                Week 9 Module: Laws, Policies, and Programs for Philippine Women
              </p>
              <div className="inline-block bg-slate-50 border border-slate-200 px-5 py-2.5 rounded-lg text-sm text-slate-600 shadow-sm">
                Section: <strong className="text-indigo-900">IT31S3</strong>
              </div>
            </div>

            {/* Right Column: Group Members */}
            <div className="lg:w-1/2">
              <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                  Group 4 Members
                </p>
                <span className="bg-rose-50 text-rose-600 border border-rose-200 text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                  8 Contributors
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {/* First half of names */}
                <ul className="space-y-4">
                  <li className="flex items-center text-sm font-bold text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 mr-3 shadow-sm"></span> ADONIS, KATE
                  </li>
                  <li className="flex items-center text-sm font-bold text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 mr-3 shadow-sm"></span> CAYANAN, JOHN PATRICK
                  </li>
                  <li className="flex items-center text-sm font-bold text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 mr-3 shadow-sm"></span> ENRIQUEZ, ULRIQUE AARAGOHN
                  </li>
                  <li className="flex items-center text-sm font-bold text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 mr-3 shadow-sm"></span> EVANGELISTA, JOSEPH FLORENCIO
                  </li>
                </ul>
                {/* Second half of names */}
                <ul className="space-y-4">
                  <li className="flex items-center text-sm font-bold text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-rose-400 mr-3 shadow-sm"></span> HERNANDEZ, BENEDICT TYLER
                  </li>
                  <li className="flex items-center text-sm font-bold text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-rose-400 mr-3 shadow-sm"></span> IMSON, CHARLES ANGELA
                  </li>
                  <li className="flex items-center text-sm font-bold text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-rose-400 mr-3 shadow-sm"></span> OLPOS, RHEA MAE
                  </li>
                  <li className="flex items-center text-sm font-bold text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-rose-400 mr-3 shadow-sm"></span> TOLENTINO, KEANNE TRISTAN
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Copyright and Tagline */}
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400">
            <p>© 2026 Group 4. Educational purposes only.</p>
          </div>
        </div>
      </footer>

      {/* ================= INTERACTIVE MODAL (Updated to Vibrant Theme) ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4">
          <div className="bg-white border border-slate-200 p-8 w-full max-w-md relative rounded-2xl shadow-2xl">
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-4 right-4 text-slate-400 hover:text-rose-500 transition"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            {/* Modal Content */}
            <h3 className="text-3xl font-serif font-bold mb-2 text-indigo-900">Join the Forum</h3>
            <p className="text-sm text-slate-500 mb-8 font-medium">
              Enter your student credentials to participate in the GEE001B Gender & Society discussion board.
            </p>
            
            <input 
              type="text" 
              placeholder="Student ID Number" 
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 font-bold px-4 py-3 mb-4 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition rounded-lg text-sm" 
            />
            
            <button 
              onClick={() => {
                alert("This is a demo for the presentation! The backend is not connected.");
                setIsModalOpen(false);
              }} 
              className="w-full bg-gradient-to-r from-indigo-600 to-rose-500 text-white font-bold tracking-wide py-3 hover:shadow-lg hover:shadow-indigo-500/30 transition-all rounded-lg text-sm uppercase"
            >
              Access Discussion
            </button>
          </div>
        </div>
      )}

    </div>
  );
}