import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Screen2: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
      const timer = setTimeout(() => {
        navigate('/screen3');
      }, 4000);

      return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4ecdc4',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{padding:"10px", fontSize: '3rem', marginBottom: '1rem' }}>
        2nd bigger on second screen
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        This is the second transition screen
      </p>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: '1rem 2rem',
        borderRadius: '10px',
        fontSize: '1.2rem'
      }}>
        Auto-advancing to Screen 3 in 4 seconds...
      </div>
      <div style={{
        marginTop: '2rem',
        fontSize: '1rem',
        opacity: 0.8
      }}>
        Monitoring navigation performance
      </div>
    </div>
  );
};

export default Screen2;