import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects.json';

function WorkPage() {
  return (
    <div className='container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
      <section className='w-full'>
        <h2 id='work' className='secondary-title'>
          My work
        </h2>
        <p className='section-paragraph'>
          I’ve had the pleasure of working with multiple Fortune 500 companies,
          designing and implementing both frontend and backend.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
          {projects.map(
            ({ title, imgName, description, gitUrl, deployedUrl }, index) => (
              <ProjectCard
                title={title}
                url={require(`../img/${imgName}.jpg`)}
                description={description}
                githubUrl={gitUrl}
                deployedUrl={deployedUrl}
                key={index}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
}

export default WorkPage;
