import React from 'react';
import Link from 'next/link';
import { filters } from '../../data/index';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">My Portfolio</Link>
        </div>
        <div className="flex space-x-4">
          {filters.map((filter) => (
            <Link key={filter} href={`/${filter.toLowerCase()}`} className="text-white">
              {filter}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;