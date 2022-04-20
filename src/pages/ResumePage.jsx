function ResumePage() {
  return (
    <main className='container mx-auto text-center md:px-10'>
      <div className=''>
        <strong className='text-xl font-medium'>Contact Details</strong>
        <ul className='mt-2 mb-10'>
          <li className='px-2 mt-1'>
            <strong className='mr-1'>Phone </strong>
            <a href='tel:+821023456789' className='block'>
              +82 10 2345 6789
            </a>
          </li>
          <li className='px-2 mt-1'>
            <strong className='mr-1'>E-mail </strong>
            <a href='mailto:' className='block'>
              aspiringfe@helloworld.com
            </a>
          </li>
          <li className='px-2 mt-1'>
            <strong className='mr-1'>Location</strong>
            <span className='block'>Seoul, South Korea</span>
          </li>
        </ul>
        <strong className='text-xl font-medium '>Github Stats</strong>
        <ul className='flex w-full mt-2 mb-10'>
          <li className='px-2 mt-2 w-4/12 bg-pink-600 text-white text-center rounded-tl-lg rounded-bl-lg'>
            HTML
          </li>
          <li className='px-2 mt-2 w-4/12 bg-blue-600 text-white text-center'>
            CSS
          </li>
          <li className='px-2 mt-2 w-5/12 bg-yellow-500 text-white text-center rounded-tr-lg rounded-br-lg'>
            JS
          </li>
        </ul>

        <strong className='text-xl font-medium'>Skills</strong>
        <ul className='mt-2 mb-10'>
          <li className='px-2 mt-1'>HTML</li>
          <li className='px-2 mt-1'>CSS</li>
          <li className='px-2 mt-1'>JavaScript</li>
          <li className='px-2 mt-1'>React</li>
          <li className='px-2 mt-1'>Node.js</li>
        </ul>
        <strong className='text-xl font-medium'>Further Education</strong>
        <ul className='mt-2 mb-10'>
          <li className='px-2 mt-1'>Like Lion Frontend School</li>
          <li className='px-2 mt-1'>Udemy</li>
          <li className='px-2 mt-1'>Freecodecamp</li>
        </ul>

        <strong className='text-xl font-medium'>Currently learning</strong>
        <ul className='mt-2 mb-10'>
          <li className='px-2 mt-1'>About Web Accessibility</li>
          <li className='px-2 mt-1'>and User Experience</li>
        </ul>
        <strong className='text-xl font-medium'>Interests & Hobbies</strong>
        <ul className='mt-2'>
          <li className='px-2 mt-1'>Sustainability</li>
          <li className='px-2 mt-1'>New technologies</li>
          <li className='px-2 mt-1'>Blogging on dev.to</li>
          <li className='px-2 mt-1'>Investment</li>
          <li className='px-2 mt-1'>Travel</li>
        </ul>
      </div>
    </main>
  );
}

export default ResumePage;
