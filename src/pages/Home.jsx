import { useState } from "react";
import AddHabitForm from "../components/AddHabitForm";

const Home = () => {
  const [habits, setHabits] = useState([]);

  const addHabit = (newHabit) => {
    setHabits([...habits, { id: Date.now(), name: newHabit, done: false }]);
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
        <div className="xl:w-[1280px] lg:w-[1080px] mx-auto"></div>
      </section>

      {/* Analytics Section */}
      <section className="py-12">
        <div className="xl:w-[1280px] lg:w-[1080px] mx-auto"></div>
      </section>
    </>
  );
};

export default Home;
