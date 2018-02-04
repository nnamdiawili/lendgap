(function (window, document) {

  var bookmarksToggleInput = document.querySelector('#bookmarks-toggle-input');


  function handleMarketPlaceBookmarksToggle() {
    bookmarksToggleInput.addEventListener('change', function () {
      var nonBookmarks = document.querySelectorAll('.marketplace .loan-card:not(.bookmark)');
      Array.prototype.forEach.call(nonBookmarks, function (nonBookmark) {
        nonBookmark.closest('.grid-item').classList.toggle('hidden');
      });
    });
  }

  handleMarketPlaceBookmarksToggle();

})(window, document);