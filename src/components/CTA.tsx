import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AUTOMATION_CATEGORIES = [
  "Email Automation",
  "Data Processing",
  "Report Generation",
  "CRM Integration",
  "Social Media Management",
  "Invoice Processing",
  "Lead Management",
  "Workflow Optimization",
] as const;

type QuizQuestion = {
  id: number;
  question: string;
  options: {
    text: string;
    points: number;
  }[];
};

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "How much of your daily work is repetitive?",
    options: [
      { text: "Almost none, everything is unique", points: 0 },
      { text: "Some tasks are repetitive", points: 1 },
      { text: "Most of my work is repetitive", points: 2 },
    ],
  },
  {
    id: 2,
    question: "Do you use any tools to automate tasks?",
    options: [
      { text: "No, I do everything manually", points: 0 },
      { text: "Yes, but only basic tools (e.g., email filters)", points: 1 },
      { text: "Yes, I use advanced automation (e.g., Zapier, CRM workflows)", points: 2 },
    ],
  },
  {
    id: 3,
    question: "How often do you delegate tasks to team members or software?",
    options: [
      { text: "Rarely, I handle most things myself", points: 0 },
      { text: "Sometimes, but not systematically", points: 1 },
      { text: "Frequently, I have systems in place", points: 2 },
    ],
  },
  {
    id: 4,
    question: "Do you struggle with scaling due to workload?",
    options: [
      { text: "Yes, scaling feels impossible", points: 0 },
      { text: "Sometimes, but I manage", points: 1 },
      { text: "No, I have processes that help me scale", points: 2 },
    ],
  },
  {
    id: 5,
    question: "How much time do you spend on administrative tasks?",
    options: [
      { text: "Most of my time", points: 0 },
      { text: "A moderate amount", points: 1 },
      { text: "Very little, I automate or outsource", points: 2 },
    ],
  },
];

const RESULT_MESSAGES = [
  {
    minScore: 0,
    maxScore: 4,
    title: "You definitely need automation",
    message: "Your answers suggest you're spending too much time on manual work. Automating repetitive tasks will save you time and help you scale faster!",
  },
  {
    minScore: 5,
    maxScore: 7,
    title: "You have some systems in place, which is very good!",
    message: "You're ahead of most companies, but there's room for improvement. Automation can help you cut workload and focus on growth.",
  },
  {
    minScore: 8,
    maxScore: 10,
    title: "Automation can help you scale even faster!",
    message: "Great job! You already use automation well, but there are always ways to optimize further. Keep streamlining!",
  },
];

const CTA = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const handleBookCallClick = () => {
    // Navigate to booking page - replace with your routing logic
    console.log("Navigate to booking page");
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizCompleted(false);
    setTotalScore(0);
  };

  const handleAnswerSelect = (points: number) => {
    const newAnswers = [...answers, points];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz completed
      const score = newAnswers.reduce((sum, current) => sum + current, 0);
      setTotalScore(score);
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizCompleted(false);
    setTotalScore(0);
  };

  const getResultMessage = (score: number) => {
    const result = RESULT_MESSAGES.find(
      (r) => score >= r.minScore && score <= r.maxScore
    );
    return result || RESULT_MESSAGES[0]; // Fallback to first message
  };

  return (
    <section id="consultation" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {!quizStarted && !quizCompleted && (
          <>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Ready to systematize and automate your business?
              </h2>

              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-transparent transition-all duration-300 transform hover:scale-105"
                onClick={handleBookCallClick}
              >
                Book a Free Call →
              </Button>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-8">
                Not sure if your business is ready to automate yet?
              </p>

              <h3 className="text-2xl font-bold text-foreground mb-8">
                Check our Automation Business Assessment below
              </h3>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-transparent transition-all duration-300 transform hover:scale-105"
                  onClick={startQuiz}
                >
                  Take Automation Quiz →
                </Button>
              </div>
            </div>
          </>
        )}

        {quizStarted && !quizCompleted && (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                  style={{
                    width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-6">
              {QUIZ_QUESTIONS[currentQuestionIndex].question}
            </h3>

            <div className="space-y-3">
              {QUIZ_QUESTIONS[currentQuestionIndex].options.map(
                (option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left py-6 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300"
                    onClick={() => handleAnswerSelect(option.points)}
                  >
                    {option.text}
                  </Button>
                )
              )}
            </div>
          </div>
        )}

        {quizCompleted && (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              {getResultMessage(totalScore).title}
            </h3>
            <p className="text-muted-foreground mb-6">
              {getResultMessage(totalScore).message}
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Your score: {totalScore}/10
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                variant="default"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105"
                onClick={resetQuiz}
              >
                Retake Quiz
              </Button>
              <Button
                variant="cta"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                onClick={handleBookCallClick}
              >
                Book a Free Call →
              </Button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 opacity-60">
          {AUTOMATION_CATEGORIES.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-md transition-all duration-300 hover:border-blue-400 to-primary"
              id="changecolor"
            >
              <CardContent className="p-4 text-center">
                <div className="text-xs text-primary-foreground" id="changecolor">
                  {category}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;