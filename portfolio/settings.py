# Add these settings to your existing Django settings.py

# Email configuration for contact form
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'  # or your email provider's SMTP server
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'your-email@gmail.com'  # Your email
EMAIL_HOST_PASSWORD = 'your-app-password'  # Your email app password

# Contact form settings
DEFAULT_FROM_EMAIL = 'your-email@gmail.com'
CONTACT_EMAIL = 'your-email@gmail.com'  # Where contact form emails will be sent

# Static files (CSS, JavaScript, Images)
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    BASE_DIR / 'static',
]
STATIC_ROOT = BASE_DIR / 'staticfiles'

# Media files (for resume download)
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'