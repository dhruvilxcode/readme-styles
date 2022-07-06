// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { name } = req.query;
  // res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader('Content-Type', 'image/svg+xml');

  res.status(200).send(`
  <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
  <!-- style --> 
  <style>
  @import url(http://fonts.googleapis.com/css?family=Open+Sans:800);

  .text {
    font: 5rem Open Sans, Impact;
    text-transform: uppercase;
    fill: url(#gr-simple);
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
  </style>

  <!-- Gradient -->
  <linearGradient id="gr-simple" x1="0" y1="0" x2="100%" y2="100%">
    <stop stop-color="hsl(50, 100%, 70%)" offset="10%"/>
    <stop stop-color="hsl(320, 100%, 50%)" offset="90%"/>
  </linearGradient>

  <!-- Text -->
  <text text-anchor="middle"
        x="50%"
        y="50%"
        dy=".35em"
        class="text"
        >
    ${name}
  </text>
</svg>
  `);
}
