"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="sidebar-logo flex">
        <Image src="/assets/images/main-logo.svg" alt="logo" width={34} height={34} />
        <span style={{ color: '#624cf5' }} className='ml-1 font-bold text-2xl'>AI Visualiser</span>
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <div className="flex">
                  <Image src="/assets/images/main-logo.svg" alt="logo" width={34} height={34} />
                  <span style={{ color: '#624cf5' }} className='ml-2 font-bold text-2xl'>AI Visualiser</span>
                </div>

                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname

                    return (
                      <li
                        className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                        key={link.route}
                      >
                        <Link className="sidebar-link cursor-pointer" href={link.route}>
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                          />
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  )
}

export default MobileNav