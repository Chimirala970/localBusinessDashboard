const Spinner = () => (
  <div className="flex justify-center items-center my-4">
    <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500"></div>
    <span className="ml-2 text-blue-500">Loading...</span>
  </div>
);

export default Spinner;
