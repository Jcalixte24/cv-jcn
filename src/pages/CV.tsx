import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";
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
          className="bg-white shadow-lg"
          style={{ 
            width: "210mm", 
            minHeight: "297mm",
            margin: "0 auto",
            fontSize: "10px",
            lineHeight: "1.35"
          }}
        >
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <img 
                  src={photoProfile} 
                  alt="Japhet Calixte N'DRI" 
                  className="w-24 h-32 object-cover object-top rounded shadow-md"
                />
              </div>
              
              <div className="flex-1">
                <h1 className="text-xl font-bold tracking-wide">JAPHET CALIXTE N'DRI</h1>
                <h2 className="text-sm font-medium mb-1 opacity-90">STAGE DATA ANALYST</h2>
                <p className="text-xs font-semibold mb-2 bg-white/20 inline-block px-2 py-0.5 rounded">
                  DISPONIBILITÉ : DU 28 AVRIL AU 29 JUIN 2026
                </p>
                
                <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-[9px]">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3 flex-shrink-0" />
                    <span>Vitry-sur-Seine, France</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-3 w-3 flex-shrink-0" />
                    <span>+33 7 45 44 64 04</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="h-3 w-3 flex-shrink-0" />
                    <a href="mailto:japhetndri15@gmail.com" className="hover:underline">
                      japhetndri15@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/in/japhet-calixte-n'dri-0b73832a0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <Linkedin className="h-3 w-3" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/Jcalixte24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <Github className="h-3 w-3" />
                      <span>Jcalixte24</span>
                    </a>
                    <span className="flex items-center gap-1">
                      <Globe className="h-3 w-3" />
                      <span>Portfolio</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-2.5 text-gray-800">
            {/* Profil */}
            <section>
              <h3 className="text-sm font-bold text-primary border-b-2 border-primary pb-0.5 mb-1">
                PROFIL
              </h3>
              <p className="text-[10px] leading-snug">
                Étudiant en 2ème année au sein du <strong>Programme Grande École IA & Data Science</strong> (IA Institut - EPITA & ISG), 
                je combine expertise technique et vision business. Fort d'une première expérience chez <strong>QuantCube Technology</strong> et 
                certifié Google Data Analytics, je maîtrise <strong>Python, SQL et Power BI</strong>. Je recherche un stage opérationnel de 2 mois 
                pour mettre mes compétences en analyse et visualisation de données au service de vos prises de décision.
              </p>
            </section>

            {/* Compétences Techniques */}
            <section>
              <h3 className="text-sm font-bold text-primary border-b-2 border-primary pb-0.5 mb-1">
                COMPÉTENCES TECHNIQUES
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px]">
                <div>
                  <span className="font-semibold">Data Science & IA :</span> Scikit-learn, TensorFlow, Computer Vision (OpenCV, YOLO, MediaPipe), Modélisation prédictive
                </div>
                <div>
                  <span className="font-semibold">Analyse & Visualisation :</span> Python (Pandas, NumPy), SQL, Power BI, Excel, Tableau, Matplotlib, Seaborn
                </div>
                <div>
                  <span className="font-semibold">Développement & Web :</span> HTML, CSS, JavaScript, Bash, C++
                </div>
                <div>
                  <span className="font-semibold">Outils & Environnement :</span> Git, GitHub, Linux, Jupyter Notebooks
                </div>
                <div>
                  <span className="font-semibold">Langues :</span> Français (Natif), Anglais (Intermédiaire / Technique)
                </div>
              </div>
            </section>

            {/* Expériences Professionnelles */}
            <section>
              <h3 className="text-sm font-bold text-primary border-b-2 border-primary pb-0.5 mb-1">
                EXPÉRIENCES PROFESSIONNELLES
              </h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[11px]">Analyste de Données (Stage)</h4>
                      <p className="text-[9px] text-gray-600 italic">QuantCube Technology – Paris | Leader de l'analyse économique par l'IA et les données alternatives</p>
                    </div>
                    <span className="text-[9px] text-gray-600 whitespace-nowrap">Mai – Juin 2025</span>
                  </div>
                  <ul className="list-disc list-inside ml-1 text-[10px] space-y-0.5 mt-0.5">
                    <li>Conception et déploiement de <strong>tableaux de bord interactifs (Power BI)</strong> pour le suivi d'indicateurs macroéconomiques (PIB, CPI, Consommation)</li>
                    <li><strong>Traitement de grands volumes de données</strong> (séries temporelles 2015-2025) via SQL pour fiabiliser les modèles des économistes</li>
                    <li>Collaboration avec les équipes métiers pour transformer des besoins analytiques complexes en KPIs visuels clairs</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[11px]">Développeur Web Full Stack (Freelance)</h4>
                      <p className="text-[9px] text-gray-600 italic">Myll Production – Abidjan (Distanciel)</p>
                    </div>
                    <span className="text-[9px] text-gray-600 whitespace-nowrap">Fév. 2023 – Fév. 2025</span>
                  </div>
                  <ul className="list-disc list-inside ml-1 text-[10px] space-y-0.5 mt-0.5">
                    <li>Développement complet, mise en production et maintenance de sites web responsives</li>
                    <li>Intégration de <strong>Google Analytics</strong> pour le suivi du trafic et optimisation SEO technique</li>
                    <li>Gestion autonome de la relation client et résolution des incidents techniques</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projets Data & Portfolio */}
            <section>
              <h3 className="text-sm font-bold text-primary border-b-2 border-primary pb-0.5 mb-1">
                PROJETS DATA & PORTFOLIO
              </h3>
              <div className="space-y-1.5">
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-[11px]">Analyse Exploratoire – Spotify Analytics</h4>
                    <span className="text-[9px] text-gray-600">Python, Pandas, Seaborn</span>
                  </div>
                  <ul className="list-disc list-inside ml-1 text-[10px] space-y-0.5">
                    <li><strong>Objectif :</strong> Identifier les facteurs de popularité des titres musicaux via l'analyse de données audio</li>
                    <li><strong>Réalisation :</strong> Nettoyage des données brutes, analyse statistique des corrélations et visualisation des tendances</li>
                  </ul>
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-[11px]">Prototype de Voiture Autonome</h4>
                    <span className="text-[9px] text-gray-600">C++, Arduino, Computer Vision</span>
                  </div>
                  <ul className="list-disc list-inside ml-1 text-[10px]">
                    <li>Programmation d'algorithmes de détection d'obstacles et de navigation autonome</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Formation */}
            <section>
              <h3 className="text-sm font-bold text-primary border-b-2 border-primary pb-0.5 mb-1">
                FORMATION
              </h3>
              <div className="space-y-1.5">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[11px]">Programme Grande École - IA & Data Science</h4>
                      <p className="text-[9px] text-gray-600">IA Institut Paris (EPITA & ISG)</p>
                    </div>
                    <span className="text-[9px] text-gray-600 whitespace-nowrap">2024 – En cours (2029)</span>
                  </div>
                  <p className="text-[10px] mt-0.5">Double compétence : Ingénierie des données (EPITA) et Management/Économie (ISG). Matières clés : Data Engineering, Mathématiques appliquées, Algorithmique.</p>
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[11px]">Baccalauréat Général (Mention Bien)</h4>
                      <p className="text-[9px] text-gray-600">Lycée International Jules Verne – Abidjan | Spécialités : Mathématiques et NSI</p>
                    </div>
                    <span className="text-[9px] text-gray-600 whitespace-nowrap">2024</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-sm font-bold text-primary border-b-2 border-primary pb-0.5 mb-1">
                CERTIFICATIONS
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-[10px]">
                <div className="flex justify-between">
                  <span><strong>Google Data Analytics Professional Certificate</strong> (Coursera)</span>
                  <span className="text-gray-600">2025</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Google Advanced Data Analytics</strong> (Coursera)</span>
                  <span className="text-gray-600">2025</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>AI by Visualization</strong> (Columbia University)</span>
                  <span className="text-gray-600">2025</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Formation Art Oratoire</strong> (Groupe Audeca)</span>
                  <span className="text-gray-600">2023</span>
                </div>
              </div>
            </section>

            {/* Engagement & Hackathons */}
            <section>
              <h3 className="text-sm font-bold text-primary border-b-2 border-primary pb-0.5 mb-1">
                ENGAGEMENT & HACKATHONS
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-[10px]">
                <div><strong>Nuit du Code :</strong> Marathon de programmation (création de jeu en 6h)</div>
                <div><strong>Happy Coders Academy :</strong> Bootcamp intensif de développement (Abidjan)</div>
                <div><strong>Association Ivoirienne d'Astronomie :</strong> Chercheur amateur certifié IASC (détection d'astéroïdes)</div>
                <div><strong>Centres d'intérêt :</strong> Basketball, Art oratoire (Débat), Baby-foot</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
