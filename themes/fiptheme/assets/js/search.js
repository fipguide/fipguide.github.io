function searchBlur() {
  const searchContainer = document.querySelector('.pagefind-ui__form');

  searchContainer.addEventListener('focusout', function(event) {
    if (searchContainer.contains(event.relatedTarget)) {
      // Der Fokus ist innerhalb des Formulars auf ein anderes Element gesprungen
      console.log(event.relatedTarget);
      return;
    }

    const loadMore = document.querySelector('.pagefind-ui__button');

    if(loadMore) {
      console.log('Button');
      return;
    }

    // Der Fokus ist außerhalb des Formulars gesprungen
    const drawer = document.querySelector('.pagefind-ui__drawer');
    drawer.classList.add('pagefind-ui__hiddend');
    console.log('Das Formular oder ein Element darin hat den Fokus verloren');
  });
}

window.onload = function() {
  searchBlur();
};


