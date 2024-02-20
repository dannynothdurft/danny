"use client";
import React, { useEffect } from "react";

function ShopPage() {
  useEffect(() => {
    function loadSpreadShopScript() {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://the-cryptobook.myspreadshop.de/shopfiles/shopclient/shopclient.nocache.js";
      document.body.appendChild(script);
    }

    loadSpreadShopScript();
  }, []);

  return (
    <div id="myShop" style={{ marginTop: "120px" }}>
      <a href="https://the-cryptobook.myspreadshop.de">the-cryptobook</a>
      <div
        dangerouslySetInnerHTML={{
          __html: `
        <script type="text/javascript">
          var spread_shop_config = {
            shopName: 'the-cryptobook',
            locale: 'de_DE',
            prefix: 'https://the-cryptobook.myspreadshop.de',
            baseId: 'myShop'
          };
        </script>
      `,
        }}
      />
    </div>
  );
}

export default ShopPage;
