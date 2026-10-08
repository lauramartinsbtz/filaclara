// Abre o aviso enquanto o link de download não está disponível.
const modal = document.getElementById('download-dialog');
const downloadButton = document.getElementById('download');

downloadButton.addEventListener('click', () => {
  modal.showModal();
});

// Fecha a janela ao clicar fora dela. Escape também fecha o dialog.
modal.addEventListener('click', (event) => {
  if (event.target !== modal) return;
  const bounds = modal.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right ||
    event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (outside) modal.close();
});
