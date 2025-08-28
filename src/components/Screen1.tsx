import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useForceUserInteraction} from "../hooks/useForceUserInteraction";
import {simulateUserClickUpperRightCorner} from "../utils";

const Screen1: React.FC = () => {
  const navigate = useNavigate();
  const {isForced}= useForceUserInteraction()

  useEffect(() => {
    const timer = setTimeout(() => {
        if (isForced) {
            simulateUserClickUpperRightCorner()
        }

      navigate('/screen2');
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
      backgroundColor: '#ff6b6b',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Screen 1
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        Welcome to the first transition screen
      </p>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: '1rem 2rem',
        borderRadius: '10px',
        fontSize: '1.2rem'
      }}>
        Auto-advancing to Screen 2 in 4 seconds...
      </div>
      <div style={{
        marginTop: '2rem',
        fontSize: '1rem',
        opacity: 0.8
      }}>
        Testing soft navigation transitions
      </div>
    </div>
  );
};

export default Screen1;