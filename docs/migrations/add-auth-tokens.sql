-- Migration to add authentication token fields to User table
-- Run this SQL on your database to add the new fields required for email verification and password reset

-- Add verification token fields
ALTER TABLE "User"
ADD COLUMN IF NOT EXISTS "verificationToken" VARCHAR(255) NULL,
ADD COLUMN IF NOT EXISTS "verificationTokenExpiry" TIMESTAMP NULL;

-- Add password reset token fields
ALTER TABLE "User"
ADD COLUMN IF NOT EXISTS "passwordResetToken" VARCHAR(255) NULL,
ADD COLUMN IF NOT EXISTS "passwordResetTokenExpiry" TIMESTAMP NULL;

-- Add indexes for better performance on token lookups
CREATE INDEX IF NOT EXISTS "IDX_User_verificationToken" ON "User" ("verificationToken");
CREATE INDEX IF NOT EXISTS "IDX_User_passwordResetToken" ON "User" ("passwordResetToken");

-- Verify the changes
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'User'
  AND column_name IN ('verificationToken', 'verificationTokenExpiry', 'passwordResetToken', 'passwordResetTokenExpiry');
