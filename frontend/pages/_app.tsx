import Page from '../components/Page'

type Props = {
  Component: React.ElementType
  pageProps: []
}
const App = ({ Component, pageProps }: Props): JSX.Element => {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}

export default App
