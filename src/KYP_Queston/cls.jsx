import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// A modern icon for the back button
const BackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);


const Cls = () => {
  const navigate = useNavigate();

  // Function to handle quiz start
  const handleStartQuiz = () => {
    navigate('/cls_question');
  };

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };
  
  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  }

  // Styles
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
      padding: '40px 20px',
      fontFamily: "'Poppins', sans-serif",
    },
    contentCard: {
      maxWidth: '800px',
      margin: '0 auto',
      background: 'white',
      borderRadius: '24px',
      padding: '40px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      border: '1px solid rgba(0,0,0,0.05)'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    mainIcon: {
      fontSize: '4rem',
      lineHeight: 1,
      filter: 'drop-shadow(0 0 15px rgba(16, 185, 129, 0.4))',
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: '800',
      color: '#065f46',
      margin: '10px 0',
    },
    subtitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#047857',
    },
    description: {
      color: '#374151',
      fontSize: '1.1rem',
      marginTop: '10px',
    },
    backButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: '#ecfdf5',
      color: '#065f46',
      border: '2px solid #a7f3d0',
      padding: '10px 20px',
      borderRadius: '12px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      marginBottom: '30px'
    },
    quizContent: {
      background: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)',
      padding: '30px',
      borderRadius: '16px',
      border: '1px solid #99f6e4'
    },
    topicsHeader: {
      color: '#115e59',
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '20px',
    },
    topicList: {
      listStyle: 'none',
      padding: 0,
      color: '#0f766e',
      fontSize: '1.1rem',
      lineHeight: '2',
    },
    topicListItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    ctaBox: {
      textAlign: 'center',
      marginTop: '40px',
      padding: '30px',
      background: 'white',
      borderRadius: '12px',
      border: '2px dashed #6ee7b7',
    },
    ctaText: {
      color: '#047857',
      fontSize: '1.2rem',
      fontWeight: '600',
      margin: '0',
    },
    startButton: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      color: 'white',
      border: 'none',
      padding: '15px 30px',
      borderRadius: '12px',
      cursor: 'pointer',
      fontSize: '1.1rem',
      fontWeight: '700',
      boxShadow: '0 10px 20px -5px rgba(16, 185, 129, 0.4)',
      marginTop: '20px',
    },
  };
  
  // Topic data for easier management
  const quizTopics = [
    { icon: '🇬🇧', text: 'English Grammar & Vocabulary' },
    { icon: '📖', text: 'Reading Comprehension' },
    { icon: '✍️', text: 'Written Communication' },
    { icon: '🗣️', text: 'Verbal Communication' },
    { icon: '📊', text: 'Presentation Skills' },
    { icon: '👔', text: 'Business English' },
  ];

  return (
    <div style={styles.container}>
      <motion.div
        style={styles.contentCard}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          onClick={() => navigate('/')}
          style={styles.backButton}
          whileHover={{ scale: 1.05, background: '#d1fae5' }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          <BackIcon />
          ← Back to Home
        </motion.button>
        
        <motion.header style={styles.header} variants={itemVariants}>
          <div style={styles.mainIcon}>🎓</div>
          <h1 style={styles.title}>CLS Quiz</h1>
          <h2 style={styles.subtitle}>Certificate in Language Skills</h2>
          <p style={styles.description}>Get Command over Communication</p>
        </motion.header>

        <motion.div style={styles.quizContent} variants={itemVariants}>
          <h3 style={styles.topicsHeader}>📚 Quiz Topics Include:</h3>
          <motion.ul 
            style={styles.topicList} 
            variants={{visible: { transition: { staggerChildren: 0.1 } }}}
          >
            {quizTopics.map((topic, index) => (
              <motion.li key={index} style={styles.topicListItem} variants={listItemVariants}>
                <span>{topic.icon}</span>
                <span>{topic.text}</span>
              </motion.li>
            ))}
          </motion.ul>
          
          <motion.div style={styles.ctaBox} variants={itemVariants}>
            <p style={styles.ctaText}>Ready to enhance your language skills?</p>
            <motion.button
              onClick={handleStartQuiz}
              style={styles.startButton}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 25px -5px rgba(16, 185, 129, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              Start CLS Quiz
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Cls;