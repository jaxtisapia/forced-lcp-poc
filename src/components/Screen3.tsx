import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Screen3: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/screen1');
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
      backgroundColor: '#45b7d1',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{padding:"20px", fontSize: '5rem', marginBottom: '2rem' }}>
        final biggest on second screen
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        Final transition screen - cycling back to start
      </p>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: '1rem 2rem',
        borderRadius: '10px',
        fontSize: '1.2rem'
      }}>
        Auto-advancing back to Screen 1 in 4 seconds...
      </div>
      <div style={{
        marginTop: '2rem',
        fontSize: '1rem',
        opacity: 0.8
      }}>
        Continuous loop for testing
      </div>
    </div>
  );
};

export default Screen3;