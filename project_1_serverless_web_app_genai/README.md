# 🤖 Serverless Generative AI Web Application on AWS

A serverless Generative AI web application built using AWS Amplify, Amazon Cognito, AWS AppSync, AWS Lambda, and Amazon Bedrock.

The application allows users to enter a list of ingredients and generates AI-powered recipe suggestions using a foundation model available through Amazon Bedrock.

---

## 🚀 Project Overview

This project demonstrates how to build and deploy a complete serverless Generative AI application on AWS without managing traditional servers.

The application consists of:

- A web frontend hosted using AWS Amplify
- User authentication using Amazon Cognito
- A GraphQL API using AWS AppSync
- Serverless backend processing using AWS Lambda
- Generative AI inference using Amazon Bedrock
- Continuous deployment through AWS Amplify and GitHub

The project is based on the AWS hands-on tutorial:

[AWS - Build a Serverless Web Application using Generative AI](https://docs.aws.amazon.com/hands-on/latest/build-serverless-web-app-lambda-amplify-bedrock-cognito-gen-ai/build-serverless-web-app-lambda-amplify-bedrock-cognito-gen-ai.html)

---

## 🏗️ Architecture

```text
                         ┌──────────────────────┐
                         │        User          │
                         │   Web Browser        │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │    AWS Amplify       │
                         │  Frontend Hosting    │
                         └──────────┬───────────┘
                                    │
                                    │ Authentication
                                    ▼
                         ┌──────────────────────┐
                         │   Amazon Cognito     │
                         │   User Authentication│
                         └──────────────────────┘

                                    │
                                    │ API Request
                                    ▼
                         ┌──────────────────────┐
                         │     AWS AppSync      │
                         │    GraphQL API       │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │     AWS Lambda       │
                         │  Serverless Backend  │
                         └──────────┬───────────┘
                                    │
                                    │ Prompt
                                    ▼
                         ┌──────────────────────┐
                         │   Amazon Bedrock     │
                         │ Generative AI Model  │
                         └──────────┬───────────┘
                                    │
                                    │ AI Response
                                    ▼
                         ┌──────────────────────┐
                         │      Lambda          │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      AppSync         │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      Amplify         │
                         │      Frontend        │
                         └──────────────────────┘