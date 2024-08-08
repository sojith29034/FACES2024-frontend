

const Sponsors = () => {
  const sponsors = [
    '/path/to/sponsor1.png',
    '/path/to/sponsor2.png',
    '/path/to/sponsor3.png',
    '/path/to/sponsor4.png',
    // Add more sponsor images here
  ];

  return (
    <div className="bg-[#0E535F] py-4">
      <div className="overflow-hidden">
        <div className="flex animate-marquee">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <img src={sponsor} alt={`Sponsor ${index + 1}`} className="h-8 md:h-24" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
