import Template from "./template/Template";
import Dashboard from "./dashboard/Dashboard";
import Forms from "./forms/Forms";
import { Switch, Route, Redirect } from "react-router-dom";
import Tables from "./tables/Tables";

function App() {
  return (
    // <div className="md:grid md:grid-cols-3 md:gap-6 md:p-5">
    //   <div className="md:col-span-1"></div>
    //   <div className="md:col-span-2">
    //     <div className="p-4 bg-white shadow md:rounded-md">
    //       <label class="block text-sm font-medium text-gray-700">Website</label>
    //       <div className="mt-1 flex rounded-md shadow-sm">
    //         <span className="inline-flex items-center border border-r-0 rounded-none rounded-l-md px-3 text-gray-500 bg-gray-50 font-light">
    //           http://
    //         </span>
    //         <input
    //           type="text"
    //           className="block w-full border border-gray-300 rounded-none rounded-r-md font-light focus:ring-0 focus:border-indigo-500"
    //           placeholder="www.example.com"
    //         />
    //       </div>

    //       <div className="flex rounded-md mt-4">
    //         <input
    //           type="text"
    //           className="z-10 block w-full"
    //           placeholder="Type here..."
    //         />
    //         <a
    //           href="!#"
    //           className="z-0 inline-flex items-center border border-l-0 rounded-none rounded-r-md px-3 text-gray-500 bg-gray-100"
    //         >
    //           <EyeOffIcon className="w-5 h-5"/>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Template>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/forms">
          <Forms />
        </Route>
        <Route path="/tables">
          <Tables />
        </Route>
        <Redirect from="/" to="/dashboard" exact />
      </Switch>
    </Template>
  );
}

export default App;
