import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-lavender-500 hover:text-lavender-400">
          Shervan Shahparnia
        </Link>
        <div className="space-x-4">
          <Link href="#about" className="hover:text-lavender-400">About</Link>
          <Link href="#projects" className="hover:text-lavender-400">Projects</Link>
          <Link href="#skills" className="hover:text-lavender-400">Skills</Link>
          <Link href="#education" className="hover:text-lavender-400">Education</Link>
          <Link href="#contact" className="hover:text-lavender-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
