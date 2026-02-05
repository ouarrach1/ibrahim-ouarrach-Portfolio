
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[command="--toggle"][commandfor]');
    if (!btn) return;

    const targetId = btn.getAttribute('commandfor');
    const panel = document.getElementById(targetId);
    if (!panel) return;

    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isOpen));
    panel.classList.toggle('hidden', isOpen);
  });
  const MY_EMAIL = "ibrahimouarrach3@gmail.com";
  const SUBJECT = "New message from portfolio site";

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1`
      + `&to=${encodeURIComponent(MY_EMAIL)}`
      + `&su=${encodeURIComponent(SUBJECT)}`
      + `&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  });


