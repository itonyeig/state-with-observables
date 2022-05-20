import { useEffect } from "react";

const useIsiCustomObservable = (observable$, setter) => {
     useEffect(() => {
       const subscription = observable$.subscribe((result) => {
         console.log("result", result);
         setter(result);
       });
       return () => subscription.unsubscribe();
     }, [observable$, setter]);
}

export default useIsiCustomObservable;