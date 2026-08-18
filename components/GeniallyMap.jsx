"use client";

import Script from "next/script";

export default function GeniallyMap() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white p-2 shadow-soft">
      <div
        id="698d4b64630a20c52b6b2a11"
        className="genially-embed"
        style={{ margin: "0 auto", position: "relative", minHeight: 400, width: "100%" }}
      />
      <Script
        src="https://view.genially.com/static/embed/embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
