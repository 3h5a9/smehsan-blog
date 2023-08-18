import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'My Tech Stack' })

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-2 pt-6 md:space-y-5">
          <h1 className="text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-6xl md:leading-14">
            My Tech Stack
          </h1>
          <p className="text-lg leading-7 text-rose-400 dark:text-gray-400">
            Tools and Technology That I use as my daily driver.
          </p>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <p className="text-gray-600 dark:text-gray-400">
            {`A brief description of my daily development environment and machine setup, which includes tools and techniques, i do use in my machine. As a diehard linux user i have been using it for last 7 years now as my primary OS and some times i do use windows as well. Curretly i am using a Dell inspiron 15 3567 Laptop with 4GB of Ram and 1tb of HDD, though the configuration is quite low and old, i hope i am going to upgrade my machine in this month Insha Allah. On my machine i am running Ubuntu (23.04), as i am a super fan of Ubuntu, although i have tried different distro, but ubuntu suites me the most.`}
          </p>
        </div>
      </div>
      <div className="columns md:columns-3 sm:columns-1">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-0">
            <h2 className="text-md font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-xl md:leading-14">
              Back End
            </h2>
            <p className="text-gray-400 dark:text-gray-400">
              <Link href="/" className="text-gray-900 dark:text-gray-100">
                {'Ruby on Rails'}
              </Link>
            </p>
            <p>
              <Link href="/" className="text-gray-900 dark:text-gray-100">
                {'WordPress'}
              </Link>
            </p>
            <p>
              <Link href="/" className="text-gray-900 dark:text-gray-100">
                {'Postgres'}
              </Link>
            </p>
            <p>
              <Link href="/" className="text-gray-900 dark:text-gray-100">
                {'MySql'}
              </Link>
            </p>
          </div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-0">
            <h2 className="text-md font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-xl md:leading-14">
              Front End
            </h2>
            <p className="text-gray-400 dark:text-gray-400">
              <Link href="/" className="text-gray-900 dark:text-gray-100">
                {'HTML 5'}
              </Link>
            </p>
            <p>
              <Link href="/" className="text-gray-900 dark:text-gray-100">
                {'CSS 3'}
              </Link>
            </p>
            <p className="text-gray-400 dark:text-gray-400">
              <Link href="/" className="text-gray-900 dark:text-gray-100">
                {'React'}
              </Link>
            </p>
            <p>
              <Link href="/" className="text-gray-900 dark:text-gray-100">
                {'SCSS'}
              </Link>
            </p>
            <p>
              <Link href="/" className="text-gray-900 dark:text-gray-100">
                {'Bootstrap / Tailwind'}
              </Link>
            </p>
          </div>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pb-8 pt-6 md:space-y-0">
            <h2 className="text-md font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-xl md:leading-14">
              Tools
            </h2>
            <p className="text-gray-400 dark:text-gray-400">
              <Link href="/" className="text-gray-900 dark:text-gray-100">
                {'Git - Version Control'}
              </Link>
            </p>
            <p>
              <Link href="/" className="text-gray-900 dark:text-gray-100">
                {'NPM / Yarn'}
              </Link>
            </p>
            <p>
              <Link href="/" className="text-gray-900 dark:text-gray-100">
                {'Inkscape - Design'}
              </Link>
            </p>
            <p className="text-gray-400 dark:text-gray-400">
              <Link href="/" className="text-gray-900 dark:text-gray-100">
                {'Neovim - IDE'}
              </Link>
            </p>
          </div>
        </div>
      </div>
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
