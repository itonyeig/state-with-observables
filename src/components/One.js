import React, { useEffect, useState } from "react";
import { from } from "rxjs";
import { interval, delay, map, mergeMap, tap } from "rxjs/operators";
import useIsiCustomObservable from "../hooks/numbers-hook";
import { numberObservale$ } from "../store/rxjs-store";

let numberObservales = numberObservale$;
export default function One() {
  const [currentNumber, setCurrentNumber] = useState(0);
  //   custome observablehook
  useIsiCustomObservable(numberObservales, setCurrentNumber)
  /**
   * custom hook of code written bellow
  useEffect(() => {
    const subscription = numberObservale$.subscribe((result) => {
      console.log("result", result);
      setCurrentNumber(result);
    });
    return () => subscription.unsubscribe();
  }, []);
   */
  return <div>currentNumber is {currentNumber}</div>;
}
