import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Readme Styles Generator</title>
        <meta name="description" content="Readme Styles generator." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="https://readme-styles.vercel.app/api/header/generate name" width="100%" alt="img" />
      </main>
    </div>
  );
}
