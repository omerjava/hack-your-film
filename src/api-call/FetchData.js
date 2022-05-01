import { ORIGIN } from "../data/config";

export const getData = async () => {
  const response = await fetch(`${ORIGIN}/getData`);
  const data = await response.json();
  return data;
};
