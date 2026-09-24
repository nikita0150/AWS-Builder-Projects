# Serverless Asynchronous Document Processing

A hands-on AWS POC demonstrating **event-driven and asynchronous document processing** using Amazon S3, Amazon SQS, AWS Lambda, and Amazon DynamoDB.

The project simulates a system where a user uploads a document to S3. Instead of processing the document synchronously, S3 sends an event to SQS. Lambda consumes the message, downloads the document, extracts its text, and stores the extracted content and metadata in DynamoDB.

## Architecture
User │ │ Upload Document ▼ Amazon S3 │ │ S3 Event Notification ▼ Amazon SQS │ │ Message ▼ AWS Lambda │ ├── Read SQS message ├── Get document from S3 ├── Extract text └── Store result │ ▼ Amazon DynamoDB Failed messages │ ▼ SQS DLQ Monitoring │ ▼ CloudWatch
  
## AWS Services

* **Amazon S3** – Stores uploaded documents
* **Amazon SQS** – Buffers S3 events and decouples upload from processing
* **AWS Lambda** – Processes documents asynchronously
* **Amazon DynamoDB** – Stores extracted text and document metadata
* **Amazon CloudWatch** – Logs and monitors Lambda processing
* **SQS Dead Letter Queue** – Stores messages that repeatedly fail processing
* **AWS IAM** – Controls permissions between AWS services

## Processing Flow

1. User uploads a document to an S3 bucket.
2. S3 generates an `ObjectCreated` event.
3. The event is sent to the SQS queue.
4. Lambda is triggered by messages in SQS.
5. Lambda reads the S3 bucket and object key from the message.
6. Lambda downloads the document from S3.
7. Text is extracted from the document.
8. Extracted text and metadata are stored in DynamoDB.
9. Successfully processed SQS messages are removed from the queue.
10. Failed messages can be retried and eventually moved to the DLQ.

## Example DynamoDB Record

```json
{
  "documentId": "invoice-1001",
  "fileName": "invoice-1001.pdf",
  "s3Bucket": "document-processing-bucket",
  "s3Key": "uploads/invoice-1001.pdf",
  "status": "PROCESSED",
  "extractedText": "Invoice Number: INV-1001 ...",
  "processedAt": "2026-09-25T10:30:00Z"
}
```

## Why SQS?

The main purpose of this POC is to understand **asynchronous processing and decoupling**.

Instead of:

```text
S3 → Lambda
```

the architecture uses:

```text
S3 → SQS → Lambda
```

SQS provides:

* Decoupling between event generation and processing
* Buffering during traffic spikes
* Message retry capability
* Failure handling through a DLQ
* Independent scaling of the processing layer

## Key Concepts Learned

* S3 Event Notifications
* SQS Standard Queues
* SQS message lifecycle
* Visibility Timeout
* Message deletion after successful processing
* Lambda + SQS integration
* Dead Letter Queues
* IAM permissions
* Event-driven architecture
* Serverless document processing
* DynamoDB data storage
* CloudWatch logging and monitoring

## Future Enhancements

Once the core workflow is working, the project can be extended with:

* Terraform for Infrastructure as Code
* GitHub Actions for CI/CD
* CloudWatch alarms
* File type and size validation
* S3 processed/error folders
* Amazon Bedrock for document summarization or Q&A
* Amazon Textract for scanned/image-based documents
* API Gateway for application/API access

## Project Goal

The goal of this project is **not to build a complex document management application**.

It is a practical hands-on POC to understand how AWS services can be combined to build a **reliable, asynchronous, event-driven architecture**.
