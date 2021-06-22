import QuickStackCard from "./QuickStackCard";
import {
  UserGroupIcon,
  ShoppingCartIcon,
  ColorSwatchIcon,
  CubeIcon,
} from "@heroicons/react/outline";
import LineChart from "./LineChart";
import RecentActivity from "./RecentActivity";
import BarChart from "./BarChart";

function Dashboard() {
  const iconClass = "w-10 h-10 text-gray-400";
  return (
    <div className="flex flex-col space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <QuickStackCard title="Products" statics="22,222">
          <CubeIcon className={iconClass} />
        </QuickStackCard>
        <QuickStackCard title="Catgories" statics="22,222">
          <ColorSwatchIcon className={iconClass} />
        </QuickStackCard>
        <QuickStackCard title="Customers" statics="22,222">
          <UserGroupIcon className={iconClass} />
        </QuickStackCard>
        <QuickStackCard title="Sales" statics="22,222">
          <ShoppingCartIcon className={iconClass} />
        </QuickStackCard>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3 space-y-4">
          <LineChart />
          <BarChart/>
        </div>
        <div className="lg:col-span-2">
            <RecentActivity />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
