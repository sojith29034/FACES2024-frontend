const Sponsors = () => {
  const sponsors1 = [
    '/path/to/sponsor1.png',
    '/path/to/sponsor2.png',
    '/path/to/sponsor3.png',
    '/path/to/sponsor4.png',
    // Add more sponsor images here
  ];

  const sponsors2 = [
    '/path/to/sponsor5.png',
    '/path/to/sponsor6.png',
    '/path/to/sponsor7.png',
    '/path/to/sponsor8.png',
    // Add more sponsor images here
  ];

  return (
    <div className="bg-[#0E535F] py-4 overflow-hidden relative flex">
      <div className="scroll-container">
        <div className="scrolling-content1 flex justify-evenly w-full">
          {sponsors1.map((sponsor, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <img
                src={sponsor}
                alt={`Sponsor ${index + 1}`}
                className="sponsor-image h-8 md:h-24"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="scroll-container">
        <div className="scrolling-content2 flex justify-evenly w-full">
          {sponsors2.map((sponsor, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <img
                src={sponsor}
                alt={`Sponsor ${index + 1}`}
                className="sponsor-image h-8 md:h-24"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
