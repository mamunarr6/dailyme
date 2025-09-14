import { useEffect, useState } from "react";
import AddHabitForm from "../components/AddHabitForm";
import AnalyticsPanel from "../components/AnalyticsPanel";
import HabitList from "../components/HabitList";

const Home = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const savedHabits = localStorage.getItem("habits");
    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    }
  }, []);

  useEffect(() => {
    if (habits.length > 0) {
      localStorage.setItem("habits", JSON.stringify(habits));
    }
  }, [habits]);

  const addHabit = (newHabit) => {
    const updated = [
      ...habits,
      { id: Date.now(), name: newHabit, done: false },
    ];
    setHabits(updated);
  };

  const toggleHabit = (id) => {
    const updated = habits.map((habit) =>
      habit.id === id ? { ...habit, done: !habit.done } : habit
    );

    setHabits(updated);
  };

  const deleteHabit = (id) => {
    const updated = habits.filter((habit) => habit.id !== id);
    setHabits(updated);
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
          <AnalyticsPanel habits={habits} />
        </div>
      </section>
    </>
  );
};

export default Home;
