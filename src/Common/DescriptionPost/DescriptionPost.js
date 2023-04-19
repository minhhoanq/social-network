import UserItemSmall from '../UserItemSmall/UserItemSmall';

function DescriptionPost({ dataPost, dataUser, dataComment }) {
    // console.log(dataPost);
    // console.log(dataUser);
    return <>{<UserItemSmall dataPost={dataPost} dataComment={dataComment} dataUser={dataUser} />}</>;
}

export default DescriptionPost;
