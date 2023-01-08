import type { PlasmoContentScript, PlasmoGetStyle, PlasmoGetInlineAnchor } from "plasmo";
import App from './views/App';

import styleText from "data-text:./views/App.css";

export const config: PlasmoContentScript = {
    matches: ["https://www.servus.ca/blog/*", "http://www.servus.ca/blog/*"],
};

import type { PlasmoMountShadowHost } from "plasmo"

export const mountShadowHost: PlasmoMountShadowHost = ({
    shadowHost,
    anchor,
    observer
  }) => {
    anchor.element.prepend(shadowHost)
    observer.disconnect() // OPTIONAL DEMO: stop the observer as needed
  }

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => {
    const postContent = document.querySelector(".post-content")
    if (!postContent) return null;
    
    const children = postContent.children; 
    if (!children) return null; 
    
    const nodeList = Array.prototype.slice.call(children);
    let lastH2Index = nodeList.findLastIndex((node) => node.localName === "h2");

    return nodeList[lastH2Index - 1];
}

export const getStyle: PlasmoGetStyle = () => {
    const style = document.createElement("style");
    style.textContent = styleText;
    return style;
};

const CallToAction = () => {
    return <App/>
}

export default CallToAction