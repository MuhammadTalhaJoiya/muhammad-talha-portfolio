export type Tech = {
  name: string;
  /** short label / glyph used in the grid cell */
  glyph: string;
};

export const techStack: Tech[] = [
  { name: "React", glyph: "⚛" },
  { name: "Next.js", glyph: "N" },
  { name: "Node.js", glyph: "⬢" },
  { name: "Express", glyph: "ex" },
  { name: "MongoDB", glyph: "🍃" },
  { name: "JavaScript", glyph: "JS" },
  { name: "Python", glyph: "Py" },
  { name: "AWS", glyph: "☁" },
  { name: "Docker", glyph: "🐳" },
];
