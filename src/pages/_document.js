import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  const title = "buildspace India";
  const desc = "Bringing the world’s loved web network to India";
  const domain = "https://www.buildspacein.xyz";

  return (
    <Html>
      <Head>
        <meta name="title" content={title} />
        <meta name="description" content={desc} />

        <script
          defer
          data-domain={domain}
          src="https://plausible.io/js/plausible.js"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-93CXC93QW3`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-93CXC93QW3', {
                                page_path: window.location.pathname,
                                });
                            `,
          }}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={domain} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content="/cover-image.png" />
        <meta
          name="keywords"
          content="buildspace, web3, web3 meet, meet, genz, gen-z, buildspace india, buildspace-india, india, web3 india, web3-india, crypto, blockchain, education, coding, web, web network, decentralized"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={domain} />
        <meta name="twitter:site" content={domain} />
        <meta name="twitter:creator" content="@buildspaceIND" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content="/cover-image.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@100&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
