import * as request from '~/utils/request';

export const search = async (username, type = 'less') => {
    try {
        const res = await request.get('search/', {
            params: {
                username,
                type,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
