### For local development you need to: 
 - create a development.yml file
 - copy the contents of the default.yml file into it 
 - and set the environment parameters


- ###### DB settings
  - type - type of database from TypeOrmModuleOptions (mongodb, mysql, mssql, sqlite ...)
    - not used in the current version
  - host - database host from docker-compose.yml
  - port - database port from docker-compose.yml
  - dbName - database name from docker-compose.yml
  - login - database user from docker-compose.yml
  - password - database password from docker-compose.yml


- ###### Jira settings
  - token - jira api token from https://id.atlassian.com/manage-profile/security/api-tokens
  - email - jira user email
  - baseUrl - jira company url (https://company.atlassian.net)
