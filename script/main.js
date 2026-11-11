'use strict';

const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-navigation');

function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('is-open', !expanded);
});

navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});

document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});

document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.querySelectorAll('a').forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, {rootMargin: '-15% 0px -65% 0px'});
  document.querySelectorAll('main section').forEach(section => observer.observe(section));
}


// Keep the original portfolio detail popups with native keyboard and focus support.
const projectDialogTriggers = new WeakMap();

document.querySelectorAll('[data-project-modal]').forEach(trigger => {
  trigger.addEventListener('click', event => {
    const dialog = document.getElementById(trigger.dataset.projectModal);
    if (!dialog || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    projectDialogTriggers.set(dialog, trigger);
    dialog.showModal();
    dialog.focus({preventScroll: true});
    dialog.scrollTop = 0;
    document.body.classList.add('project-modal-open');
  });
});

document.querySelectorAll('dialog.popup-modal').forEach(dialog => {
  dialog.querySelector('[data-close-modal]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('project-modal-open');
    projectDialogTriggers.get(dialog)?.focus({preventScroll: true});
  });
});
