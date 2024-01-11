import React from 'react';
import SvgXTwitter from './icons/XTwitter';
import SvgDiscord from './icons/Discord';
import SvgTwitch from './icons/Twitch';
import SvgYoutube from './icons/Youtube';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center p-10 text-base-grey'>

      <nav className='flex flex-col items-center font-semibold gap-3'>
          <span className='flex-1 flex flex-col gap-0 text-center md:flex-row md:gap-6'>
            <a className='p-1'>Terms of Service</a>
            <a className='p-1'>Privacy policy</a>
            <a className='p-1'>Contact Us</a>
            <a className='p-1'>Cookie policy</a>
          </span>
          <span>
            <a className='p-1 font-light'>Update cookie preferences</a>
          </span>
      </nav>

      <div className='flex flex-row gap-0 p-6 text-2xl justify-center align-middle'>
          <a href='/' className='py-1 px-8 flex items-center'><SvgDiscord /></a>
          <a href='/' className='py-1 px-8 flex items-center'><SvgXTwitter /></a>
          <a href='/' className='py-1 px-8 flex items-center'><SvgTwitch /></a>
          <a href='/' className='py-1 px-8 flex items-center'><SvgYoutube /></a>
      </div>

      <aside>
        <p>© 2024 - Aprox Media Group, All right reserved</p>
      </aside>

    </footer>
  );
};

export default Footer;
