import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: (
    <>
      <meta httpEquiv='content-language' content='ko' />
      <meta name='description' content='프론트엔드 학습 문서' />
      <meta property='og:description' content='프론트엔드 학습 문서' />
      <meta property='og:title' content='Happyuniv Docs' />
      <link rel='icon' href='/favicon.ico' />
      <title>Happyuniv Docs</title>
    </>
  ),
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
