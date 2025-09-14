import { useEffect, useState } from "react";
import AddHabitForm from "../components/AddHabitForm";
import AnalyticsPanel from "../components/AnalyticsPanel";
import HabitList from "../components/HabitList";

const Home = () => {
  const [habits, setHabits] = useState([]);

  // at first load , habits will be load from localStorage
  useEffect(() => {
    const savedHabits = localStorage.getItem("habits");
    if (savedHabits) {
      setHabits(JSON.parse(savedHabits));
    }
  }, []);

  // when habits will be update , localStorage will be update
  useEffect(() => {
    if (habits.length > 0) {
      localStorage.setItem("habits", JSON.stringify(habits));
    }
  }, [habits]);

  // add new habit
  const addHabit = (newHabit) => {
    const updated = [
      ...habits,
      { id: Date.now().toString().slice(-6), name: newHabit, done: false },
    ];
    setHabits(updated);
  };

  // undo or done
  const toggleHabit = (id) => {
    const updated = habits.map((habit) =>
      habit.id === id ? { ...habit, done: !habit.done } : habit
    );

    setHabits(updated);
  };

  // delete habit with from localStorage
  const deleteHabit = (id) => {
    const updated = habits.filter((habit) => habit.id !== id);
    setHabits(updated);
    localStorage.setItem("habits", JSON.stringify(updated));
  };
  return (
    <>
      {/* Banner Section */}
      <section className="">
        <div className="xl:w-[1280px] lg:w-[1080px] mx-auto"></div>
      </section>

      {/* Add Habit Section */}
      <section className="py-5">
        <div className="xl:w-[1280px] lg:w-[1080px] mx-auto">
          <AddHabitForm onAddHabit={addHabit} />
        </div>
      </section>

      {/* Habit List Section */}
      <section className="py-5">
        <div className="xl:w-[1280px] lg:w-[1080px] mx-auto">
          <HabitList
            habits={habits}
            onToggleHabit={toggleHabit}
            onDeleteHabit={deleteHabit}
          />
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-5">
        <div className="xl:w-[1280px] lg:w-[1080px] mx-auto">
          <AnalyticsPanel habits={habits} />
        </div>
      </section>
    </>
  );
};

export default Home;
