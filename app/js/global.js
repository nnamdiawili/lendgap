(function (window, document) {

  var bookmarksToggleInput = document.querySelector('#bookmarks-toggle-input');
  var sidebarToggles = document.querySelectorAll('#bookmarks-toggle-input');


  function handleMarketPlaceBookmarksToggle() {
    bookmarksToggleInput.addEventListener('change', function () {
      var nonBookmarks = document.querySelectorAll('.marketplace .loan-card:not(.bookmark)');
      Array.prototype.forEach.call(nonBookmarks, function (nonBookmark) {
        nonBookmark.closest('.grid-item').classList.toggle('hidden');
      });
    });
  }

  function handleSidebarToggling() {
    function openSidebar(e) {
      var sidebarContainer = e.currentTarget.closest('.sidebar-container');
      sidebarContainer.classList.toggle('sidebar-opened');
      var sidebarPusher = sidebarContainer.querySelector('.sidebar-pusher');
      sidebarPusher.addEventListener('click', closeSidebar);
    }
    function closeSidebar(e) {
      e.currentTarget.closest('.sidebar-container').classList.remove('sidebar-opened');
      e.currentTarget.removeEventListener('click', closeSidebar);
    }
    var sidebarToggles = document.querySelectorAll('.sidebar-toggle');
    Array.prototype.forEach.call(sidebarToggles, function (sidebarToggle) {
      sidebarToggle.addEventListener('click', openSidebar);
    });
  }

  handleMarketPlaceBookmarksToggle();
  handleSidebarToggling();

})(window, document);