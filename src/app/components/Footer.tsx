import React from 'react';
import SvgXTwitter from './icons/XTwitter';
import SvgDiscord from './icons/Discord';
import SvgTwitch from './icons/Twitch';
import SvgYoutube from './icons/Youtube';

const Footer = () => {
  return (
    <footer className='tw-flex tw-flex-col tw-items-center tw-p-10'>

      <nav className='tw-flex tw-flex-col tw-items-center tw-font-semibold tw-gap-3'>
          <span className='tw-flex-1 tw-flex tw-flex-col tw-gap-0 tw-text-center md:tw-flex-row md:tw-gap-6'>
            <a className='tw-p-1'>Terms of Service</a>
            <a className='tw-p-1'>Privacy policy</a>
            <a className='tw-p-1'>Contact Us</a>
            <a className='tw-p-1'>Cookie policy</a>
          </span>
          <span>
            <a className='tw-p-1 tw-font-light'>Update cookie preferences</a>
          </span>
      </nav>

      <div className='tw-flex tw-flex-row tw-gap-0 tw-pt-6 tw-pb-6 tw-text-2xl tw-justify-center tw-align-middle'>
          <a href='/' className='tw-py-1 tw-px-8 tw-flex tw-items-center'><SvgDiscord /></a>
          <a href='/' className='tw-py-1 tw-px-8 tw-flex tw-items-center'><SvgXTwitter /></a>
          <a href='/' className='tw-py-1 tw-px-8 tw-flex tw-items-center'><SvgTwitch /></a>
          <a href='/' className='tw-py-1 tw-px-8 tw-flex tw-items-center'><SvgYoutube /></a>
      </div>

      <aside>
        <p>© 2024 - Aprox Media Group, All right reserved</p>
      </aside>

    </footer>
  );
};

export default Footer;
