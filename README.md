

# How to use

## Step 1: Updata the Credential 
### Create a credential file
```
wsl
aws configure
```
![image](https://user-images.githubusercontent.com/53294143/119211727-64b8a900-bae6-11eb-9b3f-ea06aacb0c06.png)


## Paste your credentials here(in wsl)
```
vim ~/.aws/credentials
```
![image](https://user-images.githubusercontent.com/53294143/119211774-b82af700-bae6-11eb-9795-b380917ace08.png)
![image](https://user-images.githubusercontent.com/53294143/119211768-ac3f3500-bae6-11eb-8cf6-6ce85cc6b734.png)
- press button `i` to edit
- press button `esc` to exit edit
- press `shift+:` and type `wq!` to exit
![image](https://user-images.githubusercontent.com/53294143/119211808-f88a7500-bae6-11eb-99b9-f74319d25013.png)

## Step 2: Bootstrap
```
make bootstrap
```

## Step 3: bucket_name and url
- Four values will show up in the terminal after step 1
```
dynamoDb_lock_table_name = "RMIT-locktable-3dfyjp"
kops_state_bucket_name = "rmit-kops-state-3dfyjp"
repository-url = "828195990727.dkr.ecr.us-east-1.amazonaws.com/rmit-assignment3-container-repo"
tf_state_bucket = "rmit-tfstate-3dfyjp"
```
- update the kops_state_bucket_name to the config.yml under .circleci folder
- seperate repository value to two part by the /
- update the ECR by the part infront /
- update the reponame by the part after /
- update the dynamoDb_lock_table_name and kops_state_bucket_name to the makefile under infra folder

## Step 4: create cluster
```
make kube-create-cluster
make kube-secret
make kube-deploy-cluster
make kube-config
make kube-validate
```

## Step 5: create namespaces (test and prod)
```
make namespace-up
```

## Step 6: update the vpc id and subnet id in file terraform.tfvars under folder infra
## Step 7: circleci
- before push to github and run on circleci update the credential on circleci environment variables

```
git add .
git commit -m "commit"
git push
```
## Step 8: deploy
- use the following code to get the external-ip
```
kubectl get service -n test
```
- update this url to the login.test.js file and register.test.js file under src/test folder and plus :443 at the end of this url
- push again use the code in step 7

## Step 9: Visit URL
- use the url from step 8 plus :443 at the end of this url
- For example: http://aa024f0666f7045c295848cca93924ff-1745345070.us-east-1.elb.amazonaws.com:443/





# Simple Todo App with MongoDB, Express.js and Node.js
The ToDo app uses the following technologies and javascript libraries:
* MongoDB
* Express.js
* Node.js
* express-handlebars
* method-override
* connect-flash
* express-session
* mongoose
* bcryptjs
* passport
* docker & docker-compose

## What are the features?
You can register with your email address, and you can create ToDo items. You can list ToDos, edit and delete them. 

# How to use
First install the depdencies by running the following from the root directory:
```
npm install --prefix src/
```

To run this application locally you need to have an insatnce of MongoDB running. A docker-compose file has been provided in the root director that will run an insatnce of MongoDB in docker. TO start the MongoDB from the root direction run the following command:

```
docker-compose up -d
```

Then to start the application issue the following command from the root directory:
```
npm run start --prefix src/
```

The application can then be accessed through the browser of your choise on the following:

```
localhost:5000
```
## Container
A Dockerfile has been provided for the application if you wish to run it in docker. To build the image, issue the following commands:

```
cd src/
docker build . -t todoapp:latest
```

## Terraform

### Bootstrap
A set of bootstrap templates have been provided that will provision a DynamoDB Table, S3 Bucket & Option Group for DocumentDB & ECR in AWS. To set these up, ensure your AWS Programmatic credentials are set in your console and execute the following command from the root directory

```
make bootstrap
```

### To instantiate and destroy your TF Infra:

To instantiate your infra in AWS, ensure your AWS Programattic credentials are set and execute the following command from the root infra directory:

```
make up -e ENV=<environment_name>
```

Where environment_name is the name of the environment that you wish to manage.

To destroy the infra already deployed in AWS, ensure your AWS Programattic credentials are set and execute the following command from the root directory:

```
make down -e ENV=<environment_name>
```

## Testing

Basic testing has been included as part of this application. This includes unit testing (Models Only), Integration Testing & E2E Testing.

### Linting:
Basic Linting is performed across the code base. To run linting, execute the following commands from the root directory:

```
npm run test-lint --prefix src/
```

### Unit Testing
Unit Tetsing is performed on the models for each object stored in MongoDB, they will vdaliate the model and ensure that required data is entered. To execute unit testing execute the following commands from the root directory:

```
npm run test-unit --prefix src/
```

### Integration Testing
Integration testing is included to ensure the applicaiton can talk to the MongoDB Backend and create a user, redirect to the correct page, login as a user and register a new task. 

Note: MongoDB needs to be running locally for testing to work (This can be done by spinning up the mongodb docker container).

To perform integration testing execute the following commands from the root directory:

```
npm run test-integration --prefix src/
```


###### This project is licensed under the MIT Open Source License
