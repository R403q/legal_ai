document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rodoForm");
  const wynik = document.getElementById("wynik");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nazwa = form.nazwa.value;
    const dane = form.dane.value;

    wynik.innerHTML = `
      <h3>Twoja klauzula RODO:</h3>
      <p>${nazwa} informuje, że przetwarza dane osobowe w zakresie: ${dane}, zgodnie z RODO.</p>
    `;
  });
});
