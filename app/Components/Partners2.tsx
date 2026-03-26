import Image from 'next/image';

const Partners2 = () => {
  const countries = ["Nigeria", "Canada", "UK", "US", "China"];
  const partnerLogos = [
    '/img/navy.png',
    '/img/Richfield.png', // Add your other image names here
    '/img/Pampers.png',
    '/img/Berkley.png',
    '/img/STsaviurs.png'
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-500 font-semibold mb-8 uppercase tracking-widest text-sm">
          Trusted by Schools in
        </p>
        <div className="flex justify-around items-center flex-wrap gap-8 grayscale opacity-70 mb-16">
          {countries.map(country => (
            <span key={country} className="text-xl md:text-2xl font-bold text-gray-400 italic">
              {country}
            </span>
          ))}
        </div>

        {/* Scrolling Logo Marquee */}
        <div className="relative flex overflow-x-hidden">
          <div className="py-4 animate-marquee whitespace-nowrap flex items-center space-x-16">
            {partnerLogos.map((logo, i) => (
              <Image 
                key={i} 
                src={logo} 
                height={50}
                width={100}
                alt="Partner School" 
                className="h-16 w-auto object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition" 
              />
            ))}
            {/* Duplicate for seamless loop */}
            {partnerLogos.map((logo, i) => (
              <Image 
                key={`dup-${i}`} 
                src={logo} 
                height={50}
                width={100}
                alt="Partner School" 
                className="h-16 w-auto object-contain mix-blend-multiply opacity-80" 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners2;