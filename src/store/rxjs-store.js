import { from, interval } from "rxjs";
import { tap, mergeMap, delay, map } from "rxjs/operators";

export let numberObservale$ = from([1, 2, 3, 4, 5]).pipe(
  mergeMap((val) => from([val]).pipe(delay(1000 * val))),
  map((val) => val * val)
);


