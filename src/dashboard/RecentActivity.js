import { useState } from "react";
import { RefreshIcon } from "@heroicons/react/outline";

function RecentTab({ title, active, onClick }) {
  let itemClass = " text-gray-500";

  if (active) {
    itemClass = " bg-indigo-100 text-indigo-700";
  }

  return (
    <li className={"px-4 py-2 rounded-md truncate" + itemClass}>
      <button onClick={onClick} className="focus:outline-none">
        {title}
      </button>
    </li>
  );
}

function RecentItem(props) {
  let statusClass = "px-2 py-1 rounded text-xs font-medium";

  switch (props.status) {
    case "PENDING":
      statusClass += " bg-yellow-100 text-yellow-700";
      break;
    case "CANCELED":
      statusClass += " bg-red-100 text-red-700";
      break;
    default:
      statusClass += " bg-green-100 text-green-700";
      break;
  }

  return (
    <li className="flex flex-col">
      <a href="!#" className="px-5 py-3 hover:bg-gray-100">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-medium truncate">{props.title}</span>
            <span className="text-xs text-gray-500">{props.issueTime}</span>
          </div>
          <span className={statusClass}>{props.status}</span>
        </div>
        <div className="flex space-x-1 mt-1 text-sm">
          <span className="text-gray-500">by</span>
          <span className="text-gray-800">{props.by}</span>
        </div>
      </a>
    </li>
  );
}

function RecentActivity() {
  let currentTime = new Date().toLocaleString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const recents = [
    {
      title: "iPhone X",
      by: "Bella",
      issueTime: currentTime,
      status: "SUCCESS",
    },
    {
      title: "Macbook Pro 2021",
      by: "Milk",
      issueTime: currentTime,
      status: "PENDING",
    },
    {
      title: "Surface Pro",
      by: "Yuta",
      issueTime: currentTime,
      status: "CANCELED",
    },
    {
      title: "RC WPL-C24",
      by: "Mocha",
      issueTime: currentTime,
      status: "PENDING",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="rounded-md shadow flex flex-col bg-white">
      <nav className="px-5 py-4 border-b">
        <ul className="flex space-x-1 lg:space-x-2 overflow-clip">
          <RecentTab
            title="Today"
            active={active === 0}
            onClick={() => setActive(0)}
          />
          <RecentTab
            title="Last Week"
            active={active === 1}
            onClick={() => setActive(1)}
          />
          <RecentTab
            title="This Month"
            active={active === 2}
            onClick={() => setActive(2)}
          />
        </ul>
      </nav>
      <ul className="flex flex-col overflow-y-auto divide-y">
        {recents.map((d, i) => {
          return (
            <RecentItem
              key={i}
              title={d.title}
              by={d.by}
              issueTime={d.issueTime}
              status={d.status}
            />
          );
        })}
      </ul>
      <div className="px-5 py-4 bg-gray-50 rounded-b-md flex justify-between items-center">
        <span className="text-xs font-light text-gray-500">
          Refreshed since {currentTime}
        </span>
        <button className="focus:outline-none text-indigo-600">
          <RefreshIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default RecentActivity;
