import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Github, Linkedin, Globe, Code, Database, BarChart3, Wrench, Languages } from "lucide-react";
import html2pdf from "html2pdf.js";
import photoProfile from "@/assets/photo_jcn.jpg";

const cvData = {
  fr: {
    title: "JUNIOR DATA ANALYST",
    availability: "DISPONIBILITÉ",
    availabilityDate: "28 Avril – 29 Juin 2026",
    contact: "CONTACT",
    skills: "COMPÉTENCES",
    skillsDataScience: "Data Science & IA",
    skillsAnalysis: "Analyse & Visualisation",
    skillsDev: "Développement & Web",
    skillsTools: "Outils",
    languages: "LANGUES",
    french: "Français",
    english: "Anglais",
    native: "Natif",
    intermediate: "Intermédiaire",
    certifications: "CERTIFICATIONS",
    publicSpeaking: "Formation Art Oratoire",
    interests: "CENTRES D'INTÉRÊT",
    interestsList: ["Basketball", "Art oratoire", "Slam & Poésie", "Musique", "Baby-foot"],
    profile: "PROFIL",
    profileText: `Étudiant en 2ème année au sein du <strong>Programme Grande École IA & Data Science</strong> (IA Institut - EPITA & ISG), 
      je combine expertise technique et vision business. Fort d'une première expérience chez <strong>QuantCube Technology</strong> et 
      certifié Google Data Analytics, je maîtrise <strong>Python, SQL et Power BI</strong>. Je recherche un stage de 2 mois 
      pour mettre mes compétences en analyse et visualisation de données au service de vos prises de décision.`,
    experience: "EXPÉRIENCES PROFESSIONNELLES",
    exp1Title: "Junior Data Analyst (Stage)",
    exp1Company: "QuantCube Technology – Paris",
    exp1Date: "Mai – Juin 2025",
    exp1Tasks: [
      "Conception de <strong>tableaux de bord Power BI</strong> pour indicateurs macroéconomiques (PIB, CPI)",
      "<strong>Traitement de données</strong> (séries temporelles 2015-2025) via SQL",
      "Collaboration avec les équipes métiers pour transformer des besoins en KPIs visuels"
    ],
    exp2Title: "Développeur Web (Freelance)",
    exp2Company: "Myll Production – Abidjan (Distanciel)",
    exp2Date: "Fév. 2023 – Fév. 2025",
    exp2Tasks: [
      "Développement et maintenance de sites web responsives",
      "Intégration de <strong>Google Analytics</strong> et optimisation SEO",
      "Gestion autonome de la relation client"
    ],
    projects: "QUELQUES PROJETS",
    project1: { title: "Spotify Analytics", tech: "Python, Pandas, Seaborn", desc: "Analyse des facteurs de popularité musicale via données audio" },
    project2: { title: "Voiture Autonome", tech: "C++, Arduino, Computer Vision", desc: "Algorithmes de détection d'obstacles et navigation" },
    project3: { title: "BabiTransport", tech: "JavaScript, GeoJSON, API Maps", desc: "Planificateur de transport pour Abidjan avec itinéraires SOTRA et taxis" },
    project4: { title: "Portfolio Personnel", tech: "React, TypeScript, Tailwind", desc: "Site portfolio interactif présentant mes projets et compétences" },
    education: "FORMATION",
    edu1Title: "Programme Grande École - IA & Data Science",
    edu1School: "IA Institut Paris (EPITA & ISG) – Double compétence Data + Management",
    edu1Date: "2024 – 2029",
    edu2Title: "Baccalauréat Général (Mention Bien)",
    edu2School: "Lycée International Jules Verne – Abidjan | Maths & NSI",
    edu2Date: "2024",
    engagement: "ENGAGEMENT & ACTIVITÉS",
    eng1: { title: "Nuit du Code :", desc: "Marathon de programmation (création de jeu en 6h)" },
    eng2: { title: "Happy Coders Academy :", desc: "Stage de développement (Abidjan)" },
    eng3: { title: "Association Astronomie :", desc: "Chercheur amateur IASC (détection d'astéroïdes)" },
    eng4: { title: "Art Oratoire :", desc: "Slam, poésie, prestations scéniques" },
    downloadBtn: "Télécharger en PDF"
  },
  en: {
    title: "JUNIOR DATA ANALYST",
    availability: "AVAILABILITY",
    availabilityDate: "April 28 – June 29, 2026",
    contact: "CONTACT",
    skills: "SKILLS",
    skillsDataScience: "Data Science & AI",
    skillsAnalysis: "Analysis & Visualization",
    skillsDev: "Development & Web",
    skillsTools: "Tools",
    languages: "LANGUAGES",
    french: "French",
    english: "English",
    native: "Native",
    intermediate: "Intermediate",
    certifications: "CERTIFICATIONS",
    publicSpeaking: "Public Speaking Training",
    interests: "INTERESTS",
    interestsList: ["Basketball", "Public Speaking", "Slam & Poetry", "Music", "Foosball"],
    profile: "PROFILE",
    profileText: `2nd year student in the <strong>Grande École AI & Data Science Program</strong> (IA Institut - EPITA & ISG), 
      combining technical expertise with business vision. With experience at <strong>QuantCube Technology</strong> and 
      Google Data Analytics certified, I master <strong>Python, SQL and Power BI</strong>. Seeking a 2-month internship 
      to apply my data analysis and visualization skills to support decision-making.`,
    experience: "PROFESSIONAL EXPERIENCE",
    exp1Title: "Junior Data Analyst (Internship)",
    exp1Company: "QuantCube Technology – Paris",
    exp1Date: "May – June 2025",
    exp1Tasks: [
      "Designed <strong>Power BI dashboards</strong> for macroeconomic indicators (GDP, CPI)",
      "<strong>Data processing</strong> (2015-2025 time series) using SQL",
      "Collaborated with business teams to translate needs into visual KPIs"
    ],
    exp2Title: "Web Developer (Freelance)",
    exp2Company: "Myll Production – Abidjan (Remote)",
    exp2Date: "Feb. 2023 – Feb. 2025",
    exp2Tasks: [
      "Development and maintenance of responsive websites",
      "<strong>Google Analytics</strong> integration and SEO optimization",
      "Autonomous client relationship management"
    ],
    projects: "SELECTED PROJECTS",
    project1: { title: "Spotify Analytics", tech: "Python, Pandas, Seaborn", desc: "Analysis of music popularity factors via audio data" },
    project2: { title: "Autonomous Car", tech: "C++, Arduino, Computer Vision", desc: "Obstacle detection and navigation algorithms" },
    project3: { title: "BabiTransport", tech: "JavaScript, GeoJSON, Maps API", desc: "Transport planner for Abidjan with SOTRA and taxi routes" },
    project4: { title: "Personal Portfolio", tech: "React, TypeScript, Tailwind", desc: "Interactive portfolio showcasing projects and skills" },
    education: "EDUCATION",
    edu1Title: "Grande École Program - AI & Data Science",
    edu1School: "IA Institut Paris (EPITA & ISG) – Dual Data + Management degree",
    edu1Date: "2024 – 2029",
    edu2Title: "High School Diploma (with Honors)",
    edu2School: "International School Jules Verne – Abidjan | Math & Computer Science",
    edu2Date: "2024",
    engagement: "ENGAGEMENT & ACTIVITIES",
    eng1: { title: "Night of Code:", desc: "Programming hackathon (game creation in 6h)" },
    eng2: { title: "Happy Coders Academy:", desc: "Development bootcamp (Abidjan)" },
    eng3: { title: "Astronomy Association:", desc: "IASC amateur researcher (asteroid detection)" },
    eng4: { title: "Public Speaking:", desc: "Slam, poetry, stage performances" },
    downloadBtn: "Download PDF"
  }
};

const CV = () => {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const t = cvData[lang];

  const downloadPDF = () => {
    const element = document.getElementById("cv-content");
    const opt = {
      margin: 0,
      filename: `Japhet_Calixte_NDRI_CV_${lang.toUpperCase()}.pdf`,
      image: { type: "jpeg" as const, quality: 1 },
      html2canvas: { 
        scale: 3, 
        useCORS: true,
        logging: false,
        letterRendering: true
      },
      jsPDF: { 
        unit: "mm", 
        format: "a4", 
        orientation: "portrait" as const,
        compress: true
      },
      pagebreak: { mode: 'avoid-all' as const }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Controls */}
        <div className="mb-6 flex justify-between items-center print:hidden">
          {/* Language Switch */}
          <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setLang("fr")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                lang === "fr" 
                  ? "bg-slate-800 text-white shadow-sm" 
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              🇫🇷 Français
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                lang === "en" 
                  ? "bg-slate-800 text-white shadow-sm" 
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              🇬🇧 English
            </button>
          </div>

          <Button onClick={downloadPDF} className="gap-2">
            <Download className="h-4 w-4" />
            {t.downloadBtn}
          </Button>
        </div>

        {/* CV Content */}
        <div
          id="cv-content"
          className="bg-white shadow-xl flex overflow-hidden"
          style={{ 
            width: "210mm", 
            height: "297mm",
            margin: "0 auto",
            fontSize: "10px",
            lineHeight: "1.35"
          }}
        >
          {/* Sidebar */}
          <div className="w-[70mm] bg-slate-800 text-white p-4 flex flex-col" style={{ height: "297mm" }}>
            {/* Photo & Name */}
            <div className="text-center mb-4">
              <img 
                src={photoProfile} 
                alt="Japhet Calixte N'DRI" 
                className="w-28 h-32 object-cover object-top rounded-lg shadow-lg mx-auto mb-2 border-2 border-white/20"
              />
              <h1 className="text-lg font-bold tracking-wide">JAPHET CALIXTE</h1>
              <h1 className="text-lg font-bold tracking-wide mb-1">N'DRI</h1>
              <div className="bg-amber-500 text-slate-900 px-2 py-1 rounded text-[10px] font-bold">
                {t.title}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white/10 rounded-lg p-2 mb-3 text-center">
              <p className="text-[9px] font-semibold text-amber-400">{t.availability}</p>
              <p className="text-[10px] font-bold">{t.availabilityDate}</p>
            </div>

            {/* Contact */}
            <div className="mb-3">
              <h3 className="text-[11px] font-bold border-b border-white/30 pb-1 mb-2 flex items-center gap-1">
                <Mail className="h-3 w-3" /> {t.contact}
              </h3>
              <div className="space-y-1.5 text-[9px]">
                <div className="flex items-center gap-2">
                  <MapPin className="h-3 w-3 text-amber-400 flex-shrink-0" />
                  <span>Vitry-sur-Seine, France</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 text-amber-400 flex-shrink-0" />
                  <span>+33 7 45 44 64 04</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3 text-amber-400 flex-shrink-0" />
                  <a href="mailto:japhetndri15@gmail.com" className="hover:underline break-all">
                    japhetndri15@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-3 w-3 text-amber-400 flex-shrink-0" />
                  <a href="https://www.linkedin.com/in/japhet-calixte-n'dri-0b73832a0" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-3 w-3 text-amber-400 flex-shrink-0" />
                  <a href="https://github.com/Jcalixte24" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Jcalixte24
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-3 w-3 text-amber-400 flex-shrink-0" />
                  <a href="https://jcn-portfolio.lovable.app" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Portfolio
                  </a>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-3">
              <h3 className="text-[11px] font-bold border-b border-white/30 pb-1 mb-2 flex items-center gap-1">
                <Code className="h-3 w-3" /> {t.skills}
              </h3>
              
              <div className="space-y-2 text-[9px]">
                <div>
                  <p className="text-amber-400 font-semibold mb-0.5 flex items-center gap-1">
                    <Database className="h-2.5 w-2.5" /> {t.skillsDataScience}
                  </p>
                  <p className="text-white/90">Scikit-learn, TensorFlow, OpenCV, YOLO, MediaPipe</p>
                </div>
                <div>
                  <p className="text-amber-400 font-semibold mb-0.5 flex items-center gap-1">
                    <BarChart3 className="h-2.5 w-2.5" /> {t.skillsAnalysis}
                  </p>
                  <p className="text-white/90">Python, Pandas, NumPy, SQL, Power BI, Excel, Tableau, Matplotlib</p>
                </div>
                <div>
                  <p className="text-amber-400 font-semibold mb-0.5 flex items-center gap-1">
                    <Code className="h-2.5 w-2.5" /> {t.skillsDev}
                  </p>
                  <p className="text-white/90">HTML, CSS, JavaScript, Java, Bash, C++</p>
                </div>
                <div>
                  <p className="text-amber-400 font-semibold mb-0.5 flex items-center gap-1">
                    <Wrench className="h-2.5 w-2.5" /> {t.skillsTools}
                  </p>
                  <p className="text-white/90">Git, GitHub, Linux, Notebooks, VS Code, Docker</p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="mb-3">
              <h3 className="text-[11px] font-bold border-b border-white/30 pb-1 mb-2 flex items-center gap-1">
                <Languages className="h-3 w-3" /> {t.languages}
              </h3>
              <div className="space-y-1 text-[9px]">
                <div className="flex justify-between">
                  <span>{t.french}</span>
                  <span className="text-amber-400">{t.native}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.english}</span>
                  <span className="text-amber-400">{t.intermediate}</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-3">
              <h3 className="text-[11px] font-bold border-b border-white/30 pb-1 mb-2">{t.certifications}</h3>
              <div className="space-y-1 text-[9px]">
                <div>
                  <p className="font-medium">Google Data Analytics</p>
                  <p className="text-white/60 text-[8px]">Coursera - 2025</p>
                </div>
                <div>
                  <p className="font-medium">Google Advanced Data Analytics</p>
                  <p className="text-white/60 text-[8px]">Coursera - 2025</p>
                </div>
                <div>
                  <p className="font-medium">AI by Visualization</p>
                  <p className="text-white/60 text-[8px]">Columbia University - 2025</p>
                </div>
                <div>
                  <p className="font-medium">{t.publicSpeaking}</p>
                  <p className="text-white/60 text-[8px]">Groupe Audeca - 2023</p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="mt-auto">
              <h3 className="text-[11px] font-bold border-b border-white/30 pb-1 mb-2">{t.interests}</h3>
              <div className="flex flex-wrap gap-1 text-[8px]">
                {t.interestsList.map((interest, i) => (
                  <span key={i} className="bg-white/10 px-1.5 py-0.5 rounded">{interest}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 text-gray-800" style={{ height: "297mm" }}>
            {/* Profile */}
            <section className="mb-3">
              <h3 className="text-sm font-bold text-slate-800 border-b-2 border-amber-500 pb-0.5 mb-1.5">
                {t.profile}
              </h3>
              <p className="text-[10px] leading-snug text-gray-700" dangerouslySetInnerHTML={{ __html: t.profileText }} />
            </section>

            {/* Experience */}
            <section className="mb-3">
              <h3 className="text-sm font-bold text-slate-800 border-b-2 border-amber-500 pb-0.5 mb-1.5">
                {t.experience}
              </h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[11px] text-slate-800">{t.exp1Title}</h4>
                      <p className="text-[9px] text-gray-600 italic">{t.exp1Company}</p>
                    </div>
                    <span className="text-[9px] text-amber-600 font-medium whitespace-nowrap bg-amber-50 px-1.5 py-0.5 rounded">{t.exp1Date}</span>
                  </div>
                  <ul className="list-disc list-inside ml-1 text-[10px] space-y-0.5 mt-1 text-gray-700">
                    {t.exp1Tasks.map((task, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: task }} />
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[11px] text-slate-800">{t.exp2Title}</h4>
                      <p className="text-[9px] text-gray-600 italic">{t.exp2Company}</p>
                    </div>
                    <span className="text-[9px] text-amber-600 font-medium whitespace-nowrap bg-amber-50 px-1.5 py-0.5 rounded">{t.exp2Date}</span>
                  </div>
                  <ul className="list-disc list-inside ml-1 text-[10px] space-y-0.5 mt-1 text-gray-700">
                    {t.exp2Tasks.map((task, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: task }} />
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-3">
              <h3 className="text-sm font-bold text-slate-800 border-b-2 border-amber-500 pb-0.5 mb-1.5">
                {t.projects}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[t.project1, t.project2, t.project3, t.project4].map((project, i) => (
                  <div key={i} className="bg-gray-50 p-2 rounded border-l-2 border-amber-500">
                    <h4 className="font-bold text-[10px] text-slate-800">{project.title}</h4>
                    <p className="text-[8px] text-amber-600 mb-0.5">{project.tech}</p>
                    <p className="text-[9px] text-gray-600">{project.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-3">
              <h3 className="text-sm font-bold text-slate-800 border-b-2 border-amber-500 pb-0.5 mb-1.5">
                {t.education}
              </h3>
              <div className="space-y-1.5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-[11px] text-slate-800">{t.edu1Title}</h4>
                    <p className="text-[9px] text-gray-600">{t.edu1School}</p>
                  </div>
                  <span className="text-[9px] text-amber-600 font-medium whitespace-nowrap bg-amber-50 px-1.5 py-0.5 rounded">{t.edu1Date}</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-[11px] text-slate-800">{t.edu2Title}</h4>
                    <p className="text-[9px] text-gray-600">{t.edu2School}</p>
                  </div>
                  <span className="text-[9px] text-amber-600 font-medium whitespace-nowrap bg-amber-50 px-1.5 py-0.5 rounded">{t.edu2Date}</span>
                </div>
              </div>
            </section>

            {/* Engagement */}
            <section>
              <h3 className="text-sm font-bold text-slate-800 border-b-2 border-amber-500 pb-0.5 mb-1.5">
                {t.engagement}
              </h3>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[9px] text-gray-700">
                {[t.eng1, t.eng2, t.eng3, t.eng4].map((eng, i) => (
                  <div key={i} className="flex items-start gap-1">
                    <span className="text-amber-500 mt-0.5">▸</span>
                    <span><strong>{eng.title}</strong> {eng.desc}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
