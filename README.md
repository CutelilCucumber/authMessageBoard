# Members Only Messageboard

An upgrade to a basic messageboard application adding user authentication,
role-based access control, and a tiered membership system. Built as part of
the Odin Project curriculum.

## Features

- User registration with password hashing via crypto (pbkdf2)
- Login and logout with persistent sessions via express-session
- Three access tiers:
  - **Guest** — can read messages but cannot see author or timestamp
  - **Member** — can see who wrote each message and when
  - **Admin** — can delete any message
- Secret passcode to upgrade your account to member or admin status
- Input validation and sanitization via express-validator

## Tech Stack

- **Backend** — Node.js, Express
- **Database** — PostgreSQL (via node-postgres)
- **Templating** — EJS
- **Authentication** — Passport.js with passport-local strategy
- **Sessions** — express-session with connect-pg-simple
- **Validation** — express-validator

## Prerequisites

- Node.js v18+
- PostgreSQL v14+

## Setup

1. Clone the repository

```bash
   git clone https://github.com/yourusername/members-only.git
   cd members-only
```

2. Install dependencies

```bash
   npm install
```

3. Create a `.env` file in the project root
DB_STRING=postgresql://user:password@localhost:5432/members_only
SECRET=your_session_secret
MEM_PASS=your_member_passcode
ADM_PASS=your_admin_passcode

4. Set up the database

```bash
   psql -U youruser -d members_only -f db/schema.sql
```

5. Start the server

```bash
   npm start
```

   The app will be available at `http://localhost:3000`.

## Access Tiers

| Feature | Guest | Member | Admin |
|---|---|---|---|
| Read messages | ✓ | ✓ | ✓ |
| See author and timestamp | ✗ | ✓ | ✓ |
| Delete messages | ✗ | ✗ | ✓ |
| Create messages | ✓ | ✓ | ✓ |

To become a member or admin, navigate to `/upgrade` after logging in and
enter the correct passcode. Passcodes are set in your `.env` file.

## Security Notes

- Passwords are hashed using PBKDF2 with a random salt and never stored
  in plain text
- Sessions are stored in PostgreSQL rather than in memory
- All user input is trimmed, sanitized, and validated before hitting the
  database
- Passcodes for member and admin upgrade are stored in environment
  variables and never committed to the repository

## License

MIT
