import jwt from 'jsonwebtoken';


function getIdFromToken(token: string) {
    try {
        const decodedToken = jwt.decode(token) as { id: string };

        if (decodedToken && decodedToken.id) {
            return decodedToken.id;
        }

        return null;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
}



export default getIdFromToken