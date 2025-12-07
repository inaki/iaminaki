import AnimatedIcon from '../components/AnimatedIcon';

export default function HomePage() {
  return (
    <main className="home">
      <section className="hero">
        <AnimatedIcon src="/svg/me.svg" svgId="me" className="icon hero-illustration" />
        <h2 className="quote">
          I am programmer, I full stack code in python and javascript <br /> and exciting about my new passion,{' '}
          <span className="android">Android</span>
        </h2>
      </section>

      <section className="illustration-grid">
        <div className="illustration-tile">
          <AnimatedIcon src="/svg/work.svg" svgId="work" className="icon" navigateTo="/work" />
        </div>
        <div className="illustration-tile">
          <AnimatedIcon src="/svg/skills.svg" svgId="skills" className="icon" navigateTo="/skills" />
        </div>
        <div className="illustration-tile">
          <AnimatedIcon src="/svg/contact.svg" svgId="contact" className="icon" navigateTo="/contact" />
        </div>
      </section>
    </main>
  );
}
