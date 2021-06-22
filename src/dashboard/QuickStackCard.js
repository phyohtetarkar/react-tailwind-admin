import PropTypes from "prop-types";

function QuickStackCard(props) {
  return (
    <div className="rounded-md shadow bg-white flex flex-col">
      <div className="flex space-x-4 items-center px-4 py-3">
        {props.children}
        <div className="flex flex-col space-y-1">
          <h3 className="font-lg text-gray-500">{props.title}</h3>
          <span className="font-semibold text-2xl text-gray-600">
            {props.statics}
          </span>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 rounded-b-md">
        <a href="!#" className="text-sm text-indigo-500 hover:text-indigo-700">View all</a>
      </div>
    </div>
  );
}

QuickStackCard.propTypes = {
  title: PropTypes.string.isRequired,
  statics: PropTypes.string.isRequired,
};

export default QuickStackCard;
