import { useState, useMemo } from "react";


export const useMousePosition = () => {
  const [ x, setX ] = useState(0);
  const [ y, setY ] = useState(0);

  const bind = useMemo(
    () => ({
      onMouseMove: (event: MouseEvent) => {
        setX(event.clientX);
        setY(event.clientY);
      }
    }),
    []
  );

  return [ x, y, bind ];
};

export default useMousePosition;