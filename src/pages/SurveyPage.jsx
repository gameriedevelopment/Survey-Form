import { useState, useRef, useCallback } from 'react'
import { QUESTIONS } from '../data/questions'
import {
  Topbar,
  SurveyHeader,
  EmailField,
  FormSection,
  SubmitButton,
} from '../components'

function validateForm(email, answers) {
  const errors = {}

  if (!email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Enter a valid email address.'
  }

  QUESTIONS.forEach((q) => {
    if (!q.required) return
    const v = answers[q.id]

    if (q.type === 'checkbox') {
      if (!Array.isArray(v) || v.length === 0) {
        errors[q.id] = 'Select at least one option.'
      }
    } else if (v === undefined || v === null || v === '') {
      errors[q.id] = 'This field is required.'
    }
  })

  return errors
}

function computeProgress(email, answers) {
  const totalRequired = QUESTIONS.filter((q) => q.required).length + 1
  let filled = 0

  if (email.trim()) filled++

  QUESTIONS.forEach((q) => {
    if (!q.required) return
    const v = answers[q.id]
    if (q.type === 'checkbox') {
      if (Array.isArray(v) && v.length > 0) filled++
    } else if (v !== undefined && v !== null && v !== '') {
      filled++
    }
  })

  return Math.round((filled / totalRequired) * 100)
}

export default function SurveyPage({ onSubmitSuccess }) {
  const [email, setEmail] = useState('')
  const [answers, setAnswers] = useState({})
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const sectionRefs = useRef({})

  const progress = computeProgress(email, answers)

  const setAnswer = useCallback((id, val) => {
    setAnswers((prev) => ({ ...prev, [id]: val }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next[id]
      return next
    })
  }, [])

  const handleEmailChange = (val) => {
    setEmail(val)
    if (errors.email) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next.email
        return next
      })
    }
  }

  const handleSubmit = async () => {
    const validationErrors = validateForm(email, answers)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      const firstKey = Object.keys(validationErrors)[0]
      const el = sectionRefs.current[firstKey]
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setSubmitting(true)

    try {
      const payload = {
        email,
        role: answers.role,
        primaryGenre: answers.genre,
        scoutImpressionScore: answers.scout_score,
        biggestBarriers: answers.barriers,
        desiredIncomeStream: answers.income_stream,
        primaryCommunityPlatform: answers.platform,
        preferredGamerieFeature: answers.feature,
        currentMonthlySubscriptionsRange: answers.current_bill,
        priceSweetSpot: answers.price_sweet,
        gamingNetworkValueScore: answers.network_value,
        industryShareResponse: answers.final_thought || '',
      }

      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000'
      const response = await fetch(`${apiUrl}/users/submit-survey`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || 'Failed to submit survey')
      }

      onSubmitSuccess()
    } catch (error) {
      console.error('Survey submission error:', error)
      setErrors({ submit: error.message || 'Failed to submit survey. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="survey">
      <Topbar progress={progress} />

      <main className="survey__main">
        <SurveyHeader />

        <EmailField
          ref={(el) => (sectionRefs.current.email = el)}
          value={email}
          onChange={handleEmailChange}
          error={errors.email}
        />

        {QUESTIONS.map((q, i) => (
          <FormSection
            key={q.id}
            ref={(el) => (sectionRefs.current[q.id] = el)}
            index={i + 2}
            question={q}
            value={answers[q.id]}
            onChange={(val) => setAnswer(q.id, val)}
            error={errors[q.id]}
          />
        ))}

        <SubmitButton loading={submitting} onClick={handleSubmit} />

        {errors.submit && (
          <div className="submit-area" style={{ marginTop: '16px' }}>
            <div className="field-error" style={{ justifyContent: 'center' }}>
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
              </svg>
              {errors.submit}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
