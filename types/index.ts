export interface Project {
  title: string;
  description: string;
  tech: {
    frontend: string[];
    backend: string[];
  };
  image: string;
  category: string;

  link?: string | null;
  github?: string | null;
  gallery?: string[] | null;
}
