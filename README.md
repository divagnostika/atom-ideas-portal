# ATOM Ideas Portal

Source is temporarily packaged in `site-bundle.b64` (compressed tarball). `npm run build` extracts the Next.js application before building. This is a transitional deployment format; regular source files will replace it after the first verified deployment.

Database: Turso using `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` Vercel environment variables. Deployment must not seed or overwrite user data.
