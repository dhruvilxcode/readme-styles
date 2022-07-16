
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
    
    <defs>
        <filter id="f1" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="59" />
        </filter>
    </defs>

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
  
    <circle cx="897.5316455861885" cy="232.23264000905286" r="448.8" fill="#b8bedd" filter="url(#f1)" />
    <circle cx="666.3825575665561" cy="616.9293245641609" r="448.8" fill="#9c89b8" filter="url(#f1)" />
    <circle cx="217.6509119803677" cy="609.096684555108" r="448.8" fill="#757bc8" filter="url(#f1)" />
    <circle cx="0.068354413811619" cy="216.5673599909471" r="448.8" fill="#f0a6ca" filter="url(#f1)" />
    <circle cx="231.21744243344403" cy="-168.12932456416084" r="448.8" fill="#efc3e6" filter="url(#f1)" />
    <circle cx="679.9490880196323" cy="-160.29668455510804" r="448.8" fill="#f0e6ef" filter="url(#f1)" />
    
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
  