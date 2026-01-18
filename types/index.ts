export interface Project {
  title: string;
  description: string;
  tech: {
    frontend: string[];
    backend: string[];
  };
  link: string;
  github: string;
  image: string;
}
