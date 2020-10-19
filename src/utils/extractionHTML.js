export default function (html) {
  const returnValue = {
    imgTag: [],
    pTag: {},
  };
  const htmlDom = document.createElement("div");
  htmlDom.innerHTML = html;
  returnValue.pTag.__html = `${Array.from(htmlDom.querySelectorAll(
    "p"
  )).map(v => (`<p>${v.innerHTML}</p>`)).join("")}`;

  htmlDom
    .querySelectorAll("img")
    .forEach((v) => {
      const imgTag = document.createElement('img');
      imgTag.src = v.src
      returnValue.imgTag.push(v.src)
    });
  return returnValue;
}
