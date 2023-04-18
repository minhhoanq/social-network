import * as request from '~/utils/request';

export const getSuggested = async (id, type = 'less') => {
    try {
        const res = await request.get('users/', {
            params: {
                id,
                type,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
