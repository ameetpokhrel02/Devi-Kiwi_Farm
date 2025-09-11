// src/auth/api.ts
// Helper functions to connect frontend to Django backend authentication APIs

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

export async function loginApi(username: string, password: string) {
  const response = await fetch(`${BASE_URL}/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  return response.json();
}

export async function registerApi(username: string, password: string, email: string) {
  const response = await fetch(`${BASE_URL}/register/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, email })
  });
  return response.json();
}

// You can add more helpers for password reset, OTP, etc. as needed
