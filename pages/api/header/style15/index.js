import bg from "./background";
export default function handler(req, res) {
    const { title, subtitle, dark } = req.query;
  
    if (title === "" || title === undefined || title === null) {
      res.status(400).json({ message: "title parameter is missing." });
      return;
    }
  
    const isDark = dark == "true";
  
    res.setHeader("Content-Type", "image/svg+xml");
  
    res.status(200).send(`
    <svg viewBox="0 0 955 437" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
    <!-- style --> 
    <style>
    
    /* Other stuff */
    body {
      margin: 0;
    }
    
    svg {
      font-family: Verdana,Geneva,DejaVu Sans,sans-serif;
      position: absolute;
      width: 955px;
      height: 437px;
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
  
    <rect class="bg" id="bg" x="0" y="0" width="955" height="437" fill="${isDark?"#000000":"#ffffff"}"/>
  
    ${bg}
  
    <!-- Text -->
    <text text-anchor="middle"
          x="50%"
          y="50%"
          dy=".35em"
          class="title"
          >
      ${title}
    </text>
  
    <text text-anchor="middle"
      x="50%"
      y="60%"
      class="subtitle"
    >
      ${subtitle || ""}
    </text>
  </svg>
    `);
  }
  