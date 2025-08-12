// Tokyo Mistakes Theme JavaScript
(function() {
  'use strict';

  // Theme Toggle Functionality
  function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    function updateThemeIcon(theme) {
      themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    function toggleTheme() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
      
      // Dispatch event for Remark42 theme sync
      document.dispatchEvent(new CustomEvent('themeChanged', { 
        detail: { theme: newTheme } 
      }));
    }
    
    // Set initial icon
    updateThemeIcon(document.documentElement.getAttribute('data-theme'));
    
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Mobile Navigation
  function initMobileNav() {
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const body = document.body;
    
    function toggleMobileNav() {
      const isOpen = mobileNav.classList.contains('active');
      
      if (isOpen) {
        mobileNav.classList.remove('active');
        body.classList.remove('mobile-nav-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileNav.classList.add('active');
        body.classList.add('mobile-nav-open');
        mobileToggle.setAttribute('aria-expanded', 'true');
      }
    }
    
    mobileToggle.addEventListener('click', toggleMobileNav);
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        toggleMobileNav();
      }
    });
    
    // Close on outside click
    document.addEventListener('click', function(e) {
      if (mobileNav.classList.contains('active') && 
          !mobileNav.contains(e.target) && 
          !mobileToggle.contains(e.target)) {
        toggleMobileNav();
      }
    });
  }

  // Search Toggle
  function initSearch() {
    const searchToggle = document.getElementById('search-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    const searchClose = document.getElementById('search-close');
    
    if (!searchToggle || !searchOverlay) return;
    
    function openSearch() {
      searchOverlay.classList.add('active');
      document.body.classList.add('search-open');
      setTimeout(() => searchInput.focus(), 100);
    }
    
    function closeSearch() {
      searchOverlay.classList.remove('active');
      document.body.classList.remove('search-open');
      searchInput.value = '';
      // Clear results
      const results = document.getElementById('search-results');
      results.innerHTML = `
        <div class="search-no-results">
          <i class="fas fa-search"></i>
          <p>Start typing to search...</p>
        </div>
      `;
    }
    
    searchToggle.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);
    
    // Close on escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
        closeSearch();
      }
    });
  }

  // Copy to clipboard functionality
  window.copyToClipboard = function(text) {
    navigator.clipboard.writeText(text).then(function() {
      showCopyNotification('Link copied to clipboard!');
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  };

  function showCopyNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 2000);
  }

  // Initialize everything when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initMobileNav();
    initSearch();
  });
})();
