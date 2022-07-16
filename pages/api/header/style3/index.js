
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
  
    <g transform="translate(-330 -330) scale(1)"><path xmlns="http://www.w3.org/2000/svg" d="M467,365Q378,449,284,443.5Q190,438,136.5,359.5Q83,281,117,169Q151,57,274.5,67.5Q398,78,477,179.5Q556,281,467,365Z" fill="#4f46e5" stroke="none" stroke-width="10"/></g>
  
    <g transform="translate(320 120) scale(1)"><path xmlns="http://www.w3.org/2000/svg" d="M457.5,367.5Q381,454,280.5,454.5Q180,455,141.5,368Q103,281,133.5,180Q164,79,269.5,98Q375,117,454.5,199Q534,281,457.5,367.5Z" fill="#4f46e5" stroke="none" stroke-width="10"/></g>
  
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
  