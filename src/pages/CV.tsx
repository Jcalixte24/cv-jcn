import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
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
            height: "297mm", 
            margin: "0 auto",
            overflow: "hidden",
            fontSize: "11px",
            lineHeight: "1.4"
          }}
        >
          {/* Header - ATS Friendly */}
          <div className="bg-primary text-primary-foreground p-5">
            <div className="flex gap-5 items-start">
              {/* Photo */}
              <div className="flex-shrink-0">
                <img 
                  src={photoProfile} 
                  alt="Japhet Calixte N'DRI" 
                  className="w-28 h-36 object-cover object-top rounded shadow-md"
                />
              </div>
              
              {/* Info */}
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-0.5 tracking-wide">JAPHET CALIXTE N'DRI</h1>
                <h2 className="text-base font-normal mb-2.5 opacity-90">Junior Data Analyst</h2>
                
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                  <div className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                    <a href="mailto:japhetndri15@gmail.com" className="hover:underline">
                      japhetndri15@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                    <span>+33 7 45 44 64 04</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                    <span>Vitry-sur-Seine, France</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/Jcalixte24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>Jcalixte24</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/japhet-calixte-n'dri-0b73832a0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 space-y-3.5 text-gray-800">
            {/* Profil */}
            <section>
              <h3 className="text-base font-bold text-primary border-b-2 border-primary pb-0.5 mb-1.5">
                PROFIL
              </h3>
              <p className="leading-relaxed">
                Étudiant en 2ème année au Programme Grande École de l'IA Institut Paris by EPITA,
                passionné par l'intelligence artificielle et la data science. Conjuguant expertise technique
                et expérience multiculturelle, j'aspire à devenir un expert reconnu et contribuer à la
                transformation numérique de l'Afrique.
              </p>
            </section>

            {/* Expériences */}
            <section>
              <h3 className="text-base font-bold text-primary border-b-2 border-primary pb-0.5 mb-1.5">
                EXPÉRIENCES PROFESSIONNELLES
              </h3>
              <div className="space-y-2.5">
                <div>
                  <div className="flex justify-between items-start mb-0.5">
                    <div>
                      <h4 className="font-bold text-sm">Stage Junior Data Analyst</h4>
                      <p className="text-xs text-gray-700">QuantCube Technology - Paris, France</p>
                    </div>
                    <span className="text-xs text-gray-600 whitespace-nowrap">Mai - Juin 2025</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 ml-2 text-xs">
                    <li>Dashboard de suivi des données de marchés (PowerBI, Excel, SQL)</li>
                    <li>Transformation des besoins métiers en visuels analytiques</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-0.5">
                    <div>
                      <h4 className="font-bold text-sm">Développeur Web Freelance</h4>
                      <p className="text-xs text-gray-700">Myll Production - Abidjan (À distance)</p>
                    </div>
                    <span className="text-xs text-gray-600 whitespace-nowrap">Fév. 2023 - Fév. 2025</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 ml-2 text-xs">
                    <li>Développement de sites web responsives avec Google Analytics</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-0.5">
                    <div>
                      <h4 className="font-bold text-sm">Membre Actif - Association Ivoirienne d'Astronomie</h4>
                      <p className="text-xs text-gray-700">Abidjan</p>
                    </div>
                    <span className="text-xs text-gray-600 whitespace-nowrap">Jan. 2024 - Sept. 2025</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 ml-2 text-xs">
                    <li>Projets de recherche panafricains, certifié IASC</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-0.5">
                    <div>
                      <h4 className="font-bold text-sm">Participant - Happy Coders Academy</h4>
                      <p className="text-xs text-gray-700">Abidjan</p>
                    </div>
                    <span className="text-xs text-gray-600 whitespace-nowrap">Juillet 2022</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 ml-2 text-xs">
                    <li>Prototype de voiture autonome Arduino (C++)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Formation */}
            <section>
              <h3 className="text-base font-bold text-primary border-b-2 border-primary pb-0.5 mb-1.5">
                FORMATION
              </h3>
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between items-start mb-0.5">
                    <div>
                      <h4 className="font-bold text-sm">Programme Grande École - IA & Data Science</h4>
                      <p className="text-xs text-gray-700">IA Institut Paris by EPITA & ISG</p>
                    </div>
                    <span className="text-xs text-gray-600 whitespace-nowrap">En cours</span>
                  </div>
                  <p className="text-xs">
                    IA, Data Science, Data Engineering, programmation avancée, mathématiques et économie.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-sm">Baccalauréat Général Français - Mention Bien</h4>
                      <p className="text-xs text-gray-700">Lycée International Jules Verne - Abidjan</p>
                      <p className="text-xs italic">Spécialités : Mathématiques et NSI</p>
                    </div>
                    <span className="text-xs text-gray-600 whitespace-nowrap">2024</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-base font-bold text-primary border-b-2 border-primary pb-0.5 mb-1.5">
                CERTIFICATIONS
              </h3>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between items-start">
                  <span><strong>Google Advanced Data Analytics Certificate</strong> - Coursera</span>
                  <span className="text-gray-600 whitespace-nowrap ml-2">2025</span>
                </div>
                <div className="flex justify-between items-start">
                  <span><strong>Google Data Analytics Professional Certificate</strong> - Coursera</span>
                  <span className="text-gray-600 whitespace-nowrap ml-2">2025</span>
                </div>
                <div className="flex justify-between items-start">
                  <span><strong>Learning AI Through Visualization</strong> - Columbia+</span>
                  <span className="text-gray-600 whitespace-nowrap ml-2">2025</span>
                </div>
                <div className="flex justify-between items-start">
                  <span><strong>Formation en Art Oratoire</strong> - AUDECA GROUP</span>
                  <span className="text-gray-600 whitespace-nowrap ml-2">2023</span>
                </div>
              </div>
            </section>

            {/* Compétences */}
            <section>
              <h3 className="text-base font-bold text-primary border-b-2 border-primary pb-0.5 mb-1.5">
                COMPÉTENCES TECHNIQUES
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-0.5">Langages</h4>
                  <p>Python, JavaScript, SQL, HTML, CSS, DAX, Bash</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-0.5">Data Analysis & Visualisation</h4>
                  <p>PowerBI, Tableau, Excel, Pandas, NumPy, Matplotlib</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-0.5">Machine Learning & IA</h4>
                  <p>Scikit-learn, TensorFlow, Modélisation Prédictive</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-0.5">Bases de Données</h4>
                  <p>SQL, PostgreSQL, Transact SQL, ETL</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-0.5">Outils</h4>
                  <p>Git, GitHub, Arduino, Linux</p>
                </div>
              </div>
            </section>

            {/* Langues et Centres d'intérêt */}
            <section className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-base font-bold text-primary border-b-2 border-primary pb-0.5 mb-1.5">
                  LANGUES
                </h3>
                <div className="space-y-0.5 text-xs">
                  <p><strong>Français</strong> - Natif</p>
                  <p><strong>Anglais</strong> - Intermédiaire</p>
                  <p><strong>Espagnol</strong> - Débutant</p>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-primary border-b-2 border-primary pb-0.5 mb-1.5">
                  CENTRES D'INTÉRÊT
                </h3>
                <div className="space-y-0.5 text-xs">
                  <p>Basketball • Baby-foot</p>
                  <p>Art oratoire et débat</p>
                  <p>Astronomie • Projets tech créatifs</p>
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
