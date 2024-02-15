// Create a new div element
const newDiv = document.createElement('div');

// Remove the main#main node if it exists
const mainNode = document.querySelector('main#main');
if (mainNode) {
    mainNode.remove();
}

// Create a new h1 element
const newHeader = document.createElement('h1');

// Set the id of the h1 element to 'victory'
newHeader.id = 'victory';

// Set the text content of the h1 element
newHeader.textContent = 'Shane is the champion';

// Append the h1 element to the document body
document.body.appendChild(newHeader);

// Run the tests
describe("index.html", () => {
  describe("after index.js is processed", () => {
    it("no longer has DOM node 'main#main'", () => {
      expect(document.querySelector('main#main'), "Make sure you remove the <main> with id 'main'").to.not.exist;
    });

    it("has a 'newHeader' variable that points to an <h1> node", () => {
      expect(
        newHeader.nodeName,
        "Make sure you create an <h1> and assign it to the 'newHeader' variable"
      ).eql("H1");
    });

    it("the 'newHeader' variable that points to the <h1> node has an id of 'victory'", () => {
      expect(
        newHeader.id,
        "Make sure the id of your <h1> is set to 'victory'"
      ).eql("victory");
    });

    it("the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text \"Shane is the champion\" inside it", () => {
      expect(newHeader.innerHTML, "Make sure your <h1> with id 'victory' includes the text \"is the champion\" inside it").to.include("is the champion");
    });
  });
});