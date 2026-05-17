# Auth Token Refresh

Implements automatic token refresh logic for expired sessions.

- Detects 401 responses and retries with refreshed token
- Adds exponential backoff on refresh failures
- Unit tests for refresh flow
