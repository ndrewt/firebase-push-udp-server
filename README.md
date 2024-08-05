### Firebase Web Push Udp Server

#### How to start?

1. You need to install node.js 18v+
2. run in command line "npm install"
3. run in command line "npm run app"

# initialization parameters in docker container:

| Mode | Environment variable        | Description                                                                                 |
| ---- | --------------------------- | ------------------------------------------------------------------------------------------- |
| all  | INIT_SERVICE_PORT           | Port for run node app (default 3000)                                                        |
| all  | TYPE                        | Type of Firebase service account                                                            |
| all  | PROJECT_ID                  | Project ID of the Firebase project                                                          |
| all  | PRIVATE_KEY_ID              | Private key ID of the Firebase service account                                              |
| all  | PRIVATE_KEY                 | Private key for the Firebase service account (ensure proper format with \\n replaced by \n) |
| all  | CLIENT_EMAIL                | Client email of the Firebase service account                                                |
| all  | CLIENT_ID                   | Client ID of the Firebase service account                                                   |
| all  | AUTH_URI                    | Authentication URI for Firebase                                                             |
| all  | TOKEN_URI                   | Token URI for Firebase                                                                      |
| all  | AUTH_PROVIDER_X509_CERT_URL | Auth provider certificate URL for Firebase                                                  |
| all  | CLIENT_X509_CERT_URL        | Client certificate URL for Firebase                                                         |
