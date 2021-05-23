const aws_cards = [
    {
        "q": "Differences and commonalities between pre-signed URLs and signed URLs?",
        "a": "Pre-signed URLs vs signed URLs<br><br><ul><li>Pre-signed URLs is a feature of S3.</li><li>Signed URLs is a feature of CloudFront.</li><li>Main use case for both is to share content privately with users, by providing a URL that includes a secret.</li><li>Both can be restricted with factors such as expiration date.</li><li>In addition, pre-signed URLs can be used to allow users to upload objects to buckets where they normally wouldn't have permissions to upload.</li></ul>"
    },
    {
        "q": "Compare CloudFront's signed URLs to signed cookies. Both are used to provide users access to private content. When should you use one over the other?",
        "a": `Signed URLs vs signed cookies
                <br><br>
                <ul>
                    <li>Signed cookies are often more appropriate than signed URLs, because you can provide access to <i>multiple</i> files at once, and you don't have to change any URLs.</li>
                    <li>Signed URLs can be useful if you want to restrict access to <i>individual</i> files, or if you are unable to use signed cookies.</li>
                </ul>
             `
    },
    {
        "q": "Describe a typical use case for Instance Profile.",
        "a": "Instance profile of an EC2 instance allows you to attach an IAM role to the instance."
    },
    {
        "q": "EC2 MetaData contains information such as..?",
        "a": "EC2 MetaData contains the instance type, ip address, AMI information, etc."
    },
    {
        "q": "What kind of physical disk volumes can you mount on an EC2 instance?",
        "a": `EC2 physical disk volumes<br><br>
        <ul>
            <li>Instance store (ephemeral)</li>
            <li>EBS (Elastic Block Store, persistent)</li>
            <li>EFS (Elastic File System, also persistent, can be concurrently mounted by multiple instances)</li>
        </ul>
        `
    },
    {
        "q": "Summarize EC2 placement groups.",
        "a": "EC2 placement groups<br><br><ul><li><b>Cluster</b>: pack instances physically close together within an AZ (e.g. for HPC where instances need low latency communication with each other)</li><li><b>Partition</b>: multiple instances within each partition, partitions do not share underlying hardware with each other (e.g. for distributed jobs like hadoop)</li><li><b>Spread</b>: each instance is kept on a different rack (e.g. for critical workloads where work is replicated)</li></ul>"
    },
    {
        "q": "When does Auto Scaling Group spin up new instances?",
        "a": `Auto Scaling Group spins up new instances
              <br><br>
              <ul>
                <li>When an unhealthy instance is detected and needs to be replaced with a fresh instance</li>
                <li>When the number of instances needs to be increased due to scaling policy (e.g. to scale in response to traffic surge)</li>
              </ul>
            `
    },
    {
        "q": "List the scaling policies of Auto Scaling Groups.",
        "a": `Scaling policies of Auto Scaling Groups
              <br><br>
              <ul>
                <li>Manual scaling</li>
                <li>Scheduled scaling</li>
                <li>Predictive scaling</li>
                <li>Dynamic scaling
                    <ul>
                        <li>Step scaling: scale in/out to x instances depending on cloudwatch alarm value</li>
                        <li>Simple scaling: step scaling with only 1 step</li>
                        <li>Target tracking scaling: e.g. target cpu utilization of 40%, details of scaling in/out left up to AWS</li>
                    </ul>
                </li>
              </ul>
             `
    },
    {
        "q": "What can you configure with Auto Scaling Group's Launch templates?",
        "a": "Auto Scaling Group Launch templates define the AMI, instance type, EBS volumes, etc. for the EC2 instances that will be launched."
    },
    {
        "q": "How can you modify the instance type of an Auto Scaling Group?",
        "a": "The instance type of EC2 instances launched by the Auto Scaling Group is defined in the Launch template. Launch templates are versioned, so you can create a new version of the launch templates and configure the Auto Scaling Group to use the new template. Your old instances will keep running until they are wound down and replaced with new instances."
    },
    {
        "q": "List different types of Elastic Load Balancers.",
        "a": `Elastic Load Balancer types
                <br><br>
                <ul>
                    <li>Application Load Balancer (most common)</li>
                    <li>Network Load Balancer (network layer)</li>
                    <li>Classic Load Balancer (legacy)</li>
                </ul>
             `
    },
    {
        "q": "Provide an example that involves an Application Load Balancer rule, listener and target group.",
        "a": "Application Load Balancer might be configured with a <b>listener</b> on port 443 and a <b>rule</b> that forwards traffic to a <b>target group</b> of EC2 instances."
    },
    {
        "q": "You're trying to track down the source of suspicious traffic. You're reading through CloudWatch logs, and you find the IP address of the requests. You realize the IP address belongs to your Elastic Load Balancer. What can you do to find out the IP address of the actual user?",
        "a": "When Elastic Load Balancer sends requests from its own IP address, it will include <b>X-forwarded-for</b> header, which has the IP address of the actual user."
    },
    {
        "q": "What are Sticky Sessions and when would you use them with your Application Load Balancer?",
        "a": "<b>Sticky Sessions</b> allow you to bind a user session to a specific EC2 instance. In other words, your Application Load Balancer will direct all requests from the same user to the same EC2 instance. This might be useful if the application handles some state in instance memory (as opposed to a database or client-side cookies)."
    },
    {
        "q": "What is Elastic Container Registry?",
        "a": "Elastic Container Registry (ECR) is a managed AWS service. You can use it to store, manage, and deploy your <b>Docker images</b>. Other AWS services, such as ECS, integrate with ECR (can fetch your Docker images from ECR)."
    },
    {
        "q": "What is Elastic Beanstalk?",
        "a": "Elastic Beanstalk is a platform to deploy applications, like Heroku."
    },
    {
        "q": "Describe the billing of Elastic Beanstalk",
        "a": "Elastic Beanstalk orchestrates other AWS services to deploy your application (ECS, ASG, EC2, ELB, etc.). Elastic Beanstalk is free, you only pay for the underlying services."
    },
    {
        "q": "Compare Elastic Beanstalk's web environment to worker environment.",
        "a": `Elastic Beanstalk environments
                <br><br>
                <ul>
                    <li>Web environment orchestrates an ASG of EC2 instances behind an ELB</li>
                    <li>Worker environment orchestrates an SQS queue, EC2 instances behind SQS daemon, and ASG to scale based on queue size</li>
                </ul>
             `
    },
    {
        "q": "How is Elastic Beanstalk related to Docker?",
        "a": "When you deploy your application with Elastic Beanstalk, it orchestrates the Elastic Container Service (ECS) to run your app. ECS needs a Docker container to run your app. You can either provide your own Docker container for Elastic Beanstalk or you can use Elastic Beanstalk's pre-configured containers for common languages like Java or Python."
    },
    {
        "q": "List the deployment options for Elastic Beanstalk.",
        "a": `  <ul>
                    <li>In-place deployments for Elastic Beanstalk
                        <ul>
                            <li>All-at-once deployment (shutdown old instances first, then spin up new instances)</li>
                            <li>Rolling deployment (shutdown old instances in batches to avoid downtime)</li>
                            <li>Rolling with additional batch (no reduced capacity during rolling deployment)</li>
                            <li>Immutable (create new ASG with new EC2 instances, point ELB to new ASG, delete old ASG later)</li>
                        </ul>
                    </li>
                    <li>Blue-green deployments for Elastic Beanstalk are similar to immutable deployments, except they require a DNS change to propagate</li>
                </ul>
             `
    },
    {
        "q": "How is ECS related to Fargate?",
        "a": `<div class="text-left">Elastic Container Service (ECS) is a platform to orchestrate containers. There are 2 ways to run your workloads in ECS:</div>
        <br><ul>
                    <li>EC2 fleet with an Auto Scaling Group</li>
                    <li>Serverless, with Fargate</li>
                </ul>
                <br><div class="text-left">You can find Fargate under ECS in the AWS Console.</div>
             `
    },
    {
        "q": "Describe ECS Clusters.",
        "a": "ECS Cluster can contain a mix of tasks and services. ECS Cluster may contain either EC2 or Fargate launch types."
    },
    {
        "q": "What is the difference between tasks and services in ECS?",
        "a": "Tasks are the underlying computing unit in ECS. You can define a service to make sure a task runs continuously (for example, to run a web application)."
    },
    {
        "q": "Can you leverage spot pricing in ECS?",
        "a": "If you use Fargate, you can leverage Fargate Spot Tasks. If you use EC2 fleet, you can leverage EC2 spot instances."
    },
    {
        "q": "In the context of ECS,<br>what does <i>Container Agent</i> mean?",
        "a": "Container Agent is a binary which monitors, starts and stops tasks in EC2 instances. It is relevant only to EC2 launch type in ECS (not relevant for Fargate launch type)."
    },
    {
        "q": "Why is Fargate generally recommended over EC2 launch type in ECS?",
        "a": "Fargate is serverless, so there is less configuration overhead for you as a developer. You simply define the vCPU count and memory size for your tasks and AWS deals with the underlying EC2 instances."
    },
    {
        "q": "Describe AWS Lambda.",
        "a": "You can use Lambda to run serverless functions. Lambda functions are often used to glue different applications together. Lambda functions can be invoked via AWS SDK and they can also be triggered from AWS-managed services."
    },
    {
        "q": "When is AWS Lambda unsuitable for a task?",
        "a": "AWS Lambda has low memory and execution time limits, so it is unsuitable for long-running or otherwise demanding tasks. In addition, Lambda suffers from cold starts, so if you use it for tasks which require low latency, you need some hacks to keep the Lambda warm."
    },
    {
        "q": "What is the relationship between your Lambda function and your VPCs?",
        "a": "When you create a Lambda function, it will exist within a region, but outside your VPC. If you need your Lambda to access resources within a private subnet, you can configure the Lambda to connect to your VPC. In this case it will create Elastic Network Interfaces for each subnet in your Lambda's VPC configuration. If the subnets run out of IP addresses, you will see EC2ThrottledException."
    },
    {
        "q": "Describe typical use cases for VPC Flow logs",
        "a": `VPC Flow logs can help you with tasks such as:
        <br><br><ul>
                    <li>Diagnosing connectivity issues (e.g. misconfigured security group rules)</li>
                    <li>Monitoring traffic that reaches your instance</li>
                </ul>
             `
    },
    {
        "q": "Describe types of IAM policies.",
        "a": `IAM policy types
        <br><br><ul>
                    <li>AWS managed policy</li>
                    <li>Customer managed policy</li>
                    <li>Inline policy</li>
                </ul>
                <br>
              <div class="text-left">Policies are attached to identities (users, roles, or groups). Inline policy means a policy that's directly attached to a single identity. Other policies can be attached to multiple identities. AWS managed policies are intended to reduce manual configuration for common use cases, e.g. AWS maintains AdministratorAccess policy that gives wide permissions for many things.</div>
             `
    },
    {
        "q": "Compare Cognito user pools and identity pools.",
        "a": `Amazon Cognito
        <br><br><ul>
                    <li><b>User pools</b> are for authentication (identity verification). For example, sign-up, sign-in, user data, user tracking.</li>
                    <li><b>Identity pools</b> are for authorization (access control). For example, generate temporary AWS credentials for unauthenticated users, or give your authenticated users access to your AWS resources.</li>
                </ul>
             `
    },
    {
        "q": "Which protocols does AWS IAM support for identity federation?",
        "a": `
        <div class="text-left">AWS IAM identity federation protocols:</div><br>
            <ul>
                <li>SAML 2.0 (e.g. Microsoft AD)</li>
                <li>OpenID Connect 2.0 (e.g. OAuth)</li>
            </ul><br>
            <div class="text-left">Also note that if you wish to federate access for your web or mobile end users, AWS recommends using Cognito for identity federation instead of setting up federation via IAM.</div>
        `
    },
    {
        "q": "Compare CloudFront origin requests and viewer requests.",
        "a": "CloudFront origin requests are cacheable, whereas viewer requests are never cached."
    },
    {
        "q": "Compare Step Functions and Simple Workflow Service.",
        "a": "Step Functions is AWS-managed service for orchestrating several microservices to work together. Simple Workflow Service is a legacy alternative to Step Functions."
    },
    {
        "q": "Summarize Inspector, GuardDuty, Config and Shield.",
        "a": `
                <ul>
                    <li><b>Inspector</b> provides rule-based vulnerability discovery</li>
                    <li><b>GuardDuty</b> provides machine learning -based threat detection by monitoring logs</li>
                    <li><b>Config</b> compares your various configurations to desired configurations</li>
                    <li><b>Shield</b> is a DDoS protection service</li>
                </ul>
             `
    },
    {
        "q": "Compare GuardDuty and Inspector.",
        "a": `
            GuardDuty vs Inspector<br><br>
            <ul>
                <li>Inspector identifies vulnerabilities, whereas GuardDuty monitors logs for suspicious traffic.</li>
                <li>Inspector is rule-based, whereas GuardDuty utilizes machine learning and threat intelligence.</li>
            </ul>
        `
    },
    {
        "q": "Provide examples of the kind of the vulnerabilities that may be reported by AWS Inspector.",
        "a": `
            AWS Inspector examples:<br><br>
            <ul>
                <li>Unintended network access</li>
                <li>Remote root login enabeld on an EC2 instance</li>
                <li>Vulnerable software versions</li>
            </ul>
        `
    },
    {
        "q": "Which sources does GuardDuty monitor for threat detection?",
        "a": `GuardDuty monitors various logs, including:<br><br>
            <ul>
                <li>CloudTrail logs</li>
                <li>VPC Flow logs</li>
                <li>DNS logs</li>
            </ul>
        `
    },
    {
        "q": "How should you serve static web assets on AWS?",
        "a": "Static web assets should be stored in <b>S3</b> and distributed with <b>CloudFront</b>."
    },
    {
        "q": "Does S3 have a directory/file structure?",
        "a": `
                Technically, S3 does not have a directory/file structure. S3 is object storage where objects are stored in buckets, in a flat hierarchy, identified only by their key. <b>However</b>, you can represent file paths with the key. For example, a key might be \"<i>assets/logo.svg</i>\". If you use the AWS Console to list your S3 objects, these keys will be represented as directories and files for your convenience. Furthermore, S3 buckets can be mounted to EC2 instances as file system volumes.
              
              `
    },
    {
        "q": "You create an S3 bucket. Where does it exist?",
        "a": `<ul>
                <li>S3 buckets exist outside your VPCs</li>
                <li>S3 buckets exist within a region<br>(cross-region replication is also possible)</li>
                <li>S3 bucket names are globally unique<br>(like domain names)</li>
              </ul>
            `
    },
    {
        "q": "Provide an example of S3 lifecycle management.",
        "a": "S3 lifecycle management might be used to automatically move objects from Standard tier to Glacier after 30 days from creation, and permanently delete objects after 90 days."
    },
    {
        "q": "List S3 tiers.",
        "a": `S3 tiers
        <br><br><ul>
                    <li><b>Standard</b>: highly available and durable, replicated across at least 3 AZs</li>
                    <li><b>IA (Standard Infrequently Accessed)</b>: reduced storage cost, additional fees for retrieval</li>
                    <li><b>One Zone IA</b>: no replication to multiple AZs</li>
                    <li><b>Intelligent Tiering</b>: automatically move objects between Standard and IA to optimize costs</li>
                    <li><b>Glacier</b> and <b>Glacier Deep Archive</b>: lowest cost, retrieval time options vary from minutes to hours. Retrieval capacity is not guaranteed unless you reserve retrieval capacity in advance.</li>
        </ul>
        `
    },
    {
        "q": "What's the simplest way to move an EC2 instance to a different physical host?",
        "a": "You can move an EC2 instance to a new host by stopping and starting the instance."
    },
    {
        "q": "Can you mount the same EBS volume concurrently to multiple EC2 instances?",
        "a": "Typically you would mount an EBS volume to only one EC2 instance at a time. You can technically mount an EBS volume to multiple instances with EBS Multi-Attach, but it comes with a lot of restrictions. <b>Usually an EFS volume is preferred for this kind of use case.</b>"
    },
    {
        "q": "You have increased EBS volume capacity, but when you SSH into the instance, you don't see the extra space. Why?",
        "a": "After increasing EBS volume capacity, you need to extend the volume's file system to gain access to the extra space."
    },
    {
        "q": "Users are complaining that your application is slow while its Linux instances are being patched with Systems Manager Patch Manager. How should you remediate the situation?",
        "a": "Systems Manager Patch Manager can be configured to patch only a small portion of instances in the patch group at a time."
    },
    {
        "q": "You try to log into your EC2 instance with Systems Manager Session Manager, but the instance is not listed. What could be wrong?",
        "a": "If the instance is using a custom AMI, you may need to manually add IAM role and permissions to the instance profile and install the SSM agent on the instance."
    },
    {
        "q": "You can not find application logs from your EC2 instance in CloudWatch Logs. What is the first thing to check while troubleshooting?",
        "a": "In order for application logs to be passed from your EC2 instance to CloudWatch Logs, the <b>CloudWatch Agent</b> must be installed on the instance."
    },
    {
        "q": "You've set up a CloudFormation stack for deployments, but another developer made changes to the stack via the AWS Console. What should you do?",
        "a": "You can use <i>drift detection</i> to identify differences between the CloudFormation template and the deployed stack, and then update the template accordingly and redeploy the stack."
    },
    {
        "q": "How can you reuse the same CloudFormation template to deploy to multiple regions?",
        "a": "You can use CloudFormation parameters to set custom values and reference the parameters with <i>!Ref</i>."
    },
    {
        "q": "Can you use the same AMI in different regions?",
        "a": "AMIs are region-specific, but the IDs share a global namespace. You can copy an AMI to another region, but it will receive a new AMI ID."
    },
    {
        "q": "How can your EC2 instances connect to an S3 bucket within the same region without crossing the internet?",
        "a": "You can use a <b>NAT gateway</b> or a <b>VPC endpoint</b> to route traffic from EC2 instances directly to an S3 bucket without crossing the internet."
    },
    {
        "q": "How can you make a website marketing campaign visible only to users of a specific country?",
        "a": "You can use Route 53 geolocation routing policy to route traffic from country A to resource X, and traffic from other countries to resource Y."
    },
    {
        "q": "Can you encrypt an unencrypted RDS database?",
        "a": "You can not encrypt an unencrypted RDS database on the fly. You can create a snapshot of the database, then copy the snapshot with \"enable encryption\" checked, and finally, restore a new RDS instance from the encrypted snapshot."
    },
    {
        "q": `Why does AWS KMS use <i>envelope encryption</i> where a <i>master key</i> is used to encrypt <i>data keys</i> which are used to encrypt data?`,
        "a": `AWS KMS uses <i>envelope encryption</i> to make it easier to rotate the master key. If the master key was used to encrypt data, then a key rotation would require decrypting and re-encrypting all of the data. But when the data is encrypted with a data key, master key can be changed without changing the data key, so there is no need to re-encrypt the data. Only the data key needs to be re-encrypted.`
    },
    {
        "q": `List S3 object properties.`,
        "a": `S3 object properties<br><br>
            <ul>
            <li><b>Key</b>: you can locate an object if you know its bucket and key (and version id, if versioning for the bucket is turned on)</li>
            <li><b>Value</b>: data (file content)</li>
            <li><b>Metadata</b>: e.g. version, last-modified, etc. (user-defined metadata is also possible)</li>
            </ul>

            `
    },
    {
        "q": "Some of your users in different parts of the world are complaining about slow upload speeds to your S3 bucket. What can you do about it?",
        "a": "You can use <b>transfer acceleration</b> to improve upload speeds to S3. With this service, your users wouldn't upload directly to S3. Instead, you would give them a distinct URL for CloudFront's distributed edge locations. Thus, a user would upload to their nearest CloudFront edge location, and the file would be transferred to S3 via AWS' internal networks."
    },
    {
        "q": `How can you restrict access to an S3 bucket such that it can only be accessed through CloudFront?`,
        "a": `
            Steps to restrict access to S3 bucket to CloudFront only:<br><br>
            <ul>
                <li>Create <i>Origin Access Identity</i> (OAI) for your CloudFront distribution</li>
                <li>Select \"Restrict bucket access\" in the Origin Settings of the CloudFront distribution</li>
                <li>Configure an S3 bucket policy to restrict access for everyone except the OAI</li>
            </ul>
         `
    },
    {
        "q": "Evaluate the durability and availability of EBS volumes.",
        "a": "EBS volumes are replicated to 2 devices within the same Availability Zone. Thus, an individual device failure should not cause loss of data, but an availability zone may have a temporary outage."
    },
    {
        "q": "You need to occasionally mount an EBS volume from multiple availability zones. What should you do?",
        "a": "EBS volumes can be mounted only by EC2 instances running in the same availability zone. If you need access from multiple availability zones, you should consider EFS volumes, which are regional."
    },
    {
        "q": "Your application is doing a large number of read and write operations. You are running into performance issues with your EBS volume, which is using a General Purpose SSD disk. Can you improve performance without service interruptions?",
        "a": "In order to support a large number of read and write operations, you should change your EBS volume type to Provisioned IOPS SSD. AWS supports live configuration changes to EBS volume type, which means you can change the underlying device type without a service interruption."
    },
    {
        "q": "What advantages does EFS provide over EBS?",
        "a": `
            EFS advantages over EBS
            <br><br><ul>
            <li>Storage capacity scales in/out based on volume of data stored</li>
            <li>Multiple EC2 instances can mount a single EFS volume concurrently (instances & volume must be in the same VPC)</li>
            <li>Data is stored across multiple AZs within a region</li>
            </ul>
        `
    },
    {
        "q": "Can you use read replicas to improve the availability of your RDS database?",
        "a": `
            <ul>
                <li>You can reduce load on your primary database instance by creating read replicas and directing read queries to them. However, a read replica can not be promoted to primary database instance (except in the case of Aurora).</li>
                <li>You can configure <b>Multi-AZ</b> setup for your RDS to increase availability. With Multi-AZ, a standby copy of your database is kept in sync, and promoted to primary database if needed.</li>
                <li>According to AWS exam terminology, a read replica improves performance, not availability.</i>
            </ul>
        `
    },
    {
        "q": "What options do you have for running a PostgreSQL database on AWS?",
        "a": `PostgreSQL on AWS<br><br>
            <ul>
                <li><b>EC2</b>: run the database on an EC2 instance, manage the database by yourself</li>
                <li><b>RDS</b>: allow AWS to manage the database instances for you</li>
                <li><b>Aurora</b>: AWS' proprietary database service, which has PostgreSQL-compatibility, and promises improved performance and less configuration overhead. Aurora is also part of RDS.</li>
            </ul>
        `
    },
    {
        "q": "What are common approaches to improving RDS database performance?",
        "a": `RDS database performance<br><br>
            <ul>
                <li><b>Upsized instances</b> (vertical scaling): beefier instances can handle more load.</li>
                <li><b>Read replicas</b> (horizontal scaling): reduce load on the primary database instance by directing read queries to read replicas.</li>
                <li><b>Caches</b>: increase caching so that fewer requests reach the database. Architectures are often designed with ElastiCache in front of RDS. Your web application might also cache some responses, and static content can be offloaded entirely to S3 and CloudFront.</li>
            </ul>
        
        `
    },
    {
        "q": "List Aurora endpoints.",
        "a": `Aurora endpoints<br><br>
            <ul>
                <li><b>Cluster endpoint</b> directs traffic to current primary database instance</li>
                <li><b>Reader endpoint</b> distributes traffic among read replicas</li>
                <li><b>Instance endpoint</b> connects to a specific instance</li>
                <li><b>Custom endpoints</b> can be created in advanced use cases (e.g. configure one group of beefy replicas for production, and another group of small replicas for internal reports, to isolate production for performance reasons)

            </ul>
            `
    },
    {
        "q": "You are using Aurora's Reader endpoint for all read queries. You've noticed performance issues whenever the marketing team runs expensive queries to produce their reports. How can you improve performance?",
        "a": "You can create a </i>custom endpoint</i> to separate production traffic from low-priority internal traffic. You can configure the custom endpoint to direct traffic to a different group of read replicas, and ask the marketing team to use that endpoint for their reports."
    },
    {
        "q": "How can you scale Aurora capacity?",
        "a": "Aurora can be used in <i>serverless</i> mode, where capacity is automatically scaled according to needs. Alternatively, you can manually configure the number of instances and instance types for Aurora."
    },
    {
        "q": "What does <i>cluster volume</i> mean in the context of Aurora?",
        "a": "<i>Cluster volume</i> is a virtual volume where the data for your Aurora cluster is stored. The data is replicated on SSDs across three AZs in a single region."
    },
    {
        "q": "Describe failover in case where the primary database instance of a single-master Aurora cluster fails.",
        "a": "If the primary database instance of a single-master Aurora cluster fails, Aurora will promote an existing read replica to the new primary instance. If the cluster does not have read replicas, it will instead create a new primary instance."
    },
    {
        "q": "How can you reduce latency for typical RDS database read queries?",
        "a": "If you configure ElastiCache (Redis or Memcached) in front of your RDS and direct read queries through it, you can achieve very low latency for cached queries."
    },
    {
        "q": "In the context of the OSI model, in which layers do AWS Shield and AWS WAF provide protection?",
        "a": `<ul>
                <li><b>AWS WAF</b> (Web Application Firewall) provides protection for the application layer.</li>
                <li><b>AWS Shield</b> provides protection for the transport layer (e.g. TCP or UDP) and network layer (e.g. routing).</li>
                <li><b>AWS Shield Advanced</b> includes support from AWS DDoS Response Team, who will help you protect your application layer.</li>
              </ul>
        `
    },
    {
        "q": "What are <i>attributes</i> in the context of DynamoDB?",
        "a": "DynamoDB tables consist of items (rows) which have attributes (columns). Different items in the same table are allowed to have different attributes."
    },
    {
        "q": "Compare queries and scans in the context of DynamoDB.",
        "a": `<ul>
                <li>DynamoDB <i>scan</i> will read the entire table, so it might be slow and expensive.</li>
                <li>DynamoDB <i>query</i> will use partitions and indexes more efficiently to fetch the requested data. In order to execute a query, you must define at least a partition key, and optionally a sort key.</li>
              </ul>
             `
    },
    {
        "q": "What kind of help does AWS Trusted Advisor provide?",
        "a": `AWS Trusted Advisor provides automated checks for your AWS setup in the following categories:<br><br>
            <ul>
                <li>Cost optimization</li>
                <li>Performance</li>
                <li>Security</li>
                <li>Fault tolerance</li>
                <li>Service limits</li>
            </ul>
        `
    },
    {
        "q": "How can you stay informed about AWS events which may impact your operations?",
        "a": "AWS Personal Health Dashboard provides information about AWS events which may affect you. For example, if AWS is planning to sunset an old EC2 host that your instance is running on, you should see a scheduled event on the dashboard."
    },
    {
        "q": "Compare the Service Health Dashboard to the Personal Health Dashboard.",
        "a": "The Service Health Dashboard displays the general status of AWS services, whereas the Personal Health Dashboard provides information specific to your AWS resources."
    },
    {
        "q": "If you write to DynamoDB and attempt to read the data immediately, are you guaranteed to get the recently-updated data, or is there a risk you might get stale data?",
        "a": `DynamoDB offers you the following read consistency options:<br><br>
            <ul>
                <li><b>Eventually consistent reads</b> are usually good enough, but they may sometimes return stale data.</li>
                <li><b>Strongly consistent reads</b> are guaranteed to reflect the newest data, but they cost more, have higher latency, and fail more often with error 500.</li>
            </ul>
        `
    },
    {
        "q": "Describe a use case for read transactions in DynamoDB, and explain why the use case can't be fulfilled with merely strongly consistent reads.",
        "a": `DynamoDB allows you to pack multiple writes into a transaction.
        When the transaction is executed, either all of the writes are committed, or none of them are (if the transaction fails).
        However, unlike with traditional databases, the writes are not guaranteed to be committed <i>simultaneously</i>.
        If we executed a transaction involving two writes, and immediately queried for the data with two strongly consistent reads,
        it's possible that one of the reads returns fresh data, while the other read returns stale data (thus leading to inconsistent results).
        In this case it's best to pack the reads into a transaction, in order to guarantee that we either get consistent results, or the read transaction fails.
        `
    },
    {
        "q": "In the context of DynamoDB, what's the difference between <i>provisioned throughput capacity</i> and <i>on-demand capacity</i>?",
        "a": `
            DynamoDB capacity options<br><br>
            <ul>
                <li><b>Provisioned throughput capacity:</b> you define the minimum read and write capacity units, and optionally, auto-scaling with target utilization and maximum capacity units.</li>
                <li><b>On-demand capacity:</b> no capacity configuration, AWS provides you the capacity you need and your requests are never throttled. Read and write operations are more expensive than in provisioned capacity mode, but idle tables are less expensive.</li>
            </ul>
        `
    },
    {
        "q": "Your DynamoDB database is occasionally returning <i>ProvisionedThroughputExceededException</i> to API requests. What can you do about it?",
        "a": `<div class="text-left"><i>ProvisionedThroughputExceededException</i> means you are exceeding your read/write capacity.
        This may be caused by a <i>hot partition</i> (badly chosen partition key causing too many items to be placed onto the same partition).
        In other cases, you can:</div><br>
        <ul>
            <li>Manually increase read/write capacity units.</li>
            <li>Change from manually provisioned capacity to on-demand capacity, which guarantees you will never be rate-limited.</li>          
            <li>Do nothing? AWS SDK has automatic retries with exponential backoff. If the errors are only occasional, the requests are eventually accepted with retries.</li>
        </ul>
        `
    },
    {
        "q": "Your DynamoDB database is configured for 1 read capacity unit and 1 write capacity unit. How many reads and writes per second can it handle?",
        "a": `DynamoDB capacity units<br><br>
            <ul>
                <li>One read capacity unit corresponds to one strongly consistent read of 4KiB item per second, or two eventually consistent reads of 4KiB items per second.</li>
                <li>One write capacity units corresponds to one write per second, for an item up to 4KiB</li>

            </ul>
              `
    },
    {
        "q": "Explain the following DynamoDB terms: partition, partition key, sort key, primary key.",
        "a": `
            <ul>
                <li><b>Partition</b>: items (rows) in DynamoDB are distributed across partitions, which can be up to 10GiB in size.</li>
                <li><b>Partition key</b>: hash of the value of the partition key determines which partition an item belongs to. Partition keys are a data field (similar to attribute/column).</li>
                <li><b>Sort key</b>: when you create a table, you have the option to sort items according to one attribute, which is called the <i>sort key</i> or <i>range attribute</i>. Similar to index.</li>
                <li><b>Primary key</b>: must be unique for all items within a table. Primary key can be either partition key or a composite of partition key and sort key.</li>
                </ul>
        `
    },
    {
        "q": "Is DynamoDB data highly available?",
        "a": "DynamoDB data is replicated between multiple AZs by default. You can also choose <i>global tables</i> for multi-region replication."
    },
    {
        "q": "Describe billing for DynamoDB indexes",
        "a": "DynamoDB indexes need read and write capacity, just as your tables do. DynamoDB indexes are billed based on read and write capacity (plus small storage cost). If you create a <i>Local Secondary Index</i>, it will share capacity with the base table. If you create a <i>Global Secondary Index</i>, you must provision capacity for it separately from the base table."
    },
    {
        "q": "Compare DynamoDB's Global Secondary Indexes to Local Secondary Indexes",
        "a": `
            <ul>
                <li><b>Global Secondary Index</b>: can query over the entire table, across all partitions. When you create the index, you must (any) attributes of the table as the partition key and the sort key of the index.</li>
                <li><b>Local Secondary Index</b>: you can only query a single partition. The index must be created when the table is created initially. Partition key of the index must be same as in base table, sort key of the index can (and should) be different.</li>
            </ul>
        `
    },
    {
        "q": "How can you automate removal of old items in your DynamoDB table?",
        "a": "You can set your DynamoDB items a <i>TTL</i> (Time To Live) attribute and they will be automatically deleted when the TTL expires."
    },
    {
        "q": "How can you improve DynamoDB latency for commonly occurring requests?",
        "a": "You can set up a cache in front of DynamoDB. You might choose <i>DynamoDB accelerator</i> (DAX) or <i>ElastiCache</i>."
    },
    {
        "q": "How can you automate notifications whenever a DynamoDB table is written to?",
        "a": "You can use <i>DynamoDB Streams</i> to invoke a Lambda function to react to write events. In order to deliver a notification, you might configure the Lambda function to publish to an SNS topic, where the relevant people has subscribed to."
    },
    {
        "q": "In practice, when would you need CloudHSM?",
        "a": "Typically, reasons for using CloudHSM are related to <b>compliance</b>. KMS operates in shared hardware tenancy, like most AWS services. This means different customers are separated only virtually from each other. Regulation might require you to handle keys on a dedicated piece of hardware. In this case KMS alone would not be sufficient, and you would need to CloudHSM."
    },
    {
        "q": "Describe Redshift configuration options that might help you improve performance.",
        "a": `
            <ul>
                <li>If your Redshift data warehouse is running in a <i>single node</i>, you may decide to change to a <i>multi-node cluster</i> in order to parallelize the workload.</li>
                <li>The nodes of your cluster can be configured for either <i>dense compute</i> or <i>dense storage</i>.
            </ul>
        `
    },
    {
        "q": "Evaluate the durability and availability of a Redshift data warehouse.",
        "a": "Redshift runs in a single AZ (so it's not highly available). Regarding durability, there should be 3 copies of the data: one copy at the source where the data was inputted to Redshift, one copy on the compute nodes, and lastly, periodically taken snapshots in S3."
    },
    {
        "q": "Which AWS service might help you run long-running queries on analytics data for business intelligence purposes?",
        "a": "Redshift is a columnar store database, a data warehouse, which can take inputs from multiple sources like S3, EMR, and DynamoDB. Redshift is suitable for executing long-running queries on data like this."
    },
    {
        "q": "You need to migrate a legacy Spark ETL job to AWS. Which AWS services should you consider?",
        "a": `You might use either <b>Glue</b> or <b>EMR</b> (Elastic MapReduce) to run Spark ETL jobs. Glue is a fully managed, newer service, whereas EMR is an older service that allows more fine-grained control for developers.
        `
    },
    {
        "q": "Compare S3 Select and Athena.",
        "a": `
            Both S3 Select and Athena can be used to run ad hoc SQL-like queries on S3 data. However:<br><br>
            <ul>
                <li><b>Athena</b> requires you to create a table schema and crawl files before you can query the data.</li>
                <li><b>S3 Select</b> can only run queries on a single file (like a really large CSV).</li>
            </ul>
        `
    },
    {
        "q": "What is the difference between dedicated instances and dedicated hosts?",
        "a": "Dedicated instances run on hardware that is dedicated for a particular AWS account. However, other instances from the same account may also run on the same hardware. Dedicated hosts can give more fine-grained control over exactly what instances are run on which host, and how the host is configured. Dedicated hosts are often used for compliance reasons, to run software that is not licensed for use within a multi-tenant host."
    },
    {
        "q": "List options for using Microsoft Active Directory with AWS services.",
        "a": `
            Microsoft Active Directory<br><br>
            <ul>
                <li><b>AD Connector</b>: when you want your on-premises AD to handle authentication of users.</li>
                <li><b>AWS Managed Microsoft AD</b>: when you need to actually run AD on AWS.</li>
                <li><b>Simple AD</b>: basic AD features at lower cost than Managed Microsoft AD.</li>
            </ul>
        `
    },
    {
        "q": "If you need to protect data from accidental or malicious deletion for compliance reasons, what is the strongest protection offered by AWS?",
        "a": "<b>S3 Glacier Vault Lock</b> provides <i>Write Once Read Many</i> (WORM) support, where you configure time-based retention for data, and the policy is immutable once locked. Even if you stop paying your AWS bill, your data will be stored for the retention period."
    },
    {
        "q": "Where can you configure access control for S3 data?",
        "a": `
            Options for S3 data access control:<br><br>
            <ul>
                <li>VPC endpoint policies</li>
                <li>IAM policies</li>
                <li><b>Bucket policies</b></li>
                <li>Bucket ACLs</li>
                <li>Object ACLs</li>
            </ul>
        `
    },
    {
        "q": "Which AWS services might help you analyze large volumes of video data?",
        "a": "You can ingest large volumes of video data with <i>Kinesis Video Streams</i> and consume the stream with <i>Kinesis Video Analytics</i>."
    },
    {
        "q": "Compare Kinesis Data Streams to Kinesis Firehose Delivery Streams.",
        "a": `
        <div class="text-left">Kinesis Data Streams</div><br>
            <ul>
                <li>Data can persist up to 168 hours in the stream; possible to have multiple consumers (e.g. S3, DynamoDB, Redshift)</li>
                <li>Streams are distributed across shards, billing per shard</li>
            </ul><br>
            <div class="text-left">Kinesis Firehose Delivery Streams</div><br>
            <ul>
                <li>No persistence, only one consumer (data immediately disappears when it's consumed)</li>
                <li>Less configuration overhead (no shards to manage, billing based on ingested data)</li>
            </ul>
        `
    },
    {
        "q": "How can you improve the performance of your HPC (High Performance Computing) workload, if the bottlenecks are shared disk access and latency between nodes?",
        "a": `
            Ways to improve HPC performance<br><br>
            <ul>
                <li><b>Amazon FSx for Lustre</b> provides scalable high-performance shared storage.</li>
                <li><b>Elastic Fabric Adapter</b> (EFA) is a high-performance network interface for EC2 instances.</li>
                <li><b>Cluster Placement group</b> will provision EC2 instances which are physically close to each other.</li>
            </ul>
        `
    },
    {
        "q": "How can you migrate large volumes of data from on-premises to AWS?",
        "a": `
        <div class="text-left">If a network transfer is feasible, you might transfer data to AWS with <b>DataSync</b> over a <i>Direct Connect</i> or VPN connection. Otherwise, these
            are your physical transfer options:</div><br>
            <ul>
                <li><b>Snowball</b>: device with between 50TiB and 80TiB of storage capacity.</li>
                <li><b>Snowball Edge</b>: device with 100TiB notional capacity, but only 45-80TiB capacity in practice. Multiple Snowball Edge devices can be clustered together.</li>
                <li><b>Snowmobile</b>: a shipping container pulled by a semi-trailer truck, provides 100PiB storage capacity.</li>
            </ul>
        `
    },
    {
        "q": "Describe AWS best practice for consolidating CouldTrail logs from different AWS accounts.",
        "a": `
            Steps to consolidate CloudTrail logs from different AWS accounts:<br><br>
            <ul>
                <li>Create a dedicated AWS account for logs.</li>
                <li>Create an S3 bucket in the log account.</li>
                <li>Grant other accounts <i>write-only</i> access to the S3 bucket.</li>
                <li>Configure CloudTrail to log activity from all accounts to the S3 bucket.</li>
                <li>Enable CloudTrail log file integrity validation.</li>
            </ul>
        `
    },
    {
        "q": "How long can you retain CloudTrail logs?",
        "a": `CloudTrail retains logs for <b>90 days</b> by default. If you need to retain CloudTrail logs for longer than 90 days, you need to
                create a <i>Trail</i> which logs to S3 bucket. Additionally, you should turn on <i>Log File Validation</i> in S3
                to ensure that tampering with log files can be detected.
            `
    },
    {
        "q": "What kind of events are logged by CoudTrail?",
        "a": `
            <div class="text-left">
                <b>Management events</b> are always logged:
            </div><br>
            <ul>
                <li>Configuring security</li>
                <li>Registering devices</li>
                <li>Configuring rules for routing data</li>
                <li>Setting up logging</li>
            </ul><br>
            <div class="text-left">
                <b>Data events</b> logging can be turned on:
            </div><br>
            <ul>
                <li>Only S3 and Lambda can log data events</li>
                <li>GetObject, DeleteObject, PutObject, etc.</li>
            </ul>
        
        `
    },
    {
        "q": "In the context of KMS CMK (Key Management Service Customer Master Key), compare customer-managed CMK to AWS-managed CMK.",
        "a": `
            For typical use cases, AWS-managed CMK is sufficient. Customer-managed CMK allows more fine-grained control over the creation,
            rotation, deletion, and usage of the key. For example, a customer-managed CMK can be imported into AWS by the customer,
            or the customer can choose to let KMS generate the key. A customer-managed CMK is sometimes needed due to <b>compliance</b> requirements.
            (If the requirements are particularly stringent, you may need to attach CloudHSM to KMS.)
        `
    },
    {
        "q": "Describe Amazon Macie.",
        "a": "Amazon Macie is used to prevent accidental data leaks. Macie uses machine learning to discover sensitive data in S3 buckets."
    },
    {
        "q": "How can resources in one VPC communicate with resources in another VPC?",
        "a": `
            You can connect two VPCs together with <b>VPC peering</b>. Resources on peered VPCs can connect to each other using private IP addresses,
            as if they were on the same VPC (which means VPC peering is only possible if there are no overlapping CIDR blocks). It is possible
            to peer VPCs even if they are on different regions or different AWS accounts.
        `
    },
    {
        "q": `You have 3 VPCs: A, B, and C. What is the simplest VPC peering setup that allows communication across all VPCs?`,
        "a": `<div class="text-left">VPC peering is not transitive. If you need connections between 3 VPCs, then you need to create a VPC peering connection
        between all pairs of VPCs:</div><br>
        <ul>
            <li>A and B</li>
            <li>A and C</li>
            <li>B and C</li>
        </ul>
        `
    },
    {
        "q": "There are 2 types of VPC endpoints: interface endpoints and gateway endpoints. When should you use one over the other?",
        "a": `
                VPC endpoints<br><br>
                <ul>
                    <li><b>Gateway endpoint</b> is a target for a specific route in your route table. Gateway endpoints are free, but they only support connections to S3 and DynamoDB.</b>
                    <li><b>Interface endpoint</b> is an Elastic Network Interface (ENI) with a private IP address. If you need a VPC endpoint to other AWS services besides S3 and DynamoDB, you need to use an interface endpoint, which comes with some costs.</li>
                </ul>
        `
    },
    {
        "q": "What is the relationship between VPC and subnets?",
        "a": `
            When you create a VPC, you configure a CIDR block for it (a range of private IP addresses).
            You can divide this CIDR block into subnets (each subnet is allocated some of the IP addresses from the VPC).
        `
    },
    {
        "q": "What is the distinction between a <i>private</i> subnet and a <i>public</i> subnet?",
        "a": `Subnets are considered to be \"public\" if the subnet's route table has a route to an Internet gateway (IGW).
            In practice, this means both incoming and outgoing internet traffic to resources running in the subnet is possible.
        `
    },
    {
        "q": "If you need to block a single IP address from accessing your EC2 instance, where should you configure this?",
        "a": `
            Usually when we configure IP address based access control for an EC2 instance, the appropriate place for
            configuration are security groups. However, security groups by default deny everything and you can only
            add configuration to allow specific traffic. Therefore, it is not possible to configure a security group
            to block a single IP address while allowing traffic from other IP addresses. In order to block traffic from
            a single IP address, we need to create a rule in the <b>Network Access Control List</b> (NACL) of the subnet
            (which may affect other resources besides our EC2 instance).
        `
    },
    {
        "q": "Can you reuse NACLs for multiple subnets?",
        "a": "Each subnet can only belong to a single NACL, but the same NACL can belong to multiple subnets."
    },
    {
        "q": "Can you reuse Security Groups for multiple instances?",
        "a": "Multiple security groups can be applied to the same instance, and the same security group can be applied to multiple instances."
    },
    {
        "q": "Can you reuse Route Tables for multiple subnets?",
        "a": "Each subnet must be associated with exactly one route table, but the same route table can be associated with many subnets."
    },
    {
        "q": "You can define a specific IP address as the <i>source</i> of a security group rule. What else can you define as the source?",
        "a": `
            Security Group rule source can be:<br><br>
            <ul>
                <li>a specific IP address<br/>(e.g. 85.143.225.212/32)</li>
                <li>a range of IP addresses<br/>(e.g. 85.143.225.212/16)</li>
                <li>the ID of another security group<br>(e.g. sg-903004f8)</li>
            </ul>
        `
    },
    {
        "q": "Describe statefulness in the context of NACLs and Security Groups.",
        "a": `<div class="text-left"><b>Security Groups are stateful</b>, both ways:</div><br>
                <ul>
                    <li>If a particular outbound traffic is allowed, then the response inbound traffic is allowed through (regardless of inbound rules)</li>
                    <li>If a particular inbound traffic is allowed, then the response outbound traffic is allowed through (regardless of outbound rules)</li>
                </ul>
                <br>
                <div class="text-left"><b>NACLs are stateless.</b> If you want your resources to be able to communicate through particular ports to particular targets, then you need to explicitly allow both inbound and unbound traffic.</div>
        `
    },
    {
        "q": "Often when you configure access control rules, you create multiple conflicting rules. For example, \"allow all traffic\" and \"deny traffic from this IP\" would be conflicting rules. Obviously, additional logic is needed to determine how conflicting rules are applied. This logic is different when evaluating CloudFormation template permissions compared to when evaluating NACL rules. Explain the difference.",
        "a": `
            Logic for interpreting conflicting rules<br><br>
            <ul>
                <li><b>CloudFormation template permissions</b>: if any permission is deny, then deny. Otherwise, if any permission is allow, then allow. Otherwise, deny.</li>
                <li><b>NACL rules</b>: evaluate rules in ascending order based on rule number. If a rule matches, apply the rule immediately (higher-numbered rules will not be evaluated). If no rule matches, then the default * DENY rule is applied.</li>
            </ul> 
        `
    },
    {
        "q": "What are route tables?",
        "a": "Route tables direct network traffic to/from a subnet, according to the routes defined in the route table."
    },
    {
        "q": "Route 53 provides two different failover options: <i>active-passive</i> and <i>active-active</i>. Explain the difference.",
        "a": `
            Route 53 DNS failover<br><br>
            <ul>
                <li><b>Active-active failover</b>: traffic is distributed among target resources according to routing policy (e.g. weighted, latency). If a resource becomes unhealthy, its traffic is directed at other target resources.</li>
                <li><b>Active-passive failover</b>: traffic is directed at primary resource. If the primary resource becomes unhealthy, traffic is directed at the secondary resource.</li>
                </ul>
        `
    },
    {
        "q": "Explain ALIAS record in the context of Route 53.",
        "a": `
            <ul>
                <li><b>CNAME</b> record can be used to point traffic from one domain (e.g. play.steam.com) to another domain (e.g. steampowered.com).</li>
                <li><b>ALIAS</b> record is similar to CNAME record, but unlike the CNAME record, ALIAS record can be applied to the apex domain.</li>
                <li><b>Apex domain</b> is the "root" level of your domain. For example, mywebsite.com is an apex domain, whereas www.mywebsite.com or tv.mywebsite.com are not apex domains.</li>
                <li>For example, <b>you can use the ALIAS record to point the apex domain to a CloudFront distribution.</b></li>
            </ul>
        `
    },
    {
        "q": "List Route 53 routing policies.",
        "a": `Route 53 routing policies<br><br>
            <ul>
                <li>Simple routing</li>
                <li>Active-passive failover</li>
                <li>Latency routing</li>
                <li>Geolocation routing (based on country)</li>
                <li>Geoproximity routing (like geolocation, but some traffic can be shifted from one target to another to even out the load)</li>
                <li>Multivalue answer (return up to 8 healthy records at random)</li>
                <li>Weighted (route to multiple targets in proportions that you specify)</li>
            </ul>
        `
    },
    {
        "q": "How can you establish a <i>secure</i> connection from your office or on-premises datacenter to AWS?",
        "a": `
            Connecting to AWS securely<br><br>
            <ul>
                <li>Connections to AWS resources are typically encrypted by default (HTTPS, SSH, etc.)</li>
                <li>You can establish a <i>Site-to-Site VPN</i> between your VPC and your on-premises network.</li>
                <li>If you do not want traffic to cross the internet, you may be able to establish a <i>Direct Connect</i> connection, which is a dedicated network connection between your on-premises network and an AWS edge location (from where traffic is routed to your AWS resources using AWS' internal networks).</li>
            </ul>
        `
    },
    {
        "q": "How can you control access to your KMS CMK (Key Management Service Customer Master Key)?",
        "a": `
                KMS access control<br><br>
                <ul>
                    <li><b>Key policies</b> control access to specific CMKs.</li>
                    <li><b>IAM policies</b> can control access to multiple CMKs. IAM policies can also control access to operations such as <i>CreateKey</i>.</li>
                    <li><b>Grants</b> can be used to provide <i>temporary</i> and granular access to to other AWS identities (even a user outside your AWS account).</li>
                    <li><b>VPC endpoint policies</b> allow connections to KMS directly via a VPC endpoint, without crossing the internet. Note that a VPC endpoint policy needs to be accompanied by either a key policy, IAM policy or a grant.</li>
                </ul>
        `
    },
    {
        "q": "List options for key management when encrypting S3 data at rest.",
        "a": `S3 encryption key management options<br><br>
                <ul>
                    <li><b>SSE-S3</b>: data keys managed by S3</li>
                    <li><b>SSE-C</b>: data keys managed by customer (customer must send data key with each write/read request)</li>
                    <li><b>SSE-KMS</b>: data keys managed by KMS, which will encrypt/decrypt data key with CMK (Customer Master Key). The CMK may be either customer-managed or AWS-managed. In addition, CMK may be integrated with CloudHSM, in which case CloudHSM would handle the master key.</li>
                </ul>

        `
    },
    {
        "q": "If you need to set up network connectivity for a large enterprise with many VPCs, how can <i>Direct Connect Gateway</i> and <i>AWS Transit Gateway</i> simplify your network configuration?",
        "a": `
            <ul>
                <li><b>Direct Connect:</b> private connection between AWS and customer network. Alternatively, you can set up a Site-to-Site VPN over the internet.</li>
                <li><b>Direct Connect Gateway</b>: if you have multiple VPCs in different regions, but in the same AWS account, then Direct Connect Gateway can help you access access all VPCs from the customer network.</li>
                <li><b>AWS Transit Gateway</b>: if you have multiple VPCs in multiple AWS accounts, you can connect everything to a Transit Gateway, which can facilitate connections between all VPCs and all customer networks connected via VPN or Direct Connect Gateway.</li>
            </ul>
        `
    },
    {
        "q": "You have an EC2 instance in a private subnet, and it needs to access the internet for software updates. You set up a NAT gateway in the same subnet to provide outbound internet access for the EC2 instance. The EC2 instance is still unable to connect to the internet. Why?",
        "a": "NAT gateway must be set up in a <i>public</i> subnet. Otherwise it does not have a route to the internet."
    },
    {
        "q": "What is the difference between a NAT gateway and a NAT instance?",
        "a": "Both NAT gateway and NAT instance are used to forward traffic from instances in a private subnet to the internet or other AWS services. NAT instance is a legacy, client-managed solution, whereas NAT gateway is a newer, AWS-managed service. If you manage a NAT instance by yourself, you need to deal with security patches, scaling, failover, etc."
    },
    {
        "q": "Can you protect your EC2 instance with a Web Application Firewall (WAF)?",
        "a": `You can not attach WAF directly to an EC2 instance.
            However, you can attach WAF to a service that may be running in front of your EC2 instance:<br><br>
            <ul>
                <li>Application Load Balancer</li>
                <li>CloudFront distribution</li>
                <li>API Gateway (REST APIs and WebSocket APIs)</li>
                <li>AppSync (GraphQL APIs)</li>
            </ul>
            `
    },
    {
        "q": "What can you do with Web Application Firewall (WAF) <i>rules</i>?",
        "a": `Web Application Firewall rules<br><br>

                <ul>
                    <li>Block or rate-limit traffic</li>
                    <li>Rules can be maintained by the client, by AWS, or purchased from the AWS Marketplace</li>
                    <li>WAF rules might be used to block bot traffic, SQL injections, XSS attacks, etc.</li>
                </ul>

        `
    },
    {
        "q": "What is AWS Global Accelerator?",
        "a": `AWS Global Accelerator is a costly AWS network service intended to improve latency for your internet end users.
            Similar to CloudFront or S3 Transfer Acceleration, AWS Global Accelerator utilizes anycast IPs to route end users'
            requests to the nearest AWS edge location. The edge location then routes traffic to your AWS resources via AWS'
            private networks, thus bypassing the internet.
        `
    },
    {
        "q": "Where can you configure SSL certificates?",
        "a": `
            SSL certificates on AWS<br><br>
            <ul>
                <li><b>EC2</b>: manually configure SSL certificate renewal on your EC2 instances.</li>
                <li><b>Amazon Certificate Manager</b> (ACM): your preferred option for managing SSL certificates. Terminates SSL at the Load Balancer (or CloudFront) level instead of the EC2 level, so the connection will not be end-to-end encrypted.</li>
                <li><b>IAM certificate storage</b>: legacy option for managing SSL certificates in IAM.</li>
            </ul>
        `
    },
    {
        "q": "Describe API Gateway.",
        "a": `API Gateway<br><br>

                <ul>
                    <li>Instead of providing a public API directly from your application layer, you may want to place an API Gateway in front of it.</li>
                    <li>API Gateway can be used for REST APIs and WebSocket APIs.</li>
                    <li>API Gateway can provide authorization, throttling, caching, and other useful features.</li>
                </ul>
        
        `
    },
    {
        "q": "Can you set up an API Gateway in front of a legacy application that provides a SOAP API?",
        "a": `
            <ul>
                <li>API Gateway is typically used for REST APIs or WebSocket APIs.</li>
                <li>The terms \"REST\" and \"SOAP\" are strangely redefined in AWS terminology. In an AWS certificate exam, \"REST\" simply means \"JSON\" and \"SOAP\" simply means \"XML"\.</li>
                <li>API Gateway can be used to transform XML to JSON, and vice versa. That means it can provide a public JSON API, while passing data to a legacy service in XML.</li>
                <li>In reality you can not transform a non-restful API into a REST API simply by converting XML to JSON, but if the exams ask about this, you need to lie.</li>
            </ul>
        `
    },
    {
        "q": "Can you use private certificates with Amazon Certificate Manager?",
        "a": "You can use private certificates with Amazon Certificate Manager, but they are so expensive that it may be more economical to set up a custom solution on EC2 instead."
    },
    {
        "q": "Which AWS services are directly protected by AWS Shield?",
        "a": `<div class="text-left">Services directly protected by AWS Shield:</div><br>
                <ul>
                    <li>Elastic Load Balancer (ELB)</li>
                    <li>CloudFront</li>
                    <li>Route 53</li>
                </ul><br>
                <div class="text-left">These would be typical entry points for your AWS resources, so other services may be indirectly protected.</div>
        
        `
    },
    {
        "q": "Describe billing for AWS Shield.",
        "a": `
            AWS Shield billing<br><br>
            <ul>
                <li>Basic features are free.</li>
                <li>Shield Advanced costs $3000/month.</li>
                <li>Shield Advanced covers costs incurred due to usage spikes from DDoS attacks.</li>
            </ul>
        `
    },
    {
        "q": "What is ADFS and where would you set it up?",
        "a": `ADFS stands for <i>Active Directory Federation Services</i>.
                ADFS is an <i>identity broker</i> which provides <i>single sign-on</i> functionality for your enterprise users
                to access AWS resources via AWS Console, without the need to duplicate the user accounts to IAM.
                In order to sign in, a user sends a request to on-premises ADFS, which authenticates the user from on-premises AD and returns
                a SAML token to the user. The user's web browser then forwards this SAML token to AWS Sign-In, which
                verifies that the token originates from a trusted ADFS service, then fetches the desired identity from IAM,
                and provides the user access to AWS Console under this identity.
        `
    },
    {
        "q": "You are trying to provide S3 bucket access to another AWS account, but it is not working. What kind of things should you check while troubleshooting?",
        "a": `Troubleshooting cross-account S3 access issues<br><br>
                <ul>
                    <li>Is the external AWS account trusted?</li>
                    <li>Does the IAM policy in the external account allow calling STS:AssumeRole?</li>
                    <li>Does the IAM policy in the trusting account allow the action?</li>
                    <li>Is there an S3 bucket policy which prevents access?</li>
                    <li>Is there a bucket ACL policy which prevents access?</li>
                </ul>

        `
    },
    {
        "q": "When should you choose MQ over SQS/SNS?",
        "a": `
            <ul>
                <li><b>MQ</b> is AWS' managed message broker service for ActiveMQ and RabbitMQ. Choosing MQ makes sense when you are migrating to AWS with an existing architecture that already relies on ActiveMQ or RabbitMQ.</li>
                <li><b>SQS</b> and <b>SNS</b> are native AWS messaging services. AWS recommends choosing SQS or SNS for new workloads, rather than MQ.</li> 
            </ul>
        `
    },
    {
        "q": "Compare SQS and SNS.",
        "a": `
            <ul>
                <li><b>SQS</b> (Simple Queue Service) provides a pull-based message queue. Choose SQS when you want messages to be consumed only once by a single consumer.</li>
                <li><b>SNS</b> (Simple Notification Service) provides push-based message delivery for <i>multiple</i> subscribers. SNS also offers email as a subscriber protocol, allowing you to easily set up automated email notifications.</li>
            </ul>
        `
    },
    {
        "q": "In the context of SQS, explain the difference between <i>short polling</i> and <i>long polling</i>.",
        "a": `
            <ul>
                <li><b>Short polling</b> means \"normal\" polling, where you try to poll a message from the SQS queue, and you either get a message, or you are told that the queue is empty.</li>
                <li><b>Long polling</b> works differently in the case where the queue is empty. Instead of immediately responding that the queue is empty, SQS will wait a while to see if a message is published to the queue. If no message is published before the long poll timeout expires, SQS returns that the queue is empty. Long polling is useful to reduce polling frequency (costs) and it allows you to respond to published messages faster.</li>
            </ul>
        `
    },
    {
        "q": "Can you publish messages to an SQS queue by interacting with an API?",
        "a": `
                In order to publish messages to an SQS queue, you need to use the <b>AWS SDK</b>. Technically, the SDK will generate
                an API request to an AWS API, but developers typically do not interact directly with this API. If you wish to have a
                REST API that your applications can use to publish messages to a SQS queue, you need to deploy an application which
                uses AWS SDK under the hood and provides that REST API for your other applications.
        `
    },
    {
        "q": "Compare SQS <i>standard queue</i> and <i>FIFO queue</i>.",
        "a": `
        <div class="text-left"><b>SQS standard queue:</b></div><br>
            <ul>
                <li>Unlimited number of transactions per second</li>
                <li>Messages will usually be delivered once, but will sometimes be delivered more than once</li>
                <li>Messages may be delivered out of order</li>
            </ul><br>
        <div class="text-left"><b>SQS FIFO queue:</b></div><br>
            <ul>
                <li>First In First Out (guaranteed order)</li>
                <li>No duplicates</li>
                <li>Limited to 300 transactions per second</li>
            </ul>
        `
    },
    {
        "q": "You have an architecture where workers are polling tasks from SQS. You are using a FIFO queue to guarantee that the same task is never processed more than once. However, you notice that <i>occasionally</i> multiple workers end up duplicating work for the same task. How should you troubleshoot this?",
        "a": `Potential causes for SQS FIFO duplicates<br><br>
                <ul>
                    <li>First, you should check if the workers are really processing the same SQS queue item, or if the same item was accidentally <b>published to the queue twice</b>.</li>
                    <li>If the same SQS FIFO queue item is really polled from the queue multiple times, you may have misconfigured your <b>visibility timeout</b>. Suppose your visibility timeout is configured at the default 30 seconds, and a typical task is finished in 10 seconds. Now, suppose an atypical task takes 35 seconds to complete; after 30 seconds it would be returned to the queue.</li>
                </ul>
                
        `
    },
    {
        "q": "Explain SQS visibility timeout.",
        "a": "SQS visibility timeout is used to guarantee that a message won't be lost if a worker fails while processing the message. If a message is polled from the queue, and the worker doesn't delete the message within the visibility timeout (30 seconds by default), then the message will be returned to the queue, so it can be picked up by another worker."
    },
    {
        "q": "Does SQS queue persist messages or are they ephemeral?",
        "a": "Messages persist in SQS queue until they are consumed (polled and deleted), or until the message retention period is reached. Message retention is 4 days by default, and it's adjustable between 60 seconds and 14 days."
    },
    {
        "q": "How large can SQS queue messages be?",
        "a": `
                SQS queue messages can be between 1 byte and 256KiB. If you need to support larger messages, you can use the <i>Amazon SQS Extended Client Library For Java</i>, which offloads storage to S3. If you are not using Java, you have to create your own solution to support larger messages.
        `
    },
    {
        "q": "AWS root user is not supposed to be used for daily tasks. What is the simplest way to set up email notifications to alert you when the root user logs in?",
        "a": `You can set up a <b>CloudWatch Events Rule</b> to publish a message to <b>SNS</b> when the root user logs in. Then add the necessary email subscriptions to the SNS topic.
        `
    },
    {
        "q": "What is the Simple Notification Service (SNS)?",
        "a": `
                Simple Notification Service (SNS)<br><br>
                <ul>
                    <li>Push-based message delivery service</li>
                    <li>Multiple subscribers can subscribe to the same SNS topic</li>
                    <li>Supports multiple subscriber protocols (Lambda, SQS, E-mail, ...)</li>
                    <li>Publisher is isolated from subscriber protocols</li>
                </ul>
        `
    },
    {
        "q": "Can you poll a message from an SNS topic?",
        "a": "SNS is push-based, not pull-based, so you can not poll messages from SNS. You can subscribe to an SNS topic, and messages will be pushed to you. If you want to set up a poll-based message delivery, you may want to consider SQS instead."
    },
    {
        "q": "If you need to migrate existing Chef or Puppet instances to AWS, which AWS service might be useful to you?",
        "a": "<b>AWS OpsWorks</b> provides managed instances of Chef and Puppet (which are used to automate server configurations)."
    },
    {
        "q": "Explain the relationship between Serverless Application Model (SAM) and CloudFormation.",
        "a": `
                SAM templates are an extension of CloudFormation templates (syntactic sugar over CloudFormation). When you want to run a SAM template, AWS first transpiles the SAM template into a CloudFormation template.
        `
    },
    {
        "q": "What is the Cloud Development Kit (CDK)?",
        "a": "Cloud Development Kit (CDK) allows you to write in TypeScript (or another language), in imperative style, and transpile the code into CloudFormation templates."
    },
    {
        "q": "Meteor strike destroys an entire AWS region. Naturally, your first thought is \"<i>how can I re-deploy my employer's AWS resources in another region as quickly as possible?</i>\" Explain how.",
        "a": `
                <ul>
                    <li>If your AWS resources had been configured manually in AWS console, it will be time-consuming to recreate everything in another region, and there will be some differences once you're finished.</li>
                    <li>If your AWS resources had been configured with CloudFormation templates, you will be able to re-deploy everything quickly, with minor modifications to the templates.</li>
                    <li>Hopefully all of your important data was cross-region duplicated.</li>
                </ul>
        `
    },
    {
        "q": "If you need to migrate a MongoDB database to AWS, which AWS service might be helpful to you?",
        "a": "<b>AWS DocumentDB</b> is a MongoDB-compatible managed database service."
    },
    {
        "q": "Compare <i>X-Ray</i> to <i>App Mesh</i>.",
        "a": `
            <ul>
                <li>Both <b>X-Ray</b> and <b>App Mesh</b> are profilers for microservices.</li>
                <li>A profiler collects data to pinpoint where failures occur and what causes poor performance.</li>
                <li>With X-Ray you need to attach interceptors to your microservices, with App Mesh you attach a proxy in front of each microservice.</li>
            </ul>
            `
    },
    {
        "q": "Which CloudWatch metrics are available by default and which require installing CloudWatch agent onto the EC2 instance?",
        "a": `
            <ul>
                <li><b>Usage</b> metrics are available by default: CPU usage, network usage, disk usage, status checks (hypervisor, ec2 instance).</li>
                <li><b>Utilization</b> metrics require installing CloudWatch Agent onto the EC2 instance: memory utilization, disk swap utilization, disk space utilization, page file utilization.</li>
                <li>Log collection from applications also requires installing CloudWatch Agent.</li>
            </ul>
        `
    },
    {
        "q": "At what <i>interval</i> are CloudWatch metrics gathered?",
        "a": `
                Most services typically log metrics to CloudWatch at 1-minute intervals, but EC2 logs at 5-minute intervals
                (you can turn on EC2 detailed monitoring to log at 1-minute intervals, at extra cost).
        `
    },
    {
        "q": "List IAM identities.",
        "a": `
            IAM identities<br><br>
            <ul>
                <li>IAM Users</li>
                <li>IAM Groups</li>
                <li>IAM Roles</li>
            </ul>
        `
    },
    {
        "q": "Describe use cases for IAM roles.",
        "a": `
            <div class="text-left">IAM role is an <i>identity</i>, like a <i>user</i> or a <i>group</i>. A role can be assumed by a user, but it can also be assumed without a user. Use case examples:</div><br>
            <ul>
                <li>Allow an application to access AWS resources without embedding keys/credentials in the app.</li>
                <li>Segregate production and test environments with corresponding roles for developers to take as needed (in order to prevent accidents).</li>
                <li>Grant users in one AWS account access to resources in another account.</li>
                <li>Provide access to users who have identities defined outside of AWS, such as on-prem AD.</li>
            </ul>
            
        `
    },
    {
        "q": "What is the Security Token Service (STS)?",
        "a": `
            Security Token Service (STS) provides temporary credentials for identities (such as IAM users, applications that assume an IAM role, or federated identities). The application or user that receives these temporary credentials can then use those credentials to access some AWS resources for a limited time.
        `
    },
    {
        "q": "Compare IAM access keys and temporary security credentials.",
        "a": `Both IAM access keys and temporary security credentials can be used for programmatic access to AWS resources. The difference is that temporary security credentials expire (typically within 1 hour).`
    },
    {
        "q": "Should you store credentials inside Secrets Manager or Parameter Store?",
        "a": `
            Both Parameter Store and Secrets Manager can be used to store secrets. Parameter Store is free, Secrets Manager costs a little bit.
            AWS recommends using Secrets Manager mainly due to its automatic
            secret rotation feature. (However, automatic secret rotation is shipped with several footguns, so in practice you may wish to consider
            twice if you want to set it up.)
        `
    },
    {
        "q": "Describe key features of <i>AWS Organizations</i>.",
        "a": `
        <div class="text-left"><b>AWS Organizations</b> allows you to control multiple AWS accounts within a single organization.</div><br>
            <ul>
                <li>Accounts can be grouped within <i>Organizational Units</i> (OU).</li>
                <li>You can <i>consolidate billing</i> from multiple accounts to gain volume discounts.</li>
                <li>You can apply <i>Service Control Policies</i> to set boundaries for different accounts or OUs.</li>
            </ul>
        `
    }
]