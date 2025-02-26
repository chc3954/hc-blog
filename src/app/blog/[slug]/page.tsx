interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  return (
    <div className="container">
      <div>Post</div>
    </div>
  );
}
