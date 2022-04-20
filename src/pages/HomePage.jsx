import profile from '../img/profile.jpg';
function HomePage() {
  return (
    <section>
      <div className='container px-6 mx-auto mb-auto'>
        <h2 className=' text-center font-bold my-12 text-2xl'>About me</h2>
        <img
          src={profile}
          alt='profile'
          className='w-48 h-auto rounded-full mx-auto'
        />
        <div className='pt-6 text-center md:p-8  md:text-left space-y-4 md:mx-10 lg:mx-20'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum,
            distinctio aspernatur eveniet fuga magni fugiat facere et? Rem minus
            aliquam a ipsam cumque quasi nisi excepturi dolorem, sequi provident
            eaque tempora nihil corporis ipsum, molestiae hic ab ullam. Officia
            quia delectus reprehenderit consequuntur. A dolores facere quam
            velit illum! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Illo illum, distinctio aspernatur eveniet fuga magni fugiat
            facere et? Rem minus aliquam a ipsam cumque quasi nisi excepturi
            dolorem, sequi provident eaque tempora nihil corporis ipsum,
            molestiae hic ab ullam. Officia quia delectus reprehenderit
            consequuntur. A dolores facere quam velit illum!
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
