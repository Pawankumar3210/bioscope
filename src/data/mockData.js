export const diseaseTrendData = [
  { year: "2018", COVID: 0, Influenza: 4200, Dengue: 3100, Malaria: 2800, Tuberculosis: 5200 },
  { year: "2019", COVID: 0, Influenza: 3800, Dengue: 4200, Malaria: 2600, Tuberculosis: 4900 },
  { year: "2020", COVID: 89000, Influenza: 2100, Dengue: 3800, Malaria: 2400, Tuberculosis: 4100 },
  { year: "2021", COVID: 145000, Influenza: 1800, Dengue: 3200, Malaria: 2200, Tuberculosis: 3800 },
  { year: "2022", COVID: 98000, Influenza: 3200, Dengue: 4800, Malaria: 2100, Tuberculosis: 3600 },
  { year: "2023", COVID: 42000, Influenza: 4800, Dengue: 5200, Malaria: 1900, Tuberculosis: 3400 },
  { year: "2024", COVID: 21000, Influenza: 5100, Dengue: 4600, Malaria: 1800, Tuberculosis: 3200 },
];

export const diseaseDistribution = [
  { name: "COVID-19", value: 31, color: "#00d4ff" },
  { name: "Influenza", value: 22, color: "#a855f7" },
  { name: "Dengue", value: 18, color: "#00ff88" },
  { name: "Malaria", value: 14, color: "#ff6b35" },
  { name: "Tuberculosis", value: 15, color: "#ff0080" },
];

export const monthlyCases = [
  { month: "Jan", cases: 12400, recovered: 11200, deaths: 340 },
  { month: "Feb", cases: 10800, recovered: 9800, deaths: 280 },
  { month: "Mar", cases: 15200, recovered: 13900, deaths: 420 },
  { month: "Apr", cases: 18900, recovered: 17200, deaths: 510 },
  { month: "May", cases: 14300, recovered: 13100, deaths: 390 },
  { month: "Jun", cases: 11200, recovered: 10400, deaths: 290 },
  { month: "Jul", cases: 9800, recovered: 9200, deaths: 210 },
  { month: "Aug", cases: 13600, recovered: 12800, deaths: 340 },
  { month: "Sep", cases: 16700, recovered: 15600, deaths: 450 },
  { month: "Oct", cases: 19200, recovered: 17900, deaths: 520 },
  { month: "Nov", cases: 17400, recovered: 16100, deaths: 480 },
  { month: "Dec", cases: 14800, recovered: 13700, deaths: 390 },
];

export const statsData = [
  { label: "Active Cases", value: 2847293, change: -12.4, color: "#00d4ff", icon: "Activity" },
  { label: "Recovered", value: 18492847, change: 8.7, color: "#00ff88", icon: "Heart" },
  { label: "Critical", value: 84729, change: -5.2, color: "#ff6b35", icon: "AlertTriangle" },
  { label: "Deaths", value: 394820, change: -3.1, color: "#ff0080", icon: "TrendingDown" },
];

export const regionData = [
  { region: "North America", cases: 4200000, severity: 0.65 },
  { region: "Europe", cases: 3800000, severity: 0.58 },
  { region: "Asia Pacific", cases: 8900000, severity: 0.82 },
  { region: "South America", cases: 2100000, severity: 0.71 },
  { region: "Africa", cases: 1900000, severity: 0.79 },
  { region: "Middle East", cases: 980000, severity: 0.62 },
  { region: "South Asia", cases: 5400000, severity: 0.88 },
  { region: "Southeast Asia", cases: 3200000, severity: 0.75 },
];

export const researchInsights = [
  {
    id: 1,
    title: "COVID-19 Variant Mutation Patterns",
    category: "Virology",
    summary: "New subvariants show 34% increased transmission but 28% lower hospitalization rates.",
    confidence: 94,
    date: "2024-11-15",
    tags: ["COVID-19", "Mutation", "Epidemiology"],
    trend: "declining",
  },
  {
    id: 2,
    title: "AI Predicts Dengue Outbreak Hotspots",
    category: "Predictive Analytics",
    summary: "Machine learning model achieves 91% accuracy in predicting dengue outbreaks 3 weeks in advance.",
    confidence: 91,
    date: "2024-11-12",
    tags: ["Dengue", "AI", "Prediction"],
    trend: "rising",
  },
  {
    id: 3,
    title: "Antimicrobial Resistance Surge",
    category: "Drug Resistance",
    summary: "WHO reports 18% increase in AMR cases globally. Novel phage therapy trials show 76% efficacy.",
    confidence: 87,
    date: "2024-11-10",
    tags: ["AMR", "Resistance", "Therapy"],
    trend: "rising",
  },
  {
    id: 4,
    title: "Malaria Vaccine Rollout Impact",
    category: "Immunology",
    summary: "RTS,S vaccine deployment reduces pediatric malaria cases by 42% in first-year analysis.",
    confidence: 96,
    date: "2024-11-08",
    tags: ["Malaria", "Vaccine", "Africa"],
    trend: "declining",
  },
  {
    id: 5,
    title: "Mental Health Comorbidities Post-COVID",
    category: "Neuropsychiatry",
    summary: "Long COVID patients show 3.4x higher incidence of anxiety and depression disorders.",
    confidence: 89,
    date: "2024-11-05",
    tags: ["Long COVID", "Mental Health", "Comorbidity"],
    trend: "rising",
  },
  {
    id: 6,
    title: "Vector Control Innovation",
    category: "Vector Control",
    summary: "Sterile mosquito releases reduce Aedes aegypti populations by 83% in pilot regions.",
    confidence: 93,
    date: "2024-11-01",
    tags: ["Dengue", "Mosquito", "Biocontrol"],
    trend: "stable",
  },
];

export const riskFactors = [
  "Diabetes", "Hypertension", "Obesity", "Asthma",
  "Heart Disease", "Immunocompromised", "Smoking", "Age >60", "None",
];

export const reportsData = [
  { id: "RPT-001", title: "Global Disease Burden Q4 2024", type: "Quarterly", date: "2024-12-01", size: "4.2 MB", status: "Ready" },
  { id: "RPT-002", title: "AI Prediction Accuracy Report", type: "Monthly", date: "2024-11-28", size: "2.8 MB", status: "Ready" },
  { id: "RPT-003", title: "Regional Outbreak Analysis - Asia", type: "Regional", date: "2024-11-20", size: "6.1 MB", status: "Ready" },
  { id: "RPT-004", title: "Vaccine Efficacy Tracking 2024", type: "Annual", date: "2024-11-15", size: "8.4 MB", status: "Processing" },
  { id: "RPT-005", title: "Antimicrobial Resistance Summary", type: "Monthly", date: "2024-11-10", size: "3.3 MB", status: "Ready" },
];