const Subjects = () => {
  const subjects = ["Mathematics", "English", "Languages", "Coding", "Robotics", "AI", "Science", "Early Years", "Special Education"];
  return (
    <section id="subjects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Explore Our Curriculum</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {subjects.map(sub => (
            <span key={sub} className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium hover:bg-blue-600 hover:text-white transition cursor-default">
              {sub}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;