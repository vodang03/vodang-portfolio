export interface Project {
  title: string;
  description: string;
  tech: {
    frontend: string[];
    backend: string[];
  };
  link?: string | null;
  github?: string | null;
  image?: string;
  gallery?: string[];
}
