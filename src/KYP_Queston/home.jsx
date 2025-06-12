import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuizHomePage() {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const quizCards = [
    {
      id: 'cit',
      title: 'CIT',
      fullTitle: 'Certificate in Information Technology',
      description: 'Become a Smart User of Computer',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      hoverGradient: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      icon: '💻',
      color: '#2563eb'
    },
    {
      id: 'css',
      title: 'CSS',
      fullTitle: 'Certificate in Soft Skills',
      description: 'Soft Skills Training for Career Building',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #ef4444 100%)',
      hoverGradient: 'linear-gradient(135deg, #db2777 0%, #dc2626 100%)',
      icon: '🎯',
      color: '#db2777'
    },
    {
      id: 'cls',
      title: 'CLS',
      fullTitle: 'Certificate in Language Skills',
      description: 'Get Command over Communication',
      gradient: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
      hoverGradient: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
      icon: '📚',
      color: '#059669'
    }
  ];

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #312e81 0%, #7c3aed 50%, #ec4899 100%)',
    padding: '16px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '64px',
    paddingTop: '32px'
  };

  const titleStyle = {
    fontSize: 'clamp(3rem, 6vw, 4rem)',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '16px',
    letterSpacing: '-0.025em'
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    color: 'rgba(229, 231, 235, 0.9)',
    marginBottom: '16px'
  };

  const decoratorStyle = {
    width: '96px',
    height: '4px',
    background: 'linear-gradient(90deg, #fbbf24 0%, #f97316 100%)',
    margin: '0 auto',
    borderRadius: '2px'
  };

  const cardsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '32px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const getCardStyle = (card, isHovered) => ({
    position: 'relative',
    background: 'white',
    borderRadius: '16px',
    padding: '32px',
    width: '320px',
    minHeight: '320px',
    transform: isHovered ? 'translateY(-12px) scale(1.05)' : 'translateY(0) scale(1)',
    transition: 'all 0.3s ease-out',
    boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    border: selectedCard === card.id ? '4px solid rgba(251, 191, 36, 0.6)' : 'none'
  });

  const topBarStyle = (gradient) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '8px',
    background: gradient,
    borderRadius: '16px 16px 0 0'
  });

  const iconStyle = (gradient, isHovered) => ({
    width: '80px',
    height: '80px',
    margin: '0 auto 24px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2.5rem',
    background: gradient,
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)'
  });

  const cardTitleStyle = (color, isHovered) => ({
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: color,
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.3s ease'
  });

  const fullTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '16px'
  };

  const descriptionStyle = {
    color: '#6b7280',
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '24px'
  };

  const buttonStyle = (gradient, hoverGradient, isHovered) => ({
    width: '100%',
    padding: '12px 24px',
    borderRadius: '12px',
    fontWeight: '600',
    color: 'white',
    background: isHovered ? hoverGradient : gradient,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: isHovered ? '0 10px 15px -3px rgba(0, 0, 0, 0.2)' : 'none',
    fontSize: '1rem'
  });

  const footerStyle = {
    textAlign: 'center',
    marginTop: '64px',
    paddingBottom: '32px'
  };

  return (
    <div style={containerStyle}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>Certificate Quiz Game</h1>
          <p style={subtitleStyle}>Choose your certificate program and test your knowledge</p>
          <div style={decoratorStyle}></div>
        </div>

        <div style={cardsContainerStyle}>
          {quizCards.map((card) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card.id)}
                style={getCardStyle(card, isHovered)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div style={topBarStyle(card.gradient)}></div>
                <div style={iconStyle(card.gradient, isHovered)}>{card.icon}</div>
                <h2 style={cardTitleStyle(card.color, isHovered)}>{card.title}</h2>
                <h3 style={fullTitleStyle}>{card.fullTitle}</h3>
                <p style={descriptionStyle}>{card.description}</p>
                <button
                  style={buttonStyle(card.gradient, card.hoverGradient, isHovered)}
                  onClick={() => navigate(`/${card.id}`)}
                  onMouseEnter={(e) => {
                    e.target.style.background = card.hoverGradient;
                    e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = card.gradient;
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  Start Quiz
                </button>
              </div>
            );
          })}
        </div>

        <div style={footerStyle}>
          <p style={{ color: 'rgba(209, 213, 219, 1)', fontSize: '0.875rem' }}>
            Test your knowledge and earn your certificate
          </p>
        </div>
      </div>
    </div>
  );
}
