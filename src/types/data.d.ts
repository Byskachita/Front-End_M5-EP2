export type Doctor = {
  id: number;
  name: string;
  specialty: string;
  description: string;
  services: string[];
  years: number;
  img?: string;
};

export type Service = {
  global: string;
  services: string[];
};
