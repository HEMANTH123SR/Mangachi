import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";

export function HamBurgerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="grid gap-2 py-6">
          <Link href="#">
            <Avatar
              alt="User avatar"
              className="mx-auto"
              size="medium"
              src="/placeholder-user.jpg"
            />
            <span className="sr-only">User Profile</span>
          </Link>
          <Link
            className="flex w-full items-center py-2 text-lg font-semibold"
            href="#"
          >
            Home
          </Link>
          <Link
            className="flex w-full items-center py-2 text-lg font-semibold"
            href="#"
          >
            About
          </Link>
          <Link
            className="flex w-full items-center py-2 text-lg font-semibold"
            href="#"
          >
            Services
          </Link>
          <Link
            className="flex w-full items-center py-2 text-lg font-semibold"
            href="#"
          >
            Contact
          </Link>
          <Button className="w-full mt-4">Sign Out</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
