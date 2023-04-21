import * as request from '~/utils/request';

export const getPosts = async (idUser, type = 'less') => {
    try {
        const res = await request.get('posts/', {
            params: {
                idUser,
                type,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
