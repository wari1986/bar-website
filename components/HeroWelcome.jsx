import Link from 'next/link';
import React from 'react'

const HeroWelcome = () => {
  return (
    <div className="container text-center py-4 space-y-4 md:w-1/3 md:mx-auto">
      <h1 className="text-3xl">Welcome</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
        similique maiores aliquid molestiae iste numquam accusantium quibusdam,
        quam hic temporibus, error harum provident consequatur consectetur.
        Earum recusandae hic dolore beatae?
      </p>
      <Link href='/contact'>
        <button className="border-2 boder-solid py-1 px-2">Book a Table</button>
      </Link>
    </div>
  );
}

export default HeroWelcome
