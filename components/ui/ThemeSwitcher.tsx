import { Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../icons";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evitar la renderización del componente en el servidor

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div>
      <Switch
        defaultSelected
        size="md"
        color="primary"
        onChange={toggleTheme}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
      ></Switch>

      {/* The current theme is: {theme} */}
      {/* <Button onClick={() => setTheme("light")}>Light Mode</Button>
      <Button onClick={() => setTheme("dark")}>Dark Mode</Button> */}
    </div>
  );
};
