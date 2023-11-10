# 👨‍🍳 EcoKitchen App

## Demo

https://github.com/leep1000/EcoKitchen/assets/123783299/5d55a37e-cacd-4e8d-a7b6-eec3a4891828

**_[Check it out here!](https://www.google.com "EcoKitchen")_**

## Problem Statement
In the UK, many households waste a significant portion of their food costs due to poor planning, lack of culinary ideas, and poor use of leftovers. There is no current solution that solves these problems simultaneously.

## Our Solution
Introducing **_EcoKitchen_**, a user-friendly app that helps you keep track of what's in your kitchen, find recipes that use what you've got, remind you of food that's about to go off, and even plan your shopping list.

Here’s how it helps:

*  **Keep Tabs on Your Kitchen:** Easily add and see what food you have at home, with reminders for when things are going to expire.

-  **Recipe Finder:** Get recipe ideas based on what you already have, so you can use up leftovers and avoid waste.

-  **Shopping List:** Plan your shopping better with a list that suggests what to buy based on what you usually eat and what you're running out of.

Developed by the team at console.loggers(), EcoKitcheb was  planned and executed over a sprint of 5 weeks. 

## Meet the Team

Get to know the crew behind the project:

<table>
  <tr>
    <td align="center"><a href="https://github.com/carrieshenkayee"><img src="https://github.com/carrieshenkayee.png" width="100" height="100" alt="Carrie"/><br /><sub><b>Carrie</b></sub></a></td>
    <td align="center"><a href="https://github.com/usama-asghar1"><img src="https://github.com/usama-asghar1.png" width="100" height="100" alt="Usama"/><br /><sub><b>Usama</b></sub></a></td>
    <td align="center"><a href="https://github.com/leep1000"><img src="https://github.com/leep1000.png" width="100" height="100" alt="Lee"/><br /><sub><b>Lee</b></sub></a></td>
    <td align="center"><a href="https://github.com/Theojeddy"><img src="https://github.com/Theojeddy.png" width="100" height="100" alt="Theo"/><br /><sub><b>Theo</b></sub></a></td>
    <td align="center"><a href="https://github.com/sdiini001"><img src="https://github.com/sdiini001.png" width="100" height="100" alt="Saynab"/><br /><sub><b>Saynab</b></sub></a></td>
  </tr>
</table>

# Git Branching Strategy

## Branches

- `main`: Contains the Minimum Viable Product (MVP). Only well-tested and reviewed code that is considered ready for production is merged into this branch.
- `development`: Serves as the staging area for integrating code from the `frontend` and `backend` branches.
- `frontend`: Contains complete features that form part of the app's frontend.
- `backend`: Contains complete features that form part of the app's backend.

## Best Practices

- Pull the latest changes from the parent branch frequently.
- Keep feature branches focused – one branch per feature.
- Write meaningful commit messages.
- Resolve merge conflicts as soon as they arise.
- Communicate with your team members.

## Workflow

1. **Create Feature Branch**: Create a new branch off from either `frontend` or `backend` for your new feature. Name it descriptively, e.g., `feature/navbar`.

2. **Work on your Feature**: Make changes, commit them, and push the branch to GitHub.

3. **Create Pull Request**: Once the feature is complete, create a pull request to merge it into `frontend` or `backend`.

4. **Code Review and Testing**: Other team members review the code and provide feedback. Make any necessary changes.

5. **Merge to Development**: When the feature is stable, merge it into the `development` branch.

6. **Final Review and Merge to Main**: After thorough testing and when the `development` branch is production-ready, merge it into the `main` branch.

## Example

1. **Create a new feature branch from frontend**

git checkout frontend

git pull origin frontend

git checkout -b feature/navbar

**...work on the feature...**

2. **Push your feature branch to the remote repository**

git push origin feature/navbar

3. **Create a pull request to merge into frontend:** Use github for this

4. **Review code, conduct tests, and merge into frontend**

5. **Merge frontend into development once it's stable**

git checkout development

git pull origin development

git merge frontend

git push origin development

6. **After thorough testing, merge development into main for production**

git checkout main

git pull origin main

git merge development

git push origin main

7. Testing revert by carrie
