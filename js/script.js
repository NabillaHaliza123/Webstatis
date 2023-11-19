// Menu menjadi fixed di atas ketika di scroll, supaya user mudah untuk pindah menu
window.addEventListener('scroll', function () {
    var header = document.getElementById('nav-header');

    // Tambahkan kelas 'scrolled' ketika pengguna menggulir lebih dari 50px
    if (window.scrollY > 50) {
        header.classList.add('fixed-top');
    } else {
        // Hapus kelas 'scrolled' jika pengguna menggulir kembali ke atas
        header.classList.remove('fixed-top');
    }
});
// fungsi untuk dropdown menu
function toggleDropdown() {
    var dropdown = document.getElementById('dropdown-menu');
    dropdown.classList.toggle('show');
}

// Menutup dropdown saat pengguna mengklik di luar dropdown
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-toggle')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}