import { useState } from "react";
import AddHabitForm from "../components/AddHabitForm";
import HabitList from "../components/HabitList";

const Home = () => {
  const [habits, setHabits] = useState([]);

  const addHabit = (newHabit) => {
    setHabits([...habits, { id: Date.now(), name: newHabit, done: false }]);
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, done: !habit.done } : habit
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };
  return (
    <>
      {/* Banner Section */}
      <section className="py-12">
        <div className="xl:w-[1280px] lg:w-[1080px] mx-auto"></div>
      </section>

      {/* Add Habit Section */}
      <section className="py-12">
        <div className="xl:w-[1280px] lg:w-[1080px] mx-auto">
          <AddHabitForm onAddHabit={addHabit} />
        </div>
      </section>

      {/* Habit List Section */}
      <section className="py-12">
        <div className="xl:w-[1280px] lg:w-[1080px] mx-auto">
          <HabitList
            habits={habits}
            onToggleHabit={toggleHabit}
            onDeleteHabit={deleteHabit}
          />
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-12">
        <div className="xl:w-[1280px] lg:w-[1080px] mx-auto">
          {/* <AnalyticsPanel habits={habits} /> */}
        </div>
      </section>
    </>
  );
};

export default Home;
