import React, { useEffect } from 'react';
import { initializeDatabase } from './db';
import Questionnaire from './questionnaire';

export default function App() {
  useEffect(() => {
    const initDB = async () => {
      await initializeDatabase();
    };
    initDB();
  }, []);

  return <Questionnaire />;
}
