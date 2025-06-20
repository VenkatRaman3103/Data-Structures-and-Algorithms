---

## 🔍 Step 2: Deep Dive into Responsibilities

---

### 💻 **Full Stack Developer**

1. **Tech Stack**

   * What technologies are you using in:

     * **Frontend**: Frameworks/libraries (e.g., React, Next.js)?
     - react, next js, scss, webook
     * **Backend**: Language, framework, database (e.g., Node.js, PostgreSQL)?
     - node js, PostgreSQL, drizzle orm
     * **APIs**: REST, GraphQL, real-time?
     - REST,

2. **Dynamic System**

   * How is the frontend dynamically updated? Do you use a headless CMS-like approach, serverless functions, or websockets?

- i used payload cms to push the data into the data and admin panel UI, 
- i used websockets to update real-time data
- To work with cms with my complex requirements i have create lots and lots of custom components
that goes well with the existing cms

3. **Admin Panel Complexity**

   * Roughly how many components/modules did you build?
- there are too many component, pages, collections 
   * How is permission handled across the 4 levels (e.g., RBAC)?
- based on the role of the user and the totop
- for example an admin can assing a role to a user and add them into the admin panel with the email
id, based on that only four elevel of internal users can log in
   * Any notable challenges? (e.g., syncing dynamic UI with real-time data)
- the most importan part and i need to stress this in my resume, i started working with payload
cms early version, beta version and moved to the stable version and also from two servers to
one. there were lots of restructuring the entire code base. i have done that almost three times.
because of payload versions

4. **Frontend User Profiles**

   * What features are exposed to end-users on the frontend? (e.g., login, dashboard, recommendations?)
- all these logi, dashboard, recommendations, preference

---

### 🎨 **UI/UX Designer**

1. **Tools**

   * What tools did you use? (e.g., Figma, Sketch, Adobe XD)
- i used figma

2. **Design System**

   * Did you create a design system or component library?
- yes there is a design system
   * Were your designs responsive and mobile-first?
- it is not mobile-first but it is responsive to mobile, tab and the desktop
- i have even created some illustrations

3. **User Flow / Experience**

   * Any work on user journey mapping or conversion optimization?

---

### ⚙️ **DevOps / AWS Maintainer**

1. **CI/CD Pipelines**

   * Are you using GitHub Actions, GitLab CI, or another tool?
- I used aws, jenkins and GitHub actions and finally we are using GitHub actions
   * What steps are included in your CI/CD flow? (e.g., linting, testing, deploy, rollback)
- Configure AWS credentials, Build, tests, aws-connection, Verify AWS SSH Connection, dependencies
checkings, Deploy to Staging AWS Instance, Connect to instances, PM2, Nginix etc

2. **AWS Setup**

   * What AWS services are involved? (EC2, S3, RDS, Lambda, CloudFront, etc.)
- ec2, s3, volumes, and all the parts that related to domains, like elastic ip etc 
   * Are you using Infrastructure as Code (e.g., Terraform, CloudFormation)?
- no

3. **Environments**

   * You mentioned dev, stage, prod — how is data managed across them?
- each has it own set of data, but prod has the real one
   * Are you containerizing the app with Docker?
- not yet

4. **Backups**

   * How often are backups created?
- so often
   * Are they stored in S3 or another service?
- just the Instance itself because we will move the volume very frequently
   * Any alerting or recovery setup?
- yeah there is alerting recovery

---

### 📈 **Impact & Ownership**

1. **Team Size**

   * Are you working solo or with a team now?
- solo developer
   * If there's a team, do you mentor juniors or lead others?

2. **Impact**

   * Any metrics? (e.g., admin panel supports X admins, website serves Y users monthly)
   * How long did it take to build the MVP? Any production uptime or performance stats?

---

- also i have achived 98 percetange in lighthouse score 
