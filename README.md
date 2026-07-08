# Enterprise Node.js Web Application Deployment on Azure

A secure, production-grade deployment pipeline hosting a Node.js web application on Azure App Service using GitHub Actions and OpenID Connect (OIDC).

## 🚀 Live Demo
- **URL:** [https://06-enterprise-webapp-3mtt-c3d7akfmc6e5fcg8.denmarkeast-01.azurewebsites.net](https://06-enterprise-webapp-3mtt-c3d7akfmc6e5fcg8.denmarkeast-01.azurewebsites.net)

## 🛠️ Architecture & Features
- **Runtime Environment:** Node.js 20/24 LTS hosted on a Linux-based Azure App Service (Free F1 Tier).
- **Security Framework:** Zero-password authentication via Microsoft Entra ID Workload Identity Federation.
- **CI/CD Pipeline:** Fully automated deployment triggered on every `git push` to the `main` branch.

## 🔒 Security & Compliance (OIDC)
Legacy Basic Authentication and Publish Profiles are completely disabled in this infrastructure. Instead, authentication relies on a token-exchange mechanism:
1. GitHub Actions requests a short-lived JSON Web Token (JWT) from the GitHub OIDC provider.
2. The JWT is presented to Microsoft Entra ID.
3. Entra ID validates the **Federated Identity Credential** matching the specific repository (`michades11/06-azure-web-app-service`) and branch (`main`).
4. Upon successful validation, Azure issues a temporary access token restricted to the **Website Contributor** role for deployment.

## 📦 How to Run Locally
1. Clone the repository:
   ```bash
   git clone [https://github.com/michades11/06-azure-web-app-service.git](https://github.com/michades11/06-azure-web-app-service.git)
Install dependencies and start the server:

Bash
npm install
npm start