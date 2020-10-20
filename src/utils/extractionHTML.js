export default function (html) {
  const returnValue = {
    imgTag: [],
    pTag: {},
    pValue: []
  };
  const htmlDom = document.createElement("div");
  htmlDom.innerHTML = html;
  returnValue.pTag.__html = `${Array.from(htmlDom.querySelectorAll(
    "p"
  )).map(v => {
    returnValue.pValue.push(v.textContent)
    return (`<p>${v.innerHTML}</p>`)
  }).join("")}`;

  htmlDom
    .querySelectorAll("img")
    .forEach((v) => {
      const imgTag = document.createElement('img');
      imgTag.src = v.src
      returnValue.imgTag.push(v.src)
    });
  return returnValue;
}
