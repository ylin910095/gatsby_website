import React from "react"
import { MDXProvider } from "@mdx-js/react" // change MDX color scheme

export function CustomMDXProvider({ children }) {
    return (
      <MDXProvider
        components={{
          inlineCode : props => <inlineCode  {...props} className='inlineCodeMDX'/>,
          li: props => <li {...props} className='liMDX'/>,
          a: props => <a {...props} className='aMDX'/>
        }}>
        {children}
      </MDXProvider>
    )
  }
  