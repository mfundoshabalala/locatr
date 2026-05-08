# Authentication Module Setup Guide

This guide explains how to configure the enhanced authentication module with email functionality and OAuth providers.

## Features

1. **Password Hashing with bcrypt** - All user passwords are securely hashed using bcrypt with 10 salt rounds
2. **Email Verification** - Users receive verification emails upon registration
3. **Password Reset** - Functional forgot password flow with email notifications
4. **OAuth Integration** - Sign in with Google and Facebook providers

## Environment Variables

Copy `.env.example` to `.env` and configure the following variables:

### JWT Configuration
```
JWT_SECRET=your-secret-key-here
```

### Email Configuration (SMTP)

For Gmail, you'll need to generate an app-specific password:
1. Enable 2-factor authentication on your Google account
2. Go to https://myaccount.google.com/apppasswords
3. Generate a new app password for "Mail"
4. Use that password in `MAIL_PASSWORD`

```
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_SECURE=false
MAIL_USER=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_FROM=noreply@locatr.com
```

### Frontend URL
```
FRONTEND_URL=http://localhost:4200
```

### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
5. Configure OAuth consent screen
6. Add authorized redirect URIs: `http://localhost:3000/auth/google/callback`
7. Copy Client ID and Client Secret

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
```

### Facebook OAuth

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add "Facebook Login" product
4. Configure Valid OAuth Redirect URIs: `http://localhost:3000/auth/facebook/callback`
5. Copy App ID and App Secret

```
FACEBOOK_APP_ID=your-facebook-app-id
FACEBOOK_APP_SECRET=your-facebook-app-secret
FACEBOOK_CALLBACK_URL=http://localhost:3000/auth/facebook/callback
```

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login with username/password
- `POST /auth/forgot-password` - Request password reset email
- `POST /auth/reset-password` - Reset password with token
- `POST /auth/verify-email` - Verify email with token
- `GET /auth/me` - Get current user profile (requires auth)

### OAuth
- `GET /auth/google` - Initiate Google OAuth flow
- `GET /auth/google/callback` - Google OAuth callback
- `GET /auth/facebook` - Initiate Facebook OAuth flow
- `GET /auth/facebook/callback` - Facebook OAuth callback

## Email Templates

Email templates are currently inline in the `MailService`. For production, consider:
1. Using handlebars templates
2. Storing templates in `apps/locatr-backend/src/core/mail/templates/`
3. Customizing the styling and branding

## Database Changes

The User entity has been updated with the following new fields:
- `verificationToken` - Token for email verification
- `verificationTokenExpiry` - Expiry time for verification token (24 hours)
- `passwordResetToken` - Token for password reset
- `passwordResetTokenExpiry` - Expiry time for reset token (1 hour)
- `isVerified` - Flag indicating if email is verified

**Note**: You may need to run database migrations to add these fields to your existing database.

## Security Considerations

1. **HTTPS in Production**: Always use HTTPS in production for OAuth callbacks
2. **Secure Secrets**: Never commit `.env` file to version control
3. **Token Expiry**: Verification tokens expire after 24 hours, reset tokens after 1 hour
4. **Email Rate Limiting**: Consider implementing rate limiting for password reset requests
5. **OAuth Users**: Users created via OAuth have random passwords and are automatically verified

## Testing

### Test Email Flow (Development)
For development, you can use:
- [Mailtrap](https://mailtrap.io/) - Email testing service
- [MailHog](https://github.com/mailhog/MailHog) - Local SMTP server

### Test OAuth Flow
1. Start the backend server
2. Navigate to `http://localhost:3000/auth/google` or `/auth/facebook`
3. Complete OAuth flow
4. User will be redirected to frontend with access token

## Troubleshooting

### Email not sending
- Check SMTP credentials
- Verify firewall/network settings
- For Gmail, ensure "Less secure app access" is enabled or use app password
- Check email service logs

### OAuth not working
- Verify callback URLs match exactly
- Check that OAuth credentials are correct
- Ensure OAuth consent screen is configured
- Verify redirect URIs are whitelisted in provider settings

### Token errors
- Check that JWT_SECRET is set
- Verify tokens haven't expired
- Ensure username/token combination is correct
