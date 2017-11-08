import React from 'react';

const HTMLPreview = (props) => {

  const addPreview = () => {
    return {__html: props.textDisplay};
  };

  return (
    <div className="html-field" dangerouslySetInnerHTML={addPreview()} />
  );
};

export default HTMLPreview;
