import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useScroll } from 'framer-motion';
import { CheckCircle2, Sparkles, BookOpen, Zap, ArrowRight, Star, Rocket, Home, Check } from 'lucide-react';

// CSS styles with purple gradient theme
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

    body {
      font-family: 'Inter', sans-serif;
      margin: 0;
    }

    /* Main App Container with Live Purple Gradient */
    .app-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #a855f7 50%, #c084fc 75%, #e879f9 100%);
      background-size: 400% 400%;
      animation: gradientShift 8s ease infinite;
      position: relative;
      overflow-x: hidden;
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* Floating Particles with Purple Theme */
    .particles-container {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      pointer-events: none;
    }
    .particle {
      position: absolute;
      width: 8px;
      height: 8px;
      background: linear-gradient(45deg, #e879f9, #c084fc, #a855f7);
      border-radius: 50%;
      opacity: 0.4;
      box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
    }

    /* Progress Bar with Glow Effect */
    .progress-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #a855f7, #e879f9, #c084fc);
      transform-origin: left;
      z-index: 50;
      box-shadow: 0 0 10px rgba(168, 85, 247, 0.7);
    }
    
    /* Home Button with Purple Theme */
    .home-button-link {
        position: absolute;
        top: 24px;
        left: 24px;
        z-index: 100;
        text-decoration: none;
        cursor: pointer;
    }
    .home-button {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 24px;
        background: rgba(255, 255, 255, 0.95);
        color: #7c3aed;
        border: 2px solid rgba(168, 85, 247, 0.3);
        border-radius: 20px;
        font-weight: 600;
        box-shadow: 0 8px 32px rgba(168, 85, 247, 0.3);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
    }
    .home-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 40px rgba(168, 85, 247, 0.5);
        background: rgba(255, 255, 255, 1);
        border-color: rgba(168, 85, 247, 0.6);
    }

    /* Content Layout */
    .content-wrapper {
      position: relative;
      z-index: 10;
      max-width: 1024px;
      margin: 0 auto;
      padding: 120px 24px 48px;
    }

    /* Header with Glowing Text */
    .header {
      text-align: center;
      margin-bottom: 48px;
    }
    .main-title {
      font-size: 3.75rem;
      font-weight: 800;
      background: linear-gradient(45deg, #ffffff, #f3e8ff, #e879f9);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
      background-size: 200% 200%;
      text-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
      filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.7));
    }
    .subtitle {
      font-size: 1.25rem;
      color: rgba(255, 255, 255, 0.9);
      max-width: 42rem;
      margin: 0 auto;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    /* Stats Section with Glass Effect */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: 24px;
      margin-bottom: 48px;
    }
    @media (min-width: 640px) {
      .stats-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    @media (min-width: 1024px) {
      .stats-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }

    .stats-card {
      padding: 24px;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(20px);
      position: relative;
      overflow: hidden;
    }
    .stats-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
      pointer-events: none;
    }
    .stats-card-content {
      display: flex;
      align-items: center;
      gap: 12px;
      position: relative;
      z-index: 1;
    }
    .stats-icon-wrapper {
      padding: 12px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 16px;
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 16px rgba(168, 85, 247, 0.3);
    }
    .stats-icon {
      width: 24px;
      height: 24px;
      color: white;
      filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
    }
    .stats-value {
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    .stats-label {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.875rem;
    }
    .from-green-400 { 
      background: linear-gradient(135deg, #4ade80, #22c55e, #16a34a);
      box-shadow: 0 20px 40px rgba(74, 222, 128, 0.3);
    }
    .from-blue-400 { 
      background: linear-gradient(135deg, #60a5fa, #3b82f6, #2563eb); 
      box-shadow: 0 20px 40px rgba(96, 165, 250, 0.3);
    }
    .from-purple-400 { 
      background: linear-gradient(135deg, #a855f7, #9333ea, #7c3aed); 
      box-shadow: 0 20px 40px rgba(168, 85, 247, 0.4);
    }
    .from-amber-400 {
      background: linear-gradient(135deg, #facc15, #f59e0b, #d97706);
      box-shadow: 0 20px 40px rgba(250, 204, 21, 0.3);
    }

    /* Questions List with Glass Cards */
    .questions-list {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .question-item {
      position: relative;
      border-radius: 24px;
      transition: all 0.5s;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
    }
    .question-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
      pointer-events: none;
    }
    .question-item:hover {
      box-shadow: 0 25px 50px rgba(168, 85, 247, 0.2);
      transform: translateY(-2px);
      border-color: rgba(255, 255, 255, 0.3);
    }
    .question-item.done {
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.1));
      border-color: rgba(16, 185, 129, 0.4);
      box-shadow: 0 15px 35px rgba(16, 185, 129, 0.2);
    }
    .question-item-content {
      position: relative;
      padding: 24px;
      z-index: 1;
    }
    .question-flex {
      display: flex;
      align-items: flex-start;
      gap: 16px;
    }
    .checkbox-container {
        position: relative;
        margin-top: 4px;
        flex-shrink: 0;
    }
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
    .custom-checkbox {
        width: 28px;
        height: 28px;
        border-radius: 14px;
        border: 2px solid rgba(255, 255, 255, 0.4);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
    }
    .custom-checkbox.checked {
        background: linear-gradient(135deg, #10b981, #059669);
        border-color: #10b981;
        box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
    }
    .custom-checkbox:hover {
        border-color: rgba(255, 255, 255, 0.6);
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
    }
    
    .question-text-container {
        flex: 1 1 0%;
    }
    .question-text-header {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        margin-bottom: 8px;
    }
    .question-text {
        color: rgba(255, 255, 255, 0.95);
        line-height: 1.625;
        transition: all 0.5s;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    .question-text.done {
        text-decoration: line-through;
        opacity: 0.6;
    }

    /* Action Button with Glow */
    .action-button {
      position: relative;
      overflow: hidden;
      border-radius: 16px;
      padding: 12px 24px;
      font-weight: 500;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 12px;
    }
    .action-button:disabled {
      background: rgba(255, 255, 255, 0.2);
      color: rgba(255, 255, 255, 0.5);
      cursor: not-allowed;
    }
    .action-button:not(:disabled) {
      background: linear-gradient(135deg, #a855f7, #c084fc, #e879f9);
      color: white;
      box-shadow: 0 8px 25px rgba(168, 85, 247, 0.4);
    }
     .action-button:not(:disabled):hover {
      box-shadow: 0 15px 40px rgba(168, 85, 247, 0.6);
      transform: scale(1.05) translateY(-2px);
    }
    .action-button .btn-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, #e879f9, #f472b6);
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }
    .action-button:hover .btn-bg {
        transform: translateX(0);
    }
    .action-button span {
        position: relative;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .loader {
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255,255,255,0.3);
        border-top-color: white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
    
    /* Explanation Section with Glow */
    .explanation-container {
      margin-top: 24px;
      padding: 24px;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(168, 85, 247, 0.1));
      border-left: 4px solid #a855f7;
      border-radius: 0 20px 20px 0;
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 32px rgba(168, 85, 247, 0.2);
    }
    .explanation-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
    }
    .explanation-title {
      font-weight: 600;
      color: rgba(255, 255, 255, 0.95);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    .explanation-text {
      color: rgba(255, 255, 255, 0.9);
      white-space: pre-wrap;
      line-height: 1.625;
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
      font-size: 0.875rem;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    /* Completion Celebration Modal with Purple Theme */
    .celebration-overlay {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 50;
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(8px);
    }
    .celebration-modal {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95));
        border-radius: 32px;
        padding: 48px;
        text-align: center;
        box-shadow: 0 25px 50px rgba(168, 85, 247, 0.3);
        max-width: 448px;
        margin: 0 16px;
        border: 1px solid rgba(168, 85, 247, 0.2);
        backdrop-filter: blur(20px);
    }
    .celebration-icon-wrapper {
        width: 80px;
        height: 80px;
        margin: 0 auto 24px auto;
        background: linear-gradient(135deg, #a855f7, #c084fc);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 40px rgba(168, 85, 247, 0.5);
    }
    .celebration-title {
        font-size: 1.875rem;
        font-weight: 700;
        background: linear-gradient(135deg, #a855f7, #c084fc);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 16px;
    }
    .celebration-text {
        color: #4b5563;
        margin-bottom: 24px;
    }
    .celebration-button {
        background: linear-gradient(135deg, #a855f7, #c084fc);
        color: white;
        padding: 12px 32px;
        border-radius: 16px;
        font-weight: 600;
        border: none;
        cursor: pointer;
        box-shadow: 0 8px 25px rgba(168, 85, 247, 0.4);
        transition: all 0.3s ease;
    }
    .celebration-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 35px rgba(168, 85, 247, 0.5);
    }
  `}</style>
);


// Raw questions data
const rawQuestions = `
In the given presentation delete any three slides.
Insert a table of two rows and five columns in the given document.
From the given word document change the case of fifth sentence to toggle case.
In the given spreadsheet, apply 'Accent2' cell style to the cell range A2.G2.
Add watermark text 'Envelope' in the given document.
Add additional to slides to the the the exiting presentation. Set the timing of slide automatically after 4 seconds 4 first slide (slide number 1).
Apply artistic page border to the given MS word document.
In the given MS word document replace the word 'computer 'with the word' calculator ' throughout the document.
In the given presentation, remove footer text from all the slides.
In the given spreadsheet, use Max function in cell E15 to show the highest marks from the cell E4:E13.
You have created your resume using MS word .Now you want to insert your photo in a picture control .how will you insert a Picture Control at the beginning of given document?
Change the text colour of 3rd sentenced of given document to "orange"
Change layout of slide 2 to a" Content with Caption " layout.
In the given document, apply"lowercase " capitalization to the paragraph beginning from "This summer , help your child.........'
In the given spreadsheet file , apply "Accent3" cell style to the cell range A2:H2.
Calculate total marks of first student by using appropriate function in a cell L2 and replicate same formula to the cell range L3:L21.
Delete the"Flower" image from all the slides of the given presentation.
In the given MS word Document change the Line spacing of 3rd sentence to "1.5 lines.
In the given document ,create a hyperlink for the text "Development" to open "http://www.investopedia.com" web page.
In the given spreadsheet , use MIN function in cell F15 to show the lowest marks from the cell range F4:F13.
In the given MS word document change the Line spacing of 3rd sentence to Double.
Change the font style of second sentence of given document to "BOLD".
In the given document , set the right margin to 0.75 inches.
In the given document, change the font name of second sentence to "Time New Roman".
In the given spreadsheet, change the chart from a pie chart to a column chart . Apply default chart style.
In the given presentation , insert blank slide at the end . Insert text box with the text : picture in the second slide ( Slide Number 2).
Romove watermark from the given document.
In the given worksheet , change the page orientation to landscape layout.
In the given spreadsheet , unmarge cell B2 and split a into multiple cells.
Add new five slides in the given presentation.
In the given presentation , remove the strike through effiect of the "information technology".
In the given document , copy the format of the title text "Ms Shashi's Classroom Newsletter" and apply it to the text "Article Title1".
In the given spreadsheet , insert new worksheet after "personal Monthly Budget" Sheet and set the name of the sheet as "Budget".
Insert additional four slides in the given MS power point presentation .Hide Second slide (slide number : 2 ) while running slide show.
In the given presentation , delete all images from second slide.
Insert a table of 2 rows and 7 columns at the top of given document.
In the given word document change the font size of the first sentence to " 17" and font name to " calbari".
In the given document , create a hyperlink for the text " project report " to open "http//www.google.com" web page.
In the given presentation , change the case of paragraph present on the third slide to " lowercase".
In the given spreadsheet , use appropriate function to show average marks of each student in the cell range L4:L13.
Create two additional blank slide in the presentation and view presentation through the " slide sorter view ".
Display the given presentation in " Notes page view".
Set 75% zoom level for the given worksheet.
insert additional two slides in the given presentation ,insert"  up arrow" shape in the second slide (slide number 2).
In the given presentation and three blank slide. apply "uncover" slide transition effect and "from top" variation effect to all the slides.
In the given word document, change the " top" margin to 2 inches.
In the given document Set the font size 14 pt for the paragraph beginning from' This summer, help you child...,....
Copy  slide number eight and paste it as a new slide at the end of the given presentation.
In the given spreadsheet, insert a new column after column A.
Delete any two table rows from the given document.
Apply artistic page border of the given document.
in the given word document , change the format of the third sentence to "UPPERCASE ".
In the given spreadsheet file, insert a column after column C.
In the given document apply "underline" style to the entire text.
Hinder given station replace the word" Announcement" with the word "Declaration" using "Find and replace" option.
In the given presentation , insert a new slide with "title and  content" layout at the end.
in the MS word document add a table with three rows and three columns and change the background colour of second cell  of the first row "orange".
Highlight the third sentence in the given document with "red colour".
Ad additional 7 slides to the existing presentation display fourth slide( slide number 4 )automatically after 4 second while running slide show Apply time effect for third slide (slide number:3).
Hindi the given word document insert hyperlink to the word" keyboard "and link this to "http www.yahoo.com" web page.
In the given spreadsheet, increase indent of sale range B2:B2 by 2 character.
in the given spreadsheet used to appropriate function to show total marks of each student in the cell range K4:Kl3.
in the given presentation , change the line spacing of the title present present on first slide (slide No 1)"3.0 lines".
In the given spreadsheet , insert hyperlink to the heading text " Magic Cafe"and link this to "http www.magic.com "web page.
Insert the value 50, 100,65 in cells G7, G9, G10 respectively. Calculate the sum of the cell range G7 to G10 and display it in the cell G11 using a function.
In the given MS word document , replace the word "nice" with the word "main" throughout the document.
In the given document , remove hyperlink of the word "Home group".
In the given presentation ,insert a "Rectangle" shape.
Add additional four slides to the existing presentation.Display 4th slide (Slide Number: 4) automatically after 3 seconds while running slide show Apply time effect for Third Slide (Slide Number: 3).
In the given worksheet , select rows 10 and 11 and move them to rows 7 and 8.
In the given MS word Document change the page Background color to" purple".
In the given document set the Left margin as 1inch and Right margin as 2 inch.
In the given document , create a hyperlink for the text " welcome To Global Tours & Travel" to open " http//www.globaltours.com" web page.
Check and correct all spelling and grammar mistakes in the given document.
Apply "Drop Cop- In Margin " effect to the first sentence of given document.
Create two additional Blank slides in the given presentation and view the presentation through the " Note page View ".
In the given presentation ,insert "Radial Cycle" smart art graphic in the first slide.
In the given document , split all the text in to two columns.
Change the font style of fifth sentence of given document to "ITALIC".
`.trim().split('\n').filter(q => q.trim() !== '');

const initialQuestions = rawQuestions.map((q, index) => ({
    id: index + 1,
    text: q,
    done: false,
    explanation: null,
    isLoading: false,
}));

// Floating particles background
const FloatingParticles = () => {
  const particles = Array.from({ length: 25 }, (_, i) => i);
  
  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="particle"
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            scale: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.5,
          }}
          animate={{
            x: `+=${Math.random() * 200 - 100}px`,
            y: `+=${Math.random() * 200 - 100}px`,
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Stats card component
const StatsCard = ({ icon: Icon, label, value, colorClass }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className={`stats-card ${colorClass}`}
  >
    <div className="stats-card-content">
      <div className="stats-icon-wrapper">
        <Icon className="stats-icon" />
      </div>
      <div>
        <div className="stats-value">{value}</div>
        <div className="stats-label">{label}</div>
      </div>
    </div>
  </motion.div>
);

// Question item component with advanced animations
const QuestionItem = ({ question, onToggle, onExplain, index }) => {
  const handleExplainClick = (e) => {
    e.stopPropagation(); // Prevent toggling when clicking the explain button
    if (question.isLoading || question.explanation) return;
    onExplain(question.id);
  };

  const getAppIcon = (text) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('word') || lowerText.includes('document')) {
      return <BookOpen style={{width: '20px', height: '20px', color: '#e879f9', filter: 'drop-shadow(0 0 8px rgba(232, 121, 249, 0.5))'}} />;
    }
    if (lowerText.includes('presentation') || lowerText.includes('slide')) {
      return <Rocket style={{width: '20px', height: '20px', color: '#c084fc', filter: 'drop-shadow(0 0 8px rgba(192, 132, 252, 0.5))'}} />;
    }
    if (lowerText.includes('spreadsheet') || lowerText.includes('worksheet') || lowerText.includes('excel')) {
      return <Star style={{width: '20px', height: '20px', color: '#a855f7', filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.5))'}} />;
    }
    return <Zap style={{width: '20px', height: '20px', color: '#f472b6', filter: 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.5))'}} />;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        type: "spring",
        bounce: 0.3
      }}
      whileHover={{ scale: 1.02 }}
      className={`question-item ${question.done ? 'done' : ''}`}
    >
      <div className="question-item-content">
        <div className="question-flex">
          <motion.div
            className="checkbox-container"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <input
              type="checkbox"
              checked={question.done}
              onChange={() => onToggle(question.id)}
              className="sr-only"
              id={`checkbox-${question.id}`}
            />
            <motion.label
              htmlFor={`checkbox-${question.id}`}
              className={`custom-checkbox ${question.done ? 'checked' : ''}`}
              whileHover={{ boxShadow: "0 0 25px rgba(255, 255, 255, 0.4)" }}
            >
              <AnimatePresence>
                {question.done && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    <Check size={18} color="white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.label>
          </motion.div>
          
          <div className="question-text-container">
            <div className="question-text-header">
              {getAppIcon(question.text)}
              <p className={`question-text ${question.done ? 'done' : ''}`}>
                {question.text}
              </p>
            </div>
            {!question.explanation && (
              <motion.button 
                onClick={handleExplainClick} 
                disabled={question.isLoading}
                className="action-button"
                whileHover={{ y: -2 }}
              >
                <span>
                  {question.isLoading ? (
                    <div className="loader"></div>
                  ) : (
                    <Sparkles size={16} />
                  )}
                  {question.isLoading ? "Generating..." : "Explain"}
                </span>
              </motion.button>
            )}
          </div>
        </div>

        <AnimatePresence>
          {question.explanation && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="explanation-container"
            >
              <div className="explanation-header">
                <Sparkles size={18} color="#c084fc" />
                <h3 className="explanation-title">Step-by-Step Guide</h3>
              </div>
              <p className="explanation-text">{question.explanation}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};


// Celebration Modal Component
const CelebrationModal = ({ onReset }) => {
  return (
    <motion.div
      className="celebration-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="celebration-modal"
        initial={{ scale: 0.7, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 200 } }}
        exit={{ scale: 0.7, opacity: 0, y: 50 }}
      >
        <motion.div 
            className="celebration-icon-wrapper"
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1]}}
            transition={{ repeat: Infinity, duration: 2, repeatType: 'mirror'}}
        >
          <CheckCircle2 size={40} color="white" />
        </motion.div>
        <h2 className="celebration-title">All Tasks Completed!</h2>
        <p className="celebration-text">Great job! You've successfully completed all challenges. Ready for another round?</p>
        <button onClick={onReset} className="celebration-button">
          Start Over
        </button>
      </motion.div>
    </motion.div>
  );
};


// Main App Component
function App({ navigateToHome }) {
  const [questions, setQuestions] = useState(initialQuestions);
  const [showCelebration, setShowCelebration] = useState(false);
  const [explanationCount, setExplanationCount] = useState(0); // New state for explanation count
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
  });
  
  const API_KEY = "AIzaSyDv8bXCguWz5UybBdIeA1UePepnZz4r4Ag";

  // Function to handle navigation to the home page
  const handleGoHome = (e) => {
    e.preventDefault(); // Prevents the default anchor tag behavior
    if (navigateToHome && typeof navigateToHome === "function") {
      navigateToHome();
    } else {
      console.log(
        "Navigate to home function not provided or is not a function."
      );
    }
  };

  const handleToggleQuestion = (id) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, done: !q.done } : q
      )
    );
  };

  const handleExplainQuestion = async (id) => {
    const questionToExplain = questions.find(q => q.id === id);
    if (!questionToExplain) return;

    setQuestions(prev => prev.map(q => q.id === id ? { ...q, isLoading: true } : q));

    // Updated prompt for a short, specific answer for MS Office tasks
    const prompt = `This task is for MS Word, Excel, or PowerPoint. Give a very short, 1-2 sentence answer for this task: "${questionToExplain.text}"`;
    
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      
      const explanation = data.candidates[0].content.parts[0].text;
      
      setExplanationCount(prevCount => prevCount + 1); // Increment count on success

      setQuestions(prev =>
        prev.map(q =>
          q.id === id
            ? { ...q, isLoading: false, explanation: explanation }
            : q
        )
      );

    } catch (error) {
      console.error("Error fetching explanation from Gemini:", error);
      setQuestions(prev =>
        prev.map(q =>
          q.id === id
            ? { ...q, isLoading: false, explanation: "Sorry, I couldn't get an explanation. Please try again." }
            : q
        )
      );
    }
  };


  const handleReset = () => {
    setShowCelebration(false);
    // Add a small delay before resetting questions for a smoother exit animation
    setTimeout(() => {
        setQuestions(initialQuestions.map(q => ({ ...q, done: false, explanation: null, isLoading: false })));
        setExplanationCount(0); // Reset explanation count
    }, 300);
  };

  // Check for completion
  useEffect(() => {
    const allDone = questions.every(q => q.done);
    if (allDone && questions.length > 0) {
      setShowCelebration(true);
    }
  }, [questions]);
  
  const completedCount = questions.filter(q => q.done).length;
  const totalCount = questions.length;
  const remainingCount = totalCount - completedCount;

  return (
    <>
      <GlobalStyles />
      <div className="app-container">
        <FloatingParticles />
        <motion.div className="progress-bar" style={{ scaleX }} />
        <a href="#" onClick={handleGoHome} className="home-button-link">
            <div className="home-button">
                <Home size={20} />
                <span>Dashboard</span>
            </div>
        </a>
        <div className="content-wrapper">
          <header className="header">
            <motion.h1 
              className="main-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Productivity Challenge
            </motion.h1>
            <motion.p 
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Test your skills with these common productivity tasks. Mark them as complete and get AI-powered explanations.
            </motion.p>
          </header>
          
          <motion.div 
            className="stats-grid"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.3 }
              }
            }}
          >
            <StatsCard icon={CheckCircle2} label="Completed" value={completedCount} colorClass="from-green-400" />
            <StatsCard icon={Zap} label="Remaining" value={remainingCount} colorClass="from-blue-400" />
            <StatsCard icon={BookOpen} label="Total Tasks" value={totalCount} colorClass="from-purple-400" />
            <StatsCard icon={Sparkles} label="AI Explanations Used" value={explanationCount} colorClass="from-amber-400" />
          </motion.div>

          <div className="questions-list">
            <AnimatePresence>
              {questions.map((question, index) => (
                <QuestionItem
                  key={question.id}
                  question={question}
                  onToggle={handleToggleQuestion}
                  onExplain={handleExplainQuestion}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        <AnimatePresence>
          {showCelebration && <CelebrationModal onReset={handleReset} />}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
