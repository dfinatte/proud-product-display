import { useState, useEffect } from "react";
import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, RadialBarChart, RadialBar
} from "recharts";
import { Activity, Droplets, Thermometer, Eye, TrendingUp, TrendingDown, Minus } from "lucide-react";

// Simulated real-time data
const generateData = () => {
  const now = new Date();
  const data = [];
  for (let i = 11; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 5 * 60000);
    data.push({
      time: time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      phEntrada: 5.5 + Math.random() * 1.5,
      phSaida: 6.8 + Math.random() * 0.4,
      turbidezEntrada: 80 + Math.random() * 40,
      turbidezSaida: 15 + Math.random() * 15,
      temperatura: 22 + Math.random() * 4,
    });
  }
  return data;
};

const StatusIndicator = ({ status }: { status: 'good' | 'warning' | 'critical' }) => {
  const colors = {
    good: 'bg-bio-green',
    warning: 'bg-yellow-500',
    critical: 'bg-destructive'
  };
  return (
    <span className={`inline-block w-2 h-2 rounded-full ${colors[status]} animate-pulse`} />
  );
};

const TrendIcon = ({ value }: { value: number }) => {
  if (value > 0) return <TrendingUp className="w-4 h-4 text-bio-green" />;
  if (value < 0) return <TrendingDown className="w-4 h-4 text-destructive" />;
  return <Minus className="w-4 h-4 text-muted-foreground" />;
};

const Dashboard = () => {
  const [data, setData] = useState(generateData());
  const [activeTab, setActiveTab] = useState<'ph' | 'turbidez' | 'temperatura'>('ph');

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newPoint = {
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
          phEntrada: 5.5 + Math.random() * 1.5,
          phSaida: 6.8 + Math.random() * 0.4,
          turbidezEntrada: 80 + Math.random() * 40,
          turbidezSaida: 15 + Math.random() * 15,
          temperatura: 22 + Math.random() * 4,
        };
        return [...prev.slice(1), newPoint];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const latestData = data[data.length - 1];
  const previousData = data[data.length - 2];

  const metrics = [
    {
      id: 'ph',
      label: 'pH',
      icon: Droplets,
      entrada: latestData.phEntrada.toFixed(2),
      saida: latestData.phSaida.toFixed(2),
      unit: '',
      status: latestData.phSaida >= 6.5 && latestData.phSaida <= 8.5 ? 'good' : 'warning',
      trend: latestData.phSaida - previousData.phSaida,
      improvement: ((latestData.phSaida - latestData.phEntrada) / latestData.phEntrada * 100).toFixed(1),
      color: 'hsl(185, 70%, 35%)',
      colorLight: 'hsl(185, 70%, 45%)',
    },
    {
      id: 'turbidez',
      label: 'Turbidez',
      icon: Eye,
      entrada: latestData.turbidezEntrada.toFixed(0),
      saida: latestData.turbidezSaida.toFixed(0),
      unit: 'NTU',
      status: latestData.turbidezSaida < 25 ? 'good' : latestData.turbidezSaida < 50 ? 'warning' : 'critical',
      trend: previousData.turbidezSaida - latestData.turbidezSaida,
      improvement: ((latestData.turbidezEntrada - latestData.turbidezSaida) / latestData.turbidezEntrada * 100).toFixed(1),
      color: 'hsl(175, 65%, 45%)',
      colorLight: 'hsl(175, 65%, 55%)',
    },
    {
      id: 'temperatura',
      label: 'Temperatura',
      icon: Thermometer,
      entrada: latestData.temperatura.toFixed(1),
      saida: latestData.temperatura.toFixed(1),
      unit: '°C',
      status: latestData.temperatura >= 20 && latestData.temperatura <= 28 ? 'good' : 'warning',
      trend: latestData.temperatura - previousData.temperatura,
      improvement: null,
      color: 'hsl(160, 60%, 40%)',
      colorLight: 'hsl(160, 60%, 50%)',
    },
  ];

  const activeMetric = metrics.find(m => m.id === activeTab)!;

  // Radial chart data for efficiency
  const efficiencyData = [
    { name: 'Eficiência', value: parseFloat(metrics[1].improvement || '0'), fill: 'hsl(175, 65%, 45%)' }
  ];

  return (
    <section className="py-24 bg-water-deep relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Monitoramento</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6">
            Plataforma de 
            <span className="text-accent"> Dados em Tempo Real</span>
          </h2>
          <p className="text-water-medium text-lg leading-relaxed">
            Visualize o desempenho do sistema com gráficos atualizados automaticamente. 
            Compare parâmetros antes e depois do tratamento biológico.
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="bg-card/10 backdrop-blur-xl rounded-3xl border border-white/10 p-6 lg:p-8 shadow-elevated">
          {/* Status Bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-bio-green/20 flex items-center justify-center">
                <Activity className="w-5 h-5 text-bio-green" />
              </div>
              <div>
                <p className="text-primary-foreground font-medium">Módulo BioSynthNet #001</p>
                <p className="text-water-medium text-sm">Online • Última atualização: agora</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-bio-green/20 border border-bio-green/30">
              <StatusIndicator status="good" />
              <span className="text-bio-green text-sm font-medium">Sistema Operacional</span>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {metrics.map((metric) => (
              <button
                key={metric.id}
                onClick={() => setActiveTab(metric.id as typeof activeTab)}
                className={`group p-5 rounded-2xl border transition-all duration-300 text-left ${
                  activeTab === metric.id
                    ? 'bg-white/10 border-accent/50 shadow-lg'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    activeTab === metric.id ? 'bg-accent' : 'bg-white/10'
                  }`}>
                    <metric.icon className={`w-5 h-5 ${
                      activeTab === metric.id ? 'text-primary-foreground' : 'text-water-medium'
                    }`} />
                  </div>
                  <div className="flex items-center gap-1">
                    <StatusIndicator status={metric.status as 'good' | 'warning' | 'critical'} />
                  </div>
                </div>
                
                <p className="text-water-medium text-sm mb-1">{metric.label}</p>
                <div className="flex items-end gap-2">
                  <p className="text-3xl font-display font-bold text-primary-foreground">
                    {metric.saida}
                  </p>
                  <span className="text-water-medium text-sm mb-1">{metric.unit}</span>
                  <div className="flex items-center gap-1 ml-auto">
                    <TrendIcon value={metric.trend} />
                  </div>
                </div>
                
                {metric.improvement && (
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <div className="flex justify-between text-sm">
                      <span className="text-water-medium">Melhoria</span>
                      <span className="text-bio-green font-medium">+{metric.improvement}%</span>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Main Chart Area */}
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Line Chart */}
            <div className="lg:col-span-3 bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground">
                    {activeMetric.label} - Últimas 60 minutos
                  </h3>
                  <p className="text-water-medium text-sm">Comparação entrada vs saída</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: activeMetric.color }} />
                    <span className="text-water-medium text-sm">Saída</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-water-medium/50" />
                    <span className="text-water-medium text-sm">Entrada</span>
                  </div>
                </div>
              </div>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  {activeTab === 'temperatura' ? (
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={activeMetric.color} stopOpacity={0.3} />
                          <stop offset="95%" stopColor={activeMetric.color} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis 
                        dataKey="time" 
                        stroke="rgba(255,255,255,0.3)" 
                        tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} 
                      />
                      <YAxis 
                        stroke="rgba(255,255,255,0.3)" 
                        tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                        domain={[18, 30]}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(210, 30%, 12%)', 
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '12px',
                          color: 'white'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="temperatura" 
                        stroke={activeMetric.color} 
                        strokeWidth={2}
                        fill="url(#tempGradient)"
                        animationDuration={500}
                      />
                    </AreaChart>
                  ) : (
                    <LineChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis 
                        dataKey="time" 
                        stroke="rgba(255,255,255,0.3)" 
                        tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                      />
                      <YAxis 
                        stroke="rgba(255,255,255,0.3)" 
                        tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(210, 30%, 12%)', 
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '12px',
                          color: 'white'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey={activeTab === 'ph' ? 'phEntrada' : 'turbidezEntrada'} 
                        stroke="rgba(255,255,255,0.3)" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={false}
                        animationDuration={500}
                      />
                      <Line 
                        type="monotone" 
                        dataKey={activeTab === 'ph' ? 'phSaida' : 'turbidezSaida'} 
                        stroke={activeMetric.color} 
                        strokeWidth={3}
                        dot={{ fill: activeMetric.color, strokeWidth: 0, r: 4 }}
                        activeDot={{ r: 6, fill: activeMetric.colorLight }}
                        animationDuration={500}
                      />
                    </LineChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>

            {/* Side Stats */}
            <div className="space-y-4">
              {/* Efficiency Gauge */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="text-water-medium text-sm mb-4">Eficiência de Remoção</h4>
                <div className="h-32 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart 
                      cx="50%" 
                      cy="50%" 
                      innerRadius="60%" 
                      outerRadius="100%" 
                      data={efficiencyData}
                      startAngle={180} 
                      endAngle={0}
                    >
                      <RadialBar
                        background={{ fill: 'rgba(255,255,255,0.1)' }}
                        dataKey="value"
                        cornerRadius={10}
                        animationDuration={1000}
                      />
                    </RadialBarChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center -mt-4">
                      <p className="text-3xl font-display font-bold text-accent">
                        {metrics[1].improvement}%
                      </p>
                      <p className="text-water-medium text-xs">Turbidez</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="text-water-medium text-sm mb-4">Resumo do Dia</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-water-medium text-sm">Volume tratado</span>
                    <span className="text-primary-foreground font-medium">47.5 L</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-water-medium text-sm">Ciclos completos</span>
                    <span className="text-primary-foreground font-medium">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-water-medium text-sm">Tempo de operação</span>
                    <span className="text-primary-foreground font-medium">6h 42m</span>
                  </div>
                </div>
              </div>

              {/* LED Indicators */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="text-water-medium text-sm mb-4">Status do Módulo</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-bio-green shadow-[0_0_10px_hsl(160,60%,40%)]" />
                    <span className="text-primary-foreground text-sm">Parâmetros normais</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-bio-green shadow-[0_0_10px_hsl(160,60%,40%)]" />
                    <span className="text-primary-foreground text-sm">Cartucho ativo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-bio-green shadow-[0_0_10px_hsl(160,60%,40%)]" />
                    <span className="text-primary-foreground text-sm">Conectividade OK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
