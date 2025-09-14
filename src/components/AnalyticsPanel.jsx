const AnalyticsPanel = ({ habits }) => {
  const total = habits.length;
  const completed = habits.filter((h) => h.done).length;
  const pending = total - completed;

  return (
    <section className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-4 w-full max-w-lg mx-auto my-6 text-center">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
        Analytics
      </h2>

      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-blue-600">{total}</span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            Total
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-green-600">{completed}</span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            Completed
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-yellow-600">{pending}</span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            Pending
          </span>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsPanel;
