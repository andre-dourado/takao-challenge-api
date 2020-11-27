const production = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "synchronize": true,
  "entities": [
    "dist/modules/**/infra/typeorm/entities/*.js",
  ],
};

const development = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "synchronize": true,
  "entities": [
    "./src/modules/**/infra/typeorm/entities/*.ts"
  ],
}

module.exports = process.env.ENVIRONMENT === "production" ? production : development;
