import Head from 'next/head';
import Navbar from '../components/Navbar';
import Homepage from '../components/Homepage';
import States from '../components/BlogOutput';
export default function Home() {
  // Objects cannot be used as variables inside < { } >
  let anObj = { name: 'alvaro', age: 18 };
  const link = 'https://www.youtube.com';
  return (
    <div className="min-h-screen bg-gradient-to-tr from-current bg-[#011120] to-purple-700">
      <Head>
        <title>Simple Blog App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="blog simple nextjs reactjs" />
      </Head>
      <States></States>
    </div>
  );
}
