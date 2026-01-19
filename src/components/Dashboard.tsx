import { useState, useEffect, useRef } from "react";
import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, RadialBarChart, RadialBar
} from "recharts";
import { Activity, Droplets, Thermometer, Eye, TrendingUp, TrendingDown, Minus, Zap } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

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
    <motion.span 
      className={`inline-block w-2 h-2 rounded-full ${colors[status]}`}
      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
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
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

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
    }, 3000);
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
    <section ref={containerRef} className="py-24 bg-water-deep relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6"
          >
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Monitoramento Live</span>
          </motion.div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6">
            Plataforma de 
            <span className="text-accent"> Dados em Tempo Real</span>
          </h2>
          <p className="text-water-medium text-lg leading-relaxed">
            Visualize o desempenho do sistema com gráficos atualizados automaticamente. 
            Compare parâmetros antes e depois do tratamento biológico.
          </p>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-card/10 backdrop-blur-xl rounded-3xl border border-white/10 p-6 lg:p-8 shadow-elevated"
        >
          {/* Status Bar */}
          <motion.div 
            className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <motion.div 
                className="w-10 h-10 rounded-xl bg-bio-green/20 flex items-center justify-center"
                animate={{ boxShadow: ["0 0 0 0 rgba(0, 150, 136, 0)", "0 0 0 10px rgba(0, 150, 136, 0.2)", "0 0 0 0 rgba(0, 150, 136, 0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Activity className="w-5 h-5 text-bio-green" />
              </motion.div>
              <div>
                <p className="text-primary-foreground font-medium">Módulo BioSynthNet #001</p>
                <p className="text-water-medium text-sm">Online • Última atualização: agora</p>
              </div>
            </div>
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-bio-green/20 border border-bio-green/30"
              whileHover={{ scale: 1.05 }}
            >
              <StatusIndicator status="good" />
              <span className="text-bio-green text-sm font-medium">Sistema Operacional</span>
            </motion.div>
          </motion.div>

          {/* Metrics Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {metrics.map((metric, index) => (
              <motion.button
                key={metric.id}
                onClick={() => setActiveTab(metric.id as typeof activeTab)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`group p-5 rounded-2xl border transition-all duration-300 text-left relative overflow-hidden ${
                  activeTab === metric.id
                    ? 'bg-white/10 border-accent/50 shadow-lg'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {/* Active indicator line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-hero"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeTab === metric.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      activeTab === metric.id ? 'bg-accent' : 'bg-white/10'
                    }`}
                    whileHover={{ rotate: 10 }}
                  >
                    <metric.icon className={`w-5 h-5 ${
                      activeTab === metric.id ? 'text-primary-foreground' : 'text-water-medium'
                    }`} />
                  </motion.div>
                  <StatusIndicator status={metric.status as 'good' | 'warning' | 'critical'} />
                </div>
                
                <p className="text-water-medium text-sm mb-1">{metric.label}</p>
                <div className="flex items-end gap-2">
                  <motion.p 
                    className="text-3xl font-display font-bold text-primary-foreground"
                    key={metric.saida}
                    initial={{ opacity: 0.5, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {metric.saida}
                  </motion.p>
                  <span className="text-water-medium text-sm mb-1">{metric.unit}</span>
                  <div className="flex items-center gap-1 ml-auto">
                    <TrendIcon value={metric.trend} />
                  </div>
                </div>
                
                {metric.improvement && (
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <div className="flex justify-between text-sm">
                      <span className="text-water-medium">Melhoria</span>
                      <motion.span 
                        className="text-bio-green font-medium"
                        key={metric.improvement}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        +{metric.improvement}%
                      </motion.span>
                    </div>
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Main Chart Area */}
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Line Chart */}
            <motion.div 
              className="lg:col-span-3 bg-white/5 rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground">
                    {activeMetric.label} - Últimos 60 minutos
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
            </motion.div>

            {/* Side Stats */}
            <div className="space-y-4">
              {/* Efficiency Gauge */}
              <motion.div 
                className="bg-white/5 rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
              >
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
                      <motion.p 
                        className="text-3xl font-display font-bold text-accent"
                        key={metrics[1].improvement}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                      >
                        {metrics[1].improvement}%
                      </motion.p>
                      <p className="text-water-medium text-xs">Turbidez</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div 
                className="bg-white/5 rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-water-medium text-sm mb-4">Resumo do Dia</h4>
                <div className="space-y-4">
                  {[
                    { label: "Volume tratado", value: "47.5 L" },
                    { label: "Ciclos completos", value: "8" },
                    { label: "Tempo de operação", value: "6h 42m" },
                  ].map((stat, i) => (
                    <motion.div 
                      key={stat.label}
                      className="flex justify-between items-center"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.9 + i * 0.1 }}
                    >
                      <span className="text-water-medium text-sm">{stat.label}</span>
                      <span className="text-primary-foreground font-medium">{stat.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* LED Indicators */}
              <motion.div 
                className="bg-white/5 rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-water-medium text-sm mb-4">Status do Módulo</h4>
                <div className="space-y-3">
                  {[
                    "Parâmetros normais",
                    "Cartucho ativo",
                    "Conectividade OK"
                  ].map((status, i) => (
                    <motion.div 
                      key={status}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + i * 0.1 }}
                    >
                      <motion.div 
                        className="w-4 h-4 rounded-full bg-bio-green"
                        animate={{ 
                          boxShadow: ["0 0 5px hsl(160,60%,40%)", "0 0 15px hsl(160,60%,40%)", "0 0 5px hsl(160,60%,40%)"]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                      <span className="text-primary-foreground text-sm">{status}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
