
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

Add a task group to the plan to have minimal AgentClinic home page and update the rest of the feature spec to be in sync

clear history
 ```
Implement the remaining task groups
```

npm run dev and check the progress

When suggesting an update
```
Update specs/2026-04-16 -hello-hono/plan/md and implmentation of a main layout component with a header/main/footer as three subcomponents. Make a CSS file, import it and link to it.
```

if Replanning Project
create new branch

```
Update this tech-stack.md to capture that we want to use Vitest tests for validation and write a scipte in package.json
```
```
Update existing specs and code to reflect these testing changes
```
```
Write a new test suite using the specified testing framework
```
run tests and check

More changes
```
The product's web UI should follow responsive design. Update the product specs and all feature specs to reflects this, as well as my code
```
Replanning road map
```
Go to the roadmap.md and combine phase 3-4 into a new phase 3. And 5-6-7 into a single phase
```

Changelog skill
```
I want to keep a CHANGELOG.md in the project root, with headings for dates. If not changelog, examine git commits and add bullets for each date. Then, as we work, will manually invoke this kill before merging. Help me write a skill for this
```
Merge
```
Commit this, switch to main, and merge this branch
```

Working on next feature