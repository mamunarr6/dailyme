const HabitList = ({ habits, onToggleHabit, onDeleteHabit }) => {
  if (habits.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
        No habits added yet. Start by adding one!
      </p>
    );
  }

  return (
    <section className="w-full max-w-lg mx-auto my-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 text-center">
        Your Habits
      </h2>

      <ul className="space-y-3">
        {habits.map((habit) => (
          <li
            key={habit.id}
            className="flex justify-between items-center bg-white dark:bg-gray-800 
                       shadow rounded-lg px-4 py-2"
          >
            <span
              className={`${
                habit.done
                  ? "line-through text-green-600 dark:text-green-400"
                  : "text-gray-800 dark:text-gray-100"
              }`}
            >
              {habit.name}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => onToggleHabit(habit.id)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition duration-200 ${
                  habit.done
                    ? "bg-gray-400 text-white"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
              >
                {habit.done ? "Undo" : "Done"}
              </button>

              <button
                onClick={() => onDeleteHabit(habit.id)}
                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition duration-200"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HabitList;
