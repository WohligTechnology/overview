global["GoogleKey"] = "HVQ0kNC8WDxXiFrcgkfIZiuZ";
global["GoogleclientId"] = "87218219451-0iorjg0h6h4g2trvjbo4krntaa71csne.apps.googleusercontent.com";
global["GoogleclientSecret"] = "nNZiqXW5U2364QI9--sVIR8B";

passport.use(new GoogleStrategy({
        clientId: GoogleclientId,
        clientSecret: GoogleclientSecret,
        callbackURL: global["env"].realHost + "/api/user/loginGoogle",
        accessType: "offline"
    },
    function (accessToken, refreshToken, profile, cb) {
        profile.googleAccessToken = accessToken;
        profile.googleRefreshToken = refreshToken;
        return cb(profile);
    }
));