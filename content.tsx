import type { PlasmoContentScript, PlasmoGetStyle, PlasmoGetInlineAnchor } from "plasmo";
import Invitation from './views/invitation.jsx'

import styleText from "data-text:./content.scss";

export const config: PlasmoContentScript = {
    matches: ["https://www.servus.ca/blog/*", "http://www.servus.ca/blog/*"],
};

import type { PlasmoGetInlineAnchorList } from "plasmo"
 
export const getInlineAnchor: PlasmoGetInlineAnchor = async () => {
    const postContent = document.querySelector(".post-content")
    if (!postContent) return null;
    
    const children = postContent.children; 
    if (!children) return null; 
    
    const nodeList = Array.prototype.slice.call(children);
    return nodeList[0];

    // All this code sucks and caused an infinite loop somehow:
    // let indexed = nodeList.map((node, index) => ({node, index}));
    // let paragraphs = indexed.filter((node) => node.node.localName === "p");
    
    // let paragraphsWithParagraphSibling = paragraphs.filter((node) => node.index + 1 < nodeList.length && nodeList[node.index + 1].localName === "p");
    // let output = paragraphsWithParagraphSibling.map((node) => node.node);
    // return output[output.length - 1];
    // let lastH2Index = nodeList.findLastIndex((node) => node.localName === "h2");
    // if (lastH2Index === -1) return null;
    
    // console.log(lastH2Index);
    // return nodeList[lastH2Index];
}

export const getStyle: PlasmoGetStyle = () => {
    const style = document.createElement("style");
    style.textContent = styleText;
    return style;
};

const CallToAction = () => {
    return (
        <Invitation />
        // <div className="call-to-action">
        //         <div className="call-to-action__title">Get a quote for your financial planning</div>
        // </div>
    )
}

export default CallToAction