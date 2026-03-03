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

  const handleSubmit = () => {
    const validationErrors = validateForm(email, answers)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      const firstKey = Object.keys(validationErrors)[0]
      const el = sectionRefs.current[firstKey]
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setSubmitting(true)

    // TODO: Replace with actual API call
    setTimeout(() => {
      setSubmitting(false)
      onSubmitSuccess()
    }, 1800)
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
      </main>
    </div>
  )
}
