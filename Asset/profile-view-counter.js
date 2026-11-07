(() => {
  const counter = document.querySelector('[data-profile-view-counter]');
  if (!counter) return;

  const profileId = counter.dataset.profileId || window.location.pathname;
  const storageKey = 'ytc-profile-view-counts-v1';
  const number = counter.querySelector('[data-profile-view-count]');

  const readCounts = () => {
    try {
      const value = JSON.parse(localStorage.getItem(storageKey) || '{}');
      return value && typeof value === 'object' ? value : {};
    } catch (_) {
      return {};
    }
  };

  const format = value => new Intl.NumberFormat('vi-VN').format(value);
  const counts = readCounts();
  counts[profileId] = Math.max(0, Number(counts[profileId]) || 0) + 1;

  try {
    localStorage.setItem(storageKey, JSON.stringify(counts));
  } catch (_) {
    // Private browsing or blocked storage: still show this visit.
  }

  if (number) number.textContent = format(counts[profileId]);
})();