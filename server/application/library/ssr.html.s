<?js setResponseHeaders({'content-type': 'text/html; charset=utf8'}) ?>
<!doctype html>
<html>
<head>
<?js if(__IS_DEV__) { ?>
<base href='http://127.0.0.1:3000' />
<?js } ?>
　<link rel="icon" sizes="192x192" href="https://static.wixstatic.com/media/76c6d4_0c74fcd6a036487891bb260ec873b25a%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/76c6d4_0c74fcd6a036487891bb260ec873b25a%7Emv2.png" type="image/png"/>
　<link rel="shortcut icon" href="https://static.wixstatic.com/media/76c6d4_0c74fcd6a036487891bb260ec873b25a%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/76c6d4_0c74fcd6a036487891bb260ec873b25a%7Emv2.png" type="image/png"/>
　<link rel="apple-touch-icon" href="https://static.wixstatic.com/media/76c6d4_0c74fcd6a036487891bb260ec873b25a%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/76c6d4_0c74fcd6a036487891bb260ec873b25a%7Emv2.png" type="image/png"/>

<title>NAVIC 株式会社ナヴィック｜自動車用品の通販・卸販売・外注取付</title>

<meta name="description" content="株式会社ナヴィック公式サイトです。
自動車用品通販/車用品の卸販売・取付/土木用品のレンタル/車用品の貿易/健康食品の通販など様々な事業を手掛けております。"/>

<link rel="canonical" href="https://www.navic.cc"/>

<meta property="og:title" content="NAVIC 株式会社ナヴィック｜自動車用品の通販・卸販売・外注取付"/>
<meta property="og:description" content="株式会社ナヴィック公式サイトです。
自動車用品通販/車用品の卸販売・取付/土木用品のレンタル/車用品の貿易/健康食品の通販など様々な事業を手掛けております。"/>
<meta property="og:url" content="https://www.navic.cc"/>
<meta property="og:site_name" content="NAVIC 株式会社ナヴィック"/>
<meta property="og:type" content="website"/>

<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="NAVIC 株式会社ナヴィック｜自動車用品の通販・卸販売・外注取付"/>
<meta name="twitter:description" content="株式会社ナヴィック公式サイトです。
自動車用品通販/車用品の卸販売・取付/土木用品のレンタル/車用品の貿易/健康食品の通販など様々な事業を手掛けております。"/>

<link rel="alternate" href="https://www.navic.cc/blog-feed.xml" type="application/rss+xml" title="NAVIC 株式会社ナヴィック - RSS"/>

<meta name="format-detection" content="telephone=no">

  <base target='_blank' />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no,maximum-scale=1.0,viewport-fit=cover" />
  <meta charset=utf8 />
  <?js for(let css_link of css) { ?>
    <link href='<?js echo(css_link) ?>' crossorigin='anonymous' rel='stylesheet' type='text/css' />
  <?js } ?>
</head>
<body>
  <div class='app'>$${{ssrHTML}}</div>
  <script type='text/javascript'>
    window.__ssrData__=<?js echo(ssrData) ?>;
  </script>
  <?js for(let js_link of js) { ?>
    <script type='text/javascript' src='<?js echo(js_link) ?>'></script>
  <?js } ?>
</body>
</html>

<?js
echo(readEchoed().replace(/\s*[\n\r]+\s*|^\s*/g, '').replace('$${{ssrHTML}}', ssrHTML))
