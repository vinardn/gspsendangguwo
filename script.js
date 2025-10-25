// Navbar
const hamburger = document.querySelector('.hamburger');
        const menu = document.querySelector('.menu');

        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
        });

// Anti Klik Kanan dan Copy
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

// Animasi Angka Jumlah Umat
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // Durasi animasi dalam milidetik (2 detik)
    let current = 0;
    const increment = target / (duration / 10); // Hitungan setiap 10ms

    const timer = setInterval(() => {
        current += increment;
        
        if (current < target) {
            // Pastikan angka ditampilkan tanpa desimal
            element.textContent = Math.ceil(current).toLocaleString('id-ID'); 
        } else {
            element.textContent = target.toLocaleString('id-ID');
            clearInterval(timer);
        }
    }, 10);
}

// --- Menggunakan Intersection Observer untuk memulai animasi saat terlihat ---
const counterElement = document.querySelector('.counter-number');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            // Hentikan observasi setelah animasi dimulai
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.5 // Animasi dimulai saat 50% elemen terlihat
});

observer.observe(counterElement);