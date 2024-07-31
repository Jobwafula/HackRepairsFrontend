import ProtectedRoute from '@/components/ProtectedRoute'
import React from 'react'

export default function page() {
  return (
    <ProtectedRoute>
        <div>Admin Protected Page/ currectly if signed up </div>
    </ProtectedRoute>
  )
}
