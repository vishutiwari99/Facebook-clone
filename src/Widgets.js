import React from "react";
import "./Widgets.css";
function Widgets() {
  return (
    <div className="widgets">
      <iframe
        title="sidewidget"
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr&show_text=true&width=552&appId=3088610651364306&height=202"
        width="340"
        heigth="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;
