# 🤖 AI Recipe Generator — AWS Serverless GenAI

A serverless GenAI application that generates recipes from user-provided ingredients using **Amazon Bedrock (Nova Lite)**.

Built to understand how AWS managed services can be combined into a secure, scalable, and CI/CD-driven application.

---

## 🏗️ Architecture

```text
                                                          User
                                                            │
                                                            ▼
                                                          AWS Amplify Hosting
                                                            │
                                                            ▼
                                                          React + TypeScript
                                                            │
                                                            ▼
                                                          Amazon Cognito
                                                          (Authentication)
                                                            │
                                                            ▼
                                                          AWS AppSync
                                                          (GraphQL API)
                                                            │
                                                            ▼
                                                          Bedrock HTTP Data Source
                                                            │
                                                            ▼
                                                          Amazon Bedrock
                                                          (Nova Lite)
                                                            │
                                                            ▼
                                                          AI Generated Recipe
```

---

## ☁️ AWS Services

| Service             | Purpose                        |
| ------------------- | ------------------------------ |
| **Amplify Hosting** | Frontend hosting + CI/CD       |
| **Amplify Gen 2**   | Backend Infrastructure as Code |
| **Cognito**         | User authentication            |
| **AppSync**         | GraphQL API                    |
| **Bedrock**         | GenAI inference                |
| **Nova Lite**       | Foundation model               |
| **IAM**             | Least-privilege access         |

---

## 🔧 What I Learned

### Cloud & Architecture

* Designed a **serverless AWS architecture**
* Understood frontend → API → AI service communication
* Learned how managed AWS services reduce infrastructure management

### DevOps

* Git-based deployment using **AWS Amplify Hosting**
* Monorepo deployment configuration
* Backend provisioning through **Infrastructure as Code**
* Understanding of build/deployment pipelines
* Troubleshooting AWS deployment and dependency issues

### Security

* Implemented authentication using **Amazon Cognito**
* Protected API operations using authenticated authorization
* Applied **least-privilege IAM** for Bedrock model invocation
* Kept AWS service access away from the frontend

### GenAI

* Integrated **Amazon Bedrock**
* Used **Amazon Nova Lite**
* Learned how applications communicate with foundation models through managed APIs

---

## 🚀 Production-Grade Evolution

For a production implementation, this architecture could be extended with:

```text
                    ┌──────────────┐
                    │     WAF      │
                    └──────┬───────┘
                           │
User → CDN/Amplify → Cognito → AppSync → Bedrock
                                      │
                                      ▼
                              Observability
                         CloudWatch / OpenTelemetry
```

Potential production improvements:

* Separate **Dev / Test / Prod** environments
* Automated CI/CD with testing and quality gates
* CloudWatch monitoring, logs and alarms
* AWS WAF and API throttling
* Custom domain + Route 53
* Centralized secrets/configuration management
* Cost monitoring and Bedrock usage controls
* RAG using **Bedrock Knowledge Bases**
* DynamoDB for recipe/history persistence

---

## 💡 Key Takeaway

This project demonstrates how to build a **secure, serverless GenAI application on AWS** while applying core Cloud/DevOps principles such as **IaC, CI/CD, IAM, authentication, managed services, scalability, and observability**.

---

## 🛠️ Tech Stack

**AWS:** Amplify • Cognito • AppSync • Bedrock • IAM
**Development:** React • TypeScript • Vite
**DevOps:** Git • GitHub • CI/CD • Infrastructure as Code
**AI:** Amazon Nova Lite
