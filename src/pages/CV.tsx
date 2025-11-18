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
          style={{ width: "210mm", minHeight: "297mm", margin: "0 auto" }}
        >
          {/* Header - ATS Friendly */}
          <div className="bg-primary text-primary-foreground p-6">
            <div className="flex gap-6 items-start">
              {/* Photo */}
              <div className="flex-shrink-0">
                <img 
                  src={photoProfile} 
                  alt="Japhet Calixte N'DRI" 
                  className="w-32 h-40 object-cover object-top rounded"
                />
              </div>
              
              {/* Info */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-1">JAPHET CALIXTE N'DRI</h1>
                <h2 className="text-xl font-normal mb-4">Junior Data Analyst</h2>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <a href="mailto:japhetndri15@gmail.com" className="hover:underline">
                      japhetndri15@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>+33 7 45 44 64 04</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span>Vitry-sur-Seine, France</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com/Jcalixte24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub: Jcalixte24</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/japhet-calixte-n'dri-0b73832a0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:underline"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6 text-gray-800">
            {/* Profil */}
            <section>
              <h3 className="text-xl font-bold text-primary border-b-2 border-primary pb-1 mb-3">
                PROFIL
              </h3>
              <p className="text-sm leading-relaxed">
                Étudiant en 2ème année au Programme Grande École de l'IA Institut Paris by EPITA,
                passionné par l'intelligence artificielle et la data science. Originaire de Côte
                d'Ivoire, je conjugue une expertise technique pointue avec une riche expérience
                multiculturelle. Mon ambition : devenir un expert reconnu internationalement et
                contribuer à la transformation numérique de la Côte d'Ivoire et de l'ensemble du
                continent africain.
              </p>
            </section>

            {/* Expériences */}
            <section>
              <h3 className="text-xl font-bold text-primary border-b-2 border-primary pb-1 mb-3">
                EXPÉRIENCES PROFESSIONNELLES
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-base">Stage Junior Data Analyst</h4>
                      <p className="text-sm text-gray-700">QuantCube Technology - Paris, France</p>
                    </div>
                    <span className="text-sm text-gray-600">Mai - Juin 2025</span>
                  </div>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                    <li>
                      Création d'un dashboard de suivi des données de marchés à destination des Data
                      Analystes et économistes
                    </li>
                    <li>Immersion dans la datavisualisation (PowerBI, Excel, SQL)</li>
                    <li>Transformation des besoins métiers en visuels analytiques</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-base">Développeur Web Freelance</h4>
                      <p className="text-sm text-gray-700">Myll Production - Abidjan, Côte d'Ivoire (À distance)</p>
                    </div>
                    <span className="text-sm text-gray-600">Fév. 2023 - Fév. 2025</span>
                  </div>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                    <li>Conception et développement de sites web responsives</li>
                    <li>Intégration d'outils d'analyse (Google Analytics)</li>
                    <li>Amélioration des performances web</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-base">Membre Actif</h4>
                      <p className="text-sm text-gray-700">
                        Association Ivoirienne d'Astronomie (AIA) - Abidjan
                      </p>
                    </div>
                    <span className="text-sm text-gray-600">Jan. 2024 - Sept. 2025</span>
                  </div>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                    <li>Participation active à des projets de recherche panafricains sur Astronometrica</li>
                    <li>Certifié par The International Astronomical Search Collaboration (IASC)</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-base">Participant</h4>
                      <p className="text-sm text-gray-700">Happy Coders Academy - Abidjan</p>
                    </div>
                    <span className="text-sm text-gray-600">Juillet 2022</span>
                  </div>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                    <li>Conception d'un prototype de voiture autonome via Arduino</li>
                    <li>Programmation en C++ pour systèmes embarqués</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Formation */}
            <section>
              <h3 className="text-xl font-bold text-primary border-b-2 border-primary pb-1 mb-3">
                FORMATION
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h4 className="font-bold text-base">Programme Grande École - IA & Data Science</h4>
                      <p className="text-sm text-gray-700">IA Institut Paris by EPITA & ISG - Kremlin-Bicêtre</p>
                    </div>
                    <span className="text-sm text-gray-600">En cours</span>
                  </div>
                  <p className="text-sm">
                    Formation d'excellence en intelligence artificielle, data science et data engineering.
                    Data Science, éthique, programmation avancée, mathématiques et économie.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-base">Baccalauréat Général Français - Mention Bien</h4>
                      <p className="text-sm text-gray-700">
                        Lycée International Jules Verne - Abidjan, Côte d'Ivoire
                      </p>
                      <p className="text-sm italic">Spécialités : Mathématiques et NSI</p>
                    </div>
                    <span className="text-sm text-gray-600">2024</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-xl font-bold text-primary border-b-2 border-primary pb-1 mb-3">
                CERTIFICATIONS
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>
                    <strong>Google Advanced Data Analytics Certificate</strong> (9 modules) - Google via Coursera
                  </span>
                  <span className="text-gray-600">2025</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    <strong>Google Data Analytics Professional Certificate</strong> (8 modules) - Google via Coursera
                  </span>
                  <span className="text-gray-600">2025</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    <strong>Learning AI Through Visualization</strong> (6 modules) - Columbia+
                  </span>
                  <span className="text-gray-600">2025</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    <strong>Formation en Art Oratoire</strong> - AUDECA GROUP
                  </span>
                  <span className="text-gray-600">2023</span>
                </div>
              </div>
            </section>

            {/* Compétences */}
            <section>
              <h3 className="text-xl font-bold text-primary border-b-2 border-primary pb-1 mb-3">
                COMPÉTENCES TECHNIQUES
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Langages</h4>
                  <p>Python, JavaScript, SQL, HTML, CSS, DAX, Bash</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Data Analysis & Visualisation</h4>
                  <p>PowerBI, Tableau, Excel, Pandas, NumPy, Matplotlib, Seaborn</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Machine Learning & IA</h4>
                  <p>Scikit-learn, TensorFlow, Modélisation Prédictive</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Bases de Données</h4>
                  <p>SQL, PostgreSQL, Transact SQL, Data Engineering, ETL</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Outils & Technologies</h4>
                  <p>Git, GitHub, Arduino, IoT, Linux</p>
                </div>
              </div>
            </section>

            {/* Langues et Soft Skills */}
            <section className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-primary border-b-2 border-primary pb-1 mb-3">
                  LANGUES
                </h3>
                <div className="space-y-1 text-sm">
                  <p>
                    <strong>Français</strong> - Natif
                  </p>
                  <p>
                    <strong>Anglais</strong> - Intermédiaire
                  </p>
                  <p>
                    <strong>Espagnol</strong> - Débutant
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary border-b-2 border-primary pb-1 mb-3">
                  CENTRES D'INTÉRÊT
                </h3>
                <div className="space-y-1 text-sm">
                  <p>Basketball et sports d'équipe</p>
                  <p>Baby-foot</p>
                  <p>Art oratoire et débat</p>
                  <p>Astronomie</p>
                  <p>Projets créatifs alliant technologie et art</p>
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
