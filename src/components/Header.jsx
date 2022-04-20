import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header({ myName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  return (
    <header className='py-6'>
      <div className='container text-xs lg:text-base flex justify-around md:justify-between items-center mx-auto px-4 md:px-8 lg:px-18 w-full'>
        <div className='text-xs md:text-base lg:text-xl font-bold text-pink-100'>
          {myName}
        </div>
        <div className='hidden md:flex space-x-12 items-center'>
          <NavLink to='/' className='text-pink-200'>
            About Me
          </NavLink>
          <NavLink to='/work'>My work</NavLink>
          <NavLink to='/resume'>Resume</NavLink>
          <NavLink to='/contact'>
            <button className='px-6 py-2 bg-pink-500 font-bold'>
              Contract me
            </button>
          </NavLink>
        </div>

        <div
          className=' cursor-pointer md:hidden z-50'
          onClick={menuToggleHandler}
        >
          <svg
            width='26'
            height='18'
            viewBox='0 0 26 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z'
              fill='white'
            />
          </svg>
        </div>
      </div>
      <div className='md:hidden'>
        <div
          className={`${
            menuOpen === true ? 'flex' : 'hidden'
          } absolute opacity-90 flex-col items-center self-end py-4 mt-5 space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-2xl bg-body z-50`}
        >
          <NavLink to='/' className='text-pink-200 font-bold'>
            About Me
          </NavLink>
          <NavLink to='/work' className='font-bold'>
            My work
          </NavLink>
          <NavLink to='/resume' className='font-bold'>
            Resume
          </NavLink>
          <NavLink to='/contact'>
            <button className='px-6 py-2 bg-pink-500 font-bold'>
              Contract me
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
export default Header;
