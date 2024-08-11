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
      <div className="scroll-container">
        <div className="flex">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <img
                src={sponsor}
                alt={`Sponsor ${index + 1}`}
                className="sponsor-image h-8 md:h-24"
                style={{
                  animationDelay: `${index * 2}s`, // Stagger animation by 2s for each image
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
