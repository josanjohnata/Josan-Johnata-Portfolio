'use strict';

(() => {
  if (!['/', '/index', '/index.html'].includes(window.location.pathname)) return;

  const language = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
  const destination = /^pt(?:[-_]|$)/i.test(language) ? '/pt' : '/en';
  window.location.replace(destination + window.location.search + window.location.hash);
})();
