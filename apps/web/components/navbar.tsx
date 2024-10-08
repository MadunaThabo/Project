import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
} from "@repo/ui/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <NavigationMenu>
      <div className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between">
          <div className="flex space-x-4">
            <NavigationMenuItem>
              <Link href="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/add-user" className="text-white hover:text-gray-300">
                Add user
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/remove-user" className="text-white hover:text-gray-300">
                Remove user
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/view-users" className="text-white hover:text-gray-300">
                Vew Users
              </Link>
            </NavigationMenuItem>
          </div>
        </div>
      </div>
    </NavigationMenu>
  );
}
