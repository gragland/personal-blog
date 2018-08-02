import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import '../styles/index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet defaultTitle="Liduše píše" titleTemplate="%s - Liduše píše">
      <html lang="cs" />
      <body className="font-serif md:text-lg" />
      <meta name="description" content="Blog Lidmily Maršálkové" />
      <link
        href="https://fonts.googleapis.com/css?family=Caveat&amp;subset=latin-ext"
        rel="stylesheet"
      />
    </Helmet>
    <Navbar />
    <div>{children}</div>
    <footer className="relative mt-10 pt-10 bg-grey-darkest text-white text-center">
      <h2 className="">Liduše píše</h2>
      <form
        name="subscription"
        method="post"
        data-netlify="true"
        className="flex flex-col mb-3"
      >
        <input type="hidden" name="form-name" value="subscription" />
        <div className="flex flex-col self-center my-5 text-sm">
          <div className="sm:flex">
            <input
              className="appearance-none sm:w-full text-grey-darker border border-grey-dark py-2 px-4 mr-4 mb-4 sm:mb-0 leading-tight"
              type="email"
              name="email"
              placeholder="Chci vědět, co Liduše píše"
            />
            <button
              type="submit"
              className="border border-white text-white p-2 transition-linear hover:bg-white hover:text-black"
            >
              Přihlásit&nbsp;odběr
            </button>
          </div>
          <label className="block my-2">
            <input
              name="terms"
              className="mr-2 leading-tight"
              type="checkbox"
            />
            <span className="text-sm">
              Pokud se na lidusepise.cz objeví nový článek, chci o tom vědět.
            </span>
          </label>
        </div>
      </form>
      <p className="py-10 text-sm text-grey-light">© Lidmila Maršálková</p>
    </footer>
  </div>
)

export default TemplateWrapper
