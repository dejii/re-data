select id, customer_id, status, amount, created_at from {{ ref('orders') }} where status = 'pending'