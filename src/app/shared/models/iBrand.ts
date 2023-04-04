export interface IBrand {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  description?: {
    ar: string;
    en: string;
  };
  logoPath: string;
  path: string;
}
