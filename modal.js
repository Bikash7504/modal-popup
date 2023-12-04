<script>
  const openModalBtn = document.querySelector('.openModalBtn');
  const modal = document.getElementById('modal1');
  const closeModal = modal.querySelector('.close');

  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
</script>