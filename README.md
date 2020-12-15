# BugTracker UI

**BugTracker** é uma aplicação que serve para gerenciar bugs em projetos. No BugTracker você pode criar projetos e enviar convites para usuários (o usuário tem o poder de aceitar ou recusar o convite). Se aceito o convite, o usuário torna-se um membro, assim você poderá criar Bugs e contar com sua equipe para solucioná-lo.

Esse **BugTracker** foi um projeto **planejado e desenvolvido por mim** e não é um projeto baseado em nenhum curso.

## Live Demo

Link : https://bugtracker-ui.herokuapp.com/

![Demo](docs/demo.gif?raw=true "Demo")

## Back-end Repository

Link: https://github.com/emanuelhonorio/bugtracker-api

## Project Structure

```
📦src
 ┣ 📂app
 ┃ ┣ 📂core
 ┃ ┃ ┣ 📂guards
 ┃ ┃ ┃ ┗ 📜auth.guard.ts
 ┃ ┃ ┣ 📂interceptors
 ┃ ┃ ┃ ┗ 📜auth.interceptor.ts
 ┃ ┃ ┗ 📜core.module.ts
 ┃ ┣ 📂modules
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┣ 📂sign-in
 ┃ ┃ ┃ ┃ ┃ ┣ 📜sign-in.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜sign-in.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜sign-in.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜sign-in.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂sign-up
 ┃ ┃ ┃ ┃ ┃ ┣ 📜sign-up.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜sign-up.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜sign-up.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜sign-up.component.ts
 ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┣ 📜auth.service.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜auth.service.ts
 ┃ ┃ ┃ ┗ 📜auth.module.ts
 ┃ ┃ ┣ 📂bug
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📂bug-update-model
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bug-update-model.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bug-update-model.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bug-update-model.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜bug-update-model.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂bugs-header
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bugs-header.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bugs-header.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bugs-header.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜bugs-header.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂bugs-table
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bugs-table.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bugs-table.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜bugs-table.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜bugs-table.component.ts
 ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┣ 📂create-bug
 ┃ ┃ ┃ ┃ ┃ ┣ 📜create-bug.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜create-bug.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜create-bug.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜create-bug.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂list-bugs
 ┃ ┃ ┃ ┃ ┃ ┣ 📜list-bugs.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜list-bugs.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜list-bugs.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜list-bugs.component.ts
 ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┣ 📜bug.service.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜bug.service.ts
 ┃ ┃ ┃ ┗ 📜bug.module.ts
 ┃ ┃ ┣ 📂dashboard
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📂chart-bug-status-amount
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chart-bug-status-amount.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chart-bug-status-amount.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chart-bug-status-amount.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜chart-bug-status-amount.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂chart-severity-amount
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chart-severity-amount.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chart-severity-amount.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜chart-severity-amount.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜chart-severity-amount.component.ts
 ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┗ 📂dashboard
 ┃ ┃ ┃ ┃ ┃ ┣ 📜dashboard.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜dashboard.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜dashboard.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜dashboard.component.ts
 ┃ ┃ ┃ ┗ 📜dashboard.module.ts
 ┃ ┃ ┣ 📂feed
 ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┗ 📂feed
 ┃ ┃ ┃ ┃ ┃ ┣ 📜feed.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜feed.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜feed.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜feed.component.ts
 ┃ ┃ ┃ ┗ 📜feed.module.ts
 ┃ ┃ ┣ 📂notification
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📂invite-row
 ┃ ┃ ┃ ┃ ┃ ┣ 📜invite-row.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜invite-row.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜invite-row.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜invite-row.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂notification-row
 ┃ ┃ ┃ ┃ ┃ ┣ 📜notification-row.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜notification-row.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜notification-row.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜notification-row.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂notifications
 ┃ ┃ ┃ ┃ ┃ ┣ 📜notifications.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜notifications.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜notifications.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜notifications.component.ts
 ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┣ 📜notification.service.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜notification.service.ts
 ┃ ┃ ┃ ┗ 📜notification.module.ts
 ┃ ┃ ┣ 📂project
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📂project-update-model
 ┃ ┃ ┃ ┃ ┃ ┣ 📜project-update-model.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜project-update-model.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜project-update-model.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜project-update-model.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂projects-header
 ┃ ┃ ┃ ┃ ┃ ┣ 📜projects-header.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜projects-header.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜projects-header.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜projects-header.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂projects-table
 ┃ ┃ ┃ ┃ ┃ ┣ 📜projects-table.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜projects-table.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜projects-table.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜projects-table.component.ts
 ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┣ 📂create-project
 ┃ ┃ ┃ ┃ ┃ ┣ 📜create-project.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜create-project.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜create-project.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜create-project.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂list-projects
 ┃ ┃ ┃ ┃ ┃ ┣ 📜list-projects.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜list-projects.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜list-projects.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜list-projects.component.ts
 ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┣ 📜project.service.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜project.service.ts
 ┃ ┃ ┃ ┗ 📜project.module.ts
 ┃ ┃ ┗ 📂user
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📂users-header
 ┃ ┃ ┃ ┃ ┃ ┣ 📜users-header.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜users-header.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜users-header.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜users-header.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂users-list
 ┃ ┃ ┃ ┃ ┃ ┣ 📜users-list.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜users-list.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜users-list.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜users-list.component.ts
 ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┣ 📂create-user
 ┃ ┃ ┃ ┃ ┃ ┣ 📜create-user.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜create-user.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜create-user.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜create-user.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂list-users
 ┃ ┃ ┃ ┃ ┃ ┣ 📜list-users.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜list-users.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜list-users.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜list-users.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂profile
 ┃ ┃ ┃ ┃ ┃ ┣ 📜profile.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜profile.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜profile.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜profile.component.ts
 ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┣ 📜user.service.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜user.service.ts
 ┃ ┃ ┃ ┗ 📜user.module.ts
 ┃ ┣ 📂shared
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂app-template
 ┃ ┃ ┃ ┃ ┣ 📜app-template.component.html
 ┃ ┃ ┃ ┃ ┣ 📜app-template.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜app-template.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜app-template.component.ts
 ┃ ┃ ┃ ┣ 📂confirm
 ┃ ┃ ┃ ┃ ┣ 📜confirm.component.html
 ┃ ┃ ┃ ┃ ┣ 📜confirm.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜confirm.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜confirm.component.ts
 ┃ ┃ ┃ ┣ 📂navbar
 ┃ ┃ ┃ ┃ ┣ 📜navbar.component.html
 ┃ ┃ ┃ ┃ ┣ 📜navbar.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜navbar.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜navbar.component.ts
 ┃ ┃ ┃ ┗ 📂sidebar
 ┃ ┃ ┃ ┃ ┣ 📜sidebar.component.html
 ┃ ┃ ┃ ┃ ┣ 📜sidebar.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜sidebar.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜sidebar.component.ts
 ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┣ 📜date-formatter.service.spec.ts
 ┃ ┃ ┃ ┗ 📜date-formatter.service.ts
 ┃ ┃ ┗ 📜shared.module.ts
 ┃ ┣ 📜app-routing.module.ts
 ┃ ┣ 📜app.component.html
 ┃ ┣ 📜app.component.scss
 ┃ ┣ 📜app.component.spec.ts
 ┃ ┣ 📜app.component.ts
 ┃ ┗ 📜app.module.ts
 ┣ 📂assets
 ┃ ┗ 📜.gitkeep
 ┣ 📂environments
 ┃ ┣ 📜environment.prod.ts
 ┃ ┗ 📜environment.ts
 ┣ 📜favicon.ico
 ┣ 📜index.html
 ┣ 📜main.ts
 ┣ 📜polyfills.ts
 ┣ 📜styles.scss
 ┗ 📜test.ts
```
