//************ THIS COMPONENT HAS BEEN DEPRECATED ***********

// For learning only

import States from './BlogOutput';
const Homepage = () => {
  const useClick = () => {
    console.log('This is a click function');
  };
  const parameterClick = (e, name) => {
    console.log(`Hello ${name} ${e.target}`);
    alert(`Look at the console ${name}`);
  };
  return (
    <div className="mt-2 border-t-2 py-4 border-b-2">
      <h2 className="text-left text-2xl font-bold">Homepage</h2>
      <div className="flex flex-row gap-5 my-5">
        <button className="rounded-lg border-2 p-1 border-indigo-500" onClick={useClick}>
          Click Me
        </button>
        <button
          className="rounded-lg border-2 p-1 border-indigo-500"
          // We need to use an anonymous funct to use parameters bc otherwise it will be called
          onClick={(e) => {
            // event arg will be inside every funct click
            parameterClick(e, 'Alvaro');
          }}>
          parameter click funct
        </button>
        <States />
      </div>
    </div>
  );
};

export default Homepage;
