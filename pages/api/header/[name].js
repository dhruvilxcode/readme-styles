// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const poppins = require("./customFont");

export default function handler(req, res) {
  const { name, subtitle, bgcolor, fcolor } = req.query;

  res.setHeader("Content-Type", "image/svg+xml");

  res.status(200).send(`
  <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
    <defs>
      ${poppins}
    </defs>

  <!-- style --> 
  <style>
  @import url(http://fonts.googleapis.com/css?family=Open+Sans:800);

  .text {
    // font: 5rem Open Sans, Impact, serif;
    // fill: url(#gr-simple);

    // font-family: 'Open Sans', sans-serif;
    font-family: 'Poppins-Black', sans-serif;
    font-size: 5rem;
    font-weight: 800;

    text-transform: uppercase;
    fill: #${fcolor || "FA6363"};
  }

  .subtitle {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    text-transform: uppercase;
    fill: #${fcolor || "#ffffff"};
  }
  
  /* Other stuff */
  body {
    margin: 0;
  }
  
  svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .fade-me {
    animation: fade 0.4s ease-out;
  }
  .slide-down {
    animation: slide-down-animation 0.4s ease-out;
  }

  @keyframes fade {
    0% {opacity:0;}
    100% {opacity: 1;}
  }
  @keyframes slide-down-animation {
    0% {transform: translateY(-10%);}
    100% {transform: translateY(0%);}
  }
  </style>

  <!-- Gradient -->
  <linearGradient id="gr-simple" x1="0" y1="0" x2="100%" y2="100%">
    <stop stop-color="hsl(50, 100%, 70%)" offset="10%"/>
    <stop stop-color="hsl(320, 100%, 50%)" offset="90%"/>
  </linearGradient>

  <rect width="100%" height="100%" rx="44" fill="#${bgcolor || "FFCBCB"}"/>
  
  <path class="fade-me" d="M45 -1.96701e-06C39.0905 -1.7087e-06 33.2389 1.16396 27.7792 3.42542C22.3196 5.68688 17.3588 9.00156 13.1802 13.1802C9.00155 17.3588 5.68688 22.3196 3.42542 27.7792C1.16396 33.2389 -2.48364e-06 39.0905 -1.96701e-06 45L45 45L45 -1.96701e-06Z" fill="white" fill-opacity="0.2"/>
  <path class="fade-me" d="M90 5.66238e-06C84.0905 5.92069e-06 78.2389 1.16397 72.7792 3.42543C67.3196 5.68689 62.3588 9.00157 58.1802 13.1802C54.0016 17.3588 50.6869 22.3196 48.4254 27.7793C46.164 33.2389 45 39.0905 45 45L90 45L90 5.66238e-06Z" fill="white" fill-opacity="0.2"/>
  <path class="fade-me" d="M-3.93402e-06 90C5.90948 90 11.7611 88.836 17.2208 86.5746C22.6804 84.3131 27.6412 80.9984 31.8198 76.8198C35.9984 72.6412 39.3131 67.6804 41.5746 62.2208C43.836 56.7611 45 50.9095 45 45L-1.96701e-06 45L-3.93402e-06 90Z" fill="white" fill-opacity="0.1" />
  <circle class="fade-me" cx="67.5" cy="67.5" r="22.5" fill="white" fill-opacity="0.1"/>

  <!-- Text -->
  <text text-anchor="middle"
        x="50%"
        y="45%"
        dy=".35em"
        class="text slide-down"
        >
    ${name}
  </text>

  <text text-anchor="middle"
    x="50%"
    y="70%"
    class="subtitle slide-down"
  >
    ${subtitle || ""}
  </text>
</svg>
  `);
}
