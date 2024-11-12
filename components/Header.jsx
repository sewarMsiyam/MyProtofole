import Link from "next/link"
import {Button} from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { ThemeToggle } from "./theme-toggle"

const Header=() =>{
  return (
    <header className="py-8 pt-8 xl:pb-12 text-primary dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold tracking-tighter	">
          sewarDev/&gt;<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <ThemeToggle />
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
       
      </div>
    </header>
  )
}

export default Header