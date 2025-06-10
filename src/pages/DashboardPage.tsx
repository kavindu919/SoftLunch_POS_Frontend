import { IoTrendingUpOutline } from "react-icons/io5";
import Dashboardcard from "../components/Dashboardcard";
import { BsBoxSeam } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { IoCashOutline } from "react-icons/io5";
import DashboardChart from "../components/Dashboardchart";

const DashboardPage = () => {
  return (
    <>
      <article className="flex flex-row gap-4">
        <Dashboardcard
          icon={<IoTrendingUpOutline className="text-primarytext text-3xl" />}
          mainHeader="Total Sales Amount"
          value={12650}
          unit="LKR"
          stats="+ LKR 1543"
          percentage="12.2% ↑"
        />
        <Dashboardcard
          icon={<BsBoxSeam className="text-primarytext text-3xl" />}
          mainHeader="Total Product Sales"
          value={1250}
          unit="Items"
          stats="+ 125 Items"
          percentage="10% ↑"
        />
        <Dashboardcard
          icon={<GoPeople className="text-primarytext text-3xl" />}
          mainHeader="Total Customers"
          value={400}
          unit="Persons"
          stats="-5 Persons"
          percentage="02.2% "
        />
        <Dashboardcard
          icon={<IoCashOutline className="text-primarytext text-3xl" />}
          mainHeader="Net Profit"
          value={12650}
          unit="LKR"
          stats="+ LKR 1543"
          percentage="12.2% ↑"
        />
      </article>

      <DashboardChart />
    </>
  );
};

export default DashboardPage;
