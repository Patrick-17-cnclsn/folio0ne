export default function ToolsSection() {
  const tools = [
    { name: "Next.js", category: "Web" },
    { name: "Three.js", category: "Web 3D" },
    { name: "TypeScript", category: "Langage" },
    { name: "React Native / Expo", category: "Mobile" },
    { name: "Kotlin Multiplatform", category: "Mobile" },
    { name: "Swift", category: "Mobile" },
    { name: "Java", category: "Langage" },
    { name: "Python", category: "Langage" },
    { name: "PostgreSQL", category: "Base de données" },
    { name: "Docker", category: "DevOps" },
    { name: "Git", category: "DevOps" },
    { name: "Framer Motion", category: "Animations" }
  ];

  return (
    <section>
      <header className="pb-8">
        <h2 className="text-2xl font-semibold">Outils et Technologies</h2>
        <p className="text-muted-foreground mt-2">
          Les langages, frameworks et outils que j'utilise pour donner vie à mes projets.
        </p>
      </header>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-muted hover:bg-muted/80 flex flex-col items-center justify-center rounded-lg p-4 text-center transition-colors">
            <span className="font-medium">{tool.name}</span>
            <span className="text-muted-foreground text-xs">{tool.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
