import { useThemeStore } from "../store/useThemeStore";

const Settings = () => {
  const { theme, setTheme } = useThemeStore();

  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  return (
    <div className="container mx-auto px-4 py-20 md:py-24">
      <h1 className="text-3xl font-bold mb-8">Theme Settings</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {themes.map((themeName) => (
          <button
            key={themeName}
            className={`btn ${
              theme === themeName ? "btn-primary" : "btn-ghost"
            } w-full capitalize`}
            onClick={() => setTheme(themeName)}
          >
            {themeName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Settings;
