"use client";
// hooks/useIntersection.js
import { useState, useEffect } from "react";

const useIntersection = (options: any) => {
  const [elements, setElements] = useState<any>([]);
  const [entries, setEntries] = useState<any>([]);

  useEffect(() => {
    if (elements.length > 0) {
      const observer = new IntersectionObserver((observedEntries) => {
        setEntries(observedEntries);
      }, options);

      elements.forEach((element: any) => {
        if (element) {
          observer.observe(element);
        }
      });

      return () => {
        if (elements.length > 0) {
          elements.forEach((element: any) => {
            if (element) {
              observer.unobserve(element);
            }
          });
        }
      };
    }
  }, [elements, options]);

  return [setElements, entries];
};

export default useIntersection;
