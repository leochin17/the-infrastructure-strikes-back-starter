# Payments Null Pointer Fix

Handles edge case where payment processor receives null customer object.

- Add null guard before accessing customer.id
- Return early with 400 if customer is missing
- Fixes intermittent 500s in production logs
