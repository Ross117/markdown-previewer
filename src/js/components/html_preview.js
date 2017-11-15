import React from 'react';

const HTMLPreview = (props) => {

  const addPreview = () => {
    return {__html: props.textDisplay};
  };

  return (
    <div className="html-field col-md-6" dangerouslySetInnerHTML={addPreview()} />
  );
};

export default HTMLPreview;
