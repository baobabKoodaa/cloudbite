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
        "q": "What kind of volumes can you mount on an EC2 instance?",
        "a": `EC2 volume options<br><br>
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
        "a": "You can use Route53 geolocation routing policy to route traffic from country A to resource X, and traffic from other countries to resource Y."
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
        "a": `Create <i>Origin Access Identity</i> (OAI) for your CloudFront distribution and configure S3 bucket policy to restrict access for everyone except the OAI.`
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
                <li>Provisioned throughput capacity: you define the read and write capacity units.</li>
                <li>On-demand capacity: auto-scaling for read and write capacity units.</li>
            </ul>
        `
    },
    {
        "q": "Your DynamoDB database is occasionally returning <i>ProvisionedThroughputExceededException</i> to API requests. What can you do about it?",
        "a": `<div class="text-left"><i>ProvisionedThroughputExceededException</i> occurs when you are sending too many requests
        relative to the read or write capacity that you have defined for the DynamoDB database. Your options are:</div><br>
        <ul>
            <li>Manually increase read/write capacity units.</li>
            <li>Change from manually provisioned capacity to auto-scaled capacity, which guarantees you will never be rate-limited.</li>          
            <li>Do nothing? If you are sending requests to DynamoDB via AWS SDK, you should already be using automatic retries with exponential backoff. If the errors are only occasional, the requests are eventually accepted with retries.</li>
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
                <li><b>Global Secondary Index</b>: can query over the entire table, across all partitions. Partition and sort key can be any attribute.</li>
                <li><b>Local Secondary Index</b>: you must define partition key value in your queries (so you can only query a single partition). Must be created when the table is created initially. Partition key must be same as in base table, sort key can (and should) be different.</li>
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
        "q": "Can you encrypt your Redshift data warehouse?",
        "a": "You can use KMS or CloudHSM to encrypt your Redshift data at rest."
    },
    {
        "q": "In practice, when would you choose CloudHSM over KMS?",
        "a": "Typically, reasons for choosing CloudHSM over KMS are related to <b>compliance</b>. KSM operates in shared hardware tenancy, like most AWS services. This means different customers are separated only virtually from each other. Regulation might require you to handle keys on a dedicated piece of hardware. In this case you would choose CloudHSM."
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
    }

]