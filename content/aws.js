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
        "a": "EC2 volume options<br><br><ul><li>Instance store (ephemeral)</li><li>EBS (Elastic Block Store, persistent)</li><li>EFS (Elastic File System, also persistent, can be concurrently mounted by multiple instances)</li></ul>"
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
        "a": "Yes. If you use Fargate, you can leverage Fargate Spot Tasks. If you use EC2 fleet, you can leverage EC2 spot instances."
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
        "q": "Compare Inspector, GuardDuty, Config and Shield.",
        "a": `
                <ul>
                    <li><b>Inspector</b> provides rule-based vulnerability discovery</li>
                    <li><b>GuardDuty</b> provides machine learning -based threat detection by monitoring logs</li>
                    <li><b>Config</b> compares your various configurations to desired configurations</li>
                    <li><b>Shield</b> is a DDoS protection service</li>
                </ul>
             `
    },
]