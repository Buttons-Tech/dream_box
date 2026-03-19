const Events = () => {
  const events = [
    { name: "Hour of Tech", date: "August 2026", color: "bg-blue-600" },
    { name: "Parents Fitness Day", date: "March 21st, 2026", color: "bg-green-600" },
    { name: "Easter Egg Hunt", date: "Easter Monday, 2026", color: "bg-pink-600" },
    { name: "Movie Day", date: "March 31st, 2026", color: "bg-purple-600" }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">Mark Your Calendar</h2>
        <div className="space-y-4">
          {events.map((ev, i) => (
            <div key={i} className="flex items-center bg-white p-6 rounded-xl shadow-sm border-l-8 border-l-blue-600">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900">{ev.name}</h4>
                <p className="text-gray-500">{ev.date}</p>
              </div>
              <button className="text-blue-600 font-semibold">Remind Me</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;