import express from 'express';

// API FUNCTIONS
import api from './auth0/api';

// AUTH0
import jwt from "express-jwt";
import jwtAuthz from "express-jwt-authz";
import { expressJwtSecret } from "jwks-rsa";

// Create middleware for checking the JWT
const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint.
  secret: expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://whereinmarket.auth0.com/.well-known/jwks.json'
  }),

  // Validate the audience and the issuer.
  audience: 'https://whereinmarket.auth0.com/api/v2/',
  issuer: 'https://whereinmarket.auth0.com/',
  algorithms: ['RS256']
});


const router = express.Router();

// CHECK USER
router.get('/users', checkJwt, jwtAuthz(['read:users']), (req, res) => {
  api.getUsers(req, res);
});

// CHECK USER
router.get('/emails', checkJwt, jwtAuthz(['read:emails']), (req, res) => {
  api.getEmails(req, res);
});





export default router;