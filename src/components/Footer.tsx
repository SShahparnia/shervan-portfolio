const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Shervan Shahparnia. All rights reserved.</p>
        <p className="mt-2">
          Built with Next.js and Tailwind CSS. Inspired by Erik C.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          {/* Add social links here once available */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
