import { WEBSITE_URL } from "config";

export default async function Comments({ slug }: { slug: string }) {
  let comments = [];
  try {
    const commentsRes = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, {
      next: { revalidate: 5 },
    });
    comments = await commentsRes.json();
  } catch (err) {
    console.log(err);
  }

  return (
    <div className="max-w-2xl mx-auto mt-6 p-4 border rounded bg-green-500">
      <form action={`/api/comments/${slug}`} method="POST">
        <label htmlFor="username">Name</label>
        <br />
        <input name="username" className="text-black" />
        <br />
        <br />
        <label htmlFor="comment">Comment</label>
        <br />
        <textarea
          name="comment"
          cols={30}
          rows={10}
          className="text-black"
        ></textarea>
        <br />
        <br />
        <button type="submit" className="bg-red-500 border rounded p-4">
          Send Comment
        </button>
      </form>
      <h3 className="text-lg font-semibold mb-2 mt-6">Comments</h3>
      <ul className="space-y-4">
        {/* @ts-ignore */}
        {comments.map((comment) => {
          return (
            <li
              key={comment.uuid}
              className="bg-white p-4 border rounded shadow-sm"
            >
              <span className="text-green-500 font-bold">
                {comment.username} says...
              </span>
              <br />
              <span className="text-black">{comment.comment}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
