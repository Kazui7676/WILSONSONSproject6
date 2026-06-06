import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

const safetyRules = [
  {
    id: 1,
    title: "Proibido Regatas",
    description: "Uso de regatas não é permitido nas áreas de operação",
    icon: "👕",
  },
  {
    id: 2,
    title: "Proibido Shorts",
    description: "Calças compridas são obrigatórias para segurança",
    icon: "👖",
  },
  {
    id: 3,
    title: "Proibido Sapatos Abertos",
    description: "Calçados fechados são essenciais para proteção",
    icon: "👟",
  },
  {
    id: 4,
    title: "Capacete Obrigatório",
    description: "Uso de capacete em áreas específicas de operação",
    icon: "🎩",
  },
  {
    id: 5,
    title: "Botas Obrigatórias",
    description: "Botas de segurança com proteção de punta de aço",
    icon: "🥾",
  },
  {
    id: 6,
    title: "Colete Refletivo",
    description: "Colete refletivo deve ser vestido em todos os momentos",
    icon: "🦺",
  },
];

const quizQuestions = [
  {
    id: 1,
    question: "É permitido entrar nas instalações usando chinelo?",
    options: ["Sim", "Não"],
    correct: 1,
  },
  {
    id: 2,
    question: "O uso de capacete é obrigatório em áreas operacionais?",
    options: ["Sim", "Não"],
    correct: 0,
  },
  {
    id: 3,
    question: "O visitante pode circular sem acompanhamento do host?",
    options: ["Sim", "Não"],
    correct: 1,
  },
  {
    id: 4,
    question: "Qual item é proibido dentro das instalações?",
    options: ["Regata", "Camisa manga longa", "Calça jeans"],
    correct: 0,
  },
];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeQuizQuestion, setActiveQuizQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[activeQuizQuestion] = answerIndex;
    setQuizAnswers(newAnswers);
  };

  const handleQuizNext = () => {
    if (activeQuizQuestion < quizQuestions.length - 1) {
      setActiveQuizQuestion(activeQuizQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleQuizBack = () => {
    if (activeQuizQuestion > 0) {
      setActiveQuizQuestion(activeQuizQuestion - 1);
    }
  };

  const quizScore =
    quizAnswers.filter(
      (answer, index) => answer === quizQuestions[index]?.correct
    ).length / quizQuestions.length;

  return (
    <div className="w-full bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
              WS
            </div>
            <span className="font-semibold text-base text-slate-700 hidden sm:inline">
              Wilson Sons
            </span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-700" />
            ) : (
              <Menu className="w-5 h-5 text-slate-700" />
            )}
          </button>

          <div
            className={`${
              mobileMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-4 absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto md:right-auto md:gap-8 bg-white md:bg-transparent p-4 md:p-0 border-b md:border-0 border-slate-200`}
          >
            <a href="#seguranca" className="text-slate-700 hover:text-primary font-medium text-sm transition-colors">
              Segurança
            </a>
            <a href="#quiz" className="text-slate-700 hover:text-primary font-medium text-sm transition-colors">
              Quiz
            </a>
            <a href="#agendamento" className="text-slate-700 hover:text-primary font-medium text-sm transition-colors">
              Agendar
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 text-white flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-slate-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl">
            <div className="space-y-12 max-w-[600px]">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-light tracking-tight leading-tight">
                  Sistema de Gestão de Visitas
                </h1>
                <p className="text-lg text-slate-300 font-light">
                  Wilson Sons
                </p>
              </div>

              <div className="space-y-8 border-l border-slate-700 pl-6">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                    Natureza do sistema
                  </p>
                  <p className="text-sm leading-relaxed text-slate-200 font-light">
                    Sistema oficial de registro e controle de acesso às unidades portuárias e estaleiros.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                    Condição operacional
                  </p>
                  <p className="text-sm leading-relaxed text-slate-200 font-light">
                    Todas as solicitações são submetidas a validação de segurança, conformidade de EPI e aprovação do responsável.
                  </p>
                </div>

              </div>

              <div className="space-y-4 pt-6">
                <a
                  href="#agendamento"
                  className="block w-fit px-6 py-3 bg-primary hover:bg-blue-600 text-white text-sm font-semibold transition-colors rounded-lg"
                >
                  Iniciar solicitação
                </a>
                <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-light">
                  A entrada só é autorizada mediante aprovação e atendimento integral às normas de segurança.
                </p>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="w-full aspect-video rounded-lg overflow-hidden border border-slate-700 shadow-2xl" style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/rB6jcirH848"
                  title="Sistema de Gestão de Visitas Wilson Sons"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full bg-slate-900"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Rules Section */}
      <section id="seguranca" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight text-foreground mb-4">
              Regras de Segurança
            </h2>
            <p className="text-muted-foreground text-base font-light max-w-2xl mx-auto">
              Conheça os requisitos obrigatórios para visitar nossas instalações
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {safetyRules.map((rule) => (
              <div
                key={rule.id}
                className="bg-white rounded-lg p-6 border border-border hover:border-primary hover:shadow-md transition-all duration-300"
              >
                <div className="text-5xl mb-4">{rule.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {rule.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-orange-50 border border-orange-200 p-6 rounded-lg">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-orange-900 mb-2 text-sm">Conformidade Obrigatória</h3>
                <p className="text-orange-800 text-sm font-light leading-relaxed">
                  O cumprimento das regras de segurança é obrigatório. Visitantes que não cumprirem os requisitos podem ser impedidos de entrar nas áreas de operação. Sua segurança é nossa prioridade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Video Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light tracking-tight text-foreground mb-4">
              Vídeo Institucional
            </h2>
            <p className="text-muted-foreground text-base font-light max-w-2xl mx-auto">
              Conheça mais sobre as operações e segurança na Wilson Sons
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/JFZny-M0xmw?start=22"
                title="Vídeo Institucional Wilson Sons"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Security Quiz Section */}
      <section id="quiz" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight text-foreground mb-4">
              Quiz de Segurança
            </h2>
            <p className="text-muted-foreground text-base font-light max-w-2xl mx-auto">
              Teste seus conhecimentos sobre as regras de segurança
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-lg border border-border p-8 shadow-lg">
            {!quizCompleted ? (
              <>
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-primary">
                      Pergunta {activeQuizQuestion + 1} de{" "}
                      {quizQuestions.length}
                    </span>
                    <div className="w-full ml-4 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-300"
                        style={{
                          width: `${((activeQuizQuestion + 1) / quizQuestions.length) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-light text-foreground mb-8">
                  {quizQuestions[activeQuizQuestion]?.question}
                </h3>

                <div className="space-y-3 mb-8">
                  {quizQuestions[activeQuizQuestion]?.options.map(
                    (option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuizAnswer(index)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          quizAnswers[activeQuizQuestion] === index
                            ? "border-primary bg-blue-50"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                              quizAnswers[activeQuizQuestion] === index
                                ? "border-primary bg-primary"
                                : "border-border"
                            }`}
                          >
                            {quizAnswers[activeQuizQuestion] === index && (
                              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            )}
                          </div>
                          <span
                            className={
                              quizAnswers[activeQuizQuestion] === index
                                ? "font-semibold text-foreground text-sm"
                                : "text-foreground text-sm font-light"
                            }
                          >
                            {option}
                          </span>
                        </div>
                      </button>
                    )
                  )}
                </div>

                <div className="flex gap-3 justify-between pt-6 border-t border-border">
                  <button
                    onClick={handleQuizBack}
                    disabled={activeQuizQuestion === 0}
                    className="px-6 py-2 rounded-lg border border-border text-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={handleQuizNext}
                    className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    {activeQuizQuestion === quizQuestions.length - 1
                      ? "Finalizar"
                      : "Próxima"}
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Quiz Completo!
                </h3>
                <p className="text-lg text-muted-foreground mb-2">
                  Sua pontuação: {Math.round(quizScore * 100)}%
                </p>
                {quizScore >= 0.8 && (
                  <p className="text-sm text-green-600 font-medium mb-6">
                    ✓ Você pode acessar o formulário de agendamento
                  </p>
                )}
                <button
                  onClick={() => {
                    setActiveQuizQuestion(0);
                    setQuizAnswers([]);
                    setQuizCompleted(false);
                  }}
                  className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-blue-600 transition-colors text-sm font-medium"
                >
                  Refazer Quiz
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="agendamento" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight text-foreground mb-4">
              Formulário de Agendamento de Visitas
            </h2>
            <p className="text-muted-foreground text-base font-light max-w-2xl mx-auto">
              Preencha o formulário para solicitar sua visita
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {quizCompleted && quizScore >= 0.8 ? (
              <div className="bg-white rounded-lg overflow-hidden border border-border shadow-lg">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeAqdZ3DawhzPzEVmCcOtTM_1yhX_7PR8lAKNDOIy-JIDUQWA/viewform?embedded=true"
                  width="100%"
                  height="850"
                  style={{ border: "none" }}
                >
                  Carregando formulário...
                </iframe>
              </div>
            ) : (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-12 text-center">
                <AlertCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-orange-900 mb-3">
                  Acesso ao Formulário Bloqueado
                </h3>
                <p className="text-orange-800 mb-2 text-sm font-light">
                  Para agendar sua visita, você precisa completar o Quiz de Segurança com uma pontuação mínima de <strong>80%</strong>.
                </p>
                {!quizCompleted && (
                  <p className="text-orange-700 text-xs mb-6 font-light">
                    Sua pontuação atual: {Math.round(quizScore * 100)}%
                  </p>
                )}
                <a
                  href="#quiz"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-lg transition-colors text-sm"
                >
                  Ir para o Quiz de Segurança
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-sm">
                  WS
                </div>
                <span className="font-semibold text-white">Wilson Sons</span>
              </div>
              <p className="text-slate-400 text-sm font-light">
                Sistema de Gestão de Visitas para portos e estaleiros
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Links Rápidos</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#seguranca" className="hover:text-white transition font-light">
                    Segurança
                  </a>
                </li>
                <li>
                  <a href="#quiz" className="hover:text-white transition font-light">
                    Quiz
                  </a>
                </li>
                <li>
                  <a href="#agendamento" className="hover:text-white transition font-light">
                    Agendar
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Contato</h4>
              <p className="text-slate-400 text-sm font-light">
                Para dúvidas sobre visitas, entre em contato conosco através do formulário de agendamento.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-xs font-light">
            <p>
              Projeto desenvolvido para fins educativos na KODIE Academy
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} Wilson Sons. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
