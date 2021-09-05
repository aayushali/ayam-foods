const menulist = [
  "About Us",
  "Our Brands",
  "Our Team",
  "Home",
  "Sustainability",
  "Careers",
  "Contact Us",
];
const Navbar = () => {
  return (
    <>
      <section className="">
        <nav className="py-12 border-b-2 border-gray-500 bg-white">
          {menulist.map((menu) => (
            <a href="/" className="text-xl text-green-600 px-6 ">
              {menu}
            </a>
          ))}
        </nav>
      </section>
    </>
  );
};

export default Navbar;
