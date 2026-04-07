export default function ToolsSection() {
  const tools = [
    { name: "Next.js", category: "Framework" },
    { name: "React Native", category: "Framework" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "TypeScript", category: "Langage" },
    { name: "Python", category: "Langage" },
    { name: "Swift", category: "Langage" },
    { name: "Kotlin", category: "Langage" },
    { name: "Java / JavaFX", category: "Langage/Framework" },
    { name: "C# / .NET", category: "Langage/Framework" },
    { name: "Firebase", category: "Backend" },
    { name: "SQL Server", category: "Base de données" },
    { name: "SQLite", category: "Base de données" },
    { name: "Scikit-learn / PyTorch", category: "IA" },
    { name: "Git", category: "Outil" },
    { name: "Figma", category: "Design" },
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
            className="bg-muted flex flex-col items-center justify-center rounded-lg p-4 text-center transition-colors hover:bg-muted/80"
          >
            <span className="font-medium">{tool.name}</span>
            <span className="text-muted-foreground text-xs">{tool.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
