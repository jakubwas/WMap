import { EuropeData } from "../data/EuropeData";

// eslint-disable-next-line consistent-return
export const generateQuiz = (mode: string) => {
  const quiz: { name: string; capital: string }[] = [];
  let tmp;
  let modeData = null;
  switch (mode) {
    case "europe":
      modeData = EuropeData;
      break;
    default:
      return null;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 10; i++) {
    tmp = modeData[Math.floor(Math.random() * modeData.length)];
    if (!quiz.includes(tmp)) {
      quiz.push(tmp);
    } else {
      // eslint-disable-next-line no-plusplus
      i--;
    }
  }
  return quiz;
};
