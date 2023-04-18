import * as request from '~/utils/request';

export const getPosts = async (image, type = 'less') => {
    try {
        const res = await request.get('posts/', {
            params: {
                image,
                type,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
