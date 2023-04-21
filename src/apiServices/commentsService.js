import * as request from '~/utils/request';

export const getComments = async (postId, type = 'less') => {
    try {
        const res = await request.get('comments/', {
            params: {
                postId,
                type,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const postComments = async (data) => {
    try {
        await request.post('comments/', data);
    } catch (error) {
        console.log(error);
    }
};
