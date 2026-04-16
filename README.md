
## Agent Clinic

Full-stack app with Next.js backend and React frontend.

## Project Setup

1. Initialize Node.js (creates `package.json` to manage dependencies):

```bash
npm init -y
```

2. Install TypeScript and Node types for development:

```bash
npm install --save-dev typescript @types/node
```

3. Initialize TypeScript configuration:

```bash
npx tsc --init
```

4. Install `touch-cli` globally:

```bash
npm install touch-cli -g
```

5. Create source folder and entry file:

```bash
mkdir src
touch src/index.ts
```

## Gemini CLI Prompt

Use the following prompt in Gemini CLI:

```text
We are writing Agent Clinic, a place for AI agents to get relief from
   their humans. Look into
      stakeholder-input.md for input from stakeholders.

   Lets create a "constitutionn" in a specs directory:
   - 'mission.md'
   - ''tech-stack.md'
   - 'roadmap.md' for high-levl implementation order, in very small phases
   of work.
   Important: You *must* user your AskUserQuestion tool, grouped on these 3, before writing to disk
```
specifiy tone for mission based on project - playful, professional, etc.
backend and frontend tech stack

```
Find out next phase on specs/roadmap.md and make a branch, ask me about the feature spec.
Create:
 - A new directory YYY-MM-DD-feature-name under specs for this feature work
 - In there:
    - 'plan.md' as a series of numbered task groups
    - 'requirements.md' for the scope, decisions, context
    - 'validationn.md' for how to know the implmentation succeeded and can be merged'

Refer to specs/mission.md and specs/tech-stack.md for guidance

Important: You *must* user your AskUserQuestion tool, grouped on these 3, before writing to disk
```