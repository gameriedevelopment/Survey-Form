import { useState } from 'react'
import SurveyPage from './pages/SurveyPage'
import ThankYouPage from './pages/ThankYouPage'

export default function App() {
  const [page, setPage] = useState('survey')

  const handleSubmitSuccess = () => {
    setPage('thankyou')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (page === 'thankyou') {
    return <ThankYouPage />
  }

  return <SurveyPage onSubmitSuccess={handleSubmitSuccess} />
}
