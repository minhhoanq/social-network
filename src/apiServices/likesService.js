import * as request from '~/utils/request';

export const getLikes = async (postId) => {
    try {
        const res = await request.get('likes/', {
            params: {
                postId,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const postLikes = async (data) => {
    try {
        await request.post('likes/', data);
    } catch (error) {
        console.log(error);
    }
};

export const deleteLikes = async (data) => {
    try {
        await request.del(`likes/${data}`);
    } catch (error) {
        console.log(error);
    }
};
