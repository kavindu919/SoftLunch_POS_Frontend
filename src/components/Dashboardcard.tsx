import type { JSX } from "react";

interface DashboardPageProps {
  icon: JSX.Element;
  mainHeader: string;
  value: number;
  unit: string;
  stats: string;
  percentage: string;
}

const Dashboardcard = ({
  icon,
  mainHeader,
  value,
  unit,
  stats,
  percentage,
}: DashboardPageProps) => {
  return (
    <article className="flex h-auto w-full flex-col gap-5 rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-xl sm:w-1/2 lg:w-1/3 xl:w-1/4">
      <header className="flex flex-col gap-5 border-b border-gray-200 pb-4">
        <div className="flex flex-row items-center gap-4">
          <div className="bg-shade rounded-full p-3">{icon}</div>
          <h3 className="text-primarytext text-xl font-medium sm:text-2xl md:text-2xl">
            {mainHeader}
          </h3>
        </div>

        <div className="flex flex-row items-end justify-between">
          <h2 className="text-primarytext text-3xl font-bold sm:text-4xl md:text-5xl">
            {value}
          </h2>
          <h4 className="text-secondarytext text-base font-medium sm:text-lg md:text-xl">
            {unit}
          </h4>
        </div>
      </header>

      <footer>
        <div className="flex flex-row items-center justify-between">
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600 sm:text-base">
            {stats}
          </span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600 sm:text-base">
            {percentage}
          </span>
        </div>
      </footer>
    </article>
  );
};

export default Dashboardcard;
