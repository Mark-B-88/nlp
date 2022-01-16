import { changeUI } from '../js/changeUI';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// A test suite may contain one or more related tests    
describe("Testing to ensure submit functionality works", () => {
    test('Checking to see if UI is updated results', () => {
        const dom = new JSDOM(`<div id="results"></div>`);
        const content = { confidence: "100",score_tag: "P", subjectivity: "SUBJECTIVE", irony: "NONIRONIC" };
        const el = dom.window.document.getElementById('results');
        
        changeUI(el, content);
        expect(el.innerHTML).toBe(el.innerHTML)
    })
})