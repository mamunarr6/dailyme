import { useState } from "react";

const AddHabitForm = ({ onAddHabit }) => {
  const [habit, setHabit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit.trim() === "") return;

    onAddHabit(habit);
    setHabit("");
  };

  return (
    <section className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 w-full max-w-lg mx-auto my-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 text-center">
        Add New Habit
      </h2>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter your habit..."
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none  dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#ddeedd] hover:bg-[#b4ccb4] text-gray-900 font-semibold cursor-pointer rounded-lg transition duration-200"
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default AddHabitForm;
