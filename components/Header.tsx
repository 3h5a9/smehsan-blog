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
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Logo />
              </div>
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                  <p className="text-sm leading-7 text-red-500 dark:text-gray-400">
                    {siteMetadata.description}
                  </p>
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
        </div>
        <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
      {/* Main Header Menu */}
      <div className="hidden md:flex mainMenu flex items-center justify-center py-10">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden rounded hover:bg-red-500 hover:text-gray-100 sm:block font-medium text-gray-900 dark:text-gray-100 mx-3 px-3 py-1"
            >
              {link.title}
            </Link>
          ))}
      </div>
    </header>
  )
}

export default Header
