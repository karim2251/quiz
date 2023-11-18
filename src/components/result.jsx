import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link } from 'react-router-dom';

export default function Result({setQuiz}) {
    
    const navigate = useNavigate();

    setQuiz(false)

    const startQuiz = () => {
        navigate('/quiz');
        setQuiz(false);
      };

      const gotoHome = () => {
        navigate('/');
        setQuiz(true);
      };


  return (
    <div className='row'>
        <div className="col-md-6 results-container">
            <div className="results">

        <p class="nav-link links"><i class="bi bi-check-circle-fill nace_result"></i><span> 6/15</span></p>
        <p class="nav-link links"><i class="bi bi-x-circle-fill bad_result"></i> <span> 3/15</span></p>
        <p>SCORE: <span>66%</span></p>
        <p><i class="bi bi-x-lg bad_result"></i> <span>try again you must have 70%</span></p>
        <p><i class="bi bi-check-lg nace_result"></i> <span>congatulation</span></p>
        <button className="btn-quiz" onClick={gotoHome}>
        <Link className="btn-quiz-link" to="/"> Home </Link>
      </button>
    
        <button className="btn-quiz ms-2" onClick={startQuiz}>
        <Link className="btn-quiz-link" to="/quiz"> Try Again </Link>
      </button>
     
            </div>

        </div>
        <div className="col-md-6 results-container">

            <div className="results_of_quastions">

            <div class="quiz-question">
                    <p class="question">9. What does XML stand for?</p>
                    <ul class="options">
                        <li>A. Excellent Multiple Language</li>
                        <li>B. Explore Multiple Language</li>
                        <li>C. Extra Markup Language</li>
                        <li className='good'>D. Extensible Markup Language</li>
                    </ul>
                </div>

            <div class="quiz-question_1">
                    <p class="question">10. What does PHP stand for?</p>
                    <ul class="options">
                        <li className='good'>A. Strength Query Language</li>
                        <li>B. Stylesheet Query Language</li>
                        <li>C. Science Question Language</li>
                        <li>D. Structured Query Language</li>
                    </ul>
                </div>

                <div class="quiz-question">
                    <p class="question">11. What does HTML stand for?</p>
                    <ul class="options">
                        <li>A. Hyper Type Multi Language</li>
                        <li>B. Hyper Text Multiple Language</li>
                        <li className='good'>C. Hyper Text Markup Language</li>
                        <li>D. Home Text Multi Language</li>
                    </ul>
                </div>

                <div class="quiz-question_1">
                    <p class="question">13. What does CSS stand for?</p>
                    <ul class="options">
                        <li className='good'>A. Cascading Style Sheet</li>
                        <li>B. Cute Style Sheet</li>
                        <li>C. Computer Style Sheet</li>
                        <li>D. Codehal Style Sheet</li>
                    </ul>
                </div>

                <div class="quiz-question_1">
                    <p class="question">14. What does PHP stand for?</p>
                    <ul class="options">
                        <li className='good'>A. Hypertext Preprocessor</li>
                        <li>B. Hometext Programming</li>
                        <li>C. Hypertext Preprogramming</li>
                        <li>D. Programming Hypertext Preprocessor</li>
                    </ul>
                </div>

                <div class="quiz-question">
                    <p class="question">15. What does SQL stand for?</p>
                    <ul class="options">
                        <li>A. Strength Query Language</li>
                        <li>B. Stylesheet Query Language</li>
                        <li>C. Science Question Language</li>
                        <li className='good'>D. Structured Query Language</li>
                    </ul>
                </div>

                

        


            </div>

        </div>

    </div>
  )
}
