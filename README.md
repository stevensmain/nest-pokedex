<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Run on development
1. Clone github repository
2. Run
```
 npm install
```
3. If you dont have Nest CLI installed, run:
```
npm i -g @nestjs/cli
```
4. Run database
```
docker-compose up -d
```
5. Clone the __.env.template__ file and rename to __.env__
6. Insert enviroment variables in __.env__ file
7. Run application
```
yarn start:dev //or
npm run start:dev
```
8. Populate DB with seed
```
http://localhost:3000/api/v2/seed
```

## Stack
 * NestJs
 * MongoDB

# ProductionBuild
1. Create the file ```.env.prod```
2. Fill prod environment variables
3. Create the new image
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```



# Grades
Heroku redeploy without changes:
```
git commit --allow-empty -m "Tigger Heroku deploy"
git push heroku <master|main>
```