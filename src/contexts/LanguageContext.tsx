import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "pt" | "en" | "es";

type Translations = {
  [key: string]: {
    pt: string;
    en: string;
    es: string;
  };
};

export const translations: Translations = {
  // Navbar
  "nav.about": {
    pt: "Sobre",
    en: "About",
    es: "Acerca",
  },
  "nav.howItWorks": {
    pt: "Como Funciona",
    en: "How It Works",
    es: "Cómo Funciona",
  },
  "nav.platform": {
    pt: "Plataforma",
    en: "Platform",
    es: "Plataforma",
  },
  "nav.specs": {
    pt: "Especificações",
    en: "Specifications",
    es: "Especificaciones",
  },
  "nav.contact": {
    pt: "Contato",
    en: "Contact",
    es: "Contacto",
  },
  "nav.start": {
    pt: "Começar",
    en: "Get Started",
    es: "Empezar",
  },

  // Hero
  "hero.badge": {
    pt: "Tecnologia Ambiental Sustentável",
    en: "Sustainable Environmental Technology",
    es: "Tecnología Ambiental Sostenible",
  },
  "hero.subtitle": {
    pt: "Sistema modular de tratamento de água integrando bioremediação com monitoramento ambiental em tempo real. Transformando processos biológicos invisíveis em informações acessíveis.",
    en: "Modular water treatment system integrating bioremediation with real-time environmental monitoring. Transforming invisible biological processes into accessible information.",
    es: "Sistema modular de tratamiento de agua que integra biorremediación con monitoreo ambiental en tiempo real. Transformando procesos biológicos invisibles en información accesible.",
  },
  "hero.learnMore": {
    pt: "Saiba Mais",
    en: "Learn More",
    es: "Saber Más",
  },
  "hero.viewPlatform": {
    pt: "Ver Plataforma",
    en: "View Platform",
    es: "Ver Plataforma",
  },
  "hero.monitoring": {
    pt: "Monitoramento",
    en: "Monitoring",
    es: "Monitoreo",
  },
  "hero.realTime": {
    pt: "Tempo Real",
    en: "Real Time",
    es: "Tiempo Real",
  },
  "hero.connectivity": {
    pt: "Conectividade",
    en: "Connectivity",
    es: "Conectividad",
  },
  "hero.scroll": {
    pt: "Scroll",
    en: "Scroll",
    es: "Scroll",
  },

  // Features
  "features.label": {
    pt: "Funcionalidades",
    en: "Features",
    es: "Funcionalidades",
  },
  "features.title1": {
    pt: "Tecnologia que Une",
    en: "Technology that Unites",
    es: "Tecnología que Une",
  },
  "features.title2": {
    pt: "Biologia e Digital",
    en: "Biology and Digital",
    es: "Biología y Digital",
  },
  "features.description": {
    pt: "O BioSynthNet Module™ integra processos biológicos avançados com monitoramento digital acessível, oferecendo uma solução sustentável e educativa.",
    en: "BioSynthNet Module™ integrates advanced biological processes with accessible digital monitoring, offering a sustainable and educational solution.",
    es: "BioSynthNet Module™ integra procesos biológicos avanzados con monitoreo digital accesible, ofreciendo una solución sostenible y educativa.",
  },
  "features.bioremediation.title": {
    pt: "Bioremediação Ativa",
    en: "Active Bioremediation",
    es: "Biorremediación Activa",
  },
  "features.bioremediation.desc": {
    pt: "Consórcio de fungos (Trametes versicolor) e bactérias (Bacillus subtilis) para degradação de poluentes orgânicos.",
    en: "Consortium of fungi (Trametes versicolor) and bacteria (Bacillus subtilis) for organic pollutant degradation.",
    es: "Consorcio de hongos (Trametes versicolor) y bacterias (Bacillus subtilis) para la degradación de contaminantes orgánicos.",
  },
  "features.monitoring.title": {
    pt: "Monitoramento pH",
    en: "pH Monitoring",
    es: "Monitoreo de pH",
  },
  "features.monitoring.desc": {
    pt: "Sensores de baixo custo monitoram pH, turbidez e temperatura antes e depois do tratamento.",
    en: "Low-cost sensors monitor pH, turbidity, and temperature before and after treatment.",
    es: "Sensores de bajo costo monitorean pH, turbidez y temperatura antes y después del tratamiento.",
  },
  "features.realtime.title": {
    pt: "Análise em Tempo Real",
    en: "Real-Time Analysis",
    es: "Análisis en Tiempo Real",
  },
  "features.realtime.desc": {
    pt: "Dados enviados para plataforma web, permitindo acompanhar o desempenho do sistema remotamente.",
    en: "Data sent to web platform, allowing remote system performance monitoring.",
    es: "Datos enviados a la plataforma web, permitiendo monitorear el rendimiento del sistema de forma remota.",
  },
  "features.biosafety.title": {
    pt: "Biossegurança",
    en: "Biosafety",
    es: "Bioseguridad",
  },
  "features.biosafety.desc": {
    pt: "Microrganismos não patogênicos imobilizados em matriz biodegradável, impedindo liberação no ambiente.",
    en: "Non-pathogenic microorganisms immobilized in biodegradable matrix, preventing environmental release.",
    es: "Microorganismos no patógenos inmovilizados en matriz biodegradable, evitando la liberación al ambiente.",
  },
  "features.cartridge.title": {
    pt: "Cartucho Substituível",
    en: "Replaceable Cartridge",
    es: "Cartucho Reemplazable",
  },
  "features.cartridge.desc": {
    pt: "Sistema modular com cartuchos biológicos de fácil substituição, sem contato direto com os microrganismos.",
    en: "Modular system with easily replaceable biological cartridges, no direct contact with microorganisms.",
    es: "Sistema modular con cartuchos biológicos de fácil reemplazo, sin contacto directo con microorganismos.",
  },
  "features.iot.title": {
    pt: "Conectividade IoT",
    en: "IoT Connectivity",
    es: "Conectividad IoT",
  },
  "features.iot.desc": {
    pt: "Comunicação via MQTT ou HTTP com Arduino/ESP32 para integração em rede distribuída.",
    en: "MQTT or HTTP communication with Arduino/ESP32 for distributed network integration.",
    es: "Comunicación vía MQTT o HTTP con Arduino/ESP32 para integración en red distribuida.",
  },

  // How It Works
  "howItWorks.label": {
    pt: "Processo",
    en: "Process",
    es: "Proceso",
  },
  "howItWorks.title": {
    pt: "Como",
    en: "How It",
    es: "Cómo",
  },
  "howItWorks.title2": {
    pt: "Funciona",
    en: "Works",
    es: "Funciona",
  },
  "howItWorks.description": {
    pt: "Um fluxo integrado que combina filtragem física, tratamento biológico e monitoramento digital para resultados transparentes.",
    en: "An integrated flow combining physical filtration, biological treatment, and digital monitoring for transparent results.",
    es: "Un flujo integrado que combina filtración física, tratamiento biológico y monitoreo digital para resultados transparentes.",
  },
  "howItWorks.step1.title": {
    pt: "Captação da Água",
    en: "Water Intake",
    es: "Captación del Agua",
  },
  "howItWorks.step1.desc": {
    pt: "A água é inserida no sistema por gravidade ou bombeamento. Sensores registram pH, turbidez e temperatura de referência.",
    en: "Water enters the system by gravity or pumping. Sensors record reference pH, turbidity, and temperature.",
    es: "El agua ingresa al sistema por gravedad o bombeo. Los sensores registran pH, turbidez y temperatura de referencia.",
  },
  "howItWorks.step1.highlight": {
    pt: "Medição inicial",
    en: "Initial measurement",
    es: "Medición inicial",
  },
  "howItWorks.step2.title": {
    pt: "Pré-filtragem Física",
    en: "Physical Pre-filtration",
    es: "Pre-filtración Física",
  },
  "howItWorks.step2.desc": {
    pt: "Camada de algodão ou fibras naturais remove partículas sólidas maiores, protegendo o cartucho biológico.",
    en: "Cotton or natural fiber layer removes larger solid particles, protecting the biological cartridge.",
    es: "Capa de algodón o fibras naturales elimina partículas sólidas más grandes, protegiendo el cartucho biológico.",
  },
  "howItWorks.step2.highlight": {
    pt: "Proteção do sistema",
    en: "System protection",
    es: "Protección del sistema",
  },
  "howItWorks.step3.title": {
    pt: "Tratamento Biológico",
    en: "Biological Treatment",
    es: "Tratamiento Biológico",
  },
  "howItWorks.step3.desc": {
    pt: "No cartucho, o consórcio de Trametes versicolor e Bacillus subtilis degrada poluentes orgânicos através de enzimas ligninolíticas.",
    en: "In the cartridge, the consortium of Trametes versicolor and Bacillus subtilis degrades organic pollutants through ligninolytic enzymes.",
    es: "En el cartucho, el consorcio de Trametes versicolor y Bacillus subtilis degrada contaminantes orgánicos mediante enzimas ligninolíticas.",
  },
  "howItWorks.step3.highlight": {
    pt: "Core do sistema",
    en: "System core",
    es: "Núcleo del sistema",
  },
  "howItWorks.step4.title": {
    pt: "Polimento Final",
    en: "Final Polishing",
    es: "Pulido Final",
  },
  "howItWorks.step4.desc": {
    pt: "Camada opcional de areia fina ou carvão vegetal estabiliza a aparência visual e reduz turbidez remanescente.",
    en: "Optional fine sand or charcoal layer stabilizes visual appearance and reduces remaining turbidity.",
    es: "Capa opcional de arena fina o carbón vegetal estabiliza la apariencia visual y reduce la turbidez restante.",
  },
  "howItWorks.step4.highlight": {
    pt: "Opcional",
    en: "Optional",
    es: "Opcional",
  },
  "howItWorks.step5.title": {
    pt: "Medição Pós-Tratamento",
    en: "Post-Treatment Measurement",
    es: "Medición Post-Tratamiento",
  },
  "howItWorks.step5.desc": {
    pt: "Os mesmos sensores registram novamente os parâmetros, permitindo calcular a eficácia do tratamento.",
    en: "The same sensors record parameters again, allowing calculation of treatment effectiveness.",
    es: "Los mismos sensores registran nuevamente los parámetros, permitiendo calcular la eficacia del tratamiento.",
  },
  "howItWorks.step5.highlight": {
    pt: "Comparação de dados",
    en: "Data comparison",
    es: "Comparación de datos",
  },
  "howItWorks.step6.title": {
    pt: "Visualização Digital",
    en: "Digital Visualization",
    es: "Visualización Digital",
  },
  "howItWorks.step6.desc": {
    pt: "Dados são processados pelo microcontrolador e enviados para a plataforma web com gráficos e alertas.",
    en: "Data is processed by the microcontroller and sent to the web platform with charts and alerts.",
    es: "Los datos son procesados por el microcontrolador y enviados a la plataforma web con gráficos y alertas.",
  },
  "howItWorks.step6.highlight": {
    pt: "Monitoramento IoT",
    en: "IoT Monitoring",
    es: "Monitoreo IoT",
  },

  // Dashboard
  "dashboard.badge": {
    pt: "Monitoramento Live",
    en: "Live Monitoring",
    es: "Monitoreo en Vivo",
  },
  "dashboard.title1": {
    pt: "Plataforma de",
    en: "Real-Time",
    es: "Plataforma de",
  },
  "dashboard.title2": {
    pt: "Dados em Tempo Real",
    en: "Data Platform",
    es: "Datos en Tiempo Real",
  },
  "dashboard.description": {
    pt: "Visualize o desempenho do sistema com gráficos atualizados automaticamente. Compare parâmetros antes e depois do tratamento biológico.",
    en: "Visualize system performance with automatically updated charts. Compare parameters before and after biological treatment.",
    es: "Visualiza el rendimiento del sistema con gráficos actualizados automáticamente. Compara parámetros antes y después del tratamiento biológico.",
  },
  "dashboard.module": {
    pt: "Módulo BioSynthNet #001",
    en: "BioSynthNet Module #001",
    es: "Módulo BioSynthNet #001",
  },
  "dashboard.online": {
    pt: "Online • Última atualização: agora",
    en: "Online • Last update: now",
    es: "En línea • Última actualización: ahora",
  },
  "dashboard.operational": {
    pt: "Sistema Operacional",
    en: "System Operational",
    es: "Sistema Operativo",
  },
  "dashboard.ph": {
    pt: "pH",
    en: "pH",
    es: "pH",
  },
  "dashboard.turbidity": {
    pt: "Turbidez",
    en: "Turbidity",
    es: "Turbidez",
  },
  "dashboard.temperature": {
    pt: "Temperatura",
    en: "Temperature",
    es: "Temperatura",
  },
  "dashboard.improvement": {
    pt: "Melhoria",
    en: "Improvement",
    es: "Mejora",
  },
  "dashboard.last60min": {
    pt: "Últimos 60 minutos",
    en: "Last 60 minutes",
    es: "Últimos 60 minutos",
  },
  "dashboard.history": {
    pt: "Histórico",
    en: "History",
    es: "Historial",
  },
  "dashboard.comparison": {
    pt: "Comparação entrada vs saída",
    en: "Input vs output comparison",
    es: "Comparación entrada vs salida",
  },
  "dashboard.output": {
    pt: "Saída",
    en: "Output",
    es: "Salida",
  },
  "dashboard.input": {
    pt: "Entrada",
    en: "Input",
    es: "Entrada",
  },
  "dashboard.treatmentEfficiency": {
    pt: "Eficiência do Tratamento",
    en: "Treatment Efficiency",
    es: "Eficiencia del Tratamiento",
  },
  "dashboard.turbidityReduction": {
    pt: "Redução de turbidez",
    en: "Turbidity reduction",
    es: "Reducción de turbidez",
  },
  "dashboard.dailyStats": {
    pt: "Estatísticas do Dia",
    en: "Daily Statistics",
    es: "Estadísticas del Día",
  },
  "dashboard.cyclesCompleted": {
    pt: "Ciclos Completados",
    en: "Cycles Completed",
    es: "Ciclos Completados",
  },
  "dashboard.avgEfficiency": {
    pt: "Eficiência Média",
    en: "Avg Efficiency",
    es: "Eficiencia Promedio",
  },
  "dashboard.uptime": {
    pt: "Tempo Ativo",
    en: "Uptime",
    es: "Tiempo Activo",
  },
  "dashboard.alerts": {
    pt: "Alertas",
    en: "Alerts",
    es: "Alertas",
  },
  "dashboard.tryDemo": {
    pt: "Experimente a Demonstração",
    en: "Try the Demo",
    es: "Prueba la Demostración",
  },
  "dashboard.accessDemo": {
    pt: "Acesse a plataforma completa de demonstração",
    en: "Access the full demo platform",
    es: "Accede a la plataforma de demostración completa",
  },
  "dashboard.openDemo": {
    pt: "Abrir Demo",
    en: "Open Demo",
    es: "Abrir Demo",
  },

  // Specifications
  "specs.label": {
    pt: "Especificações",
    en: "Specifications",
    es: "Especificaciones",
  },
  "specs.title1": {
    pt: "Detalhes",
    en: "Technical",
    es: "Detalles",
  },
  "specs.title2": {
    pt: "Técnicos",
    en: "Details",
    es: "Técnicos",
  },
  "specs.systemSpecs": {
    pt: "Especificações do Sistema",
    en: "System Specifications",
    es: "Especificaciones del Sistema",
  },
  "specs.volume": {
    pt: "Volume tratado",
    en: "Treated volume",
    es: "Volumen tratado",
  },
  "specs.volumeValue": {
    pt: "5-10 L por ciclo",
    en: "5-10 L per cycle",
    es: "5-10 L por ciclo",
  },
  "specs.flowType": {
    pt: "Tipo de fluxo",
    en: "Flow type",
    es: "Tipo de flujo",
  },
  "specs.flowTypeValue": {
    pt: "Contínuo por gravidade ou batelada",
    en: "Continuous gravity or batch",
    es: "Continuo por gravedad o por lotes",
  },
  "specs.sensors": {
    pt: "Sensores",
    en: "Sensors",
    es: "Sensores",
  },
  "specs.sensorsValue": {
    pt: "pH, Turbidez, Temperatura",
    en: "pH, Turbidity, Temperature",
    es: "pH, Turbidez, Temperatura",
  },
  "specs.microcontroller": {
    pt: "Microcontrolador",
    en: "Microcontroller",
    es: "Microcontrolador",
  },
  "specs.connectivity": {
    pt: "Conectividade",
    en: "Connectivity",
    es: "Conectividad",
  },
  "specs.maintenance": {
    pt: "Manutenção",
    en: "Maintenance",
    es: "Mantenimiento",
  },
  "specs.maintenanceValue": {
    pt: "Substituição periódica do cartucho",
    en: "Periodic cartridge replacement",
    es: "Reemplazo periódico del cartucho",
  },
  "specs.bioConsortium": {
    pt: "Consórcio Biológico",
    en: "Biological Consortium",
    es: "Consorcio Biológico",
  },
  "specs.fungus": {
    pt: "Fungo",
    en: "Fungus",
    es: "Hongo",
  },
  "specs.bacteria": {
    pt: "Bactéria",
    en: "Bacteria",
    es: "Bacteria",
  },
  "specs.trametesFn": {
    pt: "Degradação enzimática de compostos orgânicos complexos através de enzimas ligninolíticas (laccases, peroxidases)",
    en: "Enzymatic degradation of complex organic compounds through ligninolytic enzymes (laccases, peroxidases)",
    es: "Degradación enzimática de compuestos orgánicos complejos mediante enzimas ligninolíticas (lacasas, peroxidasas)",
  },
  "specs.bacillusFn": {
    pt: "Estabilização do biofilme, produção de enzimas hidrolíticas e competição com microrganismos indesejáveis",
    en: "Biofilm stabilization, hydrolytic enzyme production, and competition with unwanted microorganisms",
    es: "Estabilización del biofilm, producción de enzimas hidrolíticas y competencia con microorganismos no deseados",
  },
  "specs.capabilities": {
    pt: "Capacidades e Limitações",
    en: "Capabilities and Limitations",
    es: "Capacidades y Limitaciones",
  },
  "specs.capabilitiesDesc": {
    pt: "Transparência sobre o que o sistema pode e não pode fazer.",
    en: "Transparency about what the system can and cannot do.",
    es: "Transparencia sobre lo que el sistema puede y no puede hacer.",
  },
  "specs.turbidityReduction": {
    pt: "Redução de turbidez",
    en: "Turbidity reduction",
    es: "Reducción de turbidez",
  },
  "specs.phStabilization": {
    pt: "Estabilização de pH",
    en: "pH stabilization",
    es: "Estabilización de pH",
  },
  "specs.organicDegradation": {
    pt: "Degradação de matéria orgânica",
    en: "Organic matter degradation",
    es: "Degradación de materia orgánica",
  },
  "specs.realTimeMonitoring": {
    pt: "Monitoramento em tempo real",
    en: "Real-time monitoring",
    es: "Monitoreo en tiempo real",
  },
  "specs.iotNetwork": {
    pt: "Rede distribuída IoT",
    en: "Distributed IoT network",
    es: "Red distribuida IoT",
  },
  "specs.fullPotabilization": {
    pt: "Potabilização completa",
    en: "Complete potabilization",
    es: "Potabilización completa",
  },
  "specs.heavyMetals": {
    pt: "Remoção de metais pesados",
    en: "Heavy metal removal",
    es: "Eliminación de metales pesados",
  },
  "specs.industrialReplacement": {
    pt: "Substituição de tratamento industrial",
    en: "Industrial treatment replacement",
    es: "Sustitución de tratamiento industrial",
  },

  // Contact
  "contact.badge": {
    pt: "Contato",
    en: "Contact",
    es: "Contacto",
  },
  "contact.title1": {
    pt: "Vamos Construir um",
    en: "Let's Build a",
    es: "Construyamos un",
  },
  "contact.title2": {
    pt: "Futuro Sustentável",
    en: "Sustainable Future",
    es: "Futuro Sostenible",
  },
  "contact.description": {
    pt: "Interessado em implementar o BioSynthNet Module™ em sua comunidade, escola ou organização? Entre em contato para saber mais sobre parcerias e implantação do sistema.",
    en: "Interested in implementing BioSynthNet Module™ in your community, school, or organization? Contact us to learn more about partnerships and system deployment.",
    es: "¿Interesado en implementar el BioSynthNet Module™ en su comunidad, escuela u organización? Contáctenos para saber más sobre asociaciones e implementación del sistema.",
  },
  "contact.email": {
    pt: "Email",
    en: "Email",
    es: "Email",
  },
  "contact.phone": {
    pt: "Telefone",
    en: "Phone",
    es: "Teléfono",
  },
  "contact.location": {
    pt: "Localização",
    en: "Location",
    es: "Ubicación",
  },
  "contact.sendMessage": {
    pt: "Envie sua Mensagem",
    en: "Send Your Message",
    es: "Envía tu Mensaje",
  },
  "contact.name": {
    pt: "Nome",
    en: "Name",
    es: "Nombre",
  },
  "contact.namePlaceholder": {
    pt: "Seu nome",
    en: "Your name",
    es: "Tu nombre",
  },
  "contact.emailPlaceholder": {
    pt: "seu@email.com",
    en: "your@email.com",
    es: "tu@email.com",
  },
  "contact.organization": {
    pt: "Organização",
    en: "Organization",
    es: "Organización",
  },
  "contact.organizationPlaceholder": {
    pt: "Escola, ONG, Empresa...",
    en: "School, NGO, Company...",
    es: "Escuela, ONG, Empresa...",
  },
  "contact.message": {
    pt: "Mensagem",
    en: "Message",
    es: "Mensaje",
  },
  "contact.messagePlaceholder": {
    pt: "Conte-nos sobre seu interesse no BioSynthNet Module™",
    en: "Tell us about your interest in BioSynthNet Module™",
    es: "Cuéntanos sobre tu interés en BioSynthNet Module™",
  },
  "contact.submit": {
    pt: "Enviar Mensagem",
    en: "Send Message",
    es: "Enviar Mensaje",
  },

  // Footer
  "footer.copyright": {
    pt: "© 2025 BioSynthNet Module™. Tecnologia Ambiental.",
    en: "© 2025 BioSynthNet Module™. Environmental Technology.",
    es: "© 2025 BioSynthNet Module™. Tecnología Ambiental.",
  },

  // Demo Page
  "demo.title": {
    pt: "Demonstração da Plataforma",
    en: "Platform Demo",
    es: "Demostración de la Plataforma",
  },
  "demo.back": {
    pt: "Voltar ao Site",
    en: "Back to Site",
    es: "Volver al Sitio",
  },
  "demo.modules": {
    pt: "Módulos",
    en: "Modules",
    es: "Módulos",
  },
  "demo.analytics": {
    pt: "Análises",
    en: "Analytics",
    es: "Análisis",
  },
  "demo.settings": {
    pt: "Configurações",
    en: "Settings",
    es: "Configuración",
  },
  "demo.notifications": {
    pt: "Notificações",
    en: "Notifications",
    es: "Notificaciones",
  },
  "demo.sidebarTitle": {
    pt: "Painel de Controle",
    en: "Control Panel",
    es: "Panel de Control",
  },
  "demo.overview": {
    pt: "Visão Geral",
    en: "Overview",
    es: "Vista General",
  },
  "demo.history": {
    pt: "Histórico",
    en: "History",
    es: "Historial",
  },
  "demo.reports": {
    pt: "Relatórios",
    en: "Reports",
    es: "Informes",
  },
  "demo.allModules": {
    pt: "Todos os Módulos",
    en: "All Modules",
    es: "Todos los Módulos",
  },
  "demo.onlineModules": {
    pt: "módulos online",
    en: "modules online",
    es: "módulos en línea",
  },
  "demo.selectModule": {
    pt: "Selecione um módulo para ver detalhes",
    en: "Select a module to view details",
    es: "Seleccione un módulo para ver detalles",
  },
  "demo.school": {
    pt: "Escola",
    en: "School",
    es: "Escuela",
  },
  "demo.community": {
    pt: "Comunidade",
    en: "Community",
    es: "Comunidad",
  },
  "demo.lab": {
    pt: "Laboratório",
    en: "Laboratory",
    es: "Laboratorio",
  },
  // History View
  "demo.historyTitle": {
    pt: "Histórico de Dados",
    en: "Data History",
    es: "Historial de Datos",
  },
  "demo.last7Days": {
    pt: "Últimos 7 dias",
    en: "Last 7 days",
    es: "Últimos 7 días",
  },
  "demo.date": {
    pt: "Data",
    en: "Date",
    es: "Fecha",
  },
  "demo.avgPh": {
    pt: "pH Médio",
    en: "Avg pH",
    es: "pH Promedio",
  },
  "demo.avgTurbidity": {
    pt: "Turbidez Média",
    en: "Avg Turbidity",
    es: "Turbidez Promedio",
  },
  "demo.cycles": {
    pt: "Ciclos",
    en: "Cycles",
    es: "Ciclos",
  },
  "demo.efficiency": {
    pt: "Eficiência",
    en: "Efficiency",
    es: "Eficiencia",
  },
  "demo.status": {
    pt: "Status",
    en: "Status",
    es: "Estado",
  },
  "demo.excellent": {
    pt: "Excelente",
    en: "Excellent",
    es: "Excelente",
  },
  "demo.good": {
    pt: "Bom",
    en: "Good",
    es: "Bueno",
  },
  "demo.regular": {
    pt: "Regular",
    en: "Regular",
    es: "Regular",
  },
  // Reports View
  "demo.reportsTitle": {
    pt: "Relatórios do Sistema",
    en: "System Reports",
    es: "Informes del Sistema",
  },
  "demo.monthlyReport": {
    pt: "Relatório Mensal",
    en: "Monthly Report",
    es: "Informe Mensual",
  },
  "demo.weeklyReport": {
    pt: "Relatório Semanal",
    en: "Weekly Report",
    es: "Informe Semanal",
  },
  "demo.maintenanceReport": {
    pt: "Relatório de Manutenção",
    en: "Maintenance Report",
    es: "Informe de Mantenimiento",
  },
  "demo.efficiencyReport": {
    pt: "Relatório de Eficiência",
    en: "Efficiency Report",
    es: "Informe de Eficiencia",
  },
  "demo.generated": {
    pt: "Gerado em",
    en: "Generated on",
    es: "Generado el",
  },
  "demo.download": {
    pt: "Baixar PDF",
    en: "Download PDF",
    es: "Descargar PDF",
  },
  "demo.view": {
    pt: "Visualizar",
    en: "View",
    es: "Ver",
  },
  "demo.totalCycles": {
    pt: "Total de Ciclos",
    en: "Total Cycles",
    es: "Ciclos Totales",
  },
  "demo.avgEfficiency": {
    pt: "Eficiência Média",
    en: "Avg Efficiency",
    es: "Eficiencia Promedio",
  },
  "demo.waterTreated": {
    pt: "Água Tratada",
    en: "Water Treated",
    es: "Agua Tratada",
  },
  "demo.uptime": {
    pt: "Tempo Ativo",
    en: "Uptime",
    es: "Tiempo Activo",
  },
  "demo.performanceChart": {
    pt: "Gráfico de Desempenho",
    en: "Performance Chart",
    es: "Gráfico de Rendimiento",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "pt";
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    console.warn(`Translation missing for key: ${key}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
