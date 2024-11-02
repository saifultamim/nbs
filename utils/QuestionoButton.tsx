'use client';
import React, { useState } from 'react';

type Question = {
  id: number;
  title: string;
  description: string;
};

const QuestionButton = ({ questions }: { questions: Question[] }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id)); //Toggle the active ID
    console.log("+++ ",id,activeId)
  };

  return (
    <div className="space-y-4 text-black">
      {questions.map((question) => (
        <div key={question.id} className='flex flex-col p-4 mb-6 shadow-lg shadow-slate-400 rounded-lg'>

          <div className='flex items-center text-sm lg:text-lg font-bold' onClick={() => handleClick(question.id)}>

            <button className=''>
              {question.title}
            </button>

            <button>
              {
                activeId === question.id ? 
                <p className=' ml-4'>-</p> : 
                <p className=' ml-4'>+</p>
              }
            </button>

          </div>
          
          {activeId === question.id && (
            <p className='p-4'>{question.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionButton;
