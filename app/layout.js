
import Navbar from '@/components/Navbar'


import './globals.css'


export const metadata={
  title: 'Halloween',
  description: 
  ' this celebration comes from ancient origins, and is already celebrated by everyone.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
    
       <div className='w-full h-full'>
   <Navbar/>
        {children}

        </div>
        </body>
    </html>
  )
}
