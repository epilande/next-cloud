import Link from 'next/link';

const App = ({ children }) =>
  <main>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
    {children}
    <style jsx>{`
      a:not(:last-of-type) {
        display: inline-block;
        margin-right: 1rem;
        margin-bottom: 1.5rem;
      }
      main {
        margin-top: 10vh;
        text-align: center;
      }
    `}</style>
    <style global jsx>{`
      body {
        font-family: "Avenir Next", BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      }
    `}</style>

  </main>;

export default App;
