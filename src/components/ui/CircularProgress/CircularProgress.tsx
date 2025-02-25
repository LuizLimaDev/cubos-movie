interface Iprops {
  percentage: string;
}

export default function CircularProgress({ percentage }: Iprops) {
  return (
    <div className="size-40 relative">
      <svg
        className="size-full -rotate-90"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <!-- Background Circle --> */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-mauveDark-7 dark:text-neutral-700"
          stroke-width="2"
        ></circle>

        {/* <!-- Progress Circle --> */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="text-cm_yellow dark:text-cm_yellow stroke-current"
          stroke-width="2"
          stroke-dasharray="100"
          stroke-dashoffset={Number(percentage) - 100}
        ></circle>
      </svg>

      {/* <!-- Percentage Text --> */}
      <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <span className="text-cm_yellow dark:text-cm_yellow text-center font-montserrat text-xl font-semibold">
          {percentage}
          <span className="text-xs text-mauveDark-12">%</span>
        </span>
      </div>
    </div>
  );
}
