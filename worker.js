// worker.js
self.addEventListener('message', (event) => {
  if (event.data === 'reload') {
    self.postMessage('Reloading...');
    location.reload();
  }
});
