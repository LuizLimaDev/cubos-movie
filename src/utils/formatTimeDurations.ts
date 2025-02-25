export default function formatTimeDuration(time: number) {
  const hours = Math.floor(time / 60); // Get hours
  const minutes = time % 60; // Get remaining minutes

  return `${hours}h${hours !== 1 ? "s" : ""} ${minutes}m`;
}
