const hamburger = document.querySelector('.hamburger');
        const menu = document.querySelector('.menu');

        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            alert('Maaf, klik kanan tidak diizinkan di situs ini.');
        });

        document.onkeydown = function(e) {
            // Mencegah kombinasi tombol: Ctrl+A, Ctrl+C, Ctrl+X, Ctrl+U, F12
            if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
                alert('Menyalin (Ctrl+C) tidak diizinkan.');
                return false;
            }
            if (e.ctrlKey && (e.key === 'x' || e.key === 'X')) {
                return false;
            }
            if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
                return false;
            }
            if (e.key === 'F12') {
                return false;
            }
            if (e.ctrlKey && (e.key === 'a' || e.key === 'A')) {
                return false;
            }
        };

        const menuItems = document.querySelectorAll('.menu > li');

menuItems.forEach(item => {
    // Hanya berlaku untuk item yang memiliki submenu
    if (item.querySelector('ul')) { 
        item.addEventListener('click', function(e) {
            // Mencegah navigasi jika link dinonaktifkan
            // e.preventDefault(); 
            
            // Toggle class untuk menampilkan submenu dengan smooth transition
            this.classList.toggle('show-submenu'); 
        });
    }
});