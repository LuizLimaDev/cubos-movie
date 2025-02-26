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
          strokeWidth="2"
        ></circle>

        {/* <!-- Progress Circle --> */}
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-cm_yellow dark:text-cm_yellow"
          strokeWidth="2"
          strokeDasharray="100"
          strokeDashoffset={(Number(percentage) - 100).toString()}
        ></circle>
      </svg>

      {/* <!-- Percentage Text --> */}
      <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <span className="text-center font-montserrat text-xl font-semibold text-cm_yellow dark:text-cm_yellow">
          {percentage}
          <span className="text-xs text-mauveDark-12">%</span>
        </span>
      </div>
    </div>
  );
}
