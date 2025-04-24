document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rodoForm");
  const wynik = document.getElementById("wynik");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nazwa = form.nazwa.value;
    const email = form.email.value;
    const dane = form.dane.value;
    const cel = form.cel.value;
    const zgoda = form.zgoda.checked;

    if (!zgoda) {
      wynik.innerHTML = "<p style='color:red;'>Musisz wyrazić zgodę!</p>";
      return;
    }

    wynik.innerHTML = `
      <h3>Twoja klauzula RODO:</h3>
      <p>${nazwa} informuje, że przetwarza dane osobowe w zakresie: <strong>${dane}</strong>,
      w celu: <strong>${cel}</strong>. Administratorem danych jest ${nazwa}, kontakt: ${email}.</p>
      <p>Dane są przetwarzane zgodnie z przepisami RODO. Osoba, której dane dotyczą, ma prawo do wglądu, poprawiania, ograniczenia oraz usunięcia danych.</p>
    `;
  });
});
