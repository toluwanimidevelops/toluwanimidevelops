---
name: create-skill
user-invocable: true
requires:
  - files
  - ask-questions
  - agent-customization
description: |
  Create a new VS Code customization skill file (`SKILL.md`) for this workspace.
  Use this skill when you want a reusable workspace workflow that guides the user through how to implement a new agent customization skill.
  Includes a template, required frontmatter, and best practices for naming, location, and description.
---

# Create Skill

## What this skill does

- Prompts the user for the desired skill outcome.
- Determines whether the skill should be workspace-scoped or user-scoped.
- Creates a `SKILL.md` file in the appropriate folder with valid frontmatter.
- Helps the user refine description, triggers, and example prompts.

## Use when

- You need a workspace-specific skill to capture a multi-step workflow or repeated developer process.
- You want a reusable custom agent workflow rather than a single prompt.
- You want to define a skill that other contributors can invoke from the VS Code assisted workflow.

## Skill template

```md
---
name: <skill-name>
user-invocable: true
requires:
  - files
  - ask-questions
  - agent-customization
description: |
  <One-sentence summary of what the skill does>
  <Use when... phrases, including trigger keywords.>
---

# <Skill Display Name>

## What it does

- <Step 1>
- <Step 2>
- <Step 3>

## When to use

- <Scenario 1>
- <Scenario 2>

## Example prompts

- "Create a new skill for <task>"
- "Generate a workspace skill for <workflow>"
```

## Best practices

- Keep `name` short, hyphenated, and unique.
- Include `user-invocable: true` for skills users can invoke.
- Declare required tool sets in `requires`.
- Use `description` to help matching with relevant tasks.
- Put workspace skills under `.github/skills/<name>/`.
- Put personal skills under `{{VSCODE_USER_PROMPTS_FOLDER}}/skill-name/`.

## Next steps

- Refine the skill description with your actual workflow.
- Add example prompts that match the tasks you will ask the skill to do.
- Optionally create a companion `references/` file if the workflow is complex.
