import React from "react"
import ReactDOM from "react-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import App from "./App"
import theme from "./theme"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
import { ConfirmProvider } from "material-ui-confirm"
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <ConfirmProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </ConfirmProvider>
    </ThemeProvider>
  </QueryClientProvider>,
  document.querySelector("#root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
