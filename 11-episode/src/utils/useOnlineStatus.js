import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOffline = () => setIsOnline(false);
    const handleOnline = () => setIsOnline(true);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;


// import { useEffect, useState } from "react";

// const useOnlineStatus = () => {
//     const [isOnline, setIsOnline] = useState(true);

//     useEffect(() => {
//         debugger;

//         window.addEventListener('offline', () => {
//             setIsOnline(false);
//         });
        
//         window.addEventListener('online', () => {
//             setIsOnline(true);
//         })

//     }, [])
    
//     return isOnline;
// }

// export default useOnlineStatus;