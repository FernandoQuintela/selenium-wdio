# 🧪 UI Testing – Selenium + WebdriverIO + Allure (✅ Pipeline Verde)

![CI](https://github.com/FernandoQuintela/selenium-wdio/actions/workflows/ui-tests.yml/badge.svg)
[![Allure Report](https://img.shields.io/badge/Allure-Report-green)](https://fernandoquintela.github.io/selenium-wdio/)

Proyecto demostrativo de **automatización E2E (End-to-End)** con **Selenium (WebDriver)**, **WebdriverIO**, **Mocha** y reportería **Allure**, ejecutado de forma continua en **GitHub Actions**.

Este repositorio representa la **versión estable** del pipeline: todos los tests pasan con éxito y el reporte Allure refleja una suite en verde al 100 %.

> 🔗 También podés ver la versión “roja” (pipeline con fallas controladas y screenshots):  
> 👉 [selenium-wdio-fail](https://github.com/FernandoQuintela/selenium-wdio-fail)

---

## 📂 Estructura

| Carpeta / Archivo | Descripción |
|--------------------|-------------|
| `test/specs/` | Casos de prueba E2E (`busqueda.spec.js`, `login.spec.js`, etc.) |
| `test/pageobjects/` | Clases POM para encapsular comportamiento de páginas |
| `wdio.conf.js` | Configuración principal de WebdriverIO y Allure |
| `.github/workflows/ui-tests.yml` | Pipeline CI/CD con ejecución headless y publicación del reporte |
| `/allure-results/` → `/allure-report/` | Resultados y reporte HTML generado |

---

## 🚀 Ejecución local

```bash
npm ci
npx wdio run wdio.conf.js
```

### Luego, para generar y abrir el reporte Allure:

```bash
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
```

---

## 📊 Reporte Allure

### Incluye:

Estado de cada caso (Passed / Failed / Broken)

Detalle paso a paso y tiempos

Capturas automáticas (si las hay)

Métricas y gráficos de tendencia

📄 Reporte en vivo (pipeline verde):

👉 https://fernandoquintela.github.io/selenium-wdio/

---

## 🧩 Tecnologías

| Componente         | Rol                                         |
| ---------------    | --------------------------------------------|
| **WebdriverIO**    | Framework UI (wrapper de Selenium WebDriver)| 
| **Mocha + Expect** | Testing framework                           |
| **Allure Reporter**| Reportes HTML con evidencias                |
| **Node.js**        | Entorno de ejecución                        |
| **GitHub Actions** | CI/CD: ejecuta tests y publica resultados   |
| **GitHub Pages**   | Hosting del reporte                         |

---

## ⚙️ CI/CD

Cada push o re-run ejecuta:

Instalación de dependencias (Node 20)

Ejecución de tests en Chrome headless

Generación de resultados Allure

Publicación automática en Pages


### 📄 Ejecución manual:

Actions → “UI Tests (Green)” → Re-run all jobs

---

## 🧠 Autor

Fernando Quintela
QA Automation Engineer / Selenium–WebdriverIO Enthusiast

📍 Buenos Aires, Argentina

📧 fernand.quintela@gmail.com

---

