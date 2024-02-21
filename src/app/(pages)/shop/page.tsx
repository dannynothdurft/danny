"use clinet";
import React from "react";
import Script from "next/script";

function ShopPage() {
  const scriptContent = `
  var spread_shop_config = {
    shopName: 'the-cryptobook',
    locale: 'de_DE',
    prefix: 'https://the-cryptobook.myspreadshop.de',
    baseId: 'myShop'
};
  `;

  return (
    <>
      <div id="myShop">
        <a href="https://the-cryptobook.myspreadshop.de">the-cryptobook</a>
      </div>

      <script dangerouslySetInnerHTML={{ __html: scriptContent }} />

      <Script
        type="text/javascript"
        src="https://the-cryptobook.myspreadshop.de/shopfiles/shopclient/shopclient.nocache.js"
        strategy="beforeInteractive"
      />
    </>
  );
}

export default ShopPage;
