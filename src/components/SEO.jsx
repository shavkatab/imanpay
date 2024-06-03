import React from "react";
import Head from "next/head";

export default function SEO({ title }) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1  maximum-scale=1, user-scalable=0"
      />
      <meta charSet="utf-8" />
      <title>{title || "IMAN PAY"}</title>
      <meta name="description" content="IMAN" />
      <meta
        name="keywords"
        content="IMAN PAY - рассрочки для людей с убеждениями"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || "IMAN PAY"} key="ogtitle" />
      <meta property="og:description" content="IMAN" key="ogdesc" />
      <meta
        property="og:site_name"
        content={title || "IMAN PAY"}
        key="ogsitename"
      />
      <meta
        property="og:image"
        content="https://cdn.rasta.app/rasta/aef8208b-c6fc-4db9-878b-51544ab711be"
        key="ogimage"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title || "IMAN PAY"} />
      <meta name="twitter:description" content="IMAN" />
      <meta name="twitter:site" content={title || "IMAN PAY"} />
      <meta name="twitter:creator" content="IMAN" />
      <meta
        name="twitter:image"
        content="https://cdn.rasta.app/rasta/aef8208b-c6fc-4db9-878b-51544ab711be"
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
