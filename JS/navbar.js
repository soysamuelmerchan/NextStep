export function loadNavbar() {
  const navbar = `
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <div class="logo">
          <a class="navbar-brand" href="index.html">
            <img src="../images/logo.png" alt="" />
          </a>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="./index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./como.html">Cómo funciona</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./resultados.html">Resultados</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./quienes.html">Quiénes somos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./contacto.html">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  document.getElementById("navbar").innerHTML = navbar;
}
