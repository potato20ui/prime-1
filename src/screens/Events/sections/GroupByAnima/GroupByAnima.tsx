import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const GroupByAnima = (): JSX.Element => {
  // Navigation items data
  const navItems = [
    { label: "", href: "#" },
    { label: "SERVICES", href: "#services" },
    { label: "PROPERTIES", href: "#properties" },
    { label: "ABOUT", href: "#about" },
    { label: "EVENTS", href: "#events" },
    { label: "CAREERS", href: "#careers" },
    { label: "PRESS ROOM", href: "#press-room" },
  ];

  return (
    <header className="flex justify-between items-center w-full py-3 px-6">
      {/* Logo */}
      <div
        className="w-[214px] h-[62px] bg-[url(/prime-logo-1-1.png)] bg-cover bg-[50%_50%]"
        aria-label="Company Logo"
      />

      {/* Navigation */}
      <div className="flex items-center gap-[37px]">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-[37px]">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={item.href}
                  className="font-['Montserrat',Helvetica] font-semibold text-[#010642] text-base text-center tracking-[0] leading-normal"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Button */}
        <Button className="bg-[#010642] rounded-[20px] font-['Montserrat',Helvetica] text-white text-base font-medium px-5">
          CONTACT
        </Button>
      </div>
    </header>
  );
};
