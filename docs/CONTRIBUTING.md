# Contributing: TherapEase

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in the [#tier3-team-40] channel on Discord.

**Table of Contents**

1. [Configure shell](#configure-shell)
2. [Configure git](#configure-git)
3. [Clone Repo](#clone-repository)
4. [Select a task](#select-a-task)
5. [Create a feature branch](#create-a-feature-branch)
6. [Create a commit](#create-a-commit)
7. [Update the feature branch for code review](#update-the-feature-branch-for-code-review)
8. [Programmer Reference](#programmer-reference)

## Configure shell

Contributing to the project requires a shell terminal. On Windows, we recommend using [git-bash](https://gitforwindows.org/) because it consumes minimal system resources.

## Configure git

These settings are not requirements of the project. They are provided as a service for people who are [new to git](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners).

These commands can be run in any shell terminal.

```bash
git config --global user.name "full name. the name on your resume"
git config --global user.email "myemail@example.com"
```

## Clone Repository

Before you start contributing, you must clone our repository onto your computer. Open up a terminal in the folder that you want to clone the project to. Then use this command:

```bash
git clone https://github.com/chingu-voyages/v44-tier3-team-40.git
```

## Select a task

We use [Trello](https://trello.com/b/UhEoUpnD/community-fridge-map-dev) to keep track of tasks.

- Backlog : A list of tasks that cannot be started
- Todo : A list of tasks that can be started
- In Progress : Tasks currently being worked on
- Code Review/ Testing : Tasks waiting for review /Testing
- Done : Completed tasks

You can pick any task from the `Todo` column that does not already have members. Once you begin working on a task, add yourself as a member, and move it to `In Progress`.

## Create a feature branch

Create a feature branch for the task you are working on. Branch names must be in lowercase and in this format: `tp_<task number>_<initials>`. The task number is in the task title `[TP_#]`. The initials come from the name you use on your resume. For example, if Sean starts work on `[TP_22]`, he would use the following commands to create a feature branch:

```bash
git fetch --prune                               # gof
git checkout origin/main --no-track -b tp_13_sr # go origin/main --no-track -b tp_13_sr
```

## Create a commit

The commit message header must be in the format: `<type>: <subject>`

`type` is one of the following tags:

- feat : new feature for the user, not a new feature for build script
- fix : bug fix for the user, not a fix to a build script
- refactor : refactoring production code, eg. renaming a variable
- test : adding missing tests, refactoring tests; no production code change
- perf : performance improvements to production code
- style : formatting, missing semi colons, etc; no production code change
- asset : changing static assets. ie css files, images, etc
- doc : changes to the documentation
- ci : updating CD/CI pipeline; no local script changes
- chore : updating grunt tasks etc; no production code change
- revert : reverting a previously published commit

`subject` must abide by the following rules:

- subject must start with a capital letter
- subject must not end with a period
- subject must not exceed 70 characters

commit header examples:

- `feat: Add hat wobble`
- `wip: Move commit-convention to docs`

The complete details on commit messages can be found in the [commit convention](./commit-convention.md).

## Update the feature branch for code review

While it is very useful to create multiple commits during development; for effective code management, every feature needs to be in its own commit. Follow these steps to create atomic commits and incorporate the latest changes from `origin/dev` before submitting your feature branch for review.

1. Ensure that all work is committed and the branch is clean

   - display changed files

   ```bash
   git status                        # gs
   ```

   - commit changes to the current branch

   ```bash
   git add --all                     # gaa
   git commit -m 'wip: Current work' # gc wip: Current work
   ```

1. Fetch the most recent commits from origin

   ```bash
   git fetch origin --prune  # gof
   ```

1. Push the feature branch and move the associated [Trello](https://trello.com/b/1hHqdLbA/chingu-voyage-44-team-40) card to 'Code Review/Testing'

   ```bash
   git push origin -uf       # gop -f
   ```

## Request a code review

Once your feature branch has been merged into dev, it will automatically be deployed to the [staging website](staging site url goes here)

## Programmer Reference

- Production (deployed from main branch): production site url here
- Staging (deployed from dev branch): staging site url here

### Library

- Application Framework: [Next.js](https://nextjs.org/docs/)

  - [Next.js tutorial](https://nextjs.org/learn)
  - [Next.js repository](https://github.com/vercel/next.js/)

### Design philosophy

- [Atomic Design](https://atomicdesign.bradfrost.com/table-of-contents/)
