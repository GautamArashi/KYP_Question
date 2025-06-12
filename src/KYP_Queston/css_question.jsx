import React, { useState, useEffect, useCallback } from "react";
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Trophy,
  Star,
  Award,
  ThumbsUp,
  Leaf,
  RotateCcw,
  ArrowRight,
  Home,
  RefreshCw,
  Sparkles, // Added for Gemini feature button
} from "lucide-react";

const questionsData = [
  // ... (questionsData remains the same as in your provided code)
  {
    id: 1,
    question: "Jealousy makes the person ——",
    options: [
      "Incapable of appreciating good in others",
      "Capable of appreciating others",
      "Capable",
    ],
    correct: 0,
  },
  {
    id: 2,
    question:
      "Sameer calls his friend and relatives frequently when he is in office. This indicates that ——",
    options: [
      "He likes to speak on phone very much.",
      "He is misusing the company time.",
      "The calls are very important.",
    ],
    correct: 1,
  },
  {
    id: 3,
    question:
      "Which of the following is the example of a sensitive and responsible citizen? (Context: An old lady enters a crowded bus)",
    options: [
      "The passengers started asking the conductor to give her a seat.",
      "Everybody started looking for a seat for the lady.",
      "A young boy sitting there got up and offered his seat to the lady.",
    ],
    correct: 2,
  },
  {
    id: 4,
    question: "Right decisions at right time may get hampered due to ——",
    options: [
      "Emotional attachments.",
      "Traditional situations.",
      "Rational thinking process.",
    ],
    correct: 0,
  },
  {
    id: 5,
    question:
      "In a presentation, you should accept different views of different people. This shows your ——",
    options: [
      "Openness for criticism",
      "Positive attitude and positive acceptance of critical feedback.",
      "Politeness",
    ],
    correct: 1,
  },
  {
    id: 6,
    question: "Making right decision means ——",
    options: [
      "Taking most easy decision.",
      "Taking decision on right time.",
      "Selecting appropriate alternative from the available alternatives.",
    ],
    correct: 2,
  },
  {
    id: 7,
    question:
      "Taking responsibility for your actions is a major factor when it comes to workplace ethics. This is ——",
    options: ["Positive behaviour", "Responsibility", "Accountability"],
    correct: 2,
  },
  {
    id: 8,
    question:
      "Meera is a group leader who wants to complete a very important task. So she has to ——",
    options: [
      "Give them the basic idea and wait.",
      "Warn them about the results of not completing this task.",
      "Make her team members listen to each other's views carefully so that they can complete the task effectively.",
    ],
    correct: 2,
  },
  {
    id: 9,
    question:
      "If you set a goal for yourself and in the due course of time you find it difficult to achieve your goal, what will you do?",
    options: [
      "Change your goal",
      "Get stressed.",
      "Split it into smaller and achievable targets.",
    ],
    correct: 2,
  },
  {
    id: 10,
    question:
      "Sneha doesn't like the feedback given by her teacher on her dressing style and started crying. This indicates ——",
    options: [
      "She dislikes the teacher.",
      "She needs to work on accepting feedback positively.",
      "She feels ashamed of herself.",
    ],
    correct: 1,
  },
  {
    id: 11,
    question:
      "Do we need the ability to change and adapt to the change at workplace?",
    options: [
      "No. This ability is used in personal life. We do not need it at a workplace.",
      "The ability to change and adapt depends on the kind of work we do.",
      "We continuously keep changing by adapting both in personal life and at workplace. That is also why we can work with various people who are different.",
    ],
    correct: 2,
  },
  {
    id: 12,
    question:
      "__________ is the most important component of making successful presentations.",
    options: ["Preparation", "Narration", "Communication"],
    correct: 0,
  },
  {
    id: 13,
    question:
      "Meena saw her colleague's mailbox open when her colleague was not in her place. What should be Meena's reaction to this?",
    options: [
      "Meena should inform this to her colleague on her return and suggest locking her computer.",
      "Meena should check her mailbox to see if anything is urgent.",
      "Meena should inform this to other staff members and make them check her mailbox.",
    ],
    correct: 0,
  },
  {
    id: 14,
    question:
      "A presentation satisfies the prime need of ________ on various subjects between either two people or a group of people.",
    options: ["Argument", "Investigation", "Communication"],
    correct: 2,
  },
  {
    id: 15,
    question: "You attend your office on time. This indicates ——",
    options: [
      "You are punctual and respect schedules.",
      "You follow the rules for society.",
      "You like your office.",
    ],
    correct: 0,
  },
  {
    id: 16,
    question:
      "Sometimes your imaginary problems give you more stress than real life does.",
    options: ["Disagree", "Agree", "Can't say"],
    correct: 1,
  },
  {
    id: 17,
    question: "When you join a new friend circle, there is nothing wrong in ——",
    options: [
      "Hiding your likings.",
      "Proudly presenting your talents when appropriate.",
      "Neglecting the questions asked to you.",
    ],
    correct: 1,
  },
  {
    id: 18,
    question: "Long-term goals are ——",
    options: [
      "Very hard to achieve.",
      "The major targets in your life that guide short-term actions.",
      "Very expensive to achieve.",
    ],
    correct: 1,
  },
  {
    id: 19,
    question:
      "When you join a new friend circle, there is nothing wrong in proudly presenting your talents, because ——",
    options: [
      "All friends must accept your ideas.",
      "You are expected to do so.",
      "Sharing your skills can contribute positively to the group, but do so humbly.",
    ],
    correct: 2,
  },
  {
    id: 20,
    question:
      "Taking computer printable sheets from office to home for personal use suits the workplace ethics.",
    options: [
      "Agree, it's a small thing.",
      "Disagree, it's misuse of company resources.",
      "Can't say, depends on company policy.",
    ],
    correct: 1,
  },
  {
    id: 21,
    question: "Effective communication in the workplace requires ——",
    options: [
      "Speaking loudly and clearly",
      "Active listening and clear expression",
      "Using complex vocabulary to impress colleagues",
    ],
    correct: 1,
  },
  {
    id: 22,
    question: "When receiving constructive criticism, it's best to ——",
    options: [
      "Become defensive and argue your point",
      "Listen openly, ask clarifying questions, and reflect on the feedback",
      "Ignore it if you don't agree",
    ],
    correct: 1,
  },
  {
    id: 23,
    question: "Which of these is a key aspect of non-verbal communication?",
    options: [
      "The volume of your voice",
      "The words you choose",
      "Your body language and facial expressions",
    ],
    correct: 2,
  },
  {
    id: 24,
    question: "To build rapport with colleagues, you should ——",
    options: [
      "Only talk about work-related topics",
      "Show genuine interest in them and find common ground respectfully",
      "Share confidential information to show trust",
    ],
    correct: 1,
  },
  
];

const QuizApp = ({ navigateToHome }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [isLoadingQuestion, setIsLoadingQuestion] = useState(true);
  const [geminiExplanation, setGeminiExplanation] = useState("");
  const [isLoadingExplanation, setIsLoadingExplanation] = useState(false);

  const questions = questionsData;

  const resetGeminiFeature = () => {
    setGeminiExplanation("");
    setIsLoadingExplanation(false);
  };

  const startQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuestionsAnswered(0);
    setSelectedOptionIndex(-1);
    setAnswerChecked(false);
    setShowCompletion(false);
    setIsLoadingQuestion(true);
    resetGeminiFeature();
  }, []);

  const loadQuestion = useCallback(() => {
    setAnswerChecked(false);
    setSelectedOptionIndex(-1);
    setIsLoadingQuestion(true);
    resetGeminiFeature();
    setTimeout(() => {
      setIsLoadingQuestion(false);
    }, 250);
  }, []);

  useEffect(() => {
    startQuiz();
  }, [startQuiz]);

  useEffect(() => {
    if (!showCompletion) {
      loadQuestion();
    }
  }, [currentQuestionIndex, showCompletion, loadQuestion]);

  const handleSelectOption = (index) => {
    if (answerChecked) return;
    setSelectedOptionIndex(index);
    resetGeminiFeature();
  };

  const handleCheckAnswer = () => {
    if (selectedOptionIndex === -1) return;
    setAnswerChecked(true);
    setQuestionsAnswered((prev) => prev + 1);
    if (selectedOptionIndex === questions[currentQuestionIndex].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextButton = () => {
    if (!answerChecked) {
      handleCheckAnswer();
    } else {
      resetGeminiFeature();
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setShowCompletion(true);
      }
    }
  };

  const handleRestartQuiz = () => {
    startQuiz();
  };

  const handleGoHome = () => {
    if (navigateToHome && typeof navigateToHome === "function") {
      navigateToHome();
    } else {
      console.log(
        "Navigate to home function not provided or is not a function."
      );
    }
  };

  const fetchExplanation = async () => {
    if (!currentQuestion) return;
    setIsLoadingExplanation(true);
    setGeminiExplanation("");

    const prompt = `Question: "${currentQuestion.question}"
Correct Answer: "${currentQuestion.options[currentQuestion.correct]}"
${
  selectedOptionIndex !== -1
    ? `Your Answer: "${currentQuestion.options[selectedOptionIndex]}"`
    : ""
}

Please provide a concise explanation for this question and why the correct answer is right. If possible, give a brief real-world example or context. Keep the explanation suitable for someone learning about communication skills. Respond in Hindi (Latin script).`;

    let chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
    const payload = { contents: chatHistory };
    const apiKey = "AIzaSyDv8bXCguWz5UybBdIeA1UePepnZz4r4Ag"; // आपकी Gemini API key यहाँ है
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (
        result.candidates &&
        result.candidates.length > 0 &&
        result.candidates[0].content &&
        result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0
      ) {
        setGeminiExplanation(result.candidates[0].content.parts[0].text);
      } else {
        setGeminiExplanation(
          "Sorry, no further information is available at the moment"
        );
        console.error("Gemini API response structure unexpected:", result);
      }
    } catch (error) {
      console.error("Error fetching explanation from Gemini API:", error);
      setGeminiExplanation(
        "Jaankari prapt karne mein kuch samasya hui. Kripya baad mein prayas karein."
      );
    } finally {
      setIsLoadingExplanation(false);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = showCompletion
    ? 100
    : questions.length > 0
    ? (currentQuestionIndex / questions.length) * 100
    : 0;

  let nextButtonText = "Jawab Chunein";
  if (selectedOptionIndex !== -1 && !answerChecked) {
    nextButtonText = "Jawab Check Karein";
  } else if (answerChecked) {
    if (currentQuestionIndex < questions.length - 1) {
      nextButtonText = "Agla Sawaal";
    } else {
      nextButtonText = "Nateeje Dekhein";
    }
  }

  let finalMessage = "";
  let trophyDetails = {
    Icon: Trophy,
    size: 70,
    className: "trophy-icon color-amber animate-trophy-bounce",
  };
  let finalScoreFillClass = "fill-default";

  if (showCompletion) {
    const scorePercentage =
      questions.length > 0 ? (score / questions.length) * 100 : 0;
    if (scorePercentage === 100) {
      finalMessage = "Perfect Score! Aap ek communication guru hain! 🎉";
      trophyDetails = {
        Icon: Star,
        size: 70,
        className: "trophy-icon color-yellow animate-trophy-bounce",
      };
      finalScoreFillClass = "fill-gold";
    } else if (scorePercentage >= 80) {
      finalMessage =
        "Shaandaar! Aapke communication skills bahut acche hain! 👍";
      trophyDetails = {
        Icon: Trophy,
        size: 70,
        className: "trophy-icon color-amber animate-trophy-bounce",
      };
      finalScoreFillClass = "fill-green";
    } else if (scorePercentage >= 60) {
      finalMessage = "Bahut accha! Aapke communication skills मजबूत hain. 😊";
      trophyDetails = {
        Icon: Award,
        size: 70,
        className: "trophy-icon color-slate animate-trophy-bounce",
      };
      finalScoreFillClass = "fill-teal";
    } else if (scorePercentage >= 40) {
      finalMessage = "Acchi koshish! Sudhaar ke liye practice karte rahein. 🙂";
      trophyDetails = {
        Icon: ThumbsUp,
        size: 70,
        className: "trophy-icon color-sky animate-trophy-bounce",
      };
      finalScoreFillClass = "fill-default";
    } else {
      finalMessage =
        "Seekhte rahein! Har kadam behtar communication ki taraf le jaata hai. 💪";
      trophyDetails = {
        Icon: Leaf,
        size: 70,
        className: "trophy-icon color-green-leaf animate-trophy-bounce",
      };
      finalScoreFillClass = "fill-default";
    }
  }

  const getOptionClasses = (index) => {
    const isSelected = selectedOptionIndex === index;
    const isCorrect =
      answerChecked && currentQuestion && index === currentQuestion.correct;
    const isIncorrect =
      answerChecked &&
      isSelected &&
      currentQuestion &&
      index !== currentQuestion.correct;

    let classes = ["option-item", "option-hover-shine"];
    if (isSelected && !answerChecked) classes.push("selected");
    if (isCorrect) classes.push("correct", "animate-correct-pulse");
    if (isIncorrect) classes.push("incorrect", "animate-incorrect-shake");

    if (answerChecked) {
      classes.push("answered");
    }
    return classes.join(" ");
  };

  const getFeedbackContainerClasses = () => {
    let classes = ["feedback-message-container", "animate-feedback-slide"];
    if (currentQuestion && selectedOptionIndex === currentQuestion.correct) {
      classes.push("correct-feedback");
    } else {
      classes.push("incorrect-feedback");
    }
    return classes.join(" ");
  };

  return (
    <>
      <style>{`
                /* ... (All CSS styles remain the same as your previous version) ... */
                /* Global Resets & Base Styles */
                *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

                /* Main container for the quiz app */
                .quiz-app-outer-container {
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                  min-height: 100vh;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  padding: 10px; /* Default padding */
                  overflow-x: hidden;
                  position: relative; /* For background particles */
                }
                @media (min-width: 768px) { /* md breakpoint */
                  .quiz-app-outer-container {
                    padding: 20px;
                  }
                }

                /* Animated background particles for the main container */
                .quiz-app-outer-container::before {
                    content: '';
                    position: fixed; /* Fixed to cover viewport */
                    top: 0; left: 0; width: 100%; height: 100%;
                    background-image: 
                        radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 40%),
                        radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%),
                        radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 30%);
                    animation: float 25s ease-in-out infinite;
                    pointer-events: none; /* Does not interfere with interactions */
                    z-index: -10; /* Behind all content */
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                    25% { transform: translateY(-20px) translateX(10px) rotate(60deg); }
                    50% { transform: translateY(10px) translateX(-20px) rotate(120deg); }
                    75% { transform: translateY(-15px) translateX(15px) rotate(180deg); }
                }

                /* Main quiz card container */
                .quiz-main-container {
                  position: relative;
                  max-width: 56rem; /* Approx max-w-4xl */
                  width: 100%;
                  background-color: rgba(255, 255, 255, 0.95);
                  backdrop-filter: blur(12px); /* Simulates backdrop-blur-md */
                  border-radius: 25px;
                  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* Simulates shadow-2xl */
                  overflow: hidden; /* Important for child pseudo-elements and border-radius */
                  transition: all 0.3s ease-in-out;
                }
                
                /* Gloss effect for quiz container */
                .quiz-main-container.quiz-container-gloss::before {
                    content: '';
                    position: absolute;
                    top: 0; left: -75%; width: 50%; height: 100%;
                    background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
                    transform: skewX(-25deg);
                    transition: left 0.8s ease;
                    pointer-events: none;
                    opacity: 0;
                    z-index: 1; /* Above background, below content */
                }
                .quiz-main-container.quiz-container-gloss:hover::before {
                    left: 125%;
                    opacity: 1;
                }

                /* Quiz Header */
                .quiz-header {
                    position: relative; /* For shimmer effect */
                    background: linear-gradient(to bottom right, #667eea, #764ba2);
                    color: white;
                    padding: 30px;
                    text-align: center;
                    overflow: hidden; /* Contains shimmer */
                }
                /* Shimmer effect for quiz header */
                .quiz-header.quiz-header-shimmer::before {
                    content: '';
                    position: absolute;
                    top: -50%; left: -50%; width: 200%; height: 200%;
                    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.15), transparent);
                    animation: shimmer 3.5s infinite linear;
                    z-index: 0; /* Behind header text */
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
                    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
                }
                .quiz-header h1 {
                    font-size: 2.5rem; 
                    line-height: 1; /* Adjusted */
                    font-weight: 700;
                    margin-bottom: 10px;
                    position: relative; /* Above shimmer */
                    z-index: 1;
                }
                .quiz-header p {
                    font-size: 1.1rem;
                    line-height: 1.6; /* Adjusted */
                    opacity: 0.9;
                    font-weight: 300;
                    position: relative; /* Above shimmer */
                    z-index: 1;
                }

                /* Progress Section */
                .progress-section {
                    position: relative; /* For glow effect */
                    padding: 24px 28px;
                    background: linear-gradient(to bottom right, #f8fafc, #f1f5f9); /* slate-50 to slate-100 */
                    border-bottom: 1px solid #cbd5e1; /* border-slate-300 */
                }
                /* Top border glow for progress section */
                .progress-section.progress-section-glow::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; height: 3px;
                    background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
                    background-size: 200% 100%;
                    animation: progressGlow 2.5s linear infinite;
                }
                @keyframes progressGlow {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
                .progress-info {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 16px;
                    font-weight: 600;
                    color: #334155; /* slate-700 */
                }
                .progress-bar-container {
                    width: 100%;
                    height: 0.75rem;
                    background-color: #e2e8f0; /* bg-slate-200 */
                    border-radius: 9999px;
                    overflow: hidden; /* For shine effect on fill */
                    box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.05); /* shadow-inner */
                }
                .progress-bar-fill {
                    position: relative; /* For shine effect */
                    height: 100%;
                    background: linear-gradient(to right, #667eea, #764ba2);
                    border-radius: 9999px;
                    transition: width 0.7s cubic-bezier(0.4,0,0.2,1);
                }
                /* Shine on progress fill */
                .progress-bar-fill.progress-fill-shine::after {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
                    animation: progressShine 2s infinite linear;
                }
                @keyframes progressShine {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }

                /* Question Area */
                .question-area {
                    padding: 28px;
                    background-color: white;
                    min-height: 380px;
                    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
                }
                @media (min-width: 768px) { /* md breakpoint */
                    .question-area { padding: 40px; }
                }
                .question-area.loading { opacity: 0.5; transform: scale(0.98); }
                .question-area.loaded { opacity: 1; transform: scale(1); }

                .question-text-container {
                    position: relative;
                    margin-bottom: 32px;
                }
                .question-text-p {
                    font-size: 1.4rem;
                    line-height: 1.625; /* leading-relaxed */
                    font-weight: 600;
                    color: #1e293b; /* slate-800 */
                    padding: 24px;
                    background: linear-gradient(to bottom right, #f8fafc, #f1f5f9);
                    border-radius: 15px;
                    border-left: 5px solid #667eea;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); /* shadow-md */
                    transition: all 0.3s ease-in-out;
                }
                .question-text-p:hover {
                    transform: translateY(-2px) scale(1.01);
                    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); /* shadow-lg */
                }
                .question-icon-container {
                    position: absolute;
                    top: -0.75rem; /* -top-3 */
                    right: -0.25rem; /* -right-1 */
                    background: linear-gradient(to bottom right, #667eea, #764ba2);
                    color: white;
                    width: 2rem; height: 2rem; /* w-8, h-8 */
                    border-radius: 9999px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); /* shadow-lg */
                    animation: pulse 1.8s infinite ease-in-out; /* lucide-pulse animation */
                }
                @keyframes pulse { /* For question icon */
                    0%, 100% { transform: scale(1); box-shadow: 0 4px 10px rgba(102, 126, 234, 0.35); }
                    50% { transform: scale(1.1); box-shadow: 0 6px 15px rgba(102, 126, 234, 0.45); }
                }

                .options-grid {
                    display: grid;
                    gap: 16px;
                    margin-bottom: 16px; /* Reduced margin to make space for Gemini button */
                }

                /* Option Item Styling */
                .option-item {
                    position: relative; /* For hover shine */
                    display: flex;
                    align-items: center;
                    min-height: 60px;
                    padding: 20px 24px;
                    background: linear-gradient(to bottom right, #f8fafc, #f1f5f9);
                    border: 2px solid #cbd5e1; /* border-slate-300 */
                    border-radius: 15px;
                    cursor: pointer;
                    transition: all 0.2s cubic-bezier(0.4,0,0.2,1);
                    font-size: 1rem; /* text-base */
                    line-height: 1.5rem;
                    font-weight: 500; /* font-medium */
                    color: #334155; /* slate-700 */
                    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05); /* shadow-sm */
                    overflow: hidden; /* Contains hover shine */
                }
                /* Hover shine effect for options */
                .option-item.option-hover-shine::before {
                    content: '';
                    position: absolute;
                    top: 0; left: -100%; width: 100%; height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(103, 126, 234, 0.08), transparent);
                    transition: left 0.6s ease;
                }
                .option-item.option-hover-shine:hover::before { left: 100%; }
                
                .option-item:hover:not(.answered) { /* Prevent hover effects when answered */
                    transform: translateY(-3px) scale(1.01);
                    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
                    border-color: #c084fc; /* border-purple-400 */
                    background: linear-gradient(to bottom right, white, #f5f3ff); /* from-white to-purple-50 */
                }
                .option-item:focus-visible {
                    outline: 2px solid #a855f7; /* outline-purple-500 */
                    outline-offset: 2px;
                }
                .option-item.selected { /* Selected but not yet checked */
                    box-shadow: 0 0 0 2px #a855f7; /* ring-2 ring-purple-500 */
                    border-color: #a855f7;
                    background: linear-gradient(to bottom right, #f3e8ff, #e9d5ff); /* from-purple-100 to-purple-200 */
                }
                .option-item.correct {
                    background: linear-gradient(to bottom right, #22c55e, #16a34a); /* from-green-500 to-green-600 */
                    color: white;
                    border-color: #16a34a;
                    transform: translateY(-3px) scale(1.01); /* Keep elevation */
                }
                .option-item.incorrect {
                    background: linear-gradient(to bottom right, #ef4444, #dc2626); /* from-red-500 to-red-600 */
                    color: white;
                    border-color: #dc2626;
                    transform: translateY(-3px) scale(1.01); /* Keep elevation */
                }
                
                .option-item.answered { pointer-events: none; opacity: 0.8; }
                .option-item.answered.selected:not(.correct):not(.incorrect) { opacity: 0.7; } 
                .option-item.answered:not(.selected):not(.correct):not(.incorrect) { opacity: 0.6; } 
                .option-item.answered.correct:not(.selected) { opacity: 1; } 


                .option-item span:first-child { flex-grow: 1; } 
                .option-feedback-icon { margin-left: auto; }
                .option-item.correct .option-feedback-icon { color: #dcfce7;  }
                .option-item.incorrect .option-feedback-icon { color: #fee2e2;  }

                .animate-correct-pulse { animation: correctPulseAnim 0.5s ease-out; }
                @keyframes correctPulseAnim {
                    0% { transform: scale(1.01) translateY(-3px); }
                    50% { transform: scale(1.03) translateY(-3px); }
                    100% { transform: scale(1.01) translateY(-3px); }
                }
                .animate-incorrect-shake { animation: incorrectShakeAnim 0.5s ease-out; }
                @keyframes incorrectShakeAnim {
                    0%, 100% { transform: translateX(0) translateY(-3px) scale(1.01); }
                    20% { transform: translateX(-6px) translateY(-3px) scale(1.01); }
                    40% { transform: translateX(6px) translateY(-3px) scale(1.01); }
                    60% { transform: translateX(-6px) translateY(-3px) scale(1.01); }
                    80% { transform: translateX(6px) translateY(-3px) scale(1.01); }
                }
                .animate-icon-bounce { animation: iconBounceAnim 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55); }
                @keyframes iconBounceAnim {
                    0% { transform: scale(0.5); opacity: 0.5; }
                    60% { transform: scale(1.2); opacity: 1; }
                    100% { transform: scale(1); opacity: 1; }
                }

                .feedback-message-container {
                    padding: 16px;
                    border-radius: 0.75rem; 
                    font-weight: 600;
                    text-align: center;
                    border-width: 2px;
                    border-style: solid;
                    margin-top: 12px; 
                    margin-bottom: 12px; /* Space for Gemini button */
                }
                .feedback-message-container.correct-feedback {
                    background: linear-gradient(to bottom right, #dcfce7, #bbf7d0);
                    color: #15803d; 
                    border-color: #4ade80; 
                }
                .feedback-message-container.incorrect-feedback {
                    background: linear-gradient(to bottom right, #fee2e2, #fecaca);
                    color: #b91c1c; 
                    border-color: #f87171; 
                }
                .animate-feedback-slide { animation: feedbackSlideAnim 0.5s ease-out; }
                @keyframes feedbackSlideAnim {
                    from { opacity: 0; transform: translateY(15px) scale(0.98); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }

                /* Gemini Explanation Section */
                .gemini-explanation-button-container {
                    margin-top: 16px;
                    margin-bottom: 16px;
                    text-align: center;
                }
                .gemini-explanation-button {
                    /* Similar to action-button but distinct */
                    position: relative; 
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 180px;
                    padding: 10px 20px;
                    background: linear-gradient(to bottom right, #8b5cf6, #ec4899); /* Purple to Pink */
                    color: white;
                    font-size: 0.95rem; 
                    font-weight: 600;
                    border-radius: 9999px;
                    cursor: pointer;
                    transition: all 0.2s cubic-bezier(0.4,0,0.2,1);
                    box-shadow: 0 4px 10px -2px rgba(139, 92, 246, 0.35);
                    border: none;
                    overflow: hidden; 
                }
                .gemini-explanation-button:hover:not(:disabled) {
                    transform: translateY(-2px) scale(1.02);
                    box-shadow: 0 8px 15px -3px rgba(139, 92, 246, 0.45);
                }
                .gemini-explanation-button:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                    background: #a8a29e; /* stone-400 */
                }
                .gemini-explanation-button .button-icon {
                    margin-right: 8px;
                }

                .gemini-explanation-container {
                    margin-top: 16px;
                    padding: 16px;
                    background-color: #f3e8ff; /* purple-100 for light purple bg */
                    border-radius: 10px;
                    border: 1px solid #d8b4fe; /* purple-300 border */
                    color: #581c87; /* purple-800 text */
                    font-size: 0.9rem;
                    line-height: 1.5;
                    text-align: left;
                    white-space: pre-wrap; /* To respect newlines from API */
                    max-height: 200px; /* Limit height */
                    overflow-y: auto; /* Add scroll if content overflows */
                }
                .gemini-explanation-container.loading {
                    color: #7e22ce; /* purple-600 */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }


                .loading-spinner-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 200px; 
                }
                .loader-spinner {
                    width: 3rem; height: 3rem;
                    border: 4px solid #d8b4fe; 
                    border-top-color: #9333ea; 
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .action-section {
                    text-align: center;
                    padding: 28px; 
                    padding-top: 16px; 
                    background-color: white;
                    border-top: 1px solid #f1f5f9; 
                }
                .action-button {
                    position: relative; 
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 220px;
                    padding: 16px 24px; 
                    background: linear-gradient(to bottom right, #667eea, #764ba2);
                    color: white;
                    font-size: 1.125rem; 
                    line-height: 1.75rem;
                    font-weight: 600;
                    border-radius: 9999px;
                    cursor: pointer;
                    transition: all 0.2s cubic-bezier(0.4,0,0.2,1);
                    box-shadow: 0 10px 15px -3px rgba(168, 85, 247, 0.35), 0 4px 6px -2px rgba(168, 85, 247, 0.35); 
                    border: none;
                    overflow: hidden; 
                }
               
                .action-button.button-shine::before {
                    content: '';
                    position: absolute;
                    top: 0; left: -100%; width: 100%; height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
                    transition: left 0.6s ease;
                }
                .action-button.button-shine:hover::before { left: 100%; }

                .action-button:hover:not(:disabled) {
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 20px 25px -5px rgba(168, 85, 247, 0.45), 0 10px 10px -5px rgba(168, 85, 247, 0.45); 
                }
                .action-button:active:not(:disabled) {
                    transform: translateY(-1px) scale(1.01);
                    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); 
                }
                .action-button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    transform: none;
                    background: #94a3b8; 
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); 
                }
                .action-button:focus-visible {
                    outline: 2px solid #7e22ce; 
                    outline-offset: 2px;
                }
                .action-button .button-icon { margin-right: 8px; }

                .completion-screen {
                    padding: 28px;
                    text-align: center;
                }
                @media (min-width: 768px) { 
                    .completion-screen { padding: 40px; }
                }
                .animate-completion-fade { animation: completionFadeAnim 0.7s ease-out; }
                @keyframes completionFadeAnim {
                    from { opacity: 0; transform: translateY(25px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                
                .trophy-icon-container { margin-bottom: 16px;  }
                .trophy-icon { /* Base class for icons */ }
                .trophy-icon.color-amber { color: #f59e0b; }
                .trophy-icon.color-yellow { color: #facc15; }
                .trophy-icon.color-slate { color: #94a3b8; }
                .trophy-icon.color-sky { color: #0ea5e9; }
                .trophy-icon.color-green-leaf { color: #16a34a; } 
                
                .animate-trophy-bounce { animation: trophyBounceAnim 2.2s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55); }
                @keyframes trophyBounceAnim {
                    0%, 100% { transform: translateY(0) scale(1); }
                    15% { transform: translateY(-25px) scale(1.1); }
                    30% { transform: translateY(0) scale(0.95); }
                    45% { transform: translateY(-15px) scale(1.05); }
                    60% { transform: translateY(0) scale(1); }
                }

                .final-message-p {
                    font-size: 1.5rem; 
                    line-height: 2rem;
                    font-weight: 700; 
                    color: #1e293b; 
                    margin-bottom: 12px;
                }
                .animate-score-glow { animation: scoreGlowAnim 2.5s ease-in-out infinite alternate; }
                @keyframes scoreGlowAnim {
                    0% { filter: brightness(0.95) drop-shadow(0 0 5px rgba(102, 126, 234, 0.2)); }
                    100% { filter: brightness(1.15) drop-shadow(0 0 15px rgba(102, 126, 234, 0.4)); }
                }

                .final-score-text {
                    font-size: 2.25rem; 
                    line-height: 2.5rem;
                    font-weight: 800; 
                    color: transparent;
                    -webkit-background-clip: text;
                    background-clip: text;
                    background-image: linear-gradient(to right, #9333ea, #ec4899); 
                    margin-bottom: 32px;
                    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.05)); 
                }

                .final-score-bar-container {
                    width: 100%;
                    max-width: 28rem; 
                    margin: 0 auto 32px auto; 
                    background-color: #e2e8f0; 
                    border-radius: 9999px;
                    height: 1.25rem; 
                    box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.05); 
                    overflow: hidden; 
                }
                .final-score-bar-fill {
                    position: relative; 
                    height: 100%;
                    border-radius: 9999px;
                    transition: width 1s ease-out;
                }
                
                .final-score-bar-fill.final-score-fill-shine::after {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
                    animation: scoreShineAnim 2.5s infinite linear;
                }
                @keyframes scoreShineAnim {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .final-score-bar-fill.fill-default { background: linear-gradient(to right, #38bdf8, #3b82f6); }
                .final-score-bar-fill.fill-gold { background: linear-gradient(to right, #facc15, #fb923c, #ef4444); }
                .final-score-bar-fill.fill-green { background: linear-gradient(to right, #84cc16, #22c55e); }
                .final-score-bar-fill.fill-teal { background: linear-gradient(to right, #10b981, #14b8a6); }

                .completion-buttons-container {
                    display: flex;
                    flex-direction: column; 
                    justify-content: center;
                    align-items: center;
                    gap: 16px; 
                    margin-top: 40px;
                }
                @media (min-width: 640px) { 
                    .completion-buttons-container { 
                        flex-direction: row; 
                     }
                }

                @media (prefers-reduced-motion: reduce) {
                    *, *::before, *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                        animation-delay: 0ms !important;
                        transition-delay: 0ms !important;
                    }
                    .question-icon-container, 
                    .animate-trophy-bounce,
                    .animate-score-glow,
                    .loader-spinner 
                     {
                        animation: none !important;
                    }
                }
            `}</style>
      <div className="quiz-app-outer-container">
        <div className="quiz-main-container quiz-container-gloss">
          <div className="quiz-header quiz-header-shimmer">
            <h1>Communication Skills Quiz</h1>
            <p>
              est your communication, soft skills, and social intelligence like
              a pro.
            </p>
          </div>

          {!showCompletion ? (
            <>
              <div className="progress-section progress-section-glow">
                <div className="progress-info">
                  <span>
                    Sawaal {currentQuestionIndex + 1} / {questions.length}
                  </span>
                  <span>
                    Score: {score}/{questionsAnswered}
                  </span>
                </div>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar-fill progress-fill-shine"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div
                className={`question-area ${
                  isLoadingQuestion ? "loading" : "loaded"
                }`}
              >
                {currentQuestion && !isLoadingQuestion ? (
                  <>
                    <div className="question-text-container">
                      <p className="question-text-p">
                        {currentQuestion.question}
                      </p>
                      <div className="question-icon-container">
                        <HelpCircle size={20} />
                      </div>
                    </div>

                    <div className="options-grid">
                      {currentQuestion.options.map((option, index) => (
                        <div
                          key={index}
                          className={getOptionClasses(index)}
                          onClick={() => handleSelectOption(index)}
                          onKeyDown={(e) =>
                            (e.key === "Enter" || e.key === " ") &&
                            handleSelectOption(index)
                          }
                          role="button"
                          tabIndex={answerChecked ? -1 : 0}
                        >
                          <span>{option}</span>
                          {answerChecked &&
                            index === currentQuestion.correct && (
                              <CheckCircle2
                                size={24}
                                className="option-feedback-icon animate-icon-bounce"
                              />
                            )}
                          {answerChecked &&
                            selectedOptionIndex === index &&
                            index !== currentQuestion.correct && (
                              <XCircle
                                size={24}
                                className="option-feedback-icon animate-icon-bounce"
                              />
                            )}
                        </div>
                      ))}
                    </div>

                    {answerChecked && currentQuestion && (
                      <div className={getFeedbackContainerClasses()}>
                        {selectedOptionIndex === currentQuestion.correct
                          ? "Sahi Jawab! Bahut acche."
                          : `Galat. Sahi jawab tha: "${
                              currentQuestion.options[currentQuestion.correct]
                            }"`}
                      </div>
                    )}

                    {answerChecked && (
                      <div className="gemini-explanation-button-container">
                        <button
                          className="gemini-explanation-button button-shine"
                          onClick={fetchExplanation}
                          disabled={isLoadingExplanation}
                        >
                          <Sparkles size={18} className="button-icon" />
                          {isLoadingExplanation
                            ? "Soch raha hai..."
                            : "✨ Aur Jaankari"}
                        </button>
                      </div>
                    )}

                    {geminiExplanation && !isLoadingExplanation && (
                      <div className="gemini-explanation-container">
                        {geminiExplanation}
                      </div>
                    )}
                    {isLoadingExplanation && (
                      <div className="gemini-explanation-container loading">
                        <div
                          className="loader-spinner"
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            borderWidth: "3px",
                          }}
                        ></div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="loading-spinner-container">
                    <div className="loader-spinner"></div>
                  </div>
                )}
              </div>

              <div className="action-section">
                <button
                  className="action-button button-shine"
                  onClick={handleNextButton}
                  disabled={
                    (selectedOptionIndex === -1 &&
                      !answerChecked &&
                      !answerChecked) ||
                    isLoadingQuestion
                  }
                >
                  {nextButtonText === "Next" && (
                    <ArrowRight size={20} className="button-icon" />
                  )}
                  {nextButtonText === "Select " && (
                    <CheckCircle2 size={20} className="button-icon" />
                  )}
                  {nextButtonText === "Result " && (
                    <Trophy size={20} className="button-icon" />
                  )}
                  {nextButtonText}
                </button>
              </div>
            </>
          ) : (
            <div className="completion-screen animate-completion-fade">
              <div className="trophy-icon-container">
                <trophyDetails.Icon
                  size={trophyDetails.size}
                  className={trophyDetails.className}
                />
              </div>
              <p className="final-message-p animate-score-glow">
                {finalMessage}
              </p>
              <p className="final-score-text">
                your Score: {score} / {questions.length}
              </p>

              <div className="final-score-bar-container">
                <div
                  className={`final-score-bar-fill final-score-fill-shine ${finalScoreFillClass}`}
                  style={{
                    width: `${
                      questions.length > 0
                        ? (score / questions.length) * 100
                        : 0
                    }%`,
                  }}
                ></div>
              </div>

              <div className="completion-buttons-container">
                <button
                  className="action-button button-shine"
                  onClick={handleRestartQuiz}
                >
                  <RefreshCw size={20} className="button-icon" />
                  Restart this Quiz
                </button>
                <button
                  className="action-button button-shine"
                  onClick={handleGoHome}
                >
                  <Home size={20} className="button-icon" />
                  Go to Home
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default QuizApp;
