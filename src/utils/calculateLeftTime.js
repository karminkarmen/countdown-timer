export const calculateLeftTime = (endTime) => {
  const now = new Date().getTime();
  const leftTime = endTime - now;

  const daysLeft = Math.floor(leftTime / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((leftTime % (1000 * 60)) / 1000);

  return { daysLeft, hoursLeft, minutesLeft, secondsLeft };
}
