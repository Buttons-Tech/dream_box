import Image from "next/image";

const Academies = () => {
  const levels = [
    { name: "Early Years", age: "0-5 Years", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80" },
    { name: "Dreambox Junior", age: "6-12 Years", img: "https://images.unsplash.com/photo-1587654711464-3e30d1ca9335?q=80" },
    { name: "Dreambox Senior", age: "13-18 Years", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80" },
    { name: "Youth Internship", age: "19-30 Years", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80" },
    { name: "Adult Education", age: "30+ Years", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80" }
  ];

  return (
    <section id="academies" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Academies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {levels.map((lvl, i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden h-64">
              <Image src={lvl.img} alt={lvl.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-end">
                <h4 className="font-bold text-lg">{lvl.name}</h4>
                <p className="text-sm text-blue-300">{lvl.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academies;