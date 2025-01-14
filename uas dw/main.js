document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Validasi sederhana
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;
  
    if (name && email && message) {
      alert('Terima kasih! Pesan Anda akan segera kami proses.');
      e.target.reset();
    } else {
      alert('Mohon lengkapi semua field');
  }
  });