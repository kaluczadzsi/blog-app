import { Link } from 'react-router-dom';
import { PostProps } from '../../types/postprops';
import DeletePostButton from './DeletePostButton';
import Modal from './Modal';

const Post = ({ id, title, body, isInfoPage }: PostProps) => {
  return (
    <article
      key={id}
      className="h-full p-6 rounded-2xl cursor-pointer shadow-md bg-[#fff] flex flex-col"
    >
      <Link to={`/${id}`} className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-primary">{title}</h2>
          {isInfoPage && <DeletePostButton />}
        </div>
        <p className="text-secondary text-md font-medium">{body}</p>
      </Link>
    </article>
  );
};

export default Post;
