import { forwardRef, useEffect, useRef } from "react";

export const Checkbox = forwardRef(
  ({ indeterminate = false, type, ...inputProps }, ref) => {
    const internalRef = useRef(null);

    function synchronizeRefs(el) {
      internalRef.current = el;

      if (!ref) {
      } else if (typeof ref === "object") {
        ref.current = el;
      } else {
        ref(el);
      }
    }

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <input
        ref={synchronizeRefs}
        type="checkbox"
        {...inputProps}
        className="h-5 w-5 mr-2 accent-primary"
      />
    );
  }
);
