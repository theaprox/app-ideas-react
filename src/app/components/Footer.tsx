import React from 'react';
import SvgXTwitter from './icons/XTwitter';
import SvgDiscord from './icons/Discord';
import SvgTwitch from './icons/Twitch';
import SvgYoutube from './icons/Youtube';

const Footer = () => {
  return (
    <footer className='tw-flex tw-flex-col tw-items-center tw-pt-6 tw-pb-4'>

      <nav className='tw-flex tw-flex-col tw-items-center tw-font-semibold tw-gap-3 tw-text-xs md:tw-text-base'>
          <span className='tw-flex-1 tw-flex tw-flex-col xs:tw-flex-row tw-gap-0 tw-justify-center tw-flex-wrap tw-text-center md:tw-gap-6'>
            <a className='tw-p-2'>Terms of Service</a>
            <a className='tw-p-2'>Privacy policy</a>
            <a className='tw-p-2'>Contact Us</a>
            <a className='tw-p-2'>Cookie policy</a>
          </span>
          <span>
            <a className='tw-p-2 tw-font-light'>Update cookie preferences</a>
          </span>
      </nav>

      <div className='tw-flex tw-flex-row tw-gap-0 tw-pt-6 tw-pb-6 tw-text-2xl tw-justify-center tw-align-middle'>
          <a href='/' className='tw-py-1 tw-px-8 tw-flex tw-items-center'><SvgDiscord /></a>
          <a href='/' className='tw-py-1 tw-px-8 tw-flex tw-items-center'><SvgXTwitter /></a>
          <a href='/' className='tw-py-1 tw-px-8 tw-flex tw-items-center'><SvgTwitch /></a>
          <a href='/' className='tw-py-1 tw-px-8 tw-flex tw-items-center'><SvgYoutube /></a>
      </div>

      <aside className=' tw-text-center tw-flex tw-flex-wrap tw-max-w-full '>
        <p>© 2024 - Aprox Media Group, All right reserved</p>
      </aside>

    </footer>
  );
};

export default Footer;
