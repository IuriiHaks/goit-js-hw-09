// ======= 2-form.js =======
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

// Заповнюємо форму зі сховища, якщо є дані
const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  try {
    formData = JSON.parse(saved);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  } catch (err) {
    console.error('Error parsing storage', err);
  }
}

// Обробник input
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробник submit
form.addEventListener('submit', event => {
  event.preventDefault();
  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  formData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
