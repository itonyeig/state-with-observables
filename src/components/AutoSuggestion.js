import React, { useEffect, useState } from "react";
import { concat, filter, interval, of, repeatWhen, scan, share, startWith, Subject, take, takeUntil } from "rxjs";
import "./styles.css";

const countDown$ = interval(250).pipe(
  startWith(5),
  scan((time) => time - 1),
  take(6)
).pipe(share());

const action$ = new Subject()

const snoozeAction$ = action$.pipe(filter(action => action === 'snooze'))
const dismissAction$ = action$.pipe(filter(action => action === 'dismiss'))

const snooze$ = concat(countDown$, of("Wake Up 🎉")).pipe(
  repeatWhen(() => snoozeAction$)
);

const observable$ = concat(snooze$.pipe(takeUntil(dismissAction$)),of('Have A Great Day'));

function AutoSuggestion() {
  const [state, setState] = useState();

  useEffect(() => {
    const sub = observable$.subscribe(setState);
    return () => sub.unsubscribe();
  }, []);
  return (
    <>
      <h1>Alarm Clock</h1>
      <div className="display">{state}</div>
      <button className="snooze" onClick={() => action$.next('snooze')}>Snooze</button>
      <button className="dismiss" onClick={() => action$.next('dismiss')}>Dismiss</button>
    </>
  );
}

export default AutoSuggestion;
