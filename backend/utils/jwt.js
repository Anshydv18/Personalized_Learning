import jwt from "jsonwebtoken";



function verifyJwt(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return decoded;
    } catch (error) {
        console.log(error);
        return null;
    }
}

function signJwt(payload) {
    try {
        const signedToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: 60 * 60 * 24 }); 
        return signedToken;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export { verifyJwt, signJwt };