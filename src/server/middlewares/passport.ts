import { compare } from 'bcrypt';
import * as passport from 'passport';
import * as PPLocal from 'passport-local';
import * as PPJWT from 'passport-jwt';
import users from '../db/queries/users';
import { jwtConfig } from '../config';



passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new PPLocal.Strategy({
    usernameField: 'email'
}, async (username, password, done) => {
    try {
        const [user] = await users.getByEmail(username);

        if (!user) {
            throw new Error('invalid credentials')
        }

        const isCorrectPassword = await compare(password, user.password);

        if (!isCorrectPassword) {
            throw new Error('invalid credentials');
        }

        delete user.password;
        done(null, user);
    } catch (error) {
        done(error);
    }
}));

passport.use(new PPJWT.Strategy({
    jwtFromRequest: PPJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtConfig.secret
}, async (payload, done) => {
    try {
        done(null, payload);
    } catch (error) {
        done(error);
    }
}));