const tabButtons = document.querySelectorAll('.tab-btn');
    const pages = document.querySelectorAll('.page');
    const openDrawerButtons = document.querySelectorAll('#open-product-drawer, #open-product-drawer-inline');
    const drawer = document.getElementById('product-drawer');
    const drawerBackdrop = document.getElementById('drawer-backdrop');
    const closeDrawerButton = document.getElementById('close-product-drawer');
    const cancelDrawerButton = document.getElementById('cancel-product-drawer');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.dataset.tab;

        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        pages.forEach(page => {
          page.classList.toggle('hidden', page.dataset.page !== target);
        });
      });
    });

    function openDrawer() {
      drawer.classList.add('show');
      drawerBackdrop.classList.add('show');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('show');
      drawerBackdrop.classList.remove('show');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    openDrawerButtons.forEach(btn => btn.addEventListener('click', openDrawer));
    closeDrawerButton.addEventListener('click', closeDrawer);
    cancelDrawerButton.addEventListener('click', closeDrawer);
    drawerBackdrop.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeDrawer();
    });
