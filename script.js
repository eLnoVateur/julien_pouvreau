// Tab switching and deep-linking functionality
(function() {
    'use strict';

    // Get all tab buttons and content sections
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Function to show a specific tab
    function showTab(tabName) {
        // Remove active class from all buttons and contents
        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to selected button and content
        const selectedButton = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
        const selectedContent = document.getElementById(tabName);

        if (selectedButton && selectedContent) {
            selectedButton.classList.add('active');
            selectedContent.classList.add('active');
        }
    }

    // Function to get tab name from hash
    function getTabFromHash() {
        const hash = window.location.hash.substring(1); // Remove the '#'
        const validTabs = ['bd', 'hospitality', 'precursys', 'portfolio'];
        return validTabs.includes(hash) ? hash : 'bd';
    }

    // Handle tab button clicks
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            window.location.hash = tabName;
        });
    });

    // Handle hash changes (back/forward buttons and direct hash changes)
    window.addEventListener('hashchange', function() {
        const tabName = getTabFromHash();
        showTab(tabName);
    });

    // Initialize on page load
    function init() {
        const tabName = getTabFromHash();
        showTab(tabName);
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
