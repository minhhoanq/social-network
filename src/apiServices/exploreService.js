import * as request from '~/utils/request';

export const getExplore = async (albumId, type = 'less') => {
    try {
        const res = await request.get('photos/', {
            params: {
                albumId,
                type,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
