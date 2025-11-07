import Head from 'next/head'
import Script from 'next/script'
import dynamic from 'next/dynamic'

// Dynamically import components to avoid SSR issues
const CustomNavbar = dynamic(() => import('../components/navbar'), { ssr: false })
const CustomFooter = dynamic(() => import('../components/footer'), { ssr: false })

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100">
      <Head>
        <title>Prodigy Tech & Digital Services</title>
        <meta name="description" content="Empowering Digital Growth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js" />
      <Script src="https://unpkg.com/feather-icons" />

      <CustomNavbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section - Rest of your index.html content goes here */}
        {/* ... */}
      </main>

      <CustomFooter />

      <Script id="feather-icons">
        {`feather.replace();`}
      </Script>
    </div>
  )
}