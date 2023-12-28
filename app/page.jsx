import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden"/>

        <span className="orange_gradient text-center">
          Amazing Blogs
        </span>
      </h1>
      <p className="desc text-center">
          Bloggerz is a blog site for bloggers to share their thoughts and ideas with the world.
      </p>

      <Feed />
      
    </section>
  )
  }

export default Home