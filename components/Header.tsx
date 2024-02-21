import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="">
      <div className="flex items-center justify-between py-10 sm:py-5">
        {/* <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Logo />
              </div>
            </div>
          </Link>
        </div> */}
        {typeof siteMetadata.headerTitle === 'string' ? (
          <Link href="/" className="hidden text-2xl font-semibold sm:flex sm:flex-col">
            <h6>{siteMetadata.headerTitle}</h6>
            <p className="text-sm leading-7">
              {siteMetadata.description}
            </p>
          </Link>
        ) : (
          siteMetadata.headerTitle
        )}
        <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
      {/* Main Header Menu */}
      <div className="hidden md:flex mainMenu flex items-center justify-center py-5">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden text-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black sm:block font-medium mx-3 px-3 py-1"
            >
              {link.title}
            </Link>
          ))}
      </div>
    </header>
  )
}

export default Header
