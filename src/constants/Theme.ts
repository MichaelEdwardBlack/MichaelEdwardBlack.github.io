export class Theme {
  public name: string;
  public backgroundColor: string;
  public textColor: string; 
  public primaryTextColor: string;
  public navbarBackground: string;
  public cardBackground: string;

  constructor(
    name: string, 
    backgroundColor: string, 
    textColor: string, 
    primaryTextColor: string, 
    navbarBackground: string, 
    cardBackground: string
  ) {
    this.name = name;
    this.backgroundColor = backgroundColor;
    this.textColor = textColor;
    this.primaryTextColor = primaryTextColor;
    this.navbarBackground = navbarBackground;
    this.cardBackground = cardBackground;
  }

  public static Dark = new Theme("Dark", "bg-black", "text-white", "text-primary-500", "bg-transparent border-white border-b-2", "bg-gray-800");
  public static Light = new Theme("Light", "bg-gray-200", "text-black", "text-primary-500", "bg-transparent border-black border-b-2", "bg-gray-300");
}