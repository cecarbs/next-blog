import highlight from "highlight.js";
import { createRef, useEffect } from "react";
import { findDOMNode } from "react-dom";

const Highlight = ({ children, language, code }) => {
  // this ref will hold the actual HTML element
  // not using useRef because you're creating a new ref (new node)
  const codeRef = createRef();

  useEffect(() => {
    // providing a reference of the DOM node to highlightBlock
    highlight.highlightBlock(findDOMNode(codeRef.current));
  }, []);
  return (
    <pre>
      <code className={language} ref={codeRef}>
        {children}
      </code>
    </pre>
  );
};

export default Highlight;
