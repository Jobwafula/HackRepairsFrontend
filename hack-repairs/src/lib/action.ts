'use server'
 import Signin from "@/components/Signin"
 
export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    await Signin('credentials', formData)
  } catch (error) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}