import './globals.css';

export const metadata = {
  title: 'Me Experiment',
  description: 'Personal portfolio recreated with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300italic" />
      </head>
      <body>{children}</body>
    </html>
  );
}
