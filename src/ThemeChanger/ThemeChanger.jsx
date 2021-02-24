export default function ThemeChanger(props) {
  return (
    <button className="theme-change-btn" onClick={props.toggleTheme}>
      {props.isLighttheme ? "light" : "dark"}
    </button>
  );
}
