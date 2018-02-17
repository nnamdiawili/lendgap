(function (window, document) {

  function handleLoanBookmarkToggle() {
    var loanBookmarkToggles = document.querySelectorAll('.loan-card .bookmark-toggle, .loan-modal .bookmark-toggle');
    Array.prototype.forEach.call(loanBookmarkToggles, function (bookmarkToggle) {
      bookmarkToggle.addEventListener('click', function (e) {
        e.currentTarget.closest('.loan-card, .loan-modal').classList.toggle('bookmark');
      });
    });
  }
  function handleMarketPlaceBookmarksFilter() {
    var bookmarksToggleInput = document.querySelector('#bookmarks-toggle-input');
    bookmarksToggleInput.addEventListener('change', function () {
      var nonBookmarks = document.querySelectorAll('.marketplace .loan-card:not(.bookmark)');
      Array.prototype.forEach.call(nonBookmarks, function (nonBookmark) {
        nonBookmark.closest('.grid-item').classList.toggle('hidden');
      });
    });
  }

  handleMarketPlaceBookmarksFilter();
  handleLoanBookmarkToggle();

})(window, document);