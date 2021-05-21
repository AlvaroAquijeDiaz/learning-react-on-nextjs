import { useState } from 'react';

const States = ({ placeholder }) => {
  // ------------ useState takes the initial value than will be changed afterwards
  const [name, setName] = useState('Alvaro');
  const [age, setAge] = useState(25);
  let [counter, setCounter] = useState(1);

  const clickFunct = () => {
    console.log(`Let's use hooks`);
    // TO change things we use STATES
    setName('luigi ');
    setAge(40);
    // the [1] fucntion in the array will take how to change the initial value
    setCounter(counter++);
  };
  return (
    <div>
      <p>
        {name} is {age} years old
      </p>
      <p>
        This is a counter = <span className="font-bold text-blue-700">{counter}</span>
      </p>
      <button
        className="rounded-lg border-2 p-1 border-indigo-500"
        onClick={(e) => {
          clickFunct();
        }}>
        Hooks
      </button>
    </div>
  );
};

export default States;
