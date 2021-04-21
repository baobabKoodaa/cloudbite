const flipcards = [
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
              <div class="text-left">Policies are attached to identities (users, roles, or groups). Inline policy means a policy that's directly attached to a single identity. Other policies can be attached to multiple entities. AWS managed policies are intended to reduce manual configuration for common use cases, e.g. AWS maintains AdministratorAccess policy that gives wide permissions for many things.</div>
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
        "q": "Where can you configure access control to your S3 bucket?",
        "a": "S3 bucket access control is typically configured in <i>bucket policies</i>. However, access control to S3 buckets can sometimes be configured elsewhere, such as in <i>VPC endpoint policies</i> or in <i>access control lists</i>."
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
                <li>You can reduce load on your primary database instance by creating read replicas and directing read queries to them. However, a read replica can not be promoted to primary database instance.</li>
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
    }
]