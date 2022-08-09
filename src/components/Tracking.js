import { useEffect } from "react";
import axios from 'axios';

const Tracking = () => {
    const getData = async() => {
    const res = await axios.get('https://geolocation-db.com/json/');
    if(res.data) {
      const d = res.data;
      const reqObj = {
         CapturedAt: new Date().toISOString(),
         IpAddress: d?.IPv4,
         City: d?.city,
      }    

    fetch("https://sheet.best/api/sheets/bae6e863-a266-442e-93fe-70cf1bedddca", { method: "POST", mode: "cors",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(reqObj),
      }).then((r) => r.json());

    }
    
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      getData();
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return null;
}

export default Tracking;
