import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <img src='https://avatars.githubusercontent.com/u/97126757?v=4' />
      <span>Happyuniv Docs</span>
      <style jsx>
        {`
          img {
            margin-right: 10px;
            width: 32px;
            height: 32px;
          }
        `}
      </style>
    </>
  ),
  project: {
    link: 'https://github.com/happyuniv/happyuniv-Docs',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/happyuniv/happyuniv-Docs',
  footer: { component: <></> },
}

export default config
