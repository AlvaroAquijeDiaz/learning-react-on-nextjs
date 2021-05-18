import Head from 'next/head';
import Navbar from '../components/Navbar';
export default function Home() {
  // We can write any valid JS beforehand <return>
  // const changable = document.getElementById('aP');

  // Objects cannot be used as variables inside < { } >
  let anObj = { name: 'alvaro', age: 18 };
  const link = 'https://www.youtube.com';
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Simple Blog App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="blog simple nextjs reactjs" />
      </Head>

      <Navbar />
      <main className="flex flex-col items-center justify-center flex-auto  px-20 text-center">
        <h1 className="text-3xl font-bold">Welcome to the BlogApp</h1>
        <a href={link} className="text-blue-700 font-bold">
          Go to Youtube
        </a>
      </main>
    </div>
  );
}
