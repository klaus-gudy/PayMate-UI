import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import UserProfile from "./user-profile";
import hatifyLogo from "@/public/hatifyLogo2.png";

export default function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>
          <Image src={hatifyLogo} alt="Hatify Logo" width={64} height={64} />
        </div>
        <nav className={cn("flex items-center space-x-4 lg:space-x-6 mx-6")}>
          <Link
            href="/dashboard"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Dashboard
          </Link>
          <Link
            href="/property"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Properties
          </Link>
          <Link
            href="/tenants"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Tenants
          </Link>
          <Link
            href="/settings"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Settings
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Input
            type="search"
            placeholder="Search..."
            className="md:w-[100px] lg:w-[300px]"
          />
          <UserProfile />
        </div>
      </div>
    </div>
  );
}
