import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, RadialBarChart, RadialBar
} from "recharts";
import {
  ArrowLeft, Activity, Droplets, Thermometer, Eye, Zap, Bell,
  Settings, BarChart3, FileText, Home, Cpu, Wifi, WifiOff,
  TrendingUp, AlertTriangle, CheckCircle, RefreshCw, Download,
  Calendar, Clock, FileBarChart, Wrench
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Simulated modules
const modules = [
  { id: 1, name: "BioSynthNet #001", location: "Escola Municipal Centro", status: "online", efficiency: 87 },
  { id: 2, name: "BioSynthNet #002", location: "Comunidade Vila Verde", status: "online", efficiency: 92 },
  { id: 3, name: "BioSynthNet #003", location: "Laboratório UNESP", status: "online", efficiency: 95 },
  { id: 4, name: "BioSynthNet #004", location: "ONG Água Limpa", status: "offline", efficiency: 0 },
];

// Simulated history data (last 7 days)
const generateHistoryData = () => {
  const data = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    data.push({
      date: date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
      avgPh: (6.5 + Math.random() * 0.8).toFixed(2),
      avgTurbidity: Math.floor(8 + Math.random() * 15),
      cycles: Math.floor(10 + Math.random() * 15),
      efficiency: Math.floor(82 + Math.random() * 15),
      status: Math.random() > 0.2 ? "excellent" : Math.random() > 0.5 ? "good" : "regular",
    });
  }
  return data;
};

// Simulated reports data
const generateReports = (t: (key: string) => string) => [
  {
    id: 1,
    type: "monthly",
    title: t("demo.monthlyReport"),
    date: "15/01/2025",
    icon: Calendar,
    stats: { cycles: 342, efficiency: 89, water: "3.420L", uptime: "99.2%" }
  },
  {
    id: 2,
    type: "weekly",
    title: t("demo.weeklyReport"),
    date: "20/01/2025",
    icon: Clock,
    stats: { cycles: 87, efficiency: 91, water: "870L", uptime: "100%" }
  },
  {
    id: 3,
    type: "maintenance",
    title: t("demo.maintenanceReport"),
    date: "10/01/2025",
    icon: Wrench,
    stats: { cycles: 0, efficiency: 0, water: "0L", uptime: "N/A" }
  },
  {
    id: 4,
    type: "efficiency",
    title: t("demo.efficiencyReport"),
    date: "18/01/2025",
    icon: FileBarChart,
    stats: { cycles: 156, efficiency: 94, water: "1.560L", uptime: "98.5%" }
  },
];

// Weekly performance chart data
const weeklyPerformanceData = [
  { day: "Seg", efficiency: 88, cycles: 14 },
  { day: "Ter", efficiency: 92, cycles: 16 },
  { day: "Qua", efficiency: 85, cycles: 12 },
  { day: "Qui", efficiency: 94, cycles: 18 },
  { day: "Sex", efficiency: 91, cycles: 15 },
  { day: "Sáb", efficiency: 89, cycles: 13 },
  { day: "Dom", efficiency: 87, cycles: 11 },
];

const generateData = () => {
  const now = new Date();
  const data = [];
  for (let i = 23; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60 * 60000);
    data.push({
      time: time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      ph: 6.5 + Math.random() * 1,
      turbidity: 10 + Math.random() * 20,
      temperature: 22 + Math.random() * 4,
    });
  }
  return data;
};

const Demo = () => {
  const { t } = useLanguage();
  const [selectedModule, setSelectedModule] = useState<number | null>(1);
  const [data, setData] = useState(generateData());
  const [activeView, setActiveView] = useState<"overview" | "history" | "reports">("overview");
  const [historyData] = useState(generateHistoryData());
  const reports = generateReports(t);
  const [notifications] = useState([
    { id: 1, type: "success", message: "Módulo #001 calibrado com sucesso", time: "5 min" },
    { id: 2, type: "warning", message: "Turbidez elevada detectada no #002", time: "1h" },
    { id: 3, type: "info", message: "Novo relatório disponível", time: "2h" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newPoint = {
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
          ph: 6.5 + Math.random() * 1,
          turbidity: 10 + Math.random() * 20,
          temperature: 22 + Math.random() * 4,
        };
        return [...prev.slice(1), newPoint];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const selectedModuleData = modules.find(m => m.id === selectedModule);

  const efficiencyData = [
    { name: 'Efficiency', value: selectedModuleData?.efficiency || 0, fill: 'hsl(175, 65%, 45%)' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-bio-green bg-bio-green/20";
      case "good": return "text-accent bg-accent/20";
      default: return "text-amber-500 bg-amber-500/20";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "excellent": return t("demo.excellent");
      case "good": return t("demo.good");
      default: return t("demo.regular");
    }
  };

  return (
    <div className="min-h-screen bg-water-deep flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-72 bg-card/10 backdrop-blur-xl border-r border-white/10 flex flex-col"
      >
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
              <Droplets className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display font-semibold text-primary-foreground">BioSynthNet</h1>
              <p className="text-xs text-water-medium">{t("demo.sidebarTitle")}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {[
              { id: "overview" as const, icon: Home, label: t("demo.overview") },
              { id: "history" as const, icon: BarChart3, label: t("demo.history") },
              { id: "reports" as const, icon: FileText, label: t("demo.reports") },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeView === item.id
                    ? "bg-accent text-primary-foreground"
                    : "text-water-medium hover:bg-white/10 hover:text-primary-foreground"
                }`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Modules List */}
          <div className="mt-8">
            <h3 className="text-xs font-semibold text-water-medium uppercase tracking-wider px-4 mb-3">
              {t("demo.allModules")}
            </h3>
            <div className="space-y-2">
              {modules.map((module) => (
                <motion.button
                  key={module.id}
                  onClick={() => setSelectedModule(module.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                    selectedModule === module.id
                      ? "bg-white/10 border border-accent/30"
                      : "hover:bg-white/5"
                  }`}
                  whileHover={{ x: 5 }}
                >
                  <div className={`w-2 h-2 rounded-full ${
                    module.status === "online" ? "bg-bio-green" : "bg-destructive"
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-primary-foreground truncate">{module.name}</p>
                    <p className="text-xs text-water-medium truncate">{module.location}</p>
                  </div>
                  {module.status === "online" ? (
                    <Wifi className="w-4 h-4 text-bio-green" />
                  ) : (
                    <WifiOff className="w-4 h-4 text-destructive" />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <LanguageSelector variant="light" />
          <Link to="/">
            <Button variant="heroOutline" className="w-full mt-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t("demo.back")}
            </Button>
          </Link>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-water-deep/80 backdrop-blur-xl border-b border-white/10 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-foreground">
                {t("demo.title")}
              </h2>
              <p className="text-water-medium text-sm">
                {modules.filter(m => m.status === "online").length} {t("demo.onlineModules")}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <motion.button
                className="relative p-2 rounded-xl bg-white/10 text-water-medium hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full text-[10px] font-bold flex items-center justify-center text-white">
                  3
                </span>
              </motion.button>
              <motion.button
                className="p-2 rounded-xl bg-white/10 text-water-medium hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Settings className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            {activeView === "overview" && selectedModuleData && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* Module Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center"
                      animate={{ boxShadow: selectedModuleData.status === "online" 
                        ? ["0 0 0 0 rgba(0, 150, 136, 0)", "0 0 0 15px rgba(0, 150, 136, 0.2)", "0 0 0 0 rgba(0, 150, 136, 0)"]
                        : "none"
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Cpu className="w-7 h-7 text-primary-foreground" />
                    </motion.div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-primary-foreground">
                        {selectedModuleData.name}
                      </h3>
                      <p className="text-water-medium">{selectedModuleData.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                        selectedModuleData.status === "online"
                          ? "bg-bio-green/20 border border-bio-green/30"
                          : "bg-destructive/20 border border-destructive/30"
                      }`}
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.div
                        className={`w-2 h-2 rounded-full ${
                          selectedModuleData.status === "online" ? "bg-bio-green" : "bg-destructive"
                        }`}
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <span className={`text-sm font-medium ${
                        selectedModuleData.status === "online" ? "text-bio-green" : "text-destructive"
                      }`}>
                        {selectedModuleData.status === "online" ? "Online" : "Offline"}
                      </span>
                    </motion.div>
                    <Button variant="hero" size="sm">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Sync
                    </Button>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { label: "pH", value: data[data.length - 1]?.ph.toFixed(2) || "0", icon: Droplets, color: "hsl(185, 70%, 35%)" },
                    { label: t("dashboard.turbidity"), value: `${data[data.length - 1]?.turbidity.toFixed(0) || "0"} NTU`, icon: Eye, color: "hsl(175, 65%, 45%)" },
                    { label: t("dashboard.temperature"), value: `${data[data.length - 1]?.temperature.toFixed(1) || "0"}°C`, icon: Thermometer, color: "hsl(160, 60%, 40%)" },
                    { label: t("dashboard.avgEfficiency"), value: `${selectedModuleData.efficiency}%`, icon: TrendingUp, color: "hsl(145, 70%, 45%)" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${stat.color}20` }}
                        >
                          <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                        </div>
                        <Zap className="w-4 h-4 text-bio-green" />
                      </div>
                      <p className="text-water-medium text-sm">{stat.label}</p>
                      <motion.p
                        className="text-2xl font-display font-bold text-primary-foreground"
                        key={stat.value}
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                      >
                        {stat.value}
                      </motion.p>
                    </motion.div>
                  ))}
                </div>

                {/* Charts Section */}
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Main Chart */}
                  <motion.div
                    className="lg:col-span-2 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
                      {t("dashboard.history")} - {t("dashboard.last60min")}
                    </h4>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                          <defs>
                            <linearGradient id="phGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(185, 70%, 35%)" stopOpacity={0.3} />
                              <stop offset="95%" stopColor="hsl(185, 70%, 35%)" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                          <XAxis dataKey="time" stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} />
                          <YAxis stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} />
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
                            dataKey="ph"
                            stroke="hsl(185, 70%, 35%)"
                            strokeWidth={2}
                            fill="url(#phGrad)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>

                  {/* Efficiency Gauge & Notifications */}
                  <div className="space-y-4">
                    <motion.div
                      className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
                        {t("dashboard.treatmentEfficiency")}
                      </h4>
                      <div className="h-40">
                        <ResponsiveContainer width="100%" height="100%">
                          <RadialBarChart
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
                            />
                          </RadialBarChart>
                        </ResponsiveContainer>
                      </div>
                      <p className="text-center text-3xl font-display font-bold text-accent">
                        {selectedModuleData.efficiency}%
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
                        {t("demo.notifications")}
                      </h4>
                      <div className="space-y-3">
                        {notifications.map((notif) => (
                          <motion.div
                            key={notif.id}
                            className="flex items-start gap-3 p-3 rounded-xl bg-white/5"
                            whileHover={{ x: 5 }}
                          >
                            {notif.type === "success" && <CheckCircle className="w-5 h-5 text-bio-green mt-0.5" />}
                            {notif.type === "warning" && <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5" />}
                            {notif.type === "info" && <Activity className="w-5 h-5 text-accent mt-0.5" />}
                            <div className="flex-1">
                              <p className="text-sm text-primary-foreground">{notif.message}</p>
                              <p className="text-xs text-water-medium">{notif.time}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeView === "history" && (
              <motion.div
                key="history"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-primary-foreground">
                      {t("demo.historyTitle")}
                    </h3>
                    <p className="text-water-medium">{t("demo.last7Days")}</p>
                  </div>
                  <Button variant="hero" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    {t("demo.download")}
                  </Button>
                </div>

                {/* History Table */}
                <motion.div
                  className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10 hover:bg-white/5">
                        <TableHead className="text-water-medium">{t("demo.date")}</TableHead>
                        <TableHead className="text-water-medium">{t("demo.avgPh")}</TableHead>
                        <TableHead className="text-water-medium">{t("demo.avgTurbidity")}</TableHead>
                        <TableHead className="text-water-medium">{t("demo.cycles")}</TableHead>
                        <TableHead className="text-water-medium">{t("demo.efficiency")}</TableHead>
                        <TableHead className="text-water-medium">{t("demo.status")}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {historyData.map((row, index) => (
                        <motion.tr
                          key={row.date}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-white/10 hover:bg-white/5"
                        >
                          <TableCell className="text-primary-foreground font-medium">{row.date}</TableCell>
                          <TableCell className="text-primary-foreground">{row.avgPh}</TableCell>
                          <TableCell className="text-primary-foreground">{row.avgTurbidity} NTU</TableCell>
                          <TableCell className="text-primary-foreground">{row.cycles}</TableCell>
                          <TableCell className="text-primary-foreground">{row.efficiency}%</TableCell>
                          <TableCell>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(row.status)}`}>
                              {getStatusText(row.status)}
                            </span>
                          </TableCell>
                        </motion.tr>
                      ))}
                    </TableBody>
                  </Table>
                </motion.div>

                {/* Performance Chart */}
                <motion.div
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
                    {t("demo.performanceChart")}
                  </h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={weeklyPerformanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="day" stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} />
                        <YAxis stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'hsl(210, 30%, 12%)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            color: 'white'
                          }}
                        />
                        <Bar dataKey="efficiency" fill="hsl(175, 65%, 45%)" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="cycles" fill="hsl(185, 70%, 35%)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeView === "reports" && (
              <motion.div
                key="reports"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary-foreground">
                    {t("demo.reportsTitle")}
                  </h3>
                  <p className="text-water-medium">{selectedModuleData?.name}</p>
                </div>

                {/* Reports Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {reports.map((report, index) => (
                    <motion.div
                      key={report.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-accent/30 transition-all group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                            <report.icon className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                            <h4 className="font-display font-semibold text-primary-foreground">{report.title}</h4>
                            <p className="text-xs text-water-medium">{t("demo.generated")} {report.date}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-white/5 rounded-lg p-3">
                          <p className="text-xs text-water-medium">{t("demo.totalCycles")}</p>
                          <p className="text-lg font-bold text-primary-foreground">{report.stats.cycles}</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <p className="text-xs text-water-medium">{t("demo.avgEfficiency")}</p>
                          <p className="text-lg font-bold text-primary-foreground">{report.stats.efficiency}%</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <p className="text-xs text-water-medium">{t("demo.waterTreated")}</p>
                          <p className="text-lg font-bold text-primary-foreground">{report.stats.water}</p>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3">
                          <p className="text-xs text-water-medium">{t("demo.uptime")}</p>
                          <p className="text-lg font-bold text-primary-foreground">{report.stats.uptime}</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="hero" size="sm" className="flex-1">
                          <Eye className="w-4 h-4 mr-2" />
                          {t("demo.view")}
                        </Button>
                        <Button variant="heroOutline" size="sm" className="flex-1">
                          <Download className="w-4 h-4 mr-2" />
                          PDF
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Summary Chart */}
                <motion.div
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
                    {t("demo.performanceChart")}
                  </h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={weeklyPerformanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="day" stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} />
                        <YAxis stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'hsl(210, 30%, 12%)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '12px',
                            color: 'white'
                          }}
                        />
                        <Line type="monotone" dataKey="efficiency" stroke="hsl(175, 65%, 45%)" strokeWidth={3} dot={{ fill: 'hsl(175, 65%, 45%)' }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeView === "overview" && !selectedModuleData && (
              <motion.div
                key="no-module"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center h-96"
              >
                <p className="text-water-medium">{t("demo.selectModule")}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Demo;
