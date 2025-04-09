import donkey from "../assets/donkey.png";

export const Header = () => {
  return (
    <header className="bg-[#0015BC] text-white py-6 shadow-lg">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              <a
                href="/"
                className="text-white hover:text-[#C7CBFF] transition-colors"
              >
                NYC Mayor Picker 2025
              </a>
            </h1>
            <p className="text-[#C7CBFF] mt-1">
              Find your best match for the Democratic primary
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 ml-2">
              <img
                src={donkey}
                alt="Democratic Party Donkey"
                className="w-full h-full invert"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
