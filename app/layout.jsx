import '@styles/globals.css'

import Nav from '@components/nav'
import Provider from '@components/provider'

export const metadata = {
    title: "Bloggerz",
    description: "A blog site for bloggers"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'> 
        <body>
            <Provider>
            <div className='main'>
                <div className='gradient'></div>
            </div>

            <main className='app'>
                <Nav />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout