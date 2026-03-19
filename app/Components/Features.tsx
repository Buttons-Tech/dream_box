const Features = () => {
  const features = [
    { title: "Global Curriculum", desc: "Learning standards that align with international tech and academic benchmarks." },
    { title: "Lifelong Education", desc: "From toddlers to adults, we provide growth paths for every family member." },
    { title: "Personalised Learning", desc: "Tailored educational journeys that adapt to each student's unique pace." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
        {features.map((f, i) => (
          <div key={i} className="p-8 rounded-2xl bg-blue-50 border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;