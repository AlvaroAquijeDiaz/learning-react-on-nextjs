import Head from 'next/head';
import Navbar from '../components/Navbar';
import Homepage from '../components/Homepage';
export default function Home() {
  // We can write any valid JS beforehand <return>
  // const changable = document.getElementById('aP');

  // Objects cannot be used as variables inside < { } >
  let anObj = { name: 'alvaro', age: 18 };
  const link = 'https://www.youtube.com';
  return (
    <div className="flex flex-col min-h-screen py-2 mx-44">
      <Head>
        <title>Simple Blog App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="blog simple nextjs reactjs" />
      </Head>

      <Navbar />

      <Homepage />
    </div>
  );
}
