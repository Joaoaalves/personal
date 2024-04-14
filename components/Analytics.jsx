const GTAG = process.env.NEXT_PUBLIC_GA_ID;

const Analytics = () => {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${GTAG}');
          `
        }}
      />
    </>
  )

}

export default Analytics;