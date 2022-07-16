
export default function handler(req, res) {
  const { title, subtitle, dark } = req.query;

  if (title === "" || title === undefined || title === null) {
    res.status(400).json({ message: "title parameter is missing." });
    return;
  }

  const isDark = dark == "true";

  res.setHeader("Content-Type", "image/svg+xml");

  res.status(200).send(`
  <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
  <!-- style --> 
  <style>
  
  /* Other stuff */
  body {
    margin: 0;
  }
  
  svg {
    font-family: Verdana,Geneva,DejaVu Sans,sans-serif;
    position: absolute;
    width: 600px;
    height: 300px;
  }

  .title {
    font-size: 3rem;
    font-weight: 800;
    text-transform: uppercase;
    fill: ${isDark?"#fff":"#000"};
  }
  .subtitle {
    font-size: 1rem;
    fill: ${isDark?"#fff":"#000"};
  }
  </style>

  <rect class="bg" id="bg" x="0" y="0" width="897.6" height="448.8" fill="${isDark?"#000000":"#ffffff"}"/>

  <g transform="translate(-380 70) scale(1)"><path d="M439.5,393Q410,505,275.5,513Q141,521,92,401Q43,281,117,203Q191,125,299,93.5Q407,62,438,171.5Q469,281,439.5,393Z" fill="none" stroke="#4f46e5" stroke-width="10"/></g>

  <g transform="translate(300 -350) scale(1)"><path d="M462,389Q405,497,298.5,465.5Q192,434,140.5,357.5Q89,281,118.5,166Q148,51,262.5,82Q377,113,448,197Q519,281,462,389Z" fill="none" stroke="#4f46e5" stroke-width="10"/></g>

  <!-- Text -->
  <text text-anchor="middle"
        x="50%"
        y="45%"
        dy=".35em"
        class="title"
        >
    ${title}
  </text>

  <text text-anchor="middle"
    x="50%"
    y="70%"
    class="subtitle"
  >
    ${subtitle || ""}
  </text>
</svg>
  `);
}
