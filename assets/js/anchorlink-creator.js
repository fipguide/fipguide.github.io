function initAnchorlinkCreator() {

  const headings = getHeadings(document.querySelector(".o-single"));
  const headingsArray = Array.from(headings);

  headingsArray.forEach((element) => {
    const anchorLink = createAnchorlink(element.id);
    element.append(anchorLink);
    element.insertAdjacentElement('afterend', anchorLink);

    initEventListener(anchorLink);
  });
}

function getHeadings(article) {
  if (article) {
     return article.getElementsByTagName("h2");
  }
}

function createAnchorlink(id) {
  const anchor = document.createElement('a');
  const anchorImg = document.createElement('img');
  anchor.classList.add('a-anchorlink');
  anchor.append(anchorImg);
  anchor.setAttribute('title', 'Link zu diesem Abschnitt kopieren');
  anchor.setAttribute('href', `#${id}`);
  anchorImg.setAttribute('src', "/favicon.ico");
  anchorImg.setAttribute('aria-hidden', "true");
  return anchor;
}

function initEventListener(link) {
  link.addEventListener('click', () => {
    navigator.clipboard.writeText(link.href).then(() => {
      alert("Text erfolgreich kopiert!");
    }).catch(err => {
      console.error("Fehler beim Kopieren des Textes:", err);
    });
  });
}


if (document.readyState === "interactive") {
  initAnchorlinkCreator();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    initAnchorlinkCreator();
  });
}