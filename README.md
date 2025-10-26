# 🧪 UI Testing – Selenium + WebdriverIO + Allure (✅ Pipeline Verde)

![CI](https://github.com/FernandoQuintela/selenium-wdio/actions/workflows/ui-tests.yml/badge.svg)
[![Allure Report](https://img.shields.io/badge/Allure-Report-green)](https://fernandoquintela.github.io/selenium-wdio/)

Proyecto demostrativo de **automatización E2E (End-to-End)** con **Selenium (WebDriver)**, **WebdriverIO**, **Mocha** y reportes con **Allure**, ejecutado de forma continua en **GitHub Actions**y publicado en **GitHub Pages**.

Este repositorio representa la **versión estable** del pipeline: todos los tests pasan con éxito y el reporte Allure se actualiza automáticamente en cada push.

> 🔗 También se puede ver la versión “roja” (pipeline con fallas controladas y screenshots del fallo):  
> 👉 [selenium-wdio-fail](https://github.com/FernandoQuintela/selenium-wdio-fail)

---

## 📂 Estructura

| Carpeta / Archivo | Descripción |
|--------------------|-------------|
| `test/specs/` | Casos de prueba E2E (Login, File Upload, Checkout, Wikipedia search) |
| `test/pageobjects/` | Clases POM para encapsular comportamiento de páginas |
| `wdio.conf.js` | Configuración global de WebdriverIO y reporter Allure |
| `.github/workflows/ui-tests.yml` | Pipeline CI/CD que ejecuta tests y publica el reporte |
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

Información del entorno y navegador

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

## ⚙️ CI/CD Flow

Cada push o re-run en Actions ejecuta:

Instalación de dependencias

Ejecución de tests en Chrome headless (Linux)

Generación de resultados Allure

Publicación automática en GitHub Pages


### 📄 Ejecución manual:

Actions → “UI Tests (Green)” → Re-run all jobs

---

## 🧠 Autor

Fernando Quintela
QA Automation Engineer – Selenium / WebdriverIO / Allure / CI/CD

📍 Buenos Aires, Argentina

📧 fernand.quintela@gmail.com

🌐 [GitHub Profile] (https://github.com/FernandoQuintela)

---

