
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="page-shell">
      <header class="topbar">
        <div class="brand-mark" aria-hidden="true">VR</div>

        <div class="brand-copy">
          <p class="eyebrow">Villa Retiro II Anexo · Córdoba</p>
          <h1>Villa Retiro Map</h1>
        </div>

        <span class="status-chip">En preparación</span>
      </header>

      <main class="content">
        <section class="intro" aria-labelledby="page-title">
          <p class="eyebrow">MAPA DEL BARRIO</p>
          <h2 id="page-title">Preparando el mapa geográfico</h2>
          <p class="lead">
            El objetivo es visualizar las calles y los lotes reales
            de Villa Retiro II Anexo. Antes de mostrarlos, debemos
            validar la información geográfica de origen.
          </p>
        </section>

        <section class="panel" aria-labelledby="status-title">
          <h3 id="status-title">Estado de preparación</h3>

          <ol class="steps">
            <li>
              <span class="step-number">1</span>
              <div class="step-copy">
                <h4>Inspeccionar el archivo DWF</h4>
                <p>
                  Determinar qué geometrías contiene y si dispone
                  de georreferenciación.
                </p>
              </div>
              <span class="step-status">Pendiente</span>
            </li>

            <li>
              <span class="step-number">2</span>
              <div class="step-copy">
                <h4>Validar calles y lotes</h4>
                <p>
                  Verificar límites, identificadores y sistema
                  de coordenadas antes de importar los datos.
                </p>
              </div>
              <span class="step-status">Pendiente</span>
            </li>

            <li>
              <span class="step-number">3</span>
              <div class="step-copy">
                <h4>Conectar el mapa con la API</h4>
                <p>
                  Preparar la consulta de datos geográficos
                  desde PostgreSQL y PostGIS.
                </p>
              </div>
              <span class="step-status">Pendiente</span>
            </li>
          </ol>
        </section>

        <p class="notice" role="status">
          <strong>Integridad de los datos:</strong>
          no se muestran límites ni ubicaciones inventadas.
          El mapa estará disponible cuando los datos reales
          hayan sido inspeccionados y validados.
        </p>
      </main>

      <footer class="footer">
        Villa Retiro Map · Versión inicial
      </footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      color: #172b3a;
      font-family: Arial, Helvetica, sans-serif;
    }

    * {
      box-sizing: border-box;
    }

    .page-shell {
      min-height: 100vh;
      background: #f4f7fa;
    }

    .topbar {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 20px max(24px, calc((100% - 960px) / 2));
      background: #fff;
      border-bottom: 1px solid #e0e7ed;
    }

    .brand-mark {
      display: grid;
      place-items: center;
      flex-shrink: 0;
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: #174f43;
      color: #fff;
      font-weight: 700;
    }

    .brand-copy h1,
    .brand-copy p {
      margin: 0;
    }

    .brand-copy h1 {
      font-size: 19px;
    }

    .eyebrow {
      margin: 0 0 8px;
      color: #537267;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .brand-copy .eyebrow {
      margin-bottom: 4px;
      letter-spacing: 0;
      text-transform: none;
    }

    .status-chip {
      margin-left: auto;
      padding: 7px 10px;
      border-radius: 20px;
      background: #edf3f0;
      color: #315c4c;
      font-size: 12px;
      white-space: nowrap;
    }

    .content {
      width: min(100% - 32px, 760px);
      margin: 0 auto;
      padding: 48px 0 36px;
    }

    .intro {
      margin-bottom: 28px;
    }

    .intro h2 {
      margin: 0 0 14px;
      font-size: clamp(27px, 5vw, 36px);
      line-height: 1.2;
    }

    .lead {
      max-width: 650px;
      margin: 0;
      color: #536473;
      font-size: 16px;
      line-height: 1.7;
    }

    .panel {
      padding: 24px;
      border: 1px solid #e0e7ed;
      border-radius: 16px;
      background: #fff;
      box-shadow: 0 5px 20px rgb(23 43 58 / 4%);
    }

    .panel h3 {
      margin: 0 0 22px;
      font-size: 18px;
    }

    .steps {
      display: grid;
      gap: 24px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .steps li {
      display: flex;
      align-items: flex-start;
      gap: 14px;
    }

    .step-number {
      display: grid;
      place-items: center;
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #edf3f0;
      color: #315c4c;
      font-weight: 700;
    }

    .step-copy {
      flex: 1;
    }

    .step-copy h4 {
      margin: 2px 0 6px;
      font-size: 15px;
    }

    .step-copy p {
      margin: 0;
      color: #61717e;
      font-size: 14px;
      line-height: 1.6;
    }

    .step-status {
      color: #657582;
      font-size: 12px;
      white-space: nowrap;
    }

    .notice {
      margin: 22px 0 0;
      padding: 16px;
      border-left: 4px solid #537267;
      border-radius: 4px;
      background: #eaf1ee;
      color: #314b41;
      font-size: 14px;
      line-height: 1.7;
    }

    .footer {
      padding: 20px;
      border-top: 1px solid #e0e7ed;
      color: #71808c;
      font-size: 12px;
      text-align: center;
    }

    @media (max-width: 520px) {
      .topbar {
        flex-wrap: wrap;
        padding: 16px;
      }

      .status-chip {
        margin-left: 58px;
      }

      .content {
        padding-top: 32px;
      }

      .panel {
        padding: 18px;
      }

      .steps li {
        flex-wrap: wrap;
      }

      .step-status {
        margin-left: 46px;
      }
    }
  `]
})
export class AppComponent {
  title = 'villa-retiro-map';
}
