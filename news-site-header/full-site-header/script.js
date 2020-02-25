
   //Script that adds Vue capability to #news-site-header (This can, and should, really be in your own .js file) -->

      new Vue({
        el: '.menu',
        data: {
          menuIsOpen: false
        },
        methods: {
          toggleOpen: function() {
            this.menuIsOpen = !this.menuIsOpen
          }
        }
      })

      
      var expandables = document.getElementsByClassName('expandable');
      
      for (let expandable of expandables) {
        let triggerElement = expandable.querySelector('a');
        triggerElement.addEventListener('click', function(event) {
          event.preventDefault();
          closeAllExcept(expandable);
          expandable.classList.toggle('expanded');
        })
      }

      function closeAllExcept(clickedExpandable) {
        for (let expandable of expandables) {
          if (expandable !== clickedExpandable) {
            expandable.classList.remove('expanded')
          }
        }
      }