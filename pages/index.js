import CommentForm from "@/components/layouts/CommentForm";
import classes from './home.module.css';
function HomePage() {
  return (
    <>
      <section className={classes.details}>
      <img
        src="/meetup.jpg"
        alt="picture of the meetup"
      />
      <h1 >Welcome to my Meetup website!</h1>
      <p>
        Meetup is a website that allows users to organize get-togethers with
        others who enjoy the same activities. Some common examples include
        sports teams, book clubs, and social groups. By signing up, you can find
        a group that suits the activity you’re looking for, or create your own
        group to bring others to you.
      </p>
      <CommentForm />
      </section>
    </>
  );
}

export default HomePage;
