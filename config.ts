// Auto-generated configuration for IVAC India AutoBot

export const config = {
  botName: "IVAC India",
  country: "India",
  provider: "IVAC",
  destination: "India (from Bangladesh)",
  loginUrl: "https://www.ivacbd.com",
  centers: [
  "Delhi",
  "Kolkata",
  "Agartala",
  "Guwahati",
  "Mumbai"
],
  visaCategories: [
  "Indian Visa"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
