(() => {
  const counter = document.querySelector('[data-profile-view-counter]');
  if (!counter) return;

  const endpoint = counter.dataset.hitsEndpoint;
  const number = counter.querySelector('[data-profile-view-count]');
  if (!endpoint || !number) return;

  const cacheKey = 'ytc_hits_' + (window.location.pathname || endpoint);
  const sessionKey = 'ytc_hits_seen_' + (window.location.pathname || endpoint);

  const format = value => new Intl.NumberFormat('vi-VN').format(value);

  const readLocal = () => {
    try {
      const val = Number(localStorage.getItem(cacheKey));
      return Number.isFinite(val) && val >= 0 ? val : null;
    } catch (_) {
      return null;
    }
  };

  const writeLocal = val => {
    try {
      localStorage.setItem(cacheKey, String(val));
    } catch (_) {}
  };

  const hasSessionSeen = () => {
    try {
      return sessionStorage.getItem(sessionKey) === '1';
    } catch (_) {
      return false;
    }
  };

  const markSessionSeen = () => {
    try {
      sessionStorage.setItem(sessionKey, '1');
    } catch (_) {}
  };

  // Nếu đã xem trong phiên này và đã có số trong cache, tái sử dụng để tránh spam tăng hits khi F5
  const cached = readLocal();
  if (cached !== null) {
    number.textContent = format(cached);
    counter.classList.remove('is-unavailable');
    if (hasSessionSeen()) {
      return;
    }
  } else {
    number.textContent = '…';
  }

  const isLocalEnv =
    window.location.protocol === 'file:' ||
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1';

  // Khi đang chạy local và đã có cache thì không gọi API tăng lượt xem
  if (isLocalEnv && cached !== null) {
    markSessionSeen();
    return;
  }

  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timer = controller ? setTimeout(() => controller.abort(), 4500) : null;

  fetch(endpoint, {
    mode: 'cors',
    cache: 'no-store',
    signal: controller ? controller.signal : undefined
  })
    .then(response => {
      if (timer) clearTimeout(timer);
      if (!response.ok) throw new Error(`Hits API returned ${response.status}`);
      return response.json();
    })
    .then(data => {
      const total = Number(data.total_hits);
      if (!Number.isFinite(total) || total < 0) throw new Error('Invalid Hits count');
      number.textContent = format(total);
      counter.classList.remove('is-unavailable');
      writeLocal(total);
      markSessionSeen();
    })
    .catch(() => {
      if (timer) clearTimeout(timer);
      const fallback = readLocal();
      if (fallback !== null) {
        number.textContent = format(fallback);
      } else {
        number.textContent = '—';
        counter.classList.add('is-unavailable');
      }
    });
})();
