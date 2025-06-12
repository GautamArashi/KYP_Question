import React, { useState, useEffect } from 'react';

// Simulated Firebase configuration (for display purposes)
const firebaseConfig = {
  apiKey: "AIzaSyDHSa-yfjy_tzthV0xJJ-EVZihys3a4KAk",
  authDomain: "learn-firebase-126f5.firebaseapp.com",
  projectId: "learn-firebase-126f5",
  storageBucket: "learn-firebase-126f5.appspot.com",
  messagingSenderId: "165800026581",
  appId: "1:165800026581:web:099a8ed465c244a1f35d5c"
};

// Custom SVG Icons
const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// Animation placeholder component
const AnimationPlaceholder = () => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '100%' 
  }}>
    <div style={{ position: 'relative' }}>
      <div style={{
        width: '128px',
        height: '128px',
        border: '4px solid #dbeafe',
        borderTop: '4px solid #3b82f6',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          background: 'linear-gradient(45deg, #60a5fa, #a855f7)',
          borderRadius: '50%',
          opacity: '0.8',
          animation: 'pulse 2s ease-in-out infinite'
        }}></div>
      </div>
    </div>
  </div>
);

// Login/Signup Component
const Login = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAuthAction = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    setError('');

    // Simulate authentication delay
    setTimeout(() => {
      if (password.length < 6) {
        setError('Password should be at least 6 characters');
        setIsLoading(false);
        return;
      }

      if (!email.includes('@')) {
        setError('Please enter a valid email address');
        setIsLoading(false);
        return;
      }

      // Simulate successful authentication
      const user = {
        email: email,
        displayName: email.split('@')[0],
        uid: Math.random().toString(36).substr(2, 9)
      };
      
      onLogin(user);
      setIsLoading(false);
    }, 1500);
  };

  const handleProviderLogin = async (provider) => {
    if (isLoading) return;
    
    setIsLoading(true);
    setError('');
    
    // Simulate provider authentication
    setTimeout(() => {
      const user = {
        email: `user@${provider}.com`,
        displayName: `${provider} User`,
        uid: Math.random().toString(36).substr(2, 9)
      };
      
      onLogin(user);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAuthAction();
    }
  };

  const containerStyle = {
    display: 'flex',
    width: '100%',
    maxWidth: '900px',
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    overflow: 'hidden'
  };

  const animationPanelStyle = {
    flex: '1',
    background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    padding: '40px',
    display: 'none'
  };

  const formPanelStyle = {
    flex: '1',
    padding: '50px'
  };

  const headerStyle = {
    marginBottom: '32px'
  };

  const titleStyle = {
    fontSize: '2.25rem',
    fontWeight: '700',
    color: '#1a202c',
    marginBottom: '8px',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const subtitleStyle = {
    fontSize: '1rem',
    color: '#718096',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const inputStyle = {
    width: '100%',
    padding: '14px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '1rem',
    color: '#2d3748',
    outline: 'none',
    transition: 'all 0.2s ease-in-out',
    marginBottom: '16px',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const buttonStyle = {
    width: '100%',
    padding: '16px',
    border: 'none',
    borderRadius: '8px',
    background: 'linear-gradient(90deg, #4F46E5, #818CF8)',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: isLoading ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    opacity: isLoading ? '0.5' : '1',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const errorStyle = {
    color: '#e53e3e',
    fontSize: '0.875rem',
    textAlign: 'center',
    marginTop: '16px',
    padding: '12px',
    backgroundColor: '#fed7d7',
    borderRadius: '8px',
    border: '1px solid #feb2b2',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const separatorStyle = {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#a0aec0',
    margin: '32px 0',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const separatorLineStyle = {
    flex: '1',
    borderBottom: '1px solid #e2e8f0'
  };

  const socialContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px'
  };

  const socialButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '14px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: 'white',
    fontSize: '0.9rem',
    fontWeight: '500',
    cursor: isLoading ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    opacity: isLoading ? '0.5' : '1',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const toggleStyle = {
    marginTop: '32px',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#4a5568',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const toggleButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#4F46E5',
    fontWeight: '600',
    cursor: isLoading ? 'not-allowed' : 'pointer',
    padding: '0 4px',
    opacity: isLoading ? '0.5' : '1',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const infoStyle = {
    marginTop: '24px',
    padding: '12px',
    backgroundColor: '#ebf8ff',
    borderRadius: '8px',
    border: '1px solid #bee3f8',
    fontSize: '0.75rem',
    textAlign: 'center',
    color: '#2c5282',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  // Media query for mobile
  const isMobile = window.innerWidth < 768;

  return (
    <div style={{
      ...containerStyle,
      flexDirection: isMobile ? 'column' : 'row',
      maxWidth: isMobile ? '450px' : '900px',
      margin: isMobile ? '20px' : '0'
    }}>
      {!isMobile && (
        <div style={{...animationPanelStyle, display: 'flex'}}>
          <AnimationPlaceholder />
        </div>
      )}
      
      <div style={{
        ...formPanelStyle,
        padding: isMobile ? '40px' : '50px'
      }}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p style={subtitleStyle}>
            {isSignUp ? "Let's get started with something new!" : 'Sign in to continue.'}
          </p>
        </div>
        
        <div>
          <input
            type="email"
            style={inputStyle}
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={(e) => e.target.style.borderColor = '#4299e1'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
          />

          <input
            type="password"
            style={inputStyle}
            placeholder="Password (min 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={(e) => e.target.style.borderColor = '#4299e1'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
          />

          <button 
            onClick={handleAuthAction}
            style={buttonStyle}
            disabled={isLoading}
            onMouseOver={(e) => !isLoading && (e.target.style.transform = 'translateY(-2px)')}
            onMouseOut={(e) => !isLoading && (e.target.style.transform = 'translateY(0)')}
          >
            {isLoading ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  border: '2px solid white',
                  borderTop: '2px solid transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  marginRight: '8px'
                }}></div>
                Processing...
              </div>
            ) : (
              isSignUp ? 'Sign Up' : 'Sign In'
            )}
          </button>

          {error && (
            <div style={errorStyle}>
              {error}
            </div>
          )}
        </div>

        <div style={separatorStyle}>
          <div style={separatorLineStyle}></div>
          <span style={{ padding: '0 16px' }}>Or continue with</span>
          <div style={separatorLineStyle}></div>
        </div>

        <div style={socialContainerStyle}>
          <button 
            style={socialButtonStyle}
            onClick={() => handleProviderLogin('google')}
            disabled={isLoading}
            onMouseOver={(e) => !isLoading && (e.target.style.backgroundColor = '#f7fafc')}
            onMouseOut={(e) => !isLoading && (e.target.style.backgroundColor = 'white')}
          >
            <GoogleIcon />
            <span>Google</span>
          </button>
          
          <button 
            style={socialButtonStyle}
            onClick={() => handleProviderLogin('facebook')}
            disabled={isLoading}
            onMouseOver={(e) => !isLoading && (e.target.style.backgroundColor = '#f7fafc')}
            onMouseOut={(e) => !isLoading && (e.target.style.backgroundColor = 'white')}
          >
            <FacebookIcon />
            <span>Facebook</span>
          </button>
        </div>
        
        <div style={toggleStyle}>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <button 
            onClick={() => setIsSignUp(!isSignUp)}
            disabled={isLoading}
            style={toggleButtonStyle}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
        
        <div style={infoStyle}>
          💡 This is a simulated Firebase auth. Try any email and password (6+ chars)
        </div>
      </div>
    </div>
  );
};

// Home Page Component
const HomePage = ({ user, onLogout }) => {
  const displayName = user.displayName || user.email;

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  };

  const cardStyle = {
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '48px',
    borderRadius: '20px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    maxWidth: '400px',
    width: '100%'
  };

  const avatarStyle = {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(45deg, #3b82f6, #a855f7)',
    borderRadius: '50%',
    margin: '0 auto 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const titleStyle = {
    fontSize: '2.25rem',
    fontWeight: '700',
    color: '#1a202c',
    marginBottom: '8px',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const subtitleStyle = {
    color: '#718096',
    marginBottom: '8px',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const userIdStyle = {
    fontSize: '0.875rem',
    color: '#a0aec0',
    marginBottom: '24px',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const successBoxStyle = {
    backgroundColor: '#f0fff4',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #9ae6b4',
    marginBottom: '16px'
  };

  const configBoxStyle = {
    backgroundColor: '#f9fafb',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    marginBottom: '16px'
  };

  const logoutButtonStyle = {
    width: '100%',
    backgroundColor: '#ef4444',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={avatarStyle}>
          <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>
            {displayName.charAt(0).toUpperCase()}
          </span>
        </div>
        <h1 style={titleStyle}>Welcome Home!</h1>
        <p style={subtitleStyle}>
          You are logged in as: <strong style={{ color: '#1a202c' }}>{displayName}</strong>
        </p>
        <p style={userIdStyle}>User ID: {user.uid}</p>
        
        <div>
          <div style={successBoxStyle}>
            <p style={{ color: '#22543d', fontSize: '0.875rem', margin: '0' }}>
              ✅ Authentication successful! This simulates Firebase Auth behavior.
            </p>
          </div>
          
          <div style={configBoxStyle}>
            <p style={{ color: '#374151', fontSize: '0.875rem', fontWeight: '500', margin: '0 0 8px 0' }}>
              Firebase Config:
            </p>
            <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0', wordBreak: 'break-all' }}>
              Project ID: {firebaseConfig.projectId}
            </p>
          </div>
          
          <button 
            onClick={onLogout}
            style={logoutButtonStyle}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#dc2626';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#ef4444';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Add keyframe animations to the document
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 0.4; }
      }
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    `;
    document.head.appendChild(style);

    // Simulate checking for existing authentication
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.head.removeChild(style);
    };
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const loadingStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const loadingContentStyle = {
    textAlign: 'center'
  };

  const loadingSpinnerStyle = {
    width: '48px',
    height: '48px',
    border: '4px solid #dbeafe',
    borderTop: '4px solid #3b82f6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '0 auto 16px'
  };

  const loadingTextStyle = {
    color: '#4b5563',
    fontWeight: '500',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  };

  const appContainerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  };

  if (loading) {
    return (
      <div style={loadingStyle}>
        <div style={loadingContentStyle}>
          <div style={loadingSpinnerStyle}></div>
          <p style={loadingTextStyle}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={appContainerStyle}>
      {user ? (
        <HomePage user={user} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}