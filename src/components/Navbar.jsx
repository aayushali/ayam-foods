const home = (
  <img
    src="/images/khanal-logo.png"
    alt="logo"
    width="75px"
    className="inline"
  />
);
const menulist = [
  "About Us",
  "Our Brands",
  "Our Team",
  home,
  "Sustainability",
  "Careers",
  "Contact Us",
];
const Navbar = () => {
  return (
    <>
      <section className="">
        <nav className="py-8 border-b-2 border-gray-500 bg-white">
          {menulist.map((menu) => (
            <a href="/" className="text-xl text-green-600 px-6" key={menu}>
              {menu}
            </a>
          ))}
        </nav>
      </section>
    </>
  );
};

export default Navbar;
