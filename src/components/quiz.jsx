import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Haed_quiz from './haed_quiz';
import Quastion_quiz from './quastion_quiz';
import Answers_quiz from './answers_quiz';


const Quiz = ({ setQuiz }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // When the Quiz component mounts, set quiz in progress to false
    return () => setQuiz(false);
  }, []);

  return (
    <>
    <Haed_quiz />
    <Quastion_quiz />
    <Answers_quiz /> 

  
   
    </>
  );
};

export default Quiz;