import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    //if user goes offline, set online status = false
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
    //if user comes online, set online status = true
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
  });

  return isOnline;
};

export default useOnlineStatus;
