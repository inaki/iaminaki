import Link from 'next/link';
import AnimatedIcon from '../../components/AnimatedIcon';

export const metadata = {
  title: 'Work | Me Experiment',
};

export default function WorkPage() {
  return (
    <main className="page">
      <h1 className="page-header">Work</h1>
      <div className="single-illustration">
        <AnimatedIcon src="/svg/work.svg" svgId="work" className="icon" />
      </div>
      <div className="page-links">
        <Link className="nav-link" href="/">
          ← Back home
        </Link>
      </div>
    </main>
  );
}
