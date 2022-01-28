import React, { useEffect, useState, createContext } from "react";
import "./index.css";
function App() {
  const [x, setX] = useState(true);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            width: 500,
            height: 500,
          }}
          onMouseEnter={() => setX(false)}
          onMouseLeave={() => setX(true)}
        >
          <div style={{ overflow: "hidden" }}>
            <div className={x ? "pic bg1 ani1" : "pic bg1"}></div>
            <div className={x ? "pic bg2 ani2" : "pic bg2"}></div>
            <div className={x ? "pic bg3 ani3" : "pic bg3"}></div>
            <div className={x ? "pic bg4 ani4" : "pic bg4"}></div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div className={x ? "pic bg5 ani5" : "pic bg5"}></div>
            <div className={x ? "pic bg6 ani6" : "pic bg6"}></div>
            <div className={x ? "pic bg7 ani7" : "pic bg7"}></div>
            <div className={x ? "pic bg8 ani8" : "pic bg8"}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
