import Link from 'next/link';
import AnimatedIcon from '../../components/AnimatedIcon';

export const metadata = {
  title: 'Skills | Me Experiment',
};

export default function SkillsPage() {
  return (
    <main className="page">
      <h1 className="page-header">Skills</h1>
      <div className="single-illustration">
        <AnimatedIcon src="/svg/skills.svg" svgId="skills" className="icon" />
      </div>
      <div className="page-links">
        <Link className="nav-link" href="/">
          ← Back home
        </Link>
      </div>
    </main>
  );
}
