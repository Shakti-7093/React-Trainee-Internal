/* eslint-disable react/display-name */
import { forwardRef, useRef, useImperativeHandle } from "react";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  // Expose the input ref to the parent component
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <input type="text" ref={inputRef} {...props} />;
});

export default Input;
