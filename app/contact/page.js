import Link from 'next/link';
import AnimatedIcon from '../../components/AnimatedIcon';

export const metadata = {
  title: 'Contact | Me Experiment',
};

export default function ContactPage() {
  return (
    <main className="page">
      <h1 className="page-header">Contact</h1>
      <div className="single-illustration">
        <AnimatedIcon src="/svg/contact.svg" svgId="contact" className="icon" />
      </div>
      <div className="page-links">
        <Link className="nav-link" href="/">
          ← Back home
        </Link>
      </div>
    </main>
  );
}
