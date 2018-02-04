(function (window, document) {

  var hero = document.querySelector('.hero');
  var heroTitle = hero.querySelector('.hero .title');
  var heroGradient = document.querySelector('.hero .gradient');
  var navbar = document.querySelector('.lgp-navbar');
  var bookmarksToggleInput = document.querySelector('#bookmarks-toggle-input');


  var scrollTriggerOffset = 100, // offset to trigger scroll effects before the scroll position is reached.
      heroTitleScrollOffset;

  function getScrollOffsets() {
    heroTitleScrollOffset = hero.offsetTop + heroTitle.offsetTop - scrollTriggerOffset;
  }

  function handlePageScroll() {
    if (window.pageYOffset > heroTitleScrollOffset) {
      navbar.classList.add('pink-theme');
      navbar.classList.add('condensed');
    } else {
      navbar.classList.remove('pink-theme');
      navbar.classList.remove('condensed');
    }
  }

  function moveGradient(x, y, noTween) {
    if (noTween) {
      heroGradient.style.left = x;
      heroGradient.style.top = y;
    } else {
      TweenMax.to(heroGradient, 0.6, {css: {left: x, top: y}});
    }
  }

  function handleMarketPlaceBookmarksToggle() {
    bookmarksToggleInput.addEventListener('change', function () {
      var nonBookmarks = document.querySelectorAll('.marketplace .loan-card:not(.bookmark)');
      Array.prototype.forEach.call(nonBookmarks, function (nonBookmark) {
        nonBookmark.closest('.grid-item').classList.toggle('hidden');
      });
    });
  }

  navbar.classList.add('fixed');
  getScrollOffsets();
  handlePageScroll();
  handleMarketPlaceBookmarksToggle();
  document.addEventListener('mousemove', function (e) {
    moveGradient(e.clientX, e.clientY);
  });
  window.addEventListener('resize', function (e) {
    getScrollOffsets();
    moveGradient('50%', '50%');
  });
  window.addEventListener('scroll', handlePageScroll);

})(window, document);