import { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import Dropdown from "./Dropdown";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LineChart,
  CanvasRenderer,
]);

const DashboardChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartInstance = echarts.init(chartRef.current);

    chartInstance.setOption({
      xAxis: {
        type: "category",
        data: ["A", "B", "C", "D", "E"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [10, 22, 28, 23, 19],
          type: "line",
          smooth: true,
          lineStyle: {
            color: "#27ae60",
            width: 5,
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(39, 174, 96, 0.4)",
                },
                {
                  offset: 1,
                  color: "rgba(39, 174, 96, 0)",
                },
              ],
            },
          },
          symbol: "circle",
          symbolSize: 8,
          itemStyle: {
            color: "#27ae60",
          },
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    });

    return () => {
      chartInstance.dispose();
    };
  }, []);

  return (
    <div className="rounded-xl bg-white shadow-lg">
      <header className="flex w-full flex-row items-center justify-between p-5">
        <h3 className="text-primarytext text-base font-semibold sm:text-lg">
          Financial Flow
        </h3>
        <Dropdown />
      </header>

      <div ref={chartRef} className="h-[400px] w-full" />
    </div>
  );
};

export default DashboardChart;
