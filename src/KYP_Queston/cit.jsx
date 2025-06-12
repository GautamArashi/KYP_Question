import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Cit = () => {
  const navigate = useNavigate(); // ✅ React Router Hook
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTopic, setHoveredTopic] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Function to handle quiz start
  const handleStartQuiz = () => {
    navigate('/cit_question'); // ✅ Will navigate to http://localhost:5173/cit_question
  };

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants for Framer Motion
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // All your existing styles (copy from the enhanced version above)
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 25%, #4338ca 50%, #6366f1 75%, #8b5cf6 100%)',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 8s ease infinite',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    overflow: 'hidden',
    position: 'relative'
  };

  const contentStyle = {
    maxWidth: '700px',
    margin: '0 auto',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    borderRadius: '24px',
    padding: isMobile ? '30px 20px' : '40px 35px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    zIndex: 1
  };

  const backButtonStyle = {
    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    color: 'white',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '16px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '30px',
    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
  };

  const startButtonStyle = {
    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    color: 'white',
    border: 'none',
    padding: isMobile ? '12px 24px' : '16px 32px',
    borderRadius: '16px',
    cursor: 'pointer',
    fontSize: isMobile ? '1.1rem' : '1.3rem',
    fontWeight: '700',
    marginTop: '20px',
    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  // Add other styles here...

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
      
      <div style={containerStyle}>
        <div style={contentStyle}>
          {/* Back Button */}
          <motion.button
            onClick={() => navigate('/')} // ✅ Will navigate to http://localhost:5173/
            style={backButtonStyle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            ← Back to Home
          </motion.button>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            {!isMobile && <div style={{ fontSize: '5rem', marginBottom: '25px' }}>💻</div>}
            <h1 style={{
              fontSize: isMobile ? '2.5rem' : '3.5rem',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '15px'
            }}>
              CIT Quiz
            </h1>
            <h2 style={{
              fontSize: isMobile ? '1.2rem' : '1.6rem',
              color: '#374151',
              marginBottom: '25px'
            }}>
              Certificate in Information Technology
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1.2rem' }}>
              Become a Smart User of Computer ✨
            </p>
          </div>

          {/* Quiz Content */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(241, 245, 249, 0.9) 100%)',
            padding: '35px',
            borderRadius: '20px',
            marginTop: '30px'
          }}>
            {!isMobile && (
              <h3 style={{ 
                color: '#374151', 
                fontSize: '1.8rem', 
                marginBottom: '25px',
                textAlign: 'center',
                fontWeight: '700'
              }}>
                🚀 Quiz Topics Include:
              </h3>
            )}
            
            {/* Topics or Mobile Message */}
            <div style={{ marginBottom: '35px' }}>
              {isMobile ? (
                <div style={{
                  textAlign: 'center',
                  padding: '20px',
                  color: '#6b7280',
                  fontSize: '1.1rem',
                  fontStyle: 'italic'
                }}>
                  📱 Topics will be revealed during the quiz
                </div>
              ) : (
                // Desktop topics list here...
                <div style={{ color: '#6b7280', fontSize: '1.2rem', lineHeight: '2' }}>
                  <div style={{ padding: '12px 20px', margin: '8px 0' }}>🖥️ Computer Fundamentals</div>
                  <div style={{ padding: '12px 20px', margin: '8px 0' }}>⚙️ Operating Systems</div>
                  <div style={{ padding: '12px 20px', margin: '8px 0' }}>📊 Microsoft Office Suite</div>
                  <div style={{ padding: '12px 20px', margin: '8px 0' }}>🌐 Internet & Email</div>
                  <div style={{ padding: '12px 20px', margin: '8px 0' }}>🔧 Computer Hardware & Software</div>
                  <div style={{ padding: '12px 20px', margin: '8px 0' }}>💡 Digital Literacy</div>
                </div>
              )}
            </div>
            
            {/* Start Quiz Section */}
            <div style={{ 
              textAlign: 'center', 
              marginTop: '40px',
              padding: '30px',
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '16px',
              border: '2px solid rgba(59, 130, 246, 0.3)'
            }}>
              <p style={{ 
                color: '#374151', 
                fontSize: '1.3rem', 
                margin: '0 0 25px 0',
                fontWeight: '600'
              }}>
                🎯 Ready to test your IT knowledge?
              </p>
              
              {/* Start Quiz Button */}
              <motion.button
                onClick={handleStartQuiz} // ✅ Will navigate to http://localhost:5173/cit_question
                style={startButtonStyle}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 12px 25px -5px rgba(59, 130, 246, 0.6)' 
                }}
                whileTap={{ scale: 0.95 }}
              >
                🎮 Start CIT Quiz
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cit;