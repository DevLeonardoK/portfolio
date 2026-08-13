/* =============================================================================
   Leonardo Kremer — Portfólio
   Nada aqui é obrigatório para ler a página: sem JS o conteúdo continua inteiro.
   ============================================================================= */
(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------------------------------------------------------------- tema ---- */
  var themeBtn = document.getElementById("theme-btn");
  var themeLabel = document.getElementById("theme-label");
  var sysDark = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function currentTheme() {
    var stamped = root.getAttribute("data-theme");
    if (stamped === "dark" || stamped === "light") return stamped;
    return sysDark && sysDark.matches ? "dark" : "light";
  }

  function paintLabel() {
    var escuro = currentTheme() === "dark";
    if (themeLabel) {
      themeLabel.textContent = "Tema: " + (escuro ? "escuro" : "claro");
    }
    if (themeBtn) themeBtn.setAttribute("aria-pressed", String(escuro));
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("tema", next);
      } catch (e) {
        /* modo privado: só não persiste */
      }
      paintLabel();
    });
    paintLabel();
  }

  /* Se o visitante nunca escolheu, acompanha o sistema em tempo real. */
  if (sysDark && sysDark.addEventListener) {
    sysDark.addEventListener("change", function () {
      if (!root.hasAttribute("data-theme")) paintLabel();
    });
  }

  /* ---------------------------------------------------------- menu mobile --- */
  var menuBtn = document.getElementById("menu-btn");
  var navLinks = document.getElementById("nav-links");

  function closeMenu() {
    if (!navLinks) return;
    navLinks.classList.remove("open");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  }

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 800) closeMenu();
    });
  }

  /* ------------------------------------------------------ ano no rodapé ---- */
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = String(new Date().getFullYear());

  /* -------------------------------------------------- revelação no scroll -- */
  var quieto = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var temGSAP = !quieto && window.gsap && window.ScrollTrigger;

  if (temGSAP) {
    try {
      animarComGSAP();
    } catch (e) {
      /* Se o GSAP falhar por qualquer motivo, cai no plano B abaixo. */
      temGSAP = false;
      Array.prototype.forEach.call(document.querySelectorAll(".reveal"), function (el) {
        el.style.opacity = "";
        el.style.transform = "";
      });
      animarComIntersectionObserver();
    }
  } else if (!quieto && "IntersectionObserver" in window) {
    animarComIntersectionObserver();
  }

  function animarComGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    var todos = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    var primeiraTela = todos.filter(function (el) {
      return el.closest(".hero") || el.closest(".metrics-band");
    });
    var demais = todos.filter(function (el) { return primeiraTela.indexOf(el) === -1; });

    /* A dobra não espera scroll: entra assim que a página carrega. */
    if (primeiraTela.length) {
      gsap.set(primeiraTela, { opacity: 0, y: 18 });
      gsap.to(primeiraTela, {
        opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.1, delay: 0.1
      });
    }

    /* O resto entra em cascata conforme cruza a viewport, uma vez só. */
    demais.forEach(function (el, i) {
      gsap.set(el, { opacity: 0, y: 16 });
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: function () {
          gsap.to(el, {
            opacity: 1, y: 0, duration: 0.55, ease: "power2.out", delay: (i % 4) * 0.05
          });
        }
      });
    });

    /* Barras de nível da stack: preenchem da esquerda para a direita. */
    Array.prototype.forEach.call(document.querySelectorAll(".bar-cell"), function (cel) {
      var acesas = cel.querySelectorAll(".bar i.on");
      if (!acesas.length) return;
      gsap.set(acesas, { scaleX: 0, transformOrigin: "left center" });
      ScrollTrigger.create({
        trigger: cel,
        start: "top 95%",
        once: true,
        onEnter: function () {
          gsap.to(acesas, { scaleX: 1, duration: 0.4, stagger: 0.08, ease: "power1.out" });
        }
      });
    });

    /* Rede de segurança: se algo travar, o conteúdo aparece de todo jeito. */
    window.setTimeout(function () {
      gsap.set(".reveal", { clearProps: "opacity,transform" });
      Array.prototype.forEach.call(document.querySelectorAll(".bar-cell .bar i.on"), function (el) {
        el.style.transform = "";
      });
    }, 4000);

    window.addEventListener("beforeprint", function () {
      gsap.set(".reveal", { clearProps: "opacity,transform" });
    });
  }

  function animarComIntersectionObserver() {
    var alvos = document.querySelectorAll(".reveal");
    var alturaTela = window.innerHeight;

    /* Só esconde o que está abaixo da primeira tela: o que já está visível
       nunca deve depender de um observer para aparecer. */
    var adiados = Array.prototype.filter.call(alvos, function (el) {
      return el.getBoundingClientRect().top > alturaTela * 0.9;
    });

    adiados.forEach(function (el, i) {
      el.classList.add("pre");
      el.style.transitionDelay = Math.min(i % 4, 3) * 60 + "ms";
    });

    var mostrar = function (el) {
      el.classList.remove("pre");
    };

    var obs = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (ent) {
          if (!ent.isIntersecting) return;
          mostrar(ent.target);
          obs.unobserve(ent.target);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );

    adiados.forEach(function (el) {
      obs.observe(el);
    });

    /* Rede de segurança: se por qualquer motivo o observer não disparar,
       o conteúdo aparece de todo jeito. Nada fica escondido para sempre. */
    window.setTimeout(function () {
      Array.prototype.forEach.call(document.querySelectorAll(".reveal.pre"), function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) mostrar(el);
      });
    }, 1200);

    window.addEventListener("beforeprint", function () {
      Array.prototype.forEach.call(document.querySelectorAll(".reveal.pre"), mostrar);
    });
  }

  /* ------------------------------------------------- link ativo no menu ---- */
  var secoes = document.querySelectorAll("main section[id]");
  var mapa = {};
  Array.prototype.forEach.call(document.querySelectorAll(".nav-links a"), function (a) {
    mapa[a.getAttribute("href").slice(1)] = a;
  });

  if (secoes.length && "IntersectionObserver" in window) {
    var ativo = null;
    var spy = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (ent) {
          if (!ent.isIntersecting) return;
          var link = mapa[ent.target.id];
          if (!link || link === ativo) return;
          if (ativo) ativo.removeAttribute("aria-current");
          link.setAttribute("aria-current", "true");
          ativo = link;
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    Array.prototype.forEach.call(secoes, function (s) {
      spy.observe(s);
    });
  }
})();
