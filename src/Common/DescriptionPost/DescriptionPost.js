import UserItemSmall from '../UserItemSmall/UserItemSmall';

function DescriptionPost({ dataPost, dataUser, dataComment }) {
    return <>{<UserItemSmall dataPost={dataPost} dataComment={dataComment} dataUser={dataUser} />}</>;
}

export default DescriptionPost;
