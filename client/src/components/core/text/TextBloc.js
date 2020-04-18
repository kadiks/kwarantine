import React from 'react';

const TextBloc = ({ title, children }) => {
  return (
    <article className="row mb-5 mt-5">
      <div className="col-12 offset-md-2 col-md-9">
        <h2 className="font-title">{title}</h2>
        {children}
      </div>
    </article>
  );
};

export default TextBloc;
