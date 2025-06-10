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
    <article className="flex h-auto w-full flex-col gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md sm:w-1/2 lg:w-1/4 xl:w-1/5">
      <header className="flex flex-col gap-3 border-b border-gray-200 pb-3">
        <div className="flex items-center gap-3">
          <div className="bg-shade text-primarytext flex h-10 w-10 items-center justify-center rounded-full p-2 text-xl">
            {icon}
          </div>
          <h3 className="text-primarytext text-base font-semibold sm:text-lg">
            {mainHeader}
          </h3>
        </div>

        <div className="flex items-end justify-between">
          <h2 className="text-primarytext text-2xl font-bold sm:text-3xl">
            {value}
          </h2>
          <h4 className="text-secondarytext text-sm font-medium sm:text-base">
            {unit}
          </h4>
        </div>
      </header>

      <footer>
        <div className="flex justify-between">
          <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 sm:text-sm">
            {stats}
          </span>
          <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 sm:text-sm">
            {percentage}
          </span>
        </div>
      </footer>
    </article>
  );
};

export default Dashboardcard;
