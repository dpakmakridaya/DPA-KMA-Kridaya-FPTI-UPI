document.addEventListener('DOMContentLoaded', function() {

    // ==========================================
    // 1. NAVBAR MOBILE FUNCTION (FIXED)
    // ==========================================
    // PENTING: Menggunakan getElementById sesuai dengan HTML: id="mobile-menu"
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Mencegah klik tembus
            
            // Toggle Class untuk animasi dan visibility
            this.classList.toggle('is-active');
            navMenu.classList.toggle('active');
        });

        // Tutup menu saat link diklik (agar user merasa responsif)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-active');
                navMenu.classList.remove('active');
            });
        });

        // Tutup menu jika klik di sembarang tempat (luar menu)
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active')) {
                // Jika yang diklik bukan menu DAN bukan tombol toggle
                if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                    menuToggle.classList.remove('is-active');
                    navMenu.classList.remove('active');
                }
            }
        });
    }

    // ==========================================
    // 2. FITUR FILTER DOKUMEN (DROPDOWN & SEARCH)
    // ==========================================
    const searchInput = document.getElementById('searchInput');
    const documentList = document.getElementById('documentList'); 
    
    // Hanya jalankan logika ini jika tabel dokumen ditemukan
    if (documentList) {
        
        // A. Sortir Otomatis A-Z saat load
        const itemsArray = Array.from(documentList.querySelectorAll('.document-item')); 
        itemsArray.sort((a, b) => {
            const textA = a.querySelector('.document-title-col a').textContent.toLowerCase().trim();
            const textB = b.querySelector('.document-title-col a').textContent.toLowerCase().trim();
            return textA.localeCompare(textB); 
        });
        itemsArray.forEach(item => documentList.appendChild(item));
        
        // B. Setup Variabel Filter
        const documentItems = document.querySelectorAll('.document-item');
        const totalDocsCount = document.getElementById('totalDocsCount');
        const displayedDocsCount = document.getElementById('displayedDocsCount');
        
        if(totalDocsCount) totalDocsCount.textContent = documentItems.length;

        let searchText = '';
        let selectedCategory = 'Semua Kategori';

        // Fungsi Inti Filter
        function runFilter() {
            let count = 0;
            documentItems.forEach(item => {
                const title = item.querySelector('.document-title-col a').textContent.toLowerCase();
                const catTag = item.querySelector('.category-tag');
                const category = catTag ? catTag.textContent.trim() : '';

                // Logika Pencocokan
                const matchesSearch = title.includes(searchText);
                const matchesCategory = selectedCategory === 'Semua Kategori' || category === selectedCategory;

                // Aksi Tampil/Sembunyi
                if (matchesSearch && matchesCategory) {
                    item.classList.remove('hidden');
                    count++;
                } else {
                    item.classList.add('hidden');
                }
            });
            
            if(displayedDocsCount) displayedDocsCount.textContent = count;
        }

        // C. Listener Search Bar
        if(searchInput) {
            searchInput.addEventListener('keyup', (e) => {
                searchText = e.target.value.toLowerCase();
                runFilter();
            });
        }

        // D. Listener Dropdown Filter
        const dropBtn = document.getElementById('categoryDropdownBtn');
        const dropMenu = document.getElementById('categoryDropdownMenu');

        if (dropBtn && dropMenu) {
            // Klik Tombol Dropdown
            dropBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Mencegah event bubbling
                dropMenu.classList.toggle('show');
            });

            // Klik Item Dropdown
            const options = dropMenu.querySelectorAll('li');
            options.forEach(opt => {
                opt.addEventListener('click', function() {
                    selectedCategory = this.getAttribute('data-value');
                    
                    // Update Tampilan Tombol
                    dropBtn.innerHTML = `${selectedCategory} <i class="fas fa-chevron-down"></i>`;
                    
                    // Update Tanda Centang
                    options.forEach(o => o.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Tutup Menu & Jalankan Filter
                    dropMenu.classList.remove('show');
                    runFilter();
                });
            });

            // Tutup jika klik di luar
            window.addEventListener('click', () => {
                if (dropMenu.classList.contains('show')) {
                    dropMenu.classList.remove('show');
                }
            });
        }
    }
});
