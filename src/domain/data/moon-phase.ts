import { MoonData } from "../types/MoonData";
import SunCalc from 'suncalc';


// export const fetchMoonData = async (): Promise<AxiosResponse | Error> => {
//   axios.defaults.headers.get['Content-Type'] = 'application/json';
//   await axios.get('http://localhost:3001/moon-phase', {})
//   .then((response: AxiosResponse) => {
//     console.log('moonData in then', response.data);
//     return response.data;
//   })
//   .catch((error: Error) => {
//     console.error(`Axios request failed: ${error}`);
//     return error;
//   });
// }


export const fetchMoonData = () => {
  const rawMoonData = SunCalc.getMoonIllumination(new Date());
  const phase = getMoonPhase(rawMoonData.phase);
  const moonData: MoonData = {illuminated: Math.round(rawMoonData.fraction * 100), phase}
  return moonData;
}


  const getMoonPhase = (phaseAsFraction: number) => {
    let moonPhase;
    if (phaseAsFraction === 0) {
      moonPhase = "New Moon";
    } else if (phaseAsFraction === 0.25) {
      moonPhase = "First Quarter";
    } else if (phaseAsFraction === 0.5) {
      moonPhase = "Full Moon";
    } else if (phaseAsFraction === 0.75) {
      moonPhase = "Last Quarter";
    } else if (phaseAsFraction > 0 && phaseAsFraction < 0.25) {
      moonPhase = "Waxing Crescent";
    } else if (phaseAsFraction > 0.25 && phaseAsFraction < 0.5) {
      moonPhase = "Waxing Gibbous";
    } else if (phaseAsFraction > 0.5 && phaseAsFraction < 0.75) {
      moonPhase = "Waning Gibbous";
    } else if (phaseAsFraction > 0.75 && phaseAsFraction < 1) {
      moonPhase = "Waning Crescent";
    } else {
      throw(new Error('Invalid value'))
    }
    return moonPhase;
  }