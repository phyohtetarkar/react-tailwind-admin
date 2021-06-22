import UserAvater from "../template/profile.png";
import { PhoneIcon, BriefcaseIcon } from "@heroicons/react/outline";

let defaultInputClass =
  "border w-full border-gray-300 rounded-md font-light focus:ring-0 focus:border-indigo-500 ";

let defaultButtonClass =
  "px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md";

function InputLabel({ title }) {
  return (
    <label className="block block font-medium text-gray-700 mb-1">
      {title}
    </label>
  );
}

function SimpleInput({ type, placeholder }) {
  return (
    <input
      type={type}
      className={defaultInputClass}
      placeholder={placeholder}
    />
  );
}

function SimpleInputWithDescription({ type, placeholder, desc }) {
  return (
    <div className="flex flex-col space-y-1">
      <SimpleInput type={type} placeholder={placeholder} />
      <span className="text-xs text-gray-400 italic text-light">{desc}</span>
    </div>
  );
}

function SimpleTextArea({ row, placeholder }) {
  return (
    <textarea
      rows={row ?? 3}
      defaultValue=""
      className={defaultInputClass}
      placeholder={placeholder}
    />
  );
}

function GroupedInputSelectStart({ type, placeholder, items }) {
  return (
    <div className="flex rounded-md">
      <select className="border border-r-0 border-gray-300 rounded-none rounded-l-md text-gray-700 bg-gray-100 font-light focus:ring-0 focus:border-gray-300">
        {items.map((e, i) => {
          return <option key={i}>{e}</option>;
        })}
      </select>
      <input
        type={type}
        className="block w-full border border-gray-300 rounded-none rounded-r-md font-light focus:ring-0 focus:border-indigo-500"
        placeholder={placeholder}
      />
    </div>
  );
}

function SimpleSelect({ items }) {
  return (
    <select className={defaultInputClass}>
      {items.map((e, i) => {
        return <option key={i}>{e}</option>;
      })}
    </select>
  );
}

function SimpleCheckbox({ title, desc }) {
  return (
    <div className="flex items-start space-x-2">
      <div className="flex items-center h-6">
        <input
          type="checkbox"
          className={
            "focus:ring-2 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          }
        />
      </div>
      <div className="flex flex-col">
        <label className="text-gray-800">{title}</label>
        {desc && <span className="text-xs text-gray-400">{desc}</span>}
      </div>
    </div>
  );
}

function Forms() {
  return (
    <div className="grid lg:grid-cols-5 gap-4">
      <div className="order-2 lg:order-1 lg:col-span-3">
        <div className="shadow rounded-md bg-white">
          <form>
            <div className="grid lg:grid-cols-2 gap-4 px-5 py-4">
              <h2 className="col-span-2 text-xl text-gray-600 font-semibold">
                Edit Information
              </h2>
              <div className="col-span-2 lg:col-span-1">
                <InputLabel title="First Name" />
                <SimpleInput type="text" placeholder="Enter firstname" />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <InputLabel title="Last Name" />
                <SimpleInput type="text" placeholder="Enter lastname" />
              </div>
              <div className="col-span-2">
                <InputLabel title="Email" />
                <SimpleInputWithDescription
                  type="text"
                  placeholder="example@domain.com"
                  desc="Your current email address."
                />
              </div>
              <div className="col-span-2">
                <InputLabel title="Phone Number" />
                <GroupedInputSelectStart
                  type="tel"
                  placeholder="9xxxxxxxx"
                  items={["+95", "+1", "+81"]}
                />
              </div>
              <div className="col-span-2">
                <InputLabel title="Work as" />
                <SimpleSelect items={["Developer", "Engineer", "Artist"]} />
              </div>
              <div className="col-span-2">
                <InputLabel title="Bio" />
                <SimpleTextArea placeholder="Write about yourself..." />
              </div>
              <div className="col-span-2 mb-4">
                <SimpleCheckbox
                  title="Notification"
                  desc="Get notified when updates."
                />
              </div>
            </div>
            <div className="flex flex-row-reverse bg-gray-50 rounded-b-md px-5 py-4">
              <input
                type="submit"
                className={defaultButtonClass}
                value="Save"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="order-1 lg:order-2 lg:col-span-2">
        <div className="shadow rounded-md bg-white">
          <form>
            <div className="flex flex-col items-center px-5 py-4">
              <h2 className="col-span-2 text-xl self-start text-gray-600 font-semibold">
                Profile
              </h2>
              <img className="rounded-full w-32 h-32" src={UserAvater} alt="" />
              <h4 className="text-lg font-medium mt-2">Mocha</h4>
              <div className="flex items-center text-gray-500">
                <PhoneIcon className="w-4 h-4" />
                <span className="text-sm ml-1">+9591234567</span>
              </div>
              <div className="flex items-center text-gray-500">
                <BriefcaseIcon className="w-4 h-4" />
                <span className="text-sm ml-1">Developer</span>
              </div>
              <p className="w-full text-sm text-gray-500 text-center italic mt-2 p-3 rounded border-2 border-dashed">
                Never loose hope. Stay strong always curious. Always fight for
                freedom.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forms;
