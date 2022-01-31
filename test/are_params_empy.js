const expect = require("chai").expect;
const { JSDOM } = require("jsdom");

describe("Propiedades NAME Y DESCRIPTION no están vacios", function () {
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

    it('Propiedad DESCRIPION no esta vacía', function () {
        let desc_dom = jsdom.window.document.querySelector("profile-card").getAttribute('description')
        expect(desc_dom).to.not.equal('');
    });
    it('Propiedad NOMBRE no está vacía', function () {
        let nam_dom = jsdom.window.document.querySelector("profile-card").getAttribute('name')
        expect(nam_dom).to.not.equal('');
    });
})