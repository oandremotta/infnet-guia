import type { NextApiRequest, NextApiResponse } from 'next';
import client from 'prom-client';

const registry = new client.Registry();

// Registra métricas padrão: CPU, memória, etc.
client.collectDefaultMetrics({ register: registry });

// (Opcional) Criar uma métrica customizada
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Número total de requisições HTTP recebidas',
  labelNames: ['method', 'route'],
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Incrementa contador toda vez que o /metrics for acessado
  httpRequestCounter.inc({ method: req.method, route: '/metrics' });

  res.setHeader('Content-Type', registry.contentType);
  res.end(await registry.metrics());
}
