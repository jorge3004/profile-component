const expect = require("chai").expect;
const { JSDOM } = require("jsdom");

describe("Propiedades NAME y DESCRIPTION existen", function () {
    let jsdom;
    before(async function () {
        jsdom = await JSDOM.fromFile("./src/index.html", {
            resources: "usable",
            runScripts: "dangerously"
        });
        await new Promise(resolve =>
            jsdom.window.addEventListener("load", resolve)
        );
    });

    it('Propiedad NAME existe', function () {
        let nam_dom = jsdom.window.document.querySelector("profile-card").getAttribute('name')
        let nam_dom_type = typeof (nam_dom)
        expect(nam_dom_type).to.equal('string');
    });
    it('Propiedad DESCRIPTION existe', function () {
        let desc_dom = jsdom.window.document.querySelector("profile-card").getAttribute('description')
        let desc_dom_type = typeof (desc_dom)
        expect(desc_dom_type).to.equal('string');
    });
})