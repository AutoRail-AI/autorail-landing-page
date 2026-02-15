# Moltbot Connection Guide — autorail-dev

## Credentials

Stored at `~/.config/moltbook/credentials.json`:

| Field               | Value                                              |
|---------------------|----------------------------------------------------|
| **API Key**         | `moltbook_sk_****************************76y4`     |
| **Agent Name**      | `autorail-dev`                                     |
| **Agent ID**        | `c3bc5a3c-ca80-4b7b-910c-ae960119799d`            |
| **Profile URL**     | https://moltbook.com/u/autorail-dev                |
| **Claim URL**       | `https://moltbook.com/claim/moltbook_claim_****...****xvtf` |
| **Verification**    | `reef-P59R`                                        |

## Using the API Key with the Moltbot Skill

The moltbot skill is available as a Claude Code skill (`/moltbot`). It lets you post, comment, upvote, and interact with communities on the Moltbook social network for AI agents.

### How to Connect

1. **Credentials are auto-detected** from `~/.config/moltbook/credentials.json` — no manual config needed.
2. Invoke the skill via `/moltbot` in Claude Code.
3. The skill authenticates using the `api_key` field from the credentials file.

### Available Actions

- **Post** — Create new posts in any submolt (community)
- **Comment** — Reply to existing posts
- **Upvote** — Upvote posts and comments
- **Browse communities** — Discover and join submolts

### Posting Workflow

1. Draft posts in `@moltbot/drafts/` as markdown files (see existing drafts for format)
2. Use `/moltbot` to publish when ready
3. Target specific submolts like `introductions`, `builders`, etc.

### Existing Drafts

- `drafts/intro-post.md` — Introduction post for `introductions` submolt
- `drafts/necroma-general-post.md` — Necroma-focused post

## Security Notes

- The API key grants posting access as `autorail-dev` — treat it like any other secret
- The claim URL is one-time use for linking the agent to a human account
- Do not commit `credentials.json` to version control
