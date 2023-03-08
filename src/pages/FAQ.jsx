import React from "react";
import data from '../data/FAQ';
import Question from '../components/Question';

const FAQ = () => {
  return (
    <>
      <div className="px-8 my-48 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-300 mb-8 ">Frequently Asked Questions</h2>
        <div className="bg-gray-900 rounded-lg shadow-md p-8">
          <section className='info'>
            {data.map((question) => {
              return <Question key={question.id} {...question}/>
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export default FAQ;