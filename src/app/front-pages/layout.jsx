// MUI Imports
import Button from '@mui/material/Button'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Context Imports
import { IntersectionProvider } from '@/contexts/intersectionContext'

// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'
import FrontLayout from '@components/layout/front-pages'
import BuyNowButton from '@components/buy-now-button'
import ScrollToTop from '@core/components/scroll-to-top'

// Util Imports
import { getSystemMode } from '@core/utils/serverHelpers'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'Materialize - Material Next.js Admin Template',
  description: 'Materialize - Material Next.js Admin Template'
}

const Layout = ({ children }) => {
  // Vars
  const systemMode = getSystemMode()

  return (
    <html id='__next'>
      <body className='flex is-full min-bs-full flex-auto flex-col'>
        <Providers direction='ltr'>
          <BlankLayout systemMode={systemMode}>
            <IntersectionProvider>
              <FrontLayout>
                {children}
                <BuyNowButton />
                <ScrollToTop className='mui-fixed'>
                  <Button
                    variant='contained'
                    className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center'
                  >
                    <i className='ri-arrow-up-line' />
                  </Button>
                </ScrollToTop>
              </FrontLayout>
            </IntersectionProvider>
          </BlankLayout>
        </Providers>
      </body>
    </html>
  )
}

export default Layout
