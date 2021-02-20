module.exports = {
  init: (onReady) => {
    const link = document.createElement("link");
    link.onload = onReady;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "css/main.css";
    document.head.appendChild(link);
  },
  ControlPanel: require("./ControlPanel"),
  DataCanvas: require("./DataCanvas")
};