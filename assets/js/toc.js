(function() {
  'use strict';

  var tocContainer = document.getElementById('toc-sidebar');
  if (!tocContainer) return;

  // Find all h2 and h3 with id attributes in the main content
  var content = document.querySelector('.page-content');
  if (!content) {
    tocContainer.style.display = 'none';
    return;
  }

  var headings = content.querySelectorAll('h2[id], h3[id]');
  if (headings.length < 2) {
    tocContainer.style.display = 'none';
    return;
  }

  // Build TOC
  var tocNav = document.createElement('nav');
  tocNav.className = 'toc-nav';
  tocNav.setAttribute('aria-label', 'On this page');

  var tocTitle = document.createElement('h4');
  tocTitle.className = 'toc-title';
  tocTitle.textContent = 'On This Page';
  tocNav.appendChild(tocTitle);

  var rootList = document.createElement('ul');
  rootList.className = 'toc-list';

  var currentH2Item = null;
  var currentSubList = null;

  headings.forEach(function(heading) {
    var li = document.createElement('li');
    li.className = 'toc-item';

    var a = document.createElement('a');
    a.className = 'toc-link';
    a.href = '#' + heading.id;
    a.textContent = heading.textContent;
    a.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.getElementById(heading.id);
      if (target) {
        var headerHeight = document.querySelector('.site-header');
        var offset = headerHeight ? headerHeight.offsetHeight + 16 : 80;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
        history.pushState(null, null, '#' + heading.id);
      }
    });

    li.appendChild(a);

    if (heading.tagName === 'H2') {
      rootList.appendChild(li);
      currentH2Item = li;
      currentSubList = null;
    } else if (heading.tagName === 'H3') {
      if (!currentSubList && currentH2Item) {
        currentSubList = document.createElement('ul');
        currentSubList.className = 'toc-list toc-list--nested';
        currentH2Item.appendChild(currentSubList);
      }
      if (currentSubList) {
        currentSubList.appendChild(li);
      } else {
        rootList.appendChild(li);
      }
    }
  });

  tocNav.appendChild(rootList);
  tocContainer.appendChild(tocNav);

  // Scroll spy
  var tocLinks = tocContainer.querySelectorAll('.toc-link');
  var headingElements = Array.from(headings);

  function updateActiveLink() {
    var headerHeight = document.querySelector('.site-header');
    var offset = (headerHeight ? headerHeight.offsetHeight : 64) + 24;
    var scrollPos = window.pageYOffset + offset;

    var activeIndex = -1;
    for (var i = headingElements.length - 1; i >= 0; i--) {
      if (headingElements[i].offsetTop <= scrollPos) {
        activeIndex = i;
        break;
      }
    }

    tocLinks.forEach(function(link) {
      link.classList.remove('toc-link--active');
    });

    if (activeIndex >= 0 && tocLinks[activeIndex]) {
      tocLinks[activeIndex].classList.add('toc-link--active');
    }
  }

  var ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial update
  updateActiveLink();
})();
