
const NavBar = () => {
  return (
    <header className="flex align-items justify-between container mx-auto py-10">
      <div className="font-semibold text-2xl">Trafalgar</div>
      <nav>
        <ul className="flex space-x-6 items-center">
          <NavLinkItem href="/" text="Home" />
          <NavLinkItem href="/find-a-doctor" text="Find a doctor" />
          <NavLinkItem href="/apps" text="Apps" />
          <NavLinkItem href="/testimonials" text="Testimonials" />
          <NavLinkItem href="/about" text="About us" />
        </ul>
      </nav>
    </header>
  );
};

const NavLinkItem = ({ href, text }: { href: string; text: string }) => {
  const isActive = href == "/";
  return (
    <li
      className={` ${
        isActive && "text-gray-900"
      } hover:text-gray-800 transition-all duration-300 text-gray-500 font-medium px-2`}
    >
      <a href={href}>{text}</a>
    </li>
  );
};

export default NavBar;
