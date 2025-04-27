import Document, { Head, Html, Main, NextScript } from "next/document";
import { Analytics } from '@vercel/analytics/next';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="All photos taken personally with an iPhone 14 Pro, showcasing unique perspectives and vibrant details."
          />
          <meta
            property="og:description"
            content="All photos taken personally with an iPhone 14 Pro, showcasing unique perspectives and vibrant details."
          />
          <meta property="og:title" content="showcasing unique perspectives and vibrant details." />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="showcasing unique perspectives and vibrant details." />
          <meta
            name="twitter:description"
            content="All photos taken personally with an iPhone 14 Pro, showcasing unique perspectives and vibrant details."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
