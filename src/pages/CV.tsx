import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Github, Linkedin, Globe, Code, Database, BarChart3, Wrench, Languages } from "lucide-react";
import html2pdf from "html2pdf.js";
import photoProfile from "@/assets/photo_jcn.jpg";

const CV = () => {
  const downloadPDF = () => {
    const element = document.getElementById("cv-content");
    const opt = {
      margin: 0,
      filename: "Japhet_Calixte_NDRI_CV.pdf",
      image: { type: "jpeg" as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" as const },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-end print:hidden">
          <Button onClick={downloadPDF} className="gap-2">
            <Download className="h-4 w-4" />
            Télécharger en PDF
          </Button>
        </div>

        <div
          id="cv-content"
          className="bg-white shadow-lg flex"
          style={{ 
            width: "210mm", 
            minHeight: "297mm",
            margin: "0 auto",
            fontSize: "10px",
            lineHeight: "1.35"
          }}
        >
          {/* Sidebar */}
          <div className="w-[70mm] bg-slate-800 text-white p-4 flex flex-col">
            {/* Photo & Nom */}
            <div className="text-center mb-4">
              <img 
                src={photoProfile} 
                alt="Japhet Calixte N'DRI" 
                className="w-28 h-32 object-cover object-top rounded-lg shadow-lg mx-auto mb-2 border-2 border-white/20"
              />
              <h1 className="text-lg font-bold tracking-wide">JAPHET CALIXTE</h1>
              <h1 className="text-lg font-bold tracking-wide mb-1">N'DRI</h1>
              <div className="bg-amber-500 text-slate-900 px-2 py-1 rounded text-[10px] font-bold">
                JUNIOR DATA ANALYST
              </div>
            </div>

            {/* Disponibilité */}
            <div className="bg-white/10 rounded-lg p-2 mb-3 text-center">
              <p className="text-[9px] font-semibold text-amber-400">DISPONIBILITÉ</p>
              <p className="text-[10px] font-bold">28 Avril – 29 Juin 2026</p>
            </div>

            {/* Contact */}
            <div className="mb-3">
              <h3 className="text-[11px] font-bold border-b border-white/30 pb-1 mb-2 flex items-center gap-1">
                <Mail className="h-3 w-3" /> CONTACT
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

            {/* Compétences */}
            <div className="mb-3">
              <h3 className="text-[11px] font-bold border-b border-white/30 pb-1 mb-2 flex items-center gap-1">
                <Code className="h-3 w-3" /> COMPÉTENCES
              </h3>
              
              <div className="space-y-2 text-[9px]">
                <div>
                  <p className="text-amber-400 font-semibold mb-0.5 flex items-center gap-1">
                    <Database className="h-2.5 w-2.5" /> Data Science & IA
                  </p>
                  <p className="text-white/90">Scikit-learn, TensorFlow, OpenCV, YOLO, MediaPipe</p>
                </div>
                <div>
                  <p className="text-amber-400 font-semibold mb-0.5 flex items-center gap-1">
                    <BarChart3 className="h-2.5 w-2.5" /> Analyse & Visualisation
                  </p>
                  <p className="text-white/90">Python, Pandas, NumPy, SQL, Power BI, Excel, Tableau, Matplotlib</p>
                </div>
                <div>
                  <p className="text-amber-400 font-semibold mb-0.5 flex items-center gap-1">
                    <Code className="h-2.5 w-2.5" /> Développement & Web
                  </p>
                  <p className="text-white/90">HTML, CSS, JavaScript, Java, Bash, C++</p>
                </div>
                <div>
                  <p className="text-amber-400 font-semibold mb-0.5 flex items-center gap-1">
                    <Wrench className="h-2.5 w-2.5" /> Outils
                  </p>
                  <p className="text-white/90">Git, GitHub, Linux, Notebooks, VS Code, Docker</p>
                </div>
              </div>
            </div>

            {/* Langues */}
            <div className="mb-3">
              <h3 className="text-[11px] font-bold border-b border-white/30 pb-1 mb-2 flex items-center gap-1">
                <Languages className="h-3 w-3" /> LANGUES
              </h3>
              <div className="space-y-1 text-[9px]">
                <div className="flex justify-between">
                  <span>Français</span>
                  <span className="text-amber-400">Natif</span>
                </div>
                <div className="flex justify-between">
                  <span>Anglais</span>
                  <span className="text-amber-400">Intermédiaire</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-3">
              <h3 className="text-[11px] font-bold border-b border-white/30 pb-1 mb-2">CERTIFICATIONS</h3>
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
                  <p className="font-medium">Formation Art Oratoire</p>
                  <p className="text-white/60 text-[8px]">Groupe Audeca - 2023</p>
                </div>
              </div>
            </div>

            {/* Centres d'intérêt */}
            <div className="mt-auto">
              <h3 className="text-[11px] font-bold border-b border-white/30 pb-1 mb-2">CENTRES D'INTÉRÊT</h3>
              <div className="flex flex-wrap gap-1 text-[8px]">
                <span className="bg-white/10 px-1.5 py-0.5 rounded">Basketball</span>
                <span className="bg-white/10 px-1.5 py-0.5 rounded">Art oratoire</span>
                <span className="bg-white/10 px-1.5 py-0.5 rounded">Slam & Poésie</span>
                <span className="bg-white/10 px-1.5 py-0.5 rounded">Musique</span>
                <span className="bg-white/10 px-1.5 py-0.5 rounded">Baby-foot</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-4 text-gray-800">
            {/* Profil */}
            <section className="mb-3">
              <h3 className="text-sm font-bold text-slate-800 border-b-2 border-amber-500 pb-0.5 mb-1.5">
                PROFIL
              </h3>
              <p className="text-[10px] leading-snug text-gray-700">
                Étudiant en 2ème année au sein du <strong>Programme Grande École IA & Data Science</strong> (IA Institut - EPITA & ISG), 
                je combine expertise technique et vision business. Fort d'une première expérience chez <strong>QuantCube Technology</strong> et 
                certifié Google Data Analytics, je maîtrise <strong>Python, SQL et Power BI</strong>. Je recherche un stage de 2 mois 
                pour mettre mes compétences en analyse et visualisation de données au service de vos prises de décision.
              </p>
            </section>

            {/* Expériences Professionnelles */}
            <section className="mb-3">
              <h3 className="text-sm font-bold text-slate-800 border-b-2 border-amber-500 pb-0.5 mb-1.5">
                EXPÉRIENCES PROFESSIONNELLES
              </h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[11px] text-slate-800">Junior Data Analyst (Stage)</h4>
                      <p className="text-[9px] text-gray-600 italic">QuantCube Technology – Paris</p>
                    </div>
                    <span className="text-[9px] text-amber-600 font-medium whitespace-nowrap bg-amber-50 px-1.5 py-0.5 rounded">Mai – Juin 2025</span>
                  </div>
                  <ul className="list-disc list-inside ml-1 text-[10px] space-y-0.5 mt-1 text-gray-700">
                    <li>Conception de <strong>tableaux de bord Power BI</strong> pour indicateurs macroéconomiques (PIB, CPI)</li>
                    <li><strong>Traitement de données</strong> (séries temporelles 2015-2025) via SQL</li>
                    <li>Collaboration avec les équipes métiers pour transformer des besoins en KPIs visuels</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[11px] text-slate-800">Développeur Web (Freelance)</h4>
                      <p className="text-[9px] text-gray-600 italic">Myll Production – Abidjan (Distanciel)</p>
                    </div>
                    <span className="text-[9px] text-amber-600 font-medium whitespace-nowrap bg-amber-50 px-1.5 py-0.5 rounded">Fév. 2023 – Fév. 2025</span>
                  </div>
                  <ul className="list-disc list-inside ml-1 text-[10px] space-y-0.5 mt-1 text-gray-700">
                    <li>Développement et maintenance de sites web responsives</li>
                    <li>Intégration de <strong>Google Analytics</strong> et optimisation SEO</li>
                    <li>Gestion autonome de la relation client</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projets */}
            <section className="mb-3">
              <h3 className="text-sm font-bold text-slate-800 border-b-2 border-amber-500 pb-0.5 mb-1.5">
                QUELQUES PROJETS
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-50 p-2 rounded border-l-2 border-amber-500">
                  <h4 className="font-bold text-[10px] text-slate-800">Spotify Analytics</h4>
                  <p className="text-[8px] text-amber-600 mb-0.5">Python, Pandas, Seaborn</p>
                  <p className="text-[9px] text-gray-600">Analyse des facteurs de popularité musicale via données audio</p>
                </div>
                <div className="bg-gray-50 p-2 rounded border-l-2 border-amber-500">
                  <h4 className="font-bold text-[10px] text-slate-800">Voiture Autonome</h4>
                  <p className="text-[8px] text-amber-600 mb-0.5">C++, Arduino, Computer Vision</p>
                  <p className="text-[9px] text-gray-600">Algorithmes de détection d'obstacles et navigation</p>
                </div>
                <div className="bg-gray-50 p-2 rounded border-l-2 border-amber-500">
                  <h4 className="font-bold text-[10px] text-slate-800">BabiTransport</h4>
                  <p className="text-[8px] text-amber-600 mb-0.5">JavaScript, GeoJSON, API Maps</p>
                  <p className="text-[9px] text-gray-600">Planificateur de transport pour Abidjan avec itinéraires SOTRA et taxis</p>
                </div>
                <div className="bg-gray-50 p-2 rounded border-l-2 border-amber-500">
                  <h4 className="font-bold text-[10px] text-slate-800">Portfolio Personnel</h4>
                  <p className="text-[8px] text-amber-600 mb-0.5">React, TypeScript, Tailwind</p>
                  <p className="text-[9px] text-gray-600">Site portfolio interactif présentant mes projets et compétences</p>
                </div>
              </div>
            </section>

            {/* Formation */}
            <section className="mb-3">
              <h3 className="text-sm font-bold text-slate-800 border-b-2 border-amber-500 pb-0.5 mb-1.5">
                FORMATION
              </h3>
              <div className="space-y-1.5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-[11px] text-slate-800">Programme Grande École - IA & Data Science</h4>
                    <p className="text-[9px] text-gray-600">IA Institut Paris (EPITA & ISG) – Double compétence Data + Management</p>
                  </div>
                  <span className="text-[9px] text-amber-600 font-medium whitespace-nowrap bg-amber-50 px-1.5 py-0.5 rounded">2024 – 2029</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-[11px] text-slate-800">Baccalauréat Général (Mention Bien)</h4>
                    <p className="text-[9px] text-gray-600">Lycée International Jules Verne – Abidjan | Maths & NSI</p>
                  </div>
                  <span className="text-[9px] text-amber-600 font-medium whitespace-nowrap bg-amber-50 px-1.5 py-0.5 rounded">2024</span>
                </div>
              </div>
            </section>

            {/* Engagement */}
            <section>
              <h3 className="text-sm font-bold text-slate-800 border-b-2 border-amber-500 pb-0.5 mb-1.5">
                ENGAGEMENT & ACTIVITÉS
              </h3>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[9px] text-gray-700">
                <div className="flex items-start gap-1">
                  <span className="text-amber-500 mt-0.5">▸</span>
                  <span><strong>Nuit du Code :</strong> Marathon de programmation (création de jeu en 6h)</span>
                </div>
                <div className="flex items-start gap-1">
                  <span className="text-amber-500 mt-0.5">▸</span>
                  <span><strong>Happy Coders Academy :</strong> Stage de développement (Abidjan)</span>
                </div>
                <div className="flex items-start gap-1">
                  <span className="text-amber-500 mt-0.5">▸</span>
                  <span><strong>Association Astronomie :</strong> Chercheur amateur IASC (détection d'astéroïdes)</span>
                </div>
                <div className="flex items-start gap-1">
                  <span className="text-amber-500 mt-0.5">▸</span>
                  <span><strong>Art Oratoire :</strong> Slam, poésie, prestations scéniques</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
