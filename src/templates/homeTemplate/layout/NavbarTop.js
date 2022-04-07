import React from 'react';
import { useDispatch } from 'react-redux';

const HeaderHomeResponsi = () => {
    const dispatch=useDispatch()
    return (
      <div className='block lg:hidden'>
        <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100">
          <div className="container flex justify-between h-16 mx-auto">
            <a
              rel="noopener noreferrer"
              href="/#"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <img
              className='rounded-full'
              style={{ width: "50px", height: "50px" }}
              src="https://lh3.googleusercontent.com/-h4gyhGKHZRY/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmN0khqOptc5jjKyXvriR1zxoJGgQ/s128-c/photo.jpg"
              alt=""
            />
            </a>
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="/#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
                >
                  Link
                </a>
              </li>
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="/#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                >
                  Link
                </a>
              </li>
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="/#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                >
                  Link
                </a>
              </li>
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="/#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                >
                  Link
                </a>
              </li>
            </ul>
            <div className="items-center flex-shrink-0 hidden lg:flex">
              <button className="self-center px-8 py-3 rounded">Sign in</button>
              <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900">
                Sign up
              </button>
            </div>
            <button onClick={()=>{
                dispatch({
                    type:'TONGGLE',
                })
            }} className="p-4 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 dark:text-coolGray-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </header>
      </div>
    );
};

export default HeaderHomeResponsi;