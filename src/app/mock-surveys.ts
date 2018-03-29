import {Survey} from './Survey';

export const SURVEYS: Survey[] = [
  {
    "survey": 1,
    "creator": "ICDC",
    "groups":
      [
        {
          "groupName": "Configuration Management",
          "questions": [
            {
              "question": "Source-code maanagement (SCM) use",
              "responses": [
                "No SCM",
                "SCM for application code",
                "+ Configuration, configuration scripts, and infrastructure code",
                "+ Test source code",
                "+ Builds and containers"
              ]
            },
            {
              "question": "Source-code branching",
              "responses": [
                "No branching strategy",
                "Multiple repositories (copies of source code) used instead of branching",
                "Centralized workflow (single pint of entry for all changes)",
                "Feature branch workflow (dedicated branch for each feature versus using a centralized single location)",
                "Gitflow workflow (structured branching policy that accounts for features, hotfixes and releases)"
              ]
            },

          ]
        },
        {
          "groupName": "Continuous Integration",
          "questions": [
            {
              "question": "CI prerequisites",
              "responses": [
                "Not Ready for CI",
                "Regular developer check-in to development branch",
                "Comprehensive automated test harness exists",
                "Developer environment (local) has access to refreshable test data, application build scripts, standardized environment (app and database)",
                "Automated build scripts and short test process exist AND developer runs for each check-in"
              ]
            },
            {
              "question": "CI tool use",
              "responses": [
                "No CI tool",
                "CI tool with manual build controls",
                "CI tool with scheduled automated builds (tool does not have the knowledge of change in source code branch)",
                "CI tool with automated change detection and automated deployment from development branch ONLY to development environment",
                "CI tool with automated change detection and automated deployment from all branches (development, feature, release) to all environments (Dev, test, QA)"
              ]
            },
            {
              "question": "Automation controlled by CI tool",
              "responses": [
                "Only build automation to development",
                "+ Build automation to all of the environments (test, QA, and others)",
                "+ Unit test for all layers of the application",
                "+ Security tests",
                "+ Performance tests"
              ]
            },
            {
              "question": "Integration of developer code",
              "responses": [
                "No check-in integrate until the whole capability (e.g., module or feature) is complete",
                "Integrate daily (no unit test runs before commit)",
                "Integrate as methods (smallest executable code) are complete (no unit test runs before commit)",
                "Integrate daily after running all unit tests, if unit tests pass; otherwise, STOP",
                "Integrate as methods (smallest executable code) are complete after running all unit tests, if unit tests pass; otherwise, STOP"
              ]
            },
            {
              "question": "Alerts/notifications and actions during CI",
              "responses": [
                "No ACTION is taken for results of CI activities",
                "If the build breaks due to a check-in, ACTION-STOP&#10;(a) stop build process&#10;(b) prevent other check-ins to the broken code",
                "When build does not break with check-in, but unit test fails,&#10;ACTION=REVERT back to the file, but other developers can continue to check their code",
                "When there is an action, have mechanisms in place to communicate to a configurable set of team members (e.g., for a defect, notify developer and technical lead)",
                "Automatically stop the build process until all automated tests pass and ther are no build errors"
              ]
            },
          ]
        },
        {
          "groupName": "Automated Testing",
          "questions": [
            {
              "question": "Automated Testing",
              "responses": [
                "No automated tests",
                "Unit tests",
                "+ Functional Scenario Tests",
                "+ Security Tests",
                "+ Performance Tests"
              ]
            },
            {
              "question": "Actions for automated test results",
              "responses": [
                "No action taken",
                "Actions are documented and it is left up to developers to fix the problems",
                "Actions are taken for each sprint",
                "Problems are reviewed by development team and actions planned into the sprint plans",
                "When any automated test fails, team stops to triage the problem"
              ]
            },
            {
              "question": "Unit tests",
              "responses": [
                "No unit tests",
                "Few simple tests",
                "Design for testability",
                "Test-driven development for both Uis and APIs",
                "Code coverage"
              ]
            },
            {
              "question": "Unit test coverage",
              "responses": [
                "No unit test coverage tool used",
                "Coverage &lt;25%",
                "Coverage &gt;25% to &lt;50%",
                "Coverage &gt;50% to &lt;75%",
                "Coverage >75%"
              ]
            },
            {
              "question": "Unit test frequency",
              "responses": [
                "No unit test",
                "Developers run their own tests in ad-hoc fashion",
                "Developers run the entire harness at commit",
                "CI tool runs the harness for development environment and builds for the entire build",
                "CI tool runs the harness for every build on every environment"
              ]
            },
            {
              "question": "Scenario (functional or story) test coverage",
              "responses": [
                "No automated scenario test",
                "User story coverage &lt;25%",
                "User story coverage &gt;25% to &lt;50%",
                "User story coverage &gt;50% to &lt;75%",
                "User story coveage >75%"
              ]
            },
            {
              "question": "Performance tests",
              "responses": [
                "No performance test",
                "Performance test selected functionality (smoke tests)",
                "Performance test everything",
                "Performance test with SLAs (transaction SLA, page load SLA)",
                "Performance measurement and tests in production"
              ]
            },
            {
              "question": "Performance test frequency",
              "responses": [
                "No performance test",
                "Ad-hoc",
                "For every release",
                "For every sprint",
                "Continuously"
              ]
            },
            {
              "question": "Performance test types",
              "responses": [
                "No performance tests",
                "Performance test selected functionality (smoke tests)",
                "+ Load test",
                "+ Soak test (application might work well for a period of time under load, and then fail)",
                "+ Stress test (test application's limits)"
              ]
            },
            {
              "question": "Security test types",
              "responses": [
                "No security tests",
                "Vulnerability scanning",
                "+ Automated code review",
                "+ Static code analysis",
                "+ Penetration testing"
              ]
            },
            {
              "question": "Vulnerability scanning frequency",
              "responses": [
                "No vulnerability scanning",
                "Performed by another team after the release is ready",
                "For every release by the development team",
                "For every sprint, by the development team",
                "For every checked-in file, by the CI tool"
              ]
            },
            {
              "question": "Automated code quality review frequency",
              "responses": [
                "No automated code quality scanning",
                "Performed by technical lead at random code reviews",
                "For every release by the development team",
                "For every sprint, by the development team",
                "For every checked-in file, by the CI tool"
              ]
            },
            {
              "question": "Static analysis",
              "responses": [
                "No static analysis tool used",
                "Heavy-duty static analysis tool (e.g., IBM AppScan) used at project level",
                "Developers use static analysis tool (suitable for the technical stack) for each file commit",
                "CI initiates the tool developers use at every code deployment",
                "CI initiates the developer code at every deployment for the code base and the project tool for defined frequency (e.g. every sprint, release)"
              ]
            },
            {
              "question": "Penetration Testing Frequency",
              "responses": [
                "No penetration scanning",
                "Performed by another team at the time of a security accreditation",
                "Performed by another team for every release",
                "Performed by another team for every sprint",
                "For every checked in file, by the CI tool"
              ]
            },
          ]
        },
        {
          "groupName": "Infrastructure as Code (IaC)",
          "questions": [
            {
              "question": "Automated infrastructure provisioning",
              "responses": [
                "No automated infrastructure provisioning",
                "Data center set up, physical servers virtualized, and allocated to applications manually",
                "IaaS is used; on demand infrastructure resources creation when manually requested",
                "Infrastructure provisioning automated by APIs, but not tied to application scalability",
                "Infrastructure is provisioned dynamically as the use increases and decreases"
              ]
            },
            {
              "question": "Containerization use",
              "responses": [
                "No containerization",
                "Containerized monolithic applications deployment",
                "Containerized modules and independent provisioning of the containerized modules",
                "Containerized microservices and auto scale of microservices on existing ready-to-use infrastructure",
                "Containerized microservices and integrated auto scale of containers and underlying infrastructure"
              ]
            },
          ]
        },
        {
          "groupName": "Continuous Delivery",
          "questions": [
            {
              "question": "Automated acceptance tests",
              "responses": [
                "No automated acceptance test suite&#10;There is human interaction and gate reviews",
                "Automated scenario test results provided to the client, but the results do not impact acceptance because the coverage is not 100%",
                "100% coverage with automated acceptance tests used as the &quot;definition of done&quot; for the development team",
                "Product owner uses the results, but performs maual tests as well before go-live decision",
                "Product owner relies on automated acceptance tests completely to go live with the build"
              ]
            },
            {
              "question": "Contract constraints",
              "responses": [
                "Contract does not allow results of automated tests to be used for delivery",
                "Testing for acceptance done by another contractor (or party)&#10;Development ",
                "Builds tested and delivered to development and test environments without manual intervention (fully automated)",
                "Builds to QA and UAT environments pass through manual testing gate",
                "Builds delivered to QA and UAT enviornments without any manual intervention (i.e., data, configuration, networking)"
              ]
            },
            {
              "question": "Deployment pipeline",
              "responses": [
                "No automated deployment pipeline",
                "Deployment pipeline allows only CI activities",
                "Deployment pipeine allows CI and deployment to QA and test environments",
                "Deployment pipeline is configurable to enable full automation from development to prodcution deployment, but cannot be used due to contractual gates",
                "Fully automated deployment pipeline exists It's possible to insert a manual approval step, which is used with or without a manual check for production deployment"
              ]
            },
          ]
        },
        {
          "groupName": "Continuous deployment",
          "questions": [
            {
              "question": "Deployment to production",
              "responses": [
                "System is taken offline&#10;All conducted manually using standard operating procedures and step-by-step installation guide",
                "System is taken offline&#10;Step-by-step installation, but SOME steps include automated configurations",
                "System is taken offline&#10;Step-by-step installation, but ALL steps include automated configurations",
                "System is taken offline&#10;One-click deployment is performed and tested before go live",
                "Zero downtime release. System is upgraded with the build without taking the system down"
              ]
            },
            {
              "question": "Deployment capabilities",
              "responses": [
                "No automated deployment ",
                "Deployment replaces the existing build",
                "Canary releasing; build deployed to canary enviornment first&#10;After testing the canary in production build, the system is taken down and the upgrade is performed",
                "First deploy to canary and then upgrade servers one at a time until the deployment is complete&#10;No downtime",
                "Blue/green deployment. No downtime (two identical versions of production: blue and green; one is upgraded and replaced with the other at the DNS level)"
              ]
            },
          ]
        },
        {
          "groupName": "Continuous monitoring",
          "questions": [
            {
              "question": "Monitoring solution",
              "responses": [
                "No monitoring solution&#10;Monitoring is performed by operations team (system administrators and DBAs)",
                "Limited use of monitoring tools by the operations team",
                "Monitoring types:&#10;- Application performance monitoring&#10;- Log monitoring and analysis&#10;- Security monitoring",
                "Three monitoring types:&#10;-Application performance monitoring&#10;-Log monitoring and analysis&#10;-Security monitoring",
                "All of these monitoring types: -Application performance monitoring -Log monitoring and analysis -Security monitoring"
              ]
            },
            {
              "question": "Application performance monitoring",
              "responses": [
                "No application performance monitoring",
                "Manual application performance monitoring using OS tools",
                "Easy access to real-time statistics on application performance in production",
                "Ability to isolate issues in production down to the individual servers/VM/containers and processes",
                "Ability to view the entire stack of any issue identified, from initial request down to the database"
              ]
            },
            {
              "question": "Log monitoring",
              "responses": [
                "No log monitoring",
                "Log monitoring using OS tools",
                "All logs (i.e., application, security, web access) easily accessible for review",
                "All logs consolidated and put in a central location",
                "All logs are indexed and quickly searchable"
              ]
            },
            {
              "question": "Security monitoring",
              "responses": [
                "No security monitoring",
                "Security monitoring using basic OS and network tools",
                "Simple threat identification, such as various DoS attacks",
                "Advanced network monitoring to actively find vulnerabilities or active attacks",
                "Monitor paybacks that are hitting the system for identifying possible attacks"
              ]
            },
            {
              "question": "Alerting solution",
              "responses": [
                "No alerting",
                "Responsible parties are alerted by team monitoring logs, application, and security",
                "Alerts provided detailed information about the nature of monitoring trigger",
                "Alerting solution provides historic list of previous events, including event details",
                "Alerting thresholds are modifiable"
              ]
            },
          ]
        }
      ]
  }
];
