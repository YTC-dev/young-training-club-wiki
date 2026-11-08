(() => {
  const counter = document.querySelector('[data-profile-view-counter]');
  if (!counter) return;

  const endpoint = counter.dataset.hitsEndpoint;
  const number = counter.querySelector('[data-profile-view-count]');
  if (!endpoint || !number) return;

  number.textContent = '…';

  fetch(endpoint, { mode: 'cors', cache: 'no-store' })
    .then(response => {
      if (!response.ok) throw new Error(`Hits API returned ${response.status}`);
      return response.json();
    })
    .then(data => {
      const total = Number(data.total_hits);
      if (!Number.isFinite(total) || total < 0) throw new Error('Invalid Hits count');
      number.textContent = new Intl.NumberFormat('vi-VN').format(total);
      counter.classList.remove('is-unavailable');
    })
    .catch(() => {
      number.textContent = '—';
      counter.classList.add('is-unavailable');
    });
})();
