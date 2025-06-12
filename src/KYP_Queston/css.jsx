import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Css = () => {
  const navigate = useNavigate();

  // Updated container style with a purple gradient
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)', // Purple gradient
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  };

  const contentStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    background: 'white',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '30px'
  };

  // Updated title style with a purple shade
  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#8A2BE2', // Purple shade
    marginBottom: '10px'
  };

  const subtitleStyle = {
    fontSize: '1.5rem',
    color: '#374151',
    marginBottom: '20px'
  };

  // Updated button style with a purple gradient
  const backButtonStyle = {
    background: 'linear-gradient(135deg, #8A2BE2 0%, #9932CC 100%)', // Purple gradient
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    marginBottom: '20px'
  };

  const quizContentStyle = {
    background: '#F3E5F5', // Light purple background
    padding: '30px',
    borderRadius: '15px',
    marginTop: '20px'
  };

  // Function to handle quiz start
  const handleStartQuiz = () => {
    navigate('/css_question'); // Navigate to css_question.jsx page
  };

  // Framer Motion variants for animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.95 }
  };

  return (
    <div style={containerStyle}>
      <motion.div
        style={contentStyle}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          onClick={() => navigate('/')}
          style={backButtonStyle}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          ← Back to Home
        </motion.button>

        <div style={headerStyle}>
          <motion.div
            style={{ fontSize: '4rem', marginBottom: '20px' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            🎯
          </motion.div>
          <motion.h1 style={titleStyle} variants={itemVariants}>CSS Quiz</motion.h1>
          <motion.h2 style={subtitleStyle} variants={itemVariants}>Certificate in Soft Skills</motion.h2>
          <motion.p style={{ color: '#6b7280', fontSize: '1.1rem' }} variants={itemVariants}>
            Soft Skills Training for Career Building
          </motion.p>
        </div>

        <motion.div style={quizContentStyle} variants={itemVariants}>
          <h3 style={{ color: '#374151', fontSize: '1.5rem', marginBottom: '20px' }}>
            🌟 Quiz Topics Include:
          </h3>
          <ul style={{ color: '#6b7280', fontSize: '1.1rem', lineHeight: '1.8' }}>
            <motion.li variants={itemVariants}>• Leadership & Team Management</motion.li>
            <motion.li variants={itemVariants}>• Communication Skills</motion.li>
            <motion.li variants={itemVariants}>• Problem Solving & Critical Thinking</motion.li>
            <motion.li variants={itemVariants}>• Time Management</motion.li>
            <motion.li variants={itemVariants}>• Emotional Intelligence</motion.li>
            <motion.li variants={itemVariants}>• Professional Etiquette</motion.li>
          </ul>

          <div style={{
            textAlign: 'center',
            marginTop: '30px',
            padding: '20px',
            background: 'white',
            borderRadius: '10px',
            border: '2px dashed #8A2BE2' // Purple dashed border
          }}>
            <p style={{ color: '#374151', fontSize: '1.2rem', margin: '0' }}>
              💪 Ready to boost your soft skills?
            </p>
            <motion.button
            button
              onClick={handleStartQuiz}
              style={{
                ...backButtonStyle,
                marginTop: '15px',
                marginBottom: '0'
              }}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Start CSS Quiz
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Css;